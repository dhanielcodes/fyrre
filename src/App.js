import './App.css';
import './index.css';
import { Navbar } from "./components"
import { Header, Works, Experience, Contact, Authors } from "./views"
import { useState, useRef, useEffect } from 'react'
import gsap from 'gsap'
import ScrollSmoother from "gsap/ScrollSmoother";
import ScrollTrigger from "gsap/ScrollTrigger";


function App() {

  const [preloader, setPreloader] = useState(false)

  gsap.registerPlugin(ScrollTrigger, ScrollSmoother)

  useEffect(() => {
    let rotateSetter = gsap.quickTo('.work_img', 'skewY')
    let clamp = gsap.utils.clamp(-30, 30)
    let smoother = ScrollSmoother.create({
      wrapper: '.App',
      content: '.center_page',
      smooth: 2,
      effects: true,
      onUpdate: (self) => {
        rotateSetter(clamp(self.getVelocity()/ -200))
      },
      onStop: () => rotateSetter(0)
    })
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
          <div className="center_page">
              <Navbar />
              <div className='website'>
                <Header />
                <Works />
                <Experience />
                <Authors/>
              </div>
             <Contact/>
            </div>
          )
      
      }
      

    </div>
  );
}

export default App;
