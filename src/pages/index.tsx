import Header from "../components/Header"
import SideBar from "../components/Sidebar"

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen w-full bg-white text-black">
      {/* Fixed header and sidebar */}
      <Header/>
      <SideBar/>
      <div className="flex ml-72">
        <div>Hello</div>
      </div>
    </div>
  )
}

export default Home