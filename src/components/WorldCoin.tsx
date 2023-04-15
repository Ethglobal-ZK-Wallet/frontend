import { IDKitWidget, ISuccessResult } from "@worldcoin/idkit";
import { useCallback } from "react";
import Button from "./Button";

const Worldcoin = () => {
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
    <IDKitWidget
      action="my_action"
      signal="my_signal"
      onSuccess={onSuccess}
      handleVerify={handleProof}
      theme={"light"}
      app_id="get_this_from_the_dev_portal"
      // walletConnectProjectId="get_this_from_walletconnect_portal"
    >
      {({ open }) => <Button onClick={open}>Verify with Worldcoin</Button>}
    </IDKitWidget>
  )
}

export default Worldcoin