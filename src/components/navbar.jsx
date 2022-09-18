import { useEffect, useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { insta2, twitter2, youtube2, wifi2, line} from "../images/index"

const Navbar = () => {

    const location = useLocation()

    let [other, setOther] = useState(true)

    useEffect(() => {
        
        if(location.pathname === "/"){
            setOther(false)

        }else{
            setOther(true)
        }
    }, [location.pathname]);

    const navigate = useNavigate()

    const routerLink = (path) => {
        navigate(path)
        window.scrollTo(0, 0)
    }
    return (
        <nav data-scroll-section>
            <div className="name">
                <div onClick={() => routerLink("/")} className='logo'>
                    FYRRE MAGAZINE
                </div>
                {
                    other ? (

                        <div className='nav_other'>
                            <div onClick={() => routerLink("/magazine")}>Magazine</div>
                            <div onClick={() => routerLink("/authors")}>Authors</div>
                            <div onClick={() => routerLink("/podcasts")}>Podcast</div>
                            <img src={line} alt="" />
                            <a target="_blank" rel="noreferrer" href="https://twitter.com/dhaniel0x">
                                <img className='tweet' src={insta2} alt="" srcset="" />
                            </a>
                            <a target="_blank" rel="noreferrer" href="https://dribbble.com/daniel_adekoya">
                                <img src={twitter2} alt="" srcset="" />
                            </a>
                            <a target="_blank" rel="noreferrer" href="https://www.figma.com/@minitechbro">
                                <img src={youtube2} alt="" srcset="" />
                            </a>
                            <a target="_blank" rel="noreferrer" href="https://github.com/dhanielcodes">
                                <img src={wifi2} alt="" srcset="" />
                            </a>
                        </div>
                    ) : null
                }
            </div>
        </nav>
    );
}

export default Navbar;