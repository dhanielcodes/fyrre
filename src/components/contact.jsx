import { twitter, insta, wifi, youtube } from '../images/index'
const Contact = () => {
    return ( 
        <footer data-scroll-section>
            <div className="main">
                <div className='main_top'>
                    <div className="title">
                        DESIGN NEWS TO <br /> YOUR INBOX
                    </div>
                    <form>
                            <input type="email" required placeholder="Email" />
                            <div className="form_button">
                                <button>SIGN UP</button>
                            </div>
                    </form>
                </div>
                <div className='end_side'>
                    <div className='end_name'>
                        FYRRE MAGAZINE
                    </div>
                    <div className='end_links'>
                        <div className='end_links_tab'>
                            <div>Art</div>
                            <div>Design</div>
                            <div>Architecture</div>
                        </div>
                        <div className='end_links_tab'>
                            <div>Magazine</div>
                            <div>Podcast</div>
                            <div>Authors</div>
                        </div>
                        <div className='end_links_tab'>
                            <div>Styleguide</div>
                            <div>Licensing</div>
                            <div>Changelog</div>
                        </div>
                    </div>
                </div>
                <div className='end'>
                    <div className='end_copy'>
                        © Made by Daniel Adekoya -  Design by Anon
                    </div>
                    <div className='end_socials'>
                        <a target="_blank" rel="noreferrer" href="https://twitter.com/dhaniel0x">
                            <img className='tweet' src={insta} alt="" srcset="" />
                        </a>
                        <a target="_blank" rel="noreferrer" href="https://dribbble.com/daniel_adekoya">
                            <img src={twitter} alt="" srcset="" />
                        </a>
                        <a target="_blank" rel="noreferrer" href="https://www.figma.com/@minitechbro">
                            <img src={youtube} alt="" srcset="" />
                        </a>
                        <a target="_blank" rel="noreferrer" href="https://github.com/dhanielcodes">
                            <img src={wifi} alt="" srcset="" />
                        </a>
                      
                    </div>
                </div>
            </div>
            
        </footer>
     );
}
 
export default Contact;