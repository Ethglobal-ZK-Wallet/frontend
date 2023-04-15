import Button from "./Button"

const Header = () => {
  return (
    <div className="flex justify-between">
      <h1>ZK Privacy Wallet</h1>
      <Button onClick={() => {}}>
        Connect Wallet
      </Button>
    </div>
  )
}

export default Header