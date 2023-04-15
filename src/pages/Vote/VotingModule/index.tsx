import Button from "../../../components/Button"

const style = 'w-full py-2 lg:px-4 font-medium rounded-lg overflow-hidden flex justify-center bg-navy-blue-500/80 text-white items-center'

const VotingModule = () => {
  return (
    <div className="p-4 border border-navy-blue-500/40 rounded-lg divide-y flex flex-col gap-3">
      <p>Your Vote</p>
      <Button 
        className={style}
        onClick={() => {}}
      >
        For
      </Button>
      <Button 
        className={style}
        onClick={() => {}}
      >
        Against
      </Button>
      <Button 
        className={style}
        onClick={() => {}}
      >
        Abstain
      </Button>
    </div>
  )
}
export default VotingModule