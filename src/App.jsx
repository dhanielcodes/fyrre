import './App.css';
import './index.css';
import './loco.css';
import { Navbar, Contact } from "./components"
import { Home } from "./pages"
import { useState, useRef, useEffect } from 'react'
import gsap from 'gsap'
import ScrollTrigger from "gsap/ScrollTrigger";
import locomotiveScroll from 'locomotive-scroll'

function App() {

  const [preloader, setPreloader] = useState(false)

  gsap.registerPlugin(ScrollTrigger)

  let containerMain = useRef(null)

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
          
            <div data-scroll-container  ref={el => containerMain = el} className="center_page" id='main'>
                  <Navbar />
              <div className='website'>
                  <Home />
              </div>
                  <Contact />
              </div>
          )
      
      }
      

    </div>
  );
}

export default App;
