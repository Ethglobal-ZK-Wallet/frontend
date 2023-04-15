//SPDX-License-Identifier: MIT
pragma solidity 0.8.4;

import "semaphore/extensions/SemaphoreVoting.sol";
import "semaphore/interfaces/ISemaphoreVerifier.sol";

contract ZKVote is SemaphoreVoting {
    struct Voter {
        uint weight; // weight is accumulated by delegation
        bool voted;  // if true, that person already voted
        address delegate; // person delegated to
        uint vote;   // index of the voted proposal
    }
    struct Proposal {
        bytes32 name;   // short name (up to 32 bytes)
        uint voteCount; // number of accumulated votes
    }

    address public chairperson;

    // This declares a state variable that
    // stores a `Voter` struct for each possible address.
    mapping(address => Voter) public voters;

    // Counter for Polls Generated
    uint256 public pollgencount;

    // A dynamically-sized array of `Proposal` structs for all pollIds
    mapping(uint256 => Proposal[]) public proposals;

    /// Create a new ballot to choose one of `proposalNames`.
    constructor(ISemaphoreVerifier memory _verifier) SemaphoreVotingI(_verifier){
    }

    function genPoll(address coordinator, uint256 merkleTreeDepth, bytes32[] memory proposalNames) public {
        createPoll(pollgencount, coordinator, merkleTreeDepth, proposalNames);
        pollgencount +=1;
    }
    function createPoll(uint256 pollId, address coordinator, uint256 merkleTreeDepth, bytes32[] memory proposalNames) public override {
        if (merkleTreeDepth < 16 || merkleTreeDepth > 32) {
            revert Semaphore__MerkleTreeDepthIsNotSupported();
        }

        _createGroup(pollId, merkleTreeDepth);

        polls[pollId].coordinator = coordinator;

        // For each of the provided proposal names,
        // create a new proposal object and add it
        // to the end of the array.
        for (uint i = 0; i < proposalNames.length; i++) {
            // `Proposal({...})` creates a temporary
            // Proposal object and `proposals.push(...)`
            // appends it to the end of `proposals`.
            proposals[pollId].push(Proposal({
                name: proposalNames[i],
                voteCount: 0
            }));
        }

        emit PollCreated(pollId, coordinator);
    }

    function vote(uint256 proposal, uint256 nullifierHash, uint256 pollId, uint256[8] calldata proof) external {
        // If `proposal` is out of the range of the array,
        // this will throw automatically and revert all
        // changes.
        proposals[pollId][proposal].voteCount += 1;
        castVote(vote, nullifierHash, pollId, proof);
    }

    /// @dev Computes the winning proposal taking all
    /// previous votes into account.
    function winningProposal(uint256 pollId) public view
            returns (uint winningProposal_)
    {
        uint winningVoteCount = 0;
        for (uint p = 0; p < proposals[pollId].length; p++) {
            if (proposals[pollId][p].voteCount > winningVoteCount) {
                winningVoteCount = proposals[pollId][p].voteCount;
                winningProposal_ = p;
            }
        }
    }

    // Calls winningProposal() function to get the index
    // of the winner contained in the proposals array and then
    // returns the name of the winner
    function winnerName(uint256 pollId) external view
            returns (bytes32 winnerName_)
    {
        winnerName_ = proposals[pollId][winningProposal()].name;
    }
}