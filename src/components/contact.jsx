import { twitter, insta, wifi, youtube } from "../images/index";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
const Contact = ({ routerLink }) => {
  let form = useRef(null);
  let other = useRef(null);
  let other2 = useRef(null);
  let headerTitle = useRef([]);
  headerTitle.current = [];
  const addToRefs = (el) => {
    if (el && !headerTitle.current.includes(el)) {
      headerTitle.current.push(el);
    }
  };
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    window.addEventListener("load", () => {
      gsap.from(headerTitle.current, {
        duration: 1.3,
        translateY: "100%",
        ease: "expo",
        delay: 0.2,
        stagger: 0.2,
      });
      gsap.to(headerTitle.current, {
        translateY: "0%",
        ease: "expo",
        duration: 1.3,
        delay: 0.2,
        stagger: 0.3,
        scrollTrigger: {
          trigger: headerTitle.current,
        },
      });

      gsap.from(other, {
        duration: 1.3,
        translateY: "15%",
        opacity: 0,
        ease: "expo",
        delay: 0.4,
      });
      gsap.to(other, {
        translateY: "0%",
        ease: "expo",
        opacity: 1,
        duration: 1.3,
        delay: 0.4,
        scrollTrigger: {
          trigger: headerTitle.current,
        },
      });

      gsap.from(other2, {
        duration: 1.3,
        translateY: "15%",
        opacity: 0,
        ease: "expo",
        delay: 0.4,
      });
      gsap.to(other2, {
        translateY: "0%",
        ease: "expo",
        opacity: 1,
        duration: 1.3,
        delay: 0.4,
        scrollTrigger: {
          trigger: headerTitle.current,
        },
      });

      gsap.from(form, {
        duration: 1.3,
        translateY: "15%",
        opacity: 0,
        ease: "expo",
        delay: 0.4,
      });
      gsap.to(form, {
        translateY: "0%",
        ease: "expo",
        opacity: 1,
        duration: 1.3,
        delay: 0.4,
        scrollTrigger: {
          trigger: headerTitle.current,
        },
      });
    });
  }, []);
  return (
    <footer data-scroll-section>
      <div className="main">
        <div className="main_top">
          <div className="title">
            <div className="split">
              <div ref={addToRefs}>DESIGN NEWS TO </div>
            </div>
            <div className="split">
              <div ref={addToRefs}>YOUR INBOX </div>
            </div>
          </div>
          <form ref={(el) => (form = el)}>
            <input type="email" required placeholder="Email" />
            <div className="form_button">
              <button>SIGN UP</button>
            </div>
          </form>
        </div>
        <div className="end_side" ref={(el) => (other = el)}>
          <div className="end_name">FYRRE MAGAZINE</div>
          <div className="end_links">
            <div className="end_links_tab">
              <div>Art</div>
              <div>Design</div>
              <div>Architecture</div>
            </div>
            <div className="end_links_tab">
              <div
                style={{ cursor: "pointer" }}
                onClick={() => routerLink("/magazine")}
              >
                Magazine
              </div>
              <div
                style={{ cursor: "pointer" }}
                onClick={() => routerLink("/podcasts")}
              >
                Podcast
              </div>
              <div
                style={{ cursor: "pointer" }}
                onClick={() => routerLink("/authors")}
              >
                Authors
              </div>
            </div>
            <div className="end_links_tab">
              <div>Styleguide</div>
              <div>Licensing</div>
              <div>Changelog</div>
            </div>
          </div>
        </div>
        <div className="end" ref={(el) => (other2 = el)}>
          <div className="end_copy">
            © Made by{" "}
            <a
              href="https://twitter.com/dhaniel0x"
              target="_blank"
              rel="noreferrer"
            >
              Daniel Adekoya
            </a>{" "}
            - Design by{" "}
            <a
              href="https://www.gola.io/templates"
              target="_blank"
              rel="noreferrer"
            >
              Pawel Gola
            </a>
          </div>
          <div className="end_socials">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://twitter.com/dhaniel0x"
            >
              <img className="tweet" src={insta} alt="" srcset="" />
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://dribbble.com/daniel_adekoya"
            >
              <img src={twitter} alt="" srcset="" />
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.figma.com/@minitechbro"
            >
              <img src={youtube} alt="" srcset="" />
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/dhanielcodes"
            >
              <img src={wifi} alt="" srcset="" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Contact;
