import Home from './pages'
import { BrowserRouter } from 'react-router-dom'
import { createContext, useState } from 'react'
import { Identity } from "@semaphore-protocol/identity"

export interface AccountContextData {
  worldcoin: boolean,
  identity: Identity | undefined
  setWorldcoin: React.Dispatch<any> | undefined
  setIdentity: React.Dispatch<any> | undefined
}

export const AccountContext = createContext<AccountContextData>({
  worldcoin: false,
  identity: undefined,
  setWorldcoin: undefined,
  setIdentity: undefined
})

function App() {
  const [worldcoin, setWorldcoin] = useState(false);
  const [identity, setIdentity] = useState<Identity | undefined>(undefined);

  return (
    <BrowserRouter>
      <AccountContext.Provider 
        value={{
          worldcoin: worldcoin,
          identity: identity,
          setWorldcoin: setWorldcoin,
          setIdentity: setIdentity
        }}
      >
        <Home/>
      </AccountContext.Provider>
    </BrowserRouter>
  )
}

export default App
