import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline"
import { useNavigate } from "react-router"
import Button from "../../../components/Button"
import { shortenAddress } from "../../../utils"

const AccountTooltip = ({
  account
}:{
  account: string
}) => {
  const navigate = useNavigate()
  return (
    <div className="flex flex-col gap-3">
      <div className="flex gap-2 items-center">
        <img src="/placeholder.png" className='w-8 h-auto object-contain' alt="Logo"/>
        <p className="font-bold">{shortenAddress(account)}</p>
      </div>
      <div className="flex gap-2 justify-between">
        <Button 
          className = 'min-w-fit w-full py-2 lg:px-4 font-medium rounded-lg overflow-hidden flex justify-center bg-navy-blue-500 text-white items-center'
          onClick={() => {
            navigate("/profile")
          }}
        >
          View Profile
        </Button>
        <Button 
          className = 'min-w-fit w-full py-2 lg:px-4 font-medium rounded-lg overflow-hidden flex justify-center bg-navy-blue-500 text-white items-center'
          onClick={() => {
            window.open(
              `https://goerli.etherscan.io/address/${account}`,
              '_blank'
            )?.focus()
          }}
        >
          View in Explorer
          <div className="w-4 ml-1 h-auto">
            <ArrowTopRightOnSquareIcon/>
          </div>
        </Button>
      </div>
    </div>
  )
}

export default AccountTooltip