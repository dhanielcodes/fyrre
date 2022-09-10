import './App.css';
import './index.css';
import './loco.css';
import { Navbar } from "./components"
import { Header, Works, Experience, Contact, Authors } from "./views"
import { useState, useRef, useEffect } from 'react'
import gsap from 'gsap'
import ScrollTrigger from "gsap/ScrollTrigger";
import { LocomotiveScrollProvider } from 'react-locomotive-scroll'

function App() {

  const [preloader, setPreloader] = useState(false)

  gsap.registerPlugin(ScrollTrigger)

  let containerMain = useRef(null)

  useEffect(() => {

  })


  setTimeout(() => {
    setPreloader(false)
  }, 3000)

  useEffect(() => {

  })
  return (
    <div className="App">
      {
        preloader ? 
        (
          <div>
            Loader
          </div>
        ) :

        (
          <LocomotiveScrollProvider options={
            {
              smooth: true,
              lerp: 0.06,
              tablet: {
                breakpoint: 768,
              },
            }
          }>
            <div data-scroll-container  ref={el => containerMain = el} className="center_page" id='main'>
                <Navbar data-scroll-section />
                <div className='website'>
                  <Header data-scroll-section />
                  <Works data-scroll-section />
                  <Experience data-scroll-section />
                  <Authors data-scroll-section/>
                </div>
              <Contact data-scroll-section/>
              </div>
          </LocomotiveScrollProvider>
          )
      
      }
      

    </div>
  );
}

export default App;
