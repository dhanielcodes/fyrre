import { useEffect } from 'react';
import { HeaderTitle, Art } from '../components'
import { eyes2, hope, best, devil, eyes, street} from "../images/index"
import '../styles/pages/magazine.css'
import gsap from 'gsap'
import ScrollTrigger from "gsap/ScrollTrigger";
import locomotiveScroll from 'locomotive-scroll'

const Magazine = () => {

  gsap.registerPlugin(ScrollTrigger)

  const pods = [
    {
        title: "Hope dies last",
        img: hope,
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas dui id ornare arcu odio ut sem. Cras ornare arcu dui vivamus arcu felis bibendum ut. Porttitor leo a diam.",
        type: "SCULPTURES"
    },
    {
        title: "Don’t close your eyes",
        img: eyes2,
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas dui id ornare arcu odio ut sem. Cras ornare arcu dui vivamus arcu felis bibendum ut. Porttitor leo a diam.",
        type: "SCULPTURES"
    },
    {
        title: "The best art museums",
        img: best,
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas dui id ornare arcu odio ut sem. Cras ornare arcu dui vivamus arcu felis bibendum ut. Porttitor leo a diam.",
        type: "SCULPTURES"
    },
    {
        title: "The devil is the details",
        img: devil,
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas dui id ornare arcu odio ut sem. Cras ornare arcu dui vivamus arcu felis bibendum ut. Porttitor leo a diam.",
        type: "SCULPTURES"
    },
    {
        title: "An indestructible hope",
        img: eyes,
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas dui id ornare arcu odio ut sem. Cras ornare arcu dui vivamus arcu felis bibendum ut. Porttitor leo a diam.",
        type: "SCULPTURES"
    },
    {
        title: "Street art festival",
        img: street,
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas dui id ornare arcu odio ut sem. Cras ornare arcu dui vivamus arcu felis bibendum ut. Porttitor leo a diam.",
        type: "SCULPTURES"
    },
]

    useEffect(() => {

        const scroll = new locomotiveScroll()
        setTimeout(() => {
            scroll.update();
        }, 500);
      
        //scroll.on("scroll", ScrollTrigger.update);
    })
    return ( 
        <div data-scroll-section>
            <div>
                <HeaderTitle title="MAGAZINE"/>
                <div className='magazine_top'>
                    <div>
                        Categories
                    </div>
                    <div className='categories'>
                        <div className='category_type'>
                            ART
                        </div>
                        <div className='category_type'>
                            STREET ART
                        </div>
                        <div className='category_type'>
                            SCULPTURE
                        </div>
                    </div>
                </div>
                <div className='magazine'>
                    <Art array={pods} />
                </div>
            </div>
        </div>
     );
}
 
export default Magazine;