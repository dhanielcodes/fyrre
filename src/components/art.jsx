import '../styles/components.css'

const Art = (props) => {
    return ( 
        <>
            {props.array.map((x) => {
                return (
                    <div className="art">
                        <div className="art_desc_about_dets">
                            <div className="art_desc_about_dets_date">
                                <span>16. March 2022</span>
                            </div>
                            <div className='art_desc_about_type'>
                                {x.type}
                            </div>

                        </div>
                        <img className="art_img" src={x.img} alt="" />
                        <div className="art_desc">
                            <div className="art_desc_title">
                                {x.title}
                            </div>
                            <div className='art_desc_content'>
                                {x.desc}
                            </div>
                            <div className="art_desc_about_dets">
                                <div className="art_desc_about_dets_date">
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
        </>
     );
}
 
export default Art;