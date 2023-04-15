const Activity = () => {
  const activities = [
    {
      id: 1,
      action: "Voted \"For\"",
      date: '2023-04-20',
      proposal: {
        id: 1,
        title: 'Give tokens to the Arbitrum DAO',
      }
    }
  ]
  return (
    <div className="flex flex-col w-full gap-2 mt-8">
      <h2 className="text-2xl font-bold">Activity</h2>
      <div className="w-full bg-white shadow border border-neutral-900/10 sm:rounded-md">
        <ul role="list" className="divide-y divide-gray-200">
          {activities.map((activity) => (
            <li key={activity.id}>
              <div className="flex px-4 py-4 sm:px-6 justify-between items-center">
                <div className="flex flex-col items-start">
                  <p className="truncate text-sm font-medium text-navy-blue-500">{activity.action}</p>
                  <div className="flex text-black">
                      {activity.proposal.title}
                  </div>
                </div>
                <div className="mt-2 flex flex-row-reverse">
                  <div className="mt-2 flex items-center text-sm text-gray-500 sm:mt-0">
                    {activity.date}
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Activity