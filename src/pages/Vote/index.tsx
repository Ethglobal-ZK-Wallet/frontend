import Button from "../../components/Button"

const Vote = () => {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex gap-2 items-center w-fit">
        <Button 
          onClick={() => {}}
          className="w-full py-1 lg:px-2 font-medium rounded-lg overflow-hidden flex justify-center bg-navy-blue-500/40 text-white text-sm items-center"
        >
          Back
        </Button>
        <h1 className="text-xl font-bold min-w-fit">
          Vote Proposal
        </h1>
      </div>
      <div className="w-10/12 flex flex-col gap-2">
        <h2 className="text-3xl font-bold mt-4">
          Proposal Title
        </h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </div>
    </div>
  )
}
export default Vote