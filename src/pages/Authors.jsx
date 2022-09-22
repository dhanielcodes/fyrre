import "../styles/pages/authors.css"
import { useEffect } from 'react';
import { HeaderTitle } from '../components'
import { jakob, jensen, anne} from "../images/index"
import gsap from 'gsap'
import ScrollTrigger from "gsap/ScrollTrigger";
import { useRef } from "react";

const Authors = () => {
    
    gsap.registerPlugin(ScrollTrigger)

    const authors = [
        {
            title: "Jakob Grønberg",
            img: jakob,
        },
        {
            title: "Louise Jensen",
            img: jensen,
        },
        {
            title: "Anne Henry",
            img: anne,
        },
    ]
    let header = useRef(null)
    let mag = useRef(null)


    useEffect(() => {
        gsap.from(header, {
            duration: 1.3,
            translateY: "100%",
            ease: "expo",
        })
        gsap.to(header, {
            translateY: "0%",
            ease: "expo",
            duration: 1.3
        })

        gsap.from(mag, {
            opacity: 0,
            translateY: "10%",
            duration: 1.4,
            ease: "expo",
            delay: .7
        })
        gsap.to(mag, {
            opacity: 1,
            translateY: "0%",
            ease: "expo",
            duration: 1.4,
            delay: .7
        })
    })


    return ( 
        <div data-scroll-section>
            <div className='split'>
                    <div  ref={el => header = el}>
                        <HeaderTitle title="AUHTORS"/>
                    </div>
                </div>

            <div className="authors_list" ref={el => mag = el}>
            {
                authors.map((x) => {
                    return (
                        <div className="author">
                            <div className="author_main">
                                <img className="author_img" src={x.img} alt="" />
                                <div className="author_title">
                                    {x.title}
                                </div>
                            </div>
                            <div className="author_about">
                                <div>
                                    Date <span>16. March 2022</span>
                                </div>
                                <div className="">
                                    Duration <span>1hr 20min</span>
                                </div>
                                <div>
                                    ABOUT
                                </div>
                            </div>
                        </div>
                    )
                })
            }
            </div>
        </div>
     );
}
 
export default Authors;