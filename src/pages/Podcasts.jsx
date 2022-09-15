import "../styles/pages/podcasts.css"
import { useEffect } from 'react';
import { HeaderTitle, Art } from '../components'
import { pod1, pod2, pod3} from "../images/index"
import gsap from 'gsap'
import ScrollTrigger from "gsap/ScrollTrigger";

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
    useEffect(() => {

    }, [])
    return ( 
        <div className="podcasts">
            <HeaderTitle title="PODCASTS"/>
            <div className="podcast_list">
                {pods.reverse().map((x) => {
                    return (
                        <div className="podcast">
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
                        </div>
                    )
                })}
            </div>
        </div>
     );
}
 
export default Podcasts;