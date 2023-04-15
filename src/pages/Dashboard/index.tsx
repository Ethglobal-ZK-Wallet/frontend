import { UsersIcon } from "@heroicons/react/24/outline"
import { useNavigate } from "react-router"
import Button from "../../components/Button"

const Dashboard = () => {
  const navigate = useNavigate()
  const organizations: { name: string, members: number}[] = [
    {
      name: "Arbitrum",
      members: 300,
    }
  ]
  return (
    <div className="flex flex-col gap-4 w-full">
      <div className="flex justify-between w-full">
        <h1 className="text-2xl font-bold text-navy-blue-500">
          Organizations
        </h1>
        <Button 
          className = 'w-fit py-2 lg:px-4 font-medium rounded-lg overflow-hidden flex justify-center bg-navy-blue-500 text-white items-center'
          onClick={() => {}}>
          Create Organization
        </Button>
      </div>
      <div className="flex gap-3 w-full flex-wrap">
        {organizations.length > 0 
          ? organizations.map((organization) => {
            return (
              <div className="flex flex-col p-2 items-center justify-end w-48 h-52 border-2 border-navy-blue-500/20 rounded-xl">
                <img src="/placeholder.png" className='w-16 h-auto object-contain' alt="Logo"/>
                <p>{organization.name}</p>
                <p>{organization.members} Members</p>
                <div className="p-3 w-full">
                  <Button
                    onClick={() => {
                      navigate("/organization/1")
                    }}
                  >
                    Expand
                </Button>
                </div>
              </div>
            )})
          : 
            <div className="w-full flex justify-center">
              <UsersIcon className="h-auto w-5 text-neutral-500 mr-2 object-contain"/>
              <span className="text-neutral-500">No organizations joined yet for this account</span>
            </div>
        }
        
      </div>
    </div>
  )
}

export default Dashboard