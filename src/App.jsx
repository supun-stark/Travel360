import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import About from "./pages/About"
import Gallery from "./pages/Gallery"
import Contact from "./pages/Contact"

function App() {
  return (
  
      <BrowserRouter>
        <Navbar/>
           <Routes>
              <Route path="/" element={<Home/>}></Route>
              <Route path="/about" element={<About/>}></Route>
              <Route path="/gallery" element={<Gallery/>}></Route>
              <Route path="/contact" element={<Contact/>}></Route>
           </Routes>
      </BrowserRouter>
       
  )
}

export default App
