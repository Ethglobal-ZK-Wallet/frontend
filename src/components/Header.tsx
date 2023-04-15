import Button from "./Button"

const Header = () => {
  return (
    <div className="flex justify-between w-full py-3 px-10 bg-navy-blue-500 items-center">
      <h1 className="text-xl font-bold text-white">ZK Privacy Wallet</h1>
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