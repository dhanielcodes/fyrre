import './App.css';
import './loco.css';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import { Navbar, Contact } from "./components"
import { Authors, Home, Magazine, Podcasts } from "./pages"
import { /* useState */ useRef, useEffect } from 'react'
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
  const navigate = useNavigate()

  const routerLink = (path) => {
    if (location.pathname !== path){
      gsap.to(containerMain, {opacity: 0, duration: .6})
      setTimeout(() => {
        navigate(path)
        window.scrollTo(0, 0)
        gsap.to(containerMain, {opacity: 1, duration: .6, delay: .2})
      }, 2000)
    }
  
  }
  

  return (
    <div className="App">
              <div ref={el => containerMain = el} className="center_page" id='main'>

                  <Navbar routerLink={routerLink} />
                  <div className='website'>
                    <Routes>
                        <Route exact path="/" element={<Home routerLink={routerLink}/>} />
                        <Route path="/magazine" element={<Magazine/>} />
                        <Route path="/podcasts" element={<Podcasts/>} />
                        <Route path="/authors" element={<Authors/>} />
                        <Route path="*" element={<Home/>} />
                    </Routes>
                  </div>
                  <Contact />
              </div>
      

    </div>
  );
}

export default App;


