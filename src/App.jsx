import './App.css';
import './loco.css';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import { Navbar, Contact } from "./components"
import { Authors, Home, Magazine, Podcasts } from "./pages"
import { useState, useRef, useEffect } from 'react'
import {gsap} from 'gsap'
import ScrollTrigger from "gsap/ScrollTrigger";
import Cursor from './components/cursor';
//import LocomotiveScroll from 'locomotive-scroll';

function App() {
  const location = useLocation()
  gsap.registerPlugin(ScrollTrigger)

  const [loader, setLoader] = useState(true)

  let containerMain = useRef(null)

  let loader2 = useRef(null)
  let animname = useRef(null)
  const tl = gsap.timeline()
  
  useEffect(() => {
    
   /*  const scroll = new LocomotiveScroll({
      el: containerMain,
      smooth: true,
      lerp: 0.06,
      tablet: {
        breakpoint: 768,
      },
    })

    setTimeout(() => {
      scroll.update();
    }, 500);
    
    scroll.on("scroll", ScrollTrigger.update);

    ScrollTrigger.scrollerProxy(scroll.el, {
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





    
    
  });

  window.addEventListener("load", () => {
      setLoader(false)
      
      tl.from(animname, {
        translateY: "100%",
        duration: 1.6,
        ease: "expo",
      })
      tl.to(animname, {
        translateY: "0%",
        duration: 1.6,
        ease: "expo",
      })
      tl.to(animname, {
        translateY: "100%",
        duration: 1.6,
        ease: "expo",
      })
      tl.to(loader2, {
        translateY: "100%",
        duration: 2,
        ease: "expo",
      },"-=1.3")
      
    })
    
    const navigate = useNavigate()
    
  const routerLink = (path) => {
    if (location.pathname !== path){
      gsap.to(containerMain, {opacity: 0, duration: .6})
      gsap.to(loader2, {
        translateY: "0%",
        duration: 1.4,
        ease: "expo"
      })
      gsap.to(animname, {
        translateY: "0%",
        duration: 1,
        ease: "expo",
      })
      setTimeout(() => {
        navigate(path)
        window.scrollTo(0, 0)
        gsap.to(containerMain, {opacity: 1, duration: .6, delay: .2})
        gsap.to(loader2, {
          translateY: "100%",
          duration: 1.4,
          ease: "expo"
        })
        gsap.to(animname, {
          translateY: "100%",
          duration: 1,
          ease: "expo",
        })
      }, 2000)
    }
  
  }
  
  
  return (
    <div className="App">
      {/* <Cursor/> */}
              <div className="loader" ref={el => loader2 = el}>
                <div className="split">
                  <h1 ref={el => animname = el } style={{color: 'white'}}>
                    FYRRE ART
                  </h1>
                </div>
              </div>
                    <Navbar routerLink={routerLink} />
              <div ref={el => containerMain = el}  className="center_page" id='main'>
                    <div className='website'>
                      <Routes>
                          <Route exact path="/" element={<Home routerLink={routerLink}/>} />
                          <Route path="/magazine" element={<Magazine/>} />
                          <Route path="/podcasts" element={<Podcasts/>} />
                          <Route path="/authors" element={<Authors/>} />
                          <Route path="*" element={<Home/>} />
                      </Routes>
                    </div>
                    <Contact routerLink={routerLink} />

              </div>
      

    </div>
  );
}

export default App;


