import Header from "../components/Header"
import SideBar from "../components/Sidebar"
import { Route, Routes, useLocation } from 'react-router-dom'
import Dashboard from "./Dashboard"
import Vote from "./Vote"
import Group from "./Group"


const Home = () => {
  return (
    <div className="flex flex-col min-h-screen w-full bg-white text-black">
      {/* Fixed header and sidebar */}
      <Header/>
      <SideBar/>
      <div className="flex ml-72 mt-16 p-5">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/group/:id" element={<Group />}/>
          <Route path="/vote/:id" element={<Vote />} />
        </Routes>
      </div>
    </div>
  )
}

export default Home