import './App.css';
import './loco.css';
import { Route, Routes, useLocation } from 'react-router-dom';
import { Navbar, Contact } from "./components"
import { Authors, Home, Magazine, Podcasts } from "./pages"
import { useState, useRef, useEffect } from 'react'
import {gsap} from 'gsap'
import ScrollTrigger from "gsap/ScrollTrigger";
import locomotiveScroll from 'locomotive-scroll'
import {loader} from './images/index'

function App() {
  const location = useLocation()

  gsap.registerPlugin(ScrollTrigger)

  let containerMain = useRef(null)

  /* window.addEventListener("load", () => {
    setPreloader(false)
  }) */

  useEffect(() => {
    const scroll = new locomotiveScroll({
      el: containerMain,
      smooth: true,
      lerp: 0.1
    })

    
    setTimeout(() => {
      scroll.update();
    }, 500);

    scroll.on("scroll", ScrollTrigger.update);


  }, [location])

  useEffect(() => {
   
  })

  return (
    <div className="App"   >
              <div data-scroll-container ref={el => containerMain = el} className="center_page" id='main'>
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
