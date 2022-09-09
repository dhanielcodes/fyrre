import { pod1, pod2, pod3 } from "../images/index"

const Experience = () => {
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
    return ( 
        <main>
            <div className="title">
                PODCAST
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
                                    <div  data-lag='2' className="experience_desc_about_dets_date">
                                        Date <span>16.06.2022</span>
                                    </div>
                                    <div  data-lag='0.5' className="">
                                        Duration <span>1h 20 Min</span>
                                    </div>
                                </div>
                            </div>
                        </div> 
                    )
                })}               
                
            </div>
        </main>
     );
}
 
export default Experience;