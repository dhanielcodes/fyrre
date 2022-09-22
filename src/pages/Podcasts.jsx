import "../styles/pages/podcasts.css"
import { useEffect } from 'react';
import { HeaderTitle } from '../components'
import { pod1, pod2, pod3} from "../images/index"
import gsap from 'gsap'
import ScrollTrigger from "gsap/ScrollTrigger";
import { useRef } from "react";
import { motion } from "framer-motion"

const Podcasts = () => {
    gsap.registerPlugin(ScrollTrigger)
    const pods = [
        {
            title: "The Problem of today’s cultural development",
            img: pod1,
            number: "01"
        },
        {
            title: "The hidden messages of Jack Nielson",
            img: pod2,
            number: "02"
        },
        {
            title: "Behind the scenes of the street art culture",
            img: pod3,
            number: "03"
        },
    ]
    let header = useRef(null)

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
    })
    const workVariants = {
        offscreen: {
            y: "10%",
            opacity: 0
        },
        onscreen:{
            y: "0%",
            opacity: 1,
            transition: {type: "spring", duration: 1, bounce: 0.3}
        }
    }
    return ( 
        <div className="podcasts" data-scroll-section>
            <div className='split'>
                    <div  ref={el => header = el}>
                        <HeaderTitle title="PODCAST"/>
                    </div>
                </div>
            <div className="podcast_list">
                {pods.reverse().map((x) => {
                    return (
                        <motion.div initial="offscreen" whileInView="onscreen" viewport={{ once: true, amount: 0.4   }}>
                            <motion.div className="podcast" variants={workVariants}>
                                <div className="podcast_number">{x.number}</div>
                                <div className="podcast_cont">    
                                    <div className="podcast_main">
                                        <img className="podcast_img" src={x.img} alt="" />
                                        <div className="podcast_title">
                                            {x.title}
                                        </div>
                                    </div>
                                    <div className="podcast_about">
                                        <div>
                                            Date <span>16. March 2022</span>
                                        </div>
                                        <div className="">
                                            Duration <span>1hr 20min</span>
                                        </div>
                                        <div>
                                            LISTEN
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>
                    )
                })}
            </div>
        </div>
     );
}
 
export default Podcasts;