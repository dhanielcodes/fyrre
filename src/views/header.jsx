import { banner } from "../images/index"

const Header = () => {
    return ( 
        <header data-scroll-section>
            <div className="name" data-scroll data-scroll-speed="-1">
                ART & LIFE
            </div>
            <div className="news">
                NEWS TICKER+++
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
                    <div>

                    </div>
                </div>
            </div>
            <div className="banner" data-scroll data-scroll-speed="2">
                <img className="banner_img" src={banner} alt="" />
            </div>
        </header> 
    );
}
 
export default Header;