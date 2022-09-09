import { hope, hope2, devil, street, eyes, best, cover, arrow } from "../images/index"
const Work = () => {

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
    return ( 


        <div>
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
            <div className="section_more">
                ALL ARTICLES <img src={arrow} alt="" />
            </div>

        </div>
     );
}
 
export default Work;