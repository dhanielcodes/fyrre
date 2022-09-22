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

  const match = gsap.matchMedia()

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


    match.add("(min-width: 800px)", () => {
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
      
    })



    
    
  });


    
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
              {
                loader ? <div className="loader">
                  <svg width="328" height="328" viewBox="0 0 328 328" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M304 164C304 182.385 300.379 200.59 293.343 217.576C286.307 234.561 275.995 249.995 262.995 262.995C249.995 275.995 234.561 286.307 217.576 293.343C200.59 300.379 182.385 304 164 304C145.615 304 127.41 300.379 110.424 293.343C93.4387 286.307 78.0052 275.995 65.005 262.995C52.0048 249.995 41.6925 234.561 34.6569 217.576C27.6212 200.59 24 182.385 24 164L69.3207 164C69.3207 176.433 71.7696 188.745 76.5277 200.232C81.2858 211.719 88.2598 222.157 97.0516 230.948C105.843 239.74 116.281 246.714 127.768 251.472C139.255 256.23 151.567 258.679 164 258.679C176.433 258.679 188.745 256.23 200.232 251.472C211.719 246.714 222.157 239.74 230.948 230.948C239.74 222.157 246.714 211.719 251.472 200.232C256.23 188.745 258.679 176.433 258.679 164H304Z" fill="white"/>
                  <path d="M26.3095 138.674C32.1794 106.761 48.9523 77.8783 73.7605 56.9633C98.5688 36.0482 129.872 24.4 162.318 24.0102C194.764 23.6204 226.338 34.5131 251.641 54.8261C276.945 75.139 294.407 103.611 301.042 135.373L256.679 144.64C252.192 123.16 240.382 103.905 223.27 90.1678C206.158 76.4305 184.805 69.0639 162.862 69.3276C140.92 69.5912 119.75 77.4687 102.973 91.6131C86.1953 105.758 74.8521 125.291 70.8825 146.873L26.3095 138.674Z" fill="white"/>
                  </svg>



                </div> : null
              }
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


