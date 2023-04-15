import { IDKitWidget, ISuccessResult } from "@worldcoin/idkit";
import Button from "./Button"
import { useCallback } from "react";
import CreateIdentity from "./CreateIdentity";
const Header = () => {

  return (
    <div className="fixed flex justify-between w-full py-3 px-6 bg-navy-blue-500 items-center z-50">
      <div className="text-xl font-bold text-white">ZK Privacy Wallet</div>
      <div className="w-fit">
        <Button 
          className='w-full py-2 lg:px-4 font-medium rounded-lg overflow-hidden flex justify-center bg-white text-navy-blue-500 items-center'
          onClick={() => {}}
        >
          Connect Wallet
        </Button>
      </div>
      
    </div>
  )
}

export default Header