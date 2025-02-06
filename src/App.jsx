
import './App.css'
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from './Components/Navbar/Navbar'


import Home from './pages/Home/Home'
import Like from "./pages/Like/Like"
import Shop from './pages/Shop/Shop'
import User from './pages/User/User'
import { DATA } from "./mock/index";
import SingleRoute from './pages/SingleRoute/SingleRoute'
import Footer from './Components/Footer/Footer'
function App() {
  const location = useLocation();


  if (location.pathname === "/User") {
    return (
      <Routes>
        <Route path="/User" element={<User />} />
      </Routes>
    );
  }

  return (
    <>
      <Navbar/>

   
    <Routes>
        <Route path="/" element={<Home  />} />
        <Route path="/like" element={<Like />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/User" element={<User />} />
        <Route path='/card/:id' element={<SingleRoute/>}></Route>
      </Routes>
<Footer/>
    </>
  )
}

export default App
