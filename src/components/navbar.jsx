import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { insta2, twitter2, youtube2, wifi2, line} from "../images/index"

const Navbar = () => {

    const location = useLocation()

    let [other, setOther] = useState(true)

    useEffect(() => {
        
        if(location.pathname === "/"){
            setOther(false)

        }


    }, [location]);
    return (
        <nav data-scroll-section>
            <div className="name">
                <Link to="/" className='logo'>
                    FYRRE MAGAZINE
                </Link>
                {
                    other ? (

                        <div className='nav_other'>
                            <div>Magazine</div>
                            <div>Authors</div>
                            <div>Podcast</div>
                            <img src={line} alt="" />
                            <img src={insta2} alt="" />
                            <img src={twitter2} alt="" />
                            <img src={youtube2} alt="" />
                            <img src={wifi2} alt="" />
                        </div>
                    ) : null
                }
            </div>
        </nav>
    );
}

export default Navbar;