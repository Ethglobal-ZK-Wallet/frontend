import { useNavigate, useParams } from "react-router-dom"
import Button from "../../components/Button"
import {
  ArrowTopRightOnSquareIcon, CheckBadgeIcon, ExclamationTriangleIcon
} from '@heroicons/react/24/outline'
import Activity from "./Activity"
import { useContext } from "react"
import { AccountContext } from "../../App"
import { Identity } from "@semaphore-protocol/identity"

const Profile = () => {
  const { address } = useParams()
  const navigate = useNavigate()
  const accountContext = useContext(AccountContext)
  const verified = accountContext.worldcoin && accountContext.identity instanceof Identity
  const account = address ?? "0xBaABFcA145D47ABbaEdc9732e3D62B074F30cba8"
  const style = 'w-fit p-1 px-2 font-medium rounded overflow-hidden flex justify-center items-center text-xs'

  return (
    <div className="flex flex-col gap-2 w-full">
      <div className="flex justify-between w-full">
        <h1 className="text-2xl font-bold">
          {/** Account is user account */ account === "0xBaABFcA145D47ABbaEdc9732e3D62B074F30cba8" 
            ? "My"
            : "User"
          } Profile
        </h1>
        {!verified && <Button
          className='w-fit p-2 px-6 font-medium rounded-lg overflow-hidden flex justify-center items-center bg-navy-blue-500 text-white font-semibold text-lg'
          onClick={() => {
            navigate("/verify")
          }}
        >
          <div className="w-6 mr-1 h-auto">
            <CheckBadgeIcon/>
          </div>
           Verify Account
        </Button>}
      </div>
      <div className="flex gap-2 items-center p-6 border border-navy-blue-500 rounded-xl w-8/12">
        <img src="/placeholder.png" className='w-16 h-auto object-contain' alt="Profile Picture"/>
        <div className="flex flex-col gap-1">
          <h2 className="text-xl">{account}</h2>
          <div className="flex gap-1">
            <div
              className={`
                ${style} 
                ${verified ? "bg-green-500" : "bg-red-500" }
                text-white flex items-center`
              }
            >

              <div className="w-4 mr-1 h-auto">
                {verified ? <CheckBadgeIcon/> : <ExclamationTriangleIcon/>}
              </div>
              {verified ? "Verified" : "Not Verified"}
            </div>
            <Button
              className={`${style} bg-navy-blue-500/60 text-white flex items-center`}
              onClick={() => {}}
            >
              View in explorer
              <div className="w-3 ml-1 h-auto">
                <ArrowTopRightOnSquareIcon/>
              </div>
            </Button>
          </div>
        </div>
      </div>
      <Activity/>
    </div>
  )
}

export default Profile