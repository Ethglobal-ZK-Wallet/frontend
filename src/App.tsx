import Home from './pages'
import { BrowserRouter } from 'react-router-dom'
import { createContext, useState } from 'react'
import { Identity } from "@semaphore-protocol/identity"
import { Chain, configureChains, createClient, mainnet, goerli, WagmiConfig } from 'wagmi'
import { MetaMaskConnector } from 'wagmi/connectors/metaMask'
import { jsonRpcProvider } from 'wagmi/providers/jsonRpc'

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

const { chains, provider, webSocketProvider } = configureChains(
  [mainnet, goerli],
  [
    jsonRpcProvider({
      rpc: (chain) => ({
        http: chain.rpcUrls.default.http[0],
      }),
    }),
  ]
)

const client = createClient({
  autoConnect: true,
  provider: provider,
  
})

function App() {
  const [worldcoin, setWorldcoin] = useState(false);
  const [identity, setIdentity] = useState<Identity | undefined>(undefined);

  return (
    <WagmiConfig client={client}>
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
    </WagmiConfig>
  )
}

export default App
