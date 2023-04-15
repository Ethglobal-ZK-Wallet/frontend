import { IDKitWidget, ISuccessResult } from "@worldcoin/idkit";
import Button from "./Button"
import { useCallback } from "react";
const Header = () => {
  const handleProof = useCallback((result: ISuccessResult) => {
		return new Promise<void>((resolve) => {
			setTimeout(() => resolve(), 3000);
			// NOTE: Example of how to decline the verification request and show an error message to the user
		});
	}, []);

	const onSuccess = (result: ISuccessResult) => {
		console.log(result);
	};

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
        <IDKitWidget
					action="my_action"
					signal="my_signal"
					onSuccess={onSuccess}
					handleVerify={handleProof}
					app_id="get_this_from_the_dev_portal"
					// walletConnectProjectId="get_this_from_walletconnect_portal"
				>
					{({ open }) => <button onClick={open}>Click me</button>}
				</IDKitWidget>
      </div>
      
    </div>
  )
}

export default Header