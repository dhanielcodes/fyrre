import { arrow, jakob, jane, anna, anne, cris, jensen } from "../images/index"

const Authors = () => {

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
    return ( 
        <aside>
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
     );
}
 
export default Authors;