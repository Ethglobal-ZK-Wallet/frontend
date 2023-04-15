import {
  CalendarIcon,
} from '@heroicons/react/24/outline'
import { useParams } from 'react-router'
import Button from '../../components/Button'
import { organizations, proposals } from '../../constants'

const Organization = () => {
  const { id } = useParams()

  const selectedOrganization = id 
    ? organizations.find((item) => item.id === parseInt(id)) 
    : {
      id: 1,
      name: "Arbitrum DAO",
      members: 300,
    }

  return (
    <div className="flex flex-col p-2 w-full">
      <div className="flex gap-2">
        <img src="/placeholder.png" className='w-16 h-auto object-contain' alt="Logo"/>
        <div className="flex flex-col p-2">
          <h1 className="text-2xl font-bold">{selectedOrganization?.name}</h1>
          <p className="text-lg">{`${selectedOrganization?.members} members`}</p>
        </div>
      </div>
      <div className="flex flex-col gap-2 mt-10">
        <div className="w-full flex justify-between">
          <h2 className="text-xl font-bold">Proposals</h2>
          <Button 
            className = 'w-fit py-1 lg:px-3 font-medium rounded-lg overflow-hidden flex justify-center bg-navy-blue-500 text-white items-center'
            onClick={() => {}}
          >
            Create Proposal
          </Button>
        </div>
        <div className="w-full bg-white shadow border border-neutral-900/10 sm:rounded-md">
          <ul role="list" className="divide-y divide-gray-200">
            {proposals.length > 0 
              ? proposals.map((proposal) => (
                <li key={proposal.id}>
                  <a href="/vote/1" className="block hover:bg-gray-50">
                    <div className="px-4 py-4 sm:px-6">
                      <div className="flex items-center justify-between">
                        <p className="truncate text-lg font-medium text-navy-blue-500">{proposal.title}</p>
                        <div className="ml-2 flex flex-shrink-0">
                          <p className="inline-flex rounded-full bg-green-100 px-2 text-xs font-semibold leading-5 text-green-800">
                            {proposal.status}
                          </p>
                        </div>
                      </div>
                      <div className="mt-2 flex flex-row-reverse">
                        <div className="mt-2 flex items-center text-sm text-gray-500 sm:mt-0">
                          <CalendarIcon className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" />
                          <p>
                            {`Ends on ${proposal.date}`}
                          </p>
                        </div>
                      </div>
                    </div>
                  </a>
                </li>
            ))
            : 
              <div className='p-4'>
                <span className='text-sm text-neutral-500'>Proposals are yet to be made in this organization</span>
              </div>
          }
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Organization