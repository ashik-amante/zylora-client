import { Outlet } from "react-router"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"

function App() {


  return (
    <>
      <Navbar></Navbar>
      <div className="mt-20 max-w-7xl mx-auto min-h-min">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </>
  )
}

export default App
