import "../styles/pages/authors.css"
import { useEffect } from 'react';
import { HeaderTitle, Art } from '../components'
import { jakob, jensen, anne} from "../images/index"
import gsap from 'gsap'
import ScrollTrigger from "gsap/ScrollTrigger";
import locomotiveScroll from 'locomotive-scroll'

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
    useEffect(() => {


        const scroll = new locomotiveScroll()
        setTimeout(() => {
            scroll.update();
        }, 500);
      
        //scroll.on("scroll", ScrollTrigger.update);

    }, [])

    return ( 
        <div data-scroll-section>
            <HeaderTitle title="AUTHORS" />

            <div className="authors_list">
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