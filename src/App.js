import './App.css';
import './index.css';
import './loco.css';
import { Navbar } from "./components"
import { Header, Works, Experience, Contact, Authors } from "./views"
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
      smooth: true
    })

    setTimeout(function(){ scroll.update(); }, 50);

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
                  <Header />
                  <Works />
                  <Experience />
                  <Authors />
              </div>
                  <Contact />
              </div>
          )
      
      }
      

    </div>
  );
}

export default App;
