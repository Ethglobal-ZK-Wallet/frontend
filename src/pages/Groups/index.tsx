import { useNavigate } from "react-router"
import Button from "../../components/Button"

const Groups = () => {
  const navigate = useNavigate()
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-xl font-bold text-navy-blue-500">
        My Groups
      </h1>
      <div className="flex gap-3 w-full flex-wrap">
      <div className="flex flex-col p-2 items-center justify-end w-48 h-52 border-2 border-navy-blue-500/20 rounded-xl">
          <p>Arbitrum</p>
          <p>300 Members</p>
          <div className="p-3 w-full">
            <Button
              onClick={() => {
                navigate("/group/1")
              }}
            >
              Expand
          </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Groups