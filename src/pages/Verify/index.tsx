import { CheckIcon, HandThumbUpIcon, UserIcon } from '@heroicons/react/20/solid'
import { Identity } from '@semaphore-protocol/identity'
import { useContext } from 'react'
import { AccountContext } from '../../App'
import CreateIdentity from '../../components/CreateIdentity'
import Worldcoin from '../../components/WorldCoin'

const Verify = () => {
  const accountContext = useContext(AccountContext)
  const tasks = [
    {
      id: 1,
      title: 'Connect your wallet',
      content: <></>,
      finished: true
    },
    {
      id: 2,
      title: 'Create an identity with Semaphore',
      content: <CreateIdentity />,
      finished: accountContext.identity instanceof Identity
    },
    {
      id: 3,
      title: 'Prove that you are not a robot with worldcoin',
      content: <Worldcoin />,
      finished: accountContext.worldcoin
    },
    {
      id: 4,
      title: 'Vote on organization Proposals',
      content: <></>,
      finished: accountContext.identity instanceof Identity && accountContext.worldcoin
    }
  ]
  console.log(accountContext.identity)

  return (
    <div className="flex flex-col gap-2 w-full">
      <h1 className="text-2xl font-bold">Verify Account</h1>
      <ul role="list" className="mt-5">
        {tasks.map((task, eventIdx) => (
          <li key={task.id}>
            <div className="relative pb-8">
              {eventIdx !== tasks.length - 1 ? (
                <span className="absolute left-4 top-4 -ml-px h-full w-0.5 bg-gray-200" aria-hidden="true" />
              ) : null}
              <div className="relative flex space-x-3">
                <div>
                  <span
                    className={
                      `${task.finished ? "bg-green-500" : "bg-gray-400"} h-8 w-8 rounded-full flex items-center justify-center ring-8 ring-white`
                    }
                  >
                    {task.finished && <CheckIcon className="h-5 w-5 text-white" aria-hidden="true" />}
                  </span>
                </div>
                
                  <div className="flex flex-col gap-2">
                    <p className="text-sm text-gray-500">
                      {task.title}
                    </p>
                    {!task.finished && task.content}
                  </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
export default Verify