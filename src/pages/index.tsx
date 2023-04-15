import Header from "../components/Header"
import SideBar from "../components/Sidebar"
import { Route, Routes, useLocation } from 'react-router-dom'
import Dashboard from "./Dashboard"
import Vote from "./Vote"
import Profile from "./Profile"
import Verify from "./Verify"
import Organization from "./Organization"
import { useContext, useEffect } from "react"
import { AccountContext } from "../App"


const Home = () => {

  const accountContext = useContext(AccountContext)
  useEffect(() => {
    const worldcoin = localStorage.getItem('Worldcoin')
    if(worldcoin === "Verified" && typeof accountContext.setWorldcoin !== "undefined"){
      accountContext.setWorldcoin(true)
    }
  }, [])

  return (
    <div className="flex flex-col min-h-screen w-full bg-white text-black">
      {/* Fixed header and sidebar */}
      <Header/>
      <SideBar/>
      <div className="flex ml-72 mt-16 p-5">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/organization/:id" element={<Organization />}/>
          <Route path="/vote/:id" element={<Vote />} />
          <Route path="/profile/" element={<Profile />} />
          <Route path="/profile/:address" element={<Profile />} />
          <Route path="/verify/" element={<Verify />} />
        </Routes>
      </div>
    </div>
  )
}

export default Home