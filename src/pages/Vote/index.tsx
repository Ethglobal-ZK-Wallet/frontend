import { useNavigate, useParams } from "react-router"
import Button from "../../components/Button"
import Tooltip from "../../components/Tooltip"
import { proposals } from "../../constants"
import { shortenAddress } from "../../utils"
import AccountTooltip from "./AccountTooltip"
import VotingModule from "./VotingModule"

const Vote = () => {

  const navigate = useNavigate()
  const { id } = useParams()
  const defaultVal = {
    id: 1,
    title: 'Allocate tokens to the DAO',
    status: 'Active',
    date: '2023-04-20',    
    proposer: "0xB478AdF763A5bf5aD31F5137545Bf99D30c22009"
  }

  const selectedProposal = id 
    ? proposals.find((item) => item.id === parseInt(id)) ?? defaultVal
    : defaultVal
  return (
    <div className="flex">
      <div className="flex flex-col gap-2 w-2/3">
        <div className="flex flex-col gap-2 items-start w-fit">
          <Button 
            onClick={() => { navigate(-1)}}
            className="w-fit py-1 lg:px-2 font-medium rounded-lg overflow-hidden flex justify-center bg-navy-blue-500/40 text-white text-sm items-center"
          >
            Back
          </Button>
          <h1 className="hidden text-xl font-bold min-w-fit">
            Vote Proposal
          </h1>
        </div>
        <div className="w-10/12 flex flex-col gap-2">
          <div className="mt-4 flex flex-col">
            <h2 className="text-3xl font-bold">
              {selectedProposal?.title}
            </h2>
            <Tooltip 
              className="w-full"
              tooltipClassName = 'bottom-auto translate-y-2/3 bg-white rounded border border-navy-blue-500 text-sm'
              content={
                <AccountTooltip account={selectedProposal.proposer}/>
              }
            >
              <div
                className="p-1 pl-2 pr-4 -translate-x-2 hover:bg-navy-blue-500/20 rounded"
              >
                Proposed by: 
                <span className="font-extrabold">{shortenAddress(selectedProposal.proposer)}</span>
              </div>
              
            </Tooltip>
          </div>

          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <h2 className="text-3xl font-bold mt-4">
            Votes
          </h2>
          <div className="flex flex-col gap-4 text-sm">
            <div className="flex justify-between items-center gap-10 border border-neutral-900/20 p-3 px-5 rounded-lg shadow">
              <div className="flex flex-col gap-1">
                <span>0x1234...5678</span>
                <span className="text-xs text-black/70">{`${300} TOKENS`}</span>
              </div>
              <span className="font-bold text-lg">FOR</span>
            </div>
            <div className="flex justify-between items-center gap-10 border border-neutral-900/20 p-3 px-5 rounded-lg shadow">
              <div className="flex flex-col gap-1">
                <span>0x1234...5678</span>
                <span className="text-xs text-black/70">{`${300} TOKENS`}</span>
              </div>
              <span className="font-bold text-lg">FOR</span>
            </div>
          </div>
        </div>
      </div>
      <div className="w-1/3 flex flex-col gap-6 mt-8">
        <div className="p-4 border border-navy-blue-500/40 rounded-lg divide-y flex flex-col gap-2">
          <p>Information</p>
          <ul className="flex flex-col text-sm gap-1 py-1">
            <li className="flex justify-between items-center">
              <span>Status</span>
              <div className="w-fit p-1 px-2 bg-green-200 rounded-lg">Active</div>
            </li>
            <li className="flex justify-between">
              <span>Start Date</span>
              <span>2023-04-23</span>
            </li>
            <li className="flex justify-between">
              <span>End Date</span>
              <span>2023-04-23</span>
            </li>
          </ul>
        </div>
        <div className="p-4 border border-navy-blue-500/40 rounded-lg divide-y flex flex-col gap-2">
          <p>Current Vote Result</p>
          <ul className="flex flex-col text-sm gap-2 py-1">
            <li className="flex flex-col">
              <div className="flex justify-between">
                <div>For</div>
                <div>{`${0.33 * 100}%`}</div>
              </div>
              <div
                className={`w-full rounded-full h-2 bg-navy-blue-500/20`}
              >
                <div
                  className={`bg-navy-blue-500 h-2 rounded-full`}
                  style={{
                    width: `${(0.33) * 100}%`,
                  }}
                />
              </div>
            </li>
            <li className="flex flex-col">
              <div className="flex justify-between">
                <div>Against</div>
                <div>{`${0.33 * 100}%`}</div>
              </div>
              <div
                className={`w-full rounded-full h-2 bg-navy-blue-500/20`}
              >
                <div
                  className={`bg-navy-blue-500 h-2 rounded-full`}
                  style={{
                    width: `${(0.33) * 100}%`,
                  }}
                />
              </div>
            </li>
            <li className="flex flex-col">
              <div className="flex justify-between">
                <div>Abstain</div>
                <div>{`${0.33 * 100}%`}</div>
              </div>
              <div
                className={`w-full rounded-full h-2 bg-navy-blue-500/20`}
              >
                <div
                  className={`bg-navy-blue-500 h-2 rounded-full`}
                  style={{
                    width: `${(0.33) * 100}%`,
                  }}
                />
              </div>
            </li>
          </ul>
        </div>
        <VotingModule/>
      </div>
    </div>
    
  )
}
export default Vote