import {
  smile,
  twitter,
  twitch,
  spotify,
  linkedin,
  github,
  figma,
  dribbble,
} from "../images/index";
const Contact = () => {
  return (
    <footer>
      <div className="main">
        <div className="title">
          My inbox is open <br /> if you want to <br /> contact me{" "}
          <img src={smile} alt="" srcset="" />.
        </div>
        <div>
          <a
            target="_blank"
            rel="noreferrer"
            href="mailto:adekoyadaniel53@gmail.com"
            className="contact_button"
          >
            Say Hello!
          </a>
        </div>

        <div className="end">
          <div>
            <div className="end_name">DANIEL ADEKOYA</div>
            <div className="end_copy">
              © Made by Daniel Adekoya - Design by Anon
            </div>
          </div>
          <div className="end_socials">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://twitter.com/dhaniel0x"
            >
              <img className="tweet" src={twitter} alt="" srcset="" />
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://dribbble.com/daniel_adekoya"
            >
              <img src={dribbble} alt="" srcset="" />
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.figma.com/@minitechbro"
            >
              <img src={figma} alt="" srcset="" />
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/dhanielcodes"
            >
              <img src={github} alt="" srcset="" />
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.linkedin.com/in/daniel-adekoya-010810192/"
            >
              <img src={linkedin} alt="" srcset="" />
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://open.spotify.com/user/ithka9tia9dzvug5so3lhghm0"
            >
              <img src={spotify} alt="" srcset="" />
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.twitch.tv/techdeadkill"
            >
              <img src={twitch} alt="" srcset="" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Contact;
