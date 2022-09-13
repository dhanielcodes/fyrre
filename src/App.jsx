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
            <svg width="372" height="372" viewBox="0 0 372 372" fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path d="M372 186C372 222.787 361.091 258.749 340.653 289.336C320.215 319.924 291.166 343.764 257.179 357.842C223.192 371.919 185.794 375.603 149.713 368.426C113.633 361.249 80.4907 343.534 54.4781 317.522C28.4656 291.509 10.7508 258.367 3.57394 222.287C-3.60291 186.206 0.0805075 148.808 14.1584 114.821C28.2363 80.8338 52.0764 51.7846 82.6639 31.3467C113.251 10.9087 149.213 -4.38684e-07 186 0L186 4.75848C150.154 4.75848 115.113 15.3881 85.3076 35.3032C55.5026 55.2183 32.2724 83.5243 18.5547 116.642C4.83693 149.759 1.24774 186.201 8.24099 221.358C15.2342 256.516 32.4958 288.81 57.8429 314.157C83.19 339.504 115.484 356.766 150.642 363.759C185.799 370.752 222.241 367.163 255.358 353.445C288.476 339.728 316.782 316.497 336.697 286.692C356.612 256.887 367.242 221.846 367.242 186L372 186Z" fill="white"/>
            </svg>

          </div>
        ) :

        (
          
            <div data-scroll-container className="center_page" id='main'>
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
