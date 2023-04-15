import Button from "./Button"
import { useAccount, useConnect } from "wagmi";
import { shortenAddress } from "../utils";
const Header = () => {
  const { connect, connectors } = useConnect()
  const { isConnected, address } = useAccount()
  console.log(address)

  return (
    <div className="fixed flex justify-between w-full py-3 px-6 bg-navy-blue-500 items-center z-50">
      <div className="text-xl font-bold text-white">ZK Privacy Wallet</div>
        <div className="w-fit">
        {isConnected ? 
            <div
              className='w-full py-2 lg:px-4 font-medium rounded-lg overflow-hidden flex justify-center bg-white text-navy-blue-500 items-center'
            >
              {address && shortenAddress(address)}
            </div>
          : 
            <Button 
              className='w-full py-2 lg:px-4 font-medium rounded-lg overflow-hidden flex justify-center bg-white text-navy-blue-500 items-center'
              onClick={() => {connect({ connector: connectors[0]})}}
            >
              Connect Wallet
            </Button>
            
        }
      </div>
      
    </div>
  )
}

export default Header