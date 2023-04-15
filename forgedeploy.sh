forge create src/contracts/ZKVote.sol:ZKVote \
--rpc-url https://goerli.infura.io/v3/$INFURA_KEY \
--private-key=$PRIV_KEY \
--constructor-args 0xb908Bcb798e5353fB90155C692BddE3b4937217C \
--libraries @zk-kit/incremental-merkle-tree.sol/contracts/IncrementalBinaryTree.sol:IncrementalBinaryTree: \
--etherscan-api-key $SCANNERAPIKEY \
--verify