import './App.css';
import './loco.css';
import { Route, Routes, useLocation } from 'react-router-dom';
import { Navbar, Contact } from "./components"
import { Authors, Home, Magazine, Podcasts } from "./pages"
import { useState, useRef, useEffect } from 'react'
import {gsap} from 'gsap'
import ScrollTrigger from "gsap/ScrollTrigger";

function App() {
  const location = useLocation()
  gsap.registerPlugin(ScrollTrigger)

  let containerMain = useRef(null)


  useEffect(() => {
    
  }, [location])

  useEffect(() => {
   
  })

  return (
    <div className="App"   >
              <div ref={el => containerMain = el} className="center_page" id='main'>

                  <Navbar />
                  <div className='website'>
                    <Routes>
                        <Route exact path="/" element={<Home/>} />
                        <Route path="/magazine" element={<Magazine/>} />
                        <Route path="/podcasts" element={<Podcasts/>} />
                        <Route path="/authors" element={<Authors/>} />
                    </Routes>
                  </div>
                  <Contact />
              </div>
      

    </div>
  );
}

export default App;
