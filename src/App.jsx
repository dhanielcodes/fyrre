import './App.css';
import './loco.css';
import { Route, Routes, useLocation } from 'react-router-dom';
import { Navbar, Contact } from "./components"
import { Authors, Home, Magazine, Podcasts } from "./pages"
import { useState, useRef, useEffect } from 'react'
import gsap from 'gsap'
import ScrollTrigger from "gsap/ScrollTrigger";
import locomotiveScroll from 'locomotive-scroll'
import {loader} from './images/index'

function App() {

  const [preloader, setPreloader] = useState(true)

  const location = useLocation()

  gsap.registerPlugin(ScrollTrigger)

  let containerMain = useRef(null)

  window.addEventListener("load", () => {
    setPreloader(false)
  })

  useEffect(() => {
    const scroll = new locomotiveScroll({
      el: containerMain,
      smooth: true,
      lerp: 0.1
    })

    
    setTimeout(() => {
      scroll.update();
    }, 500);

    //scroll.on("scroll", ScrollTrigger.update);

    /* ScrollTrigger.scrollerProxy(scroll.el, {
      scrollTop(value) {
        return arguments.length
          ? scroll.scrollTo(value, 0, 0)
          : scroll.scroll.instance.scroll.y;
      },

      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight,
        };
      },
    }); */

  }, [location])

  return (
    <div className="App"  data-scroll-container  ref={el => containerMain = el} >
      {
        preloader ? 
        (
          <div className='loader'>
            <img src={loader} alt="" />
          </div>
        ) :

        (
          
            <div className="center_page" id='main'>
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
          )
      
      }
      

    </div>
  );
}

export default App;
