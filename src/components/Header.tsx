import Button from "./Button"
import { useAccount, useConnect, useDisconnect } from "wagmi";
import { shortenAddress } from "../utils";
import { MetaMaskConnector } from 'wagmi/connectors/metaMask'
const Header = () => {
  const { connect, connectors } = useConnect()
  const { isConnected, address } = useAccount()
  const { disconnect } = useDisconnect()
  console.log(address)

  return (
    <div className="fixed flex justify-between w-full py-3 px-6 bg-navy-blue-500 items-center z-50">
      <div className="text-xl font-bold text-white">ZK Governance</div>
        <div className="w-fit">
          <Button 
            className='w-full py-2 lg:px-4 font-medium rounded-lg overflow-hidden flex justify-center bg-white text-navy-blue-500 items-center'
            onClick={() => {isConnected ? disconnect() : connect({ connector: connectors[0]})}}
          >
            {isConnected && address ? shortenAddress(address) : "Connect Wallet"}
          </Button>
      </div>
      
    </div>
  )
}

export default Header