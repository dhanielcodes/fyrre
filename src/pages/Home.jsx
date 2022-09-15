import { banner } from "../images/index"
import { HeaderTitle } from '../components/index'
import { hope, hope2, devil, street, eyes, best, cover, arrow, pod1, pod2, pod3, jakob, jane, anna, anne, cris, jensen} from "../images/index"
import '../styles/pages/home.css';
import { useNavigate } from "react-router-dom";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useRef } from "react";
import { motion } from "framer-motion"



const Home = () => {
    gsap.registerPlugin(ScrollTrigger)
    
    const work = [
        {
            title: "Hope dies last",
            img: hope,
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas dui id ornare arcu odio ut sem. Cras ornare arcu dui vivamus arcu felis bibendum ut. Porttitor leo a diam.",
            type: "ART"
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
            type: "ART"
        },
        {
            title: "An inde­struc­tible hope",
            img: hope2,
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas dui id ornare arcu odio ut sem. Cras ornare arcu dui vivamus arcu felis bibendum ut. Porttitor leo a diam.",
            type: "ART"
        },
        {
            title: "Street art festival",
            img: street,
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas dui id ornare arcu odio ut sem. Cras ornare arcu dui vivamus arcu felis bibendum ut. Porttitor leo a diam.",
            type: "STREET ART"
        },
        {
            title: "Through the eyes of street artists",
            img: eyes,
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas dui id ornare arcu odio ut sem. Cras ornare arcu dui vivamus arcu felis bibendum ut. Porttitor leo a diam.",
            type: "STREET ART"
        },
    ]

    const pods = [
        {
            title: "The Problem of today’s cultural development",
            img: pod1,
        },
        {
            title: "The hidden messages of Jack Nielson",
            img: pod2,
        },
        {
            title: "Behind the scenes of the street art culture",
            img: pod3,
        }
    ]

    const authors = [
        {
            name: "Jakob Gronberg",
            img: jakob, 
        },
        {
            name: "Anne Henry",
            img: anne, 
        },
        {
            name: "Jane Cooper",
            img: jane, 
        },
        {
            name: "Louise Jensen",
            img: jensen, 
        },
        {
            name: "Anna Nielsen",
            img: anna, 
        },
        {
            name: "Cristofer Vaccaro",
            img: cris, 
        }
    ]

    let navigate = useNavigate()

    const routerLink = (path) => {
        navigate(path)

        /* onClick={() => routerLink("/magazine")} */
    }

    const tl = gsap.timeline()

    let header = useRef(null)

    tl.from(header, {
      duration: 2,
      ease: "expo",
      opacity: 0
    })

    return ( 
        <div>

            {/* HEADER SECTION */}
            <header data-scroll-section>
                <motion.div initial={{opacity: 0}} animate={{opacity: 1}}>
                    <HeaderTitle  title="ART & LIFE" />
                </motion.div>
                <motion.div className="news" ref={el => header = el}>
                    NEWS TICKER+++
                </motion.div>
                <div className="banner2">
                    <img className="banner_img" src={banner} alt="" />
                </div>
                <div className="about">
                    <div className="about_name">
                        DON'T CLOSE YOUR EYES
                    </div>
                    <div className="about_content">
                        <div className="about_content_text1">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                            ut labore et dolore magna aliqua. Egestas dui id ornare arcu odio ut sem. Cras ornare
                            arcu dui vivamus arcu felis bibendum ut. Porttitor leo a diam.
                        </div>
                        <div className="about_content_main">
                            <div className="about_content_text2">
                                <div>
                                    Text <span>Jakob Gronberg</span>
                                </div>
                                <div className="about_content_text2_date">
                                    Date <span>16. March 2022</span>
                                </div>
                                <div>
                                    Duration <span>1 Min</span>
                                </div>
                            </div>
                            <div className="about_content_text2_type">
                                LABEL
                            </div>
                        </div>
                    </div>
                </div>
                <div className="banner" data-scroll data-scroll-speed="2">
                    <img className="banner_img" src={banner} alt="" />
                </div>
            </header> 

            {/* WORKs SECTION */}

            <div data-scroll-section>
                <section>
                        <div className="works">
                            {
                                work.map((x) => {
                                    return (
                                        <div className="work">
                                            <div className="work_img">
                                                <img src={x.img} alt="" />
                                            </div>
                                            <div className="work_desc">
                                                <div>
                                                    <div className="work_desc_title">
                                                        {x.title}
                                                    </div>
                                                    <div className="work_desc_content">
                                                        {x.desc}
                                                    </div>
                                                </div>
                                                <div className="work_desc_about">
                                                    <div className="work_desc_about_dets">
                                                        <div>
                                                            Text <span>Jakob Gronberg</span>
                                                        </div>
                                                        <div className="work_desc_about_dets_date">
                                                            Date <span>16. March 2022</span>
                                                        </div>
                                                        <div>
                                                            Read <span>1 Min</span>
                                                        </div>
                                                    </div>
                                                    <div className="work_desc_about_type">
                                                        {x.type}
                                                    </div>
                                                </div>
                                            </div>
                                            
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <div className="sections_more1">
                            <div className="section_more">
                                ALL ARTICLES <img src={arrow} alt="" />
                            </div>
                        </div>
                        <div className="other">
                            <div className="other_top">
                                <div className="other_top_title">
                                    PRINTMAGAZINE
                                </div>
                                <div className="other_top_date">
                                    03/2022
                                </div>
                            </div>
                            <img className="other_cover" src={cover} alt="" />
                            <div className="other_popular">
                                <div className="other_top_title">
                                    MOST POPULAR
                                </div>
                                <div>
                                    <div className="other_popular_popular">
                                        <div className="other_popular_popular_no">
                                            01
                                        </div>
                                        <div className="other_popular_popular_content">
                                            <div className="other_popular_popular_title">
                                                Street art festival
                                            </div>
                                            <div className="other_popular_popular_about">
                                                Text <span>Cristofer Vaccaro</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <form>
                                <div className="form_title">NEWSLETTER</div>
                                <div className="form_desc">Design News to your inbox</div>
                                <input type="email" required placeholder="Email" />
                                <div className="form_button">
                                    <button>SIGN UP</button>
                                </div>
                            </form>
                        </div>
                        
                </section>
                <div className="sections_more2">
                    <div className="section_more">
                        ALL ARTICLES <img src={arrow} alt="" />
                    </div>
                </div>

            </div>

            {/* PODCAST SECTION */}

            <main data-scroll-section>
                <div className="experience_top">
                        <div className="title">
                            PODCAST
                        </div>
                        <div className="experience_more">
                            ALL PODCASTS <img src={arrow} alt="" />
                        </div>
                 </div>
                <div className="experiences">
                    {pods.map((x) => {
                        return (
                            <div className="experience">
                                <img className="experience_img" src={x.img} alt="" />
                                <div className="experience_desc">
                                    <div className="experience_desc_title">
                                        {x.title}
                                    </div>
                                    <div className="experience_desc_about_dets">
                                        <div className="experience_desc_about_dets_date">
                                            Date <span>16.06.2022</span>
                                        </div>
                                        <div  className="">
                                            Duration <span>1h 20 Min</span>
                                        </div>
                                    </div>
                                </div>
                            </div> 
                        )
                    })}               
                    
                </div>
            </main>

            {/* AUTHORS SECTION */}

            <aside data-scroll-section>
                <div className="author_top">
                    <div className="title">
                        AUTHORS
                    </div>
                    <div className="author_more">
                        ALL AUTHORS <img src={arrow} alt="" />
                    </div>
                </div>
                <div className="authors">
                    {authors.map((x) => {
                        return (
                            <div className="author_profile">
                                <img className="author_profile_img" src={x.img} alt="" />
                                <div className="author_profile_desc">
                                    <div className="author_profile_desc_name">
                                        {x.name}
                                    </div>
                                    <div className="author_profile_desc_about">
                                        <div>
                                            Job <span>Artist</span>
                                        </div>
                                        <div>
                                            City <span>Berlin</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </aside>
            

        </div>
        
     );
}
 
export default Home
;