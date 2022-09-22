import { banner } from "../images/index"
import { HeaderTitle } from '../components/index'
import { hope, hope2, devil, street, eyes, best, cover, arrow, pod1, pod2, pod3, jakob, jane, anna, anne, cris, jensen} from "../images/index"
import '../styles/pages/home.css';
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion"



const Home = ({routerLink}) => {
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

    let header = useRef(null)
    let news = useRef(null)
    let headerAbout = useRef(null)
    let headerAbout2 = useRef(null)
    let headerAbout3 = useRef(null)
    let bannerImg = useRef(null)
    let magPanel = useRef(null)
    let podCast = useRef(null)
    let podCasts = useRef([])
    podCasts.current = []
    let author = useRef(null)
    let authorss = useRef(null)

    const addToRefs = (el) => {
        if (el && !podCasts.current.includes(el)) {
          podCasts.current.push(el);
        }
    };

  const match = gsap.matchMedia()


    const animation = () => {
        gsap.from(header, {
            duration: 1.3,
            translateY: "100%",
            ease: "expo",
            delay: 3.6
        })
        gsap.to(header, {
            translateY: "0%",
            ease: "expo",
            duration: 1.3,
            delay: 3.6

        })


        gsap.from(news, {
            opacity: 0,
            ease: "expo",
            duration: 1.3,
            delay: 4.4

        })
        gsap.to(news, {
            opacity: 1,
            ease: "expo",
            duration: 1.3,
            delay: 4.4
        })


        gsap.from(headerAbout, {
            translateY: "-100%",
            ease: "expo",
            duration: 1,
            delay: 4.4

        })
        gsap.to(headerAbout, {
            translateY: "0%",
            ease: "expo",
            duration: 1,
            delay: 4.4
        })


        gsap.from(headerAbout2, {
            translateY: "-100%",
            ease: "expo",
            duration: 1,
            delay: 4.4

        })
        gsap.to(headerAbout2, {
            translateY: "-0%",
            ease: "expo",
            duration: 1,
            delay: 4.4
        })

        gsap.from(headerAbout3, {
            opacity: 0,
            ease: "expo",
            duration: 1,
            delay: 4.4

        })
        gsap.to(headerAbout3, {
            opacity: 1,
            ease: "expo",
            duration: 1.3,
            delay: 4.4
        })

        gsap.from(bannerImg, {
            opacity: 0,
            ease: "expo",
            duration: 1.3,
            delay: 4.4,
            scrub: 1,
        })
        gsap.to(bannerImg, {
            opacity: 1,
            ease: "expo",
            duration: 1.3,
            delay: 4.4,
            scrub: 1,
        })
    }

    useEffect(() => {
        match.add("(min-width: 800px)", () => {
            window.addEventListener("load", () => {
                animation()
            })
            gsap.to(magPanel, {
                scrollTrigger: {
                    trigger: magPanel,
                    pin: magPanel,
                    start: "top +=60",
                }
            })
    
            gsap.from(podCast, {
                duration: 1.3,
                translateY: "100%",
                ease: "expo",
            })
            gsap.to(podCast, {
                translateY: "0%",
                ease: "expo",
                duration: 1.3,
                scrollTrigger: {
                    trigger: podCast
                }
            })
            
            gsap.from(podCasts.current, {
                duration: 1.3,
                translateY: "10%",
                opacity: 0,
                ease: "expo",
            })
    
            gsap.to(podCasts.current, {
                translateY: "0%",
                opacity: 1,
                ease: "expo",
                duration: 1.3,
                stagger: .2,
                scrollTrigger: {
                    trigger: podCasts.current,
    
                }
            })
    
    
            gsap.from(author, {
                duration: 1.3,
                translateY: "100%",
                ease: "expo",
            })
            gsap.to(author, {
                translateY: "0%",
                ease: "expo",
                duration: 1.3,
                scrollTrigger: {
                    trigger: author
                }
            })
            
            gsap.from(authorss, {
                duration: 1.3,
                translateY: "10%",
                opacity: 0,
                ease: "expo",
            })
    
            gsap.to(authorss, {
                translateY: "0%",
                opacity: 1,
                ease: "expo",
                duration: 1.3,
                scrollTrigger: {
                    trigger: authorss,
    
                }
            })
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
        <div>

            {/* HEADER SECTION */}
            <header>
                <div className="split">
                    <div ref={el => header = el}>
                        <HeaderTitle title="ART & LIFE" />
                    </div>
                </div>
                <div ref={el => news = el} className="news">
                    NEWS TICKER+++
                </div>
                <div className="banner2">
                    <img className="banner_img" src={banner} alt="" />
                </div>
                <div className="about">
                    <div className="split">
                        <div className="about_name" ref={el => headerAbout = el}>
                            DON'T CLOSE YOUR EYES
                        </div>
                    </div>
                    <div className="about_content">
                        <div className="split">
                            <div ref={el => headerAbout2 = el} className="about_content_text1">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                                ut labore et dolore magna aliqua. Egestas dui id ornare arcu odio ut sem. Cras ornare
                                arcu dui vivamus arcu felis bibendum ut. Porttitor leo a diam.
                            </div>
                        </div>
                        <div className="about_content_main" ref={el => headerAbout3 = el}>
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
                <div className="split">
                    <div className="banner" ref={el => bannerImg = el}>
                        <img className="banner_img" src={banner} alt="" />
                    </div>
                </div>
            </header> 

            {/* WORKs SECTION */}

            <div>
                <section>
                        <div className="works">
                            {
                                work.map((x) => {
                                    return (
                                        <motion.div initial="offscreen" whileInView="onscreen" viewport={{ once: true, amount: 0.4   }}>
                                            <motion.div className="work" variants={workVariants}  >
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
                                                
                                            </motion.div>
                                        </motion.div>
                                    )
                                })
                            }
                        </div>
                        <div className="sections_more1">
                            <div className="section_more" onClick={() => routerLink("/magazine")}>
                                ALL ARTICLES <img src={arrow} alt="" />
                            </div>
                        </div>
                        <div ref={el => magPanel = el} className="other">
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
                    <div className="section_more" onClick={() => routerLink("/magazine")}>
                        ALL ARTICLES <img src={arrow} alt="" />
                    </div>
                </div>

            </div>

            {/* PODCAST SECTION */}

            <main>
                <div className="experience_top">
                        <div className="split">
                            <div className="title" ref={el => podCast = el}>
                                PODCAST
                            </div>
                        </div>
                        <div className="experience_more" onClick={() => routerLink("/podcasts")}>
                            ALL PODCASTS <img src={arrow} alt="" />
                        </div>
                 </div>
                <div className="experiences">
                    {pods.map((x) => {
                        return (
                            <div className="experience" ref={addToRefs}>
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

            <aside>
                <div className="author_top">
                    <div className="split">
                        <div className="title" ref={el => author = el}>
                            AUTHORS
                        </div>
                    </div>
                    <div className="author_more" onClick={() => routerLink("/authors")}>
                        ALL AUTHORS <img src={arrow} alt="" />
                    </div>
                </div>
                <div className="authors" ref={el => authorss = el}>
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