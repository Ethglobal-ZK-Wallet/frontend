import Button from "../../../components/Button"

const AccountTooltip = ({
  account
}:{
  account: string
}) => {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex gap-2 items-center">
        <img src="/placeholder.png" className='w-8 h-auto object-contain' alt="Logo"/>
        <p className="font-bold">{account}</p>
      </div>
      <div className="flex gap-2 justify-between">
        <Button 
          className = 'min-w-fit w-full py-2 lg:px-4 font-medium rounded-lg overflow-hidden flex justify-center bg-navy-blue-500 text-white items-center'
          onClick={() => {}}
        >
          View Profile
        </Button>
        <Button 
          className = 'min-w-fit w-full py-2 lg:px-4 font-medium rounded-lg overflow-hidden flex justify-center bg-navy-blue-500 text-white items-center'
          onClick={() => {}}
        >
          View in Explorer
        </Button>
      </div>
    </div>
  )
}

export default AccountTooltip