import { HeaderTitle, Art } from "../components";
import {
  eyes2,
  hope,
  best,
  devil,
  eyes,
  street,
  ada,
  bot,
  hpsb,
  pmb,
  vue,
  mrt,
  kc,
  propkip,
  nasida,
  agency,
  recital,
} from "../images/index";
import "../styles/pages/magazine.css";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useRef, useEffect, useState } from "react";

const Magazine = () => {
  gsap.registerPlugin(ScrollTrigger);

  let header = useRef(null);
  let magTop = useRef(null);
  let mag = useRef(null);

  useEffect(() => {
    gsap.from(header, {
      duration: 1.3,
      translateY: "100%",
      ease: "expo",
    });
    gsap.to(header, {
      translateY: "0%",
      ease: "expo",
      duration: 1.3,
    });

    gsap.from(mag, {
      opacity: 0,
      translateY: "10%",
      ease: "expo",
    });
    gsap.to(mag, {
      opacity: 1,
      translateY: "0%",
      ease: "expo",
      delay: 0.7,
    });

    gsap.from(magTop, {
      opacity: 0,
      translateY: "10%",
      ease: "expo",
    });
    gsap.to(magTop, {
      opacity: 1,
      translateY: "0%",
      ease: "expo",
      delay: 0.8,
    });
  }, []);

  let pods = [
    {
      title: "Vue Nav UI",
      desc: "This is a custom navbar vuejs package.",
      link: "https://dhanielcodes.github.io/vue-navigation-ui/",
      type: "VUE",
      img: vue,
    },
    {
      title: "TM Agency",
      desc: "It's the ultimate solution designed to deliver efficiency, security, and seamlessness to your agency banking experience.",
      link: "https://agencybanking.tm30.net/",
      type: "REACT/VITE",
      img: agency,
    },
    {
      title: "Recital Finance",
      desc: "Supercharged Payment and Financial Operations Infrastructure for Growing Businesses",
      link: "https://recital.finance/",
      type: "REACT/NEXT",
      img: recital,
    },
    {
      title: "MRT Management Tool",
      desc: "It used by organisations to measure, review and track an employee's performance.",
      link: "https://mrtstaff.com/",
      type: "VUE",
      img: mrt,
    },
    {
      title: "Propkip",
      desc: "This is a service provision software, get your quick service easily e.g laundry, plumbing etc.",
      link: "https://www.propkip.com/",
      type: "VUE",
      img: propkip,
    },
    {
      title: "NASIDA Website",
      desc: "NASIDA is the Nasarawa Investment and Development Agency, created through an act of the Nasarawa State House of Assembly to initiate, promote, facilitate and coordinate investments in Nasarawa State, whether it be public private partnerships, privatization, concessions or commercialization of state owned assets.",
      link: "https://www.nasida.na.gov.ng/",
      type: "VUE",
      img: nasida,
    },
    {
      title: "Hope Payment Service Bank",
      desc: "This is a microfinance bank, can be used to receive, send and make bill payments and money transfers.",
      link: "https://hopepsbank.com/",
      type: "VUE",
      img: hpsb,
    },
    {
      title: "KC MICROFINANCE BANK",
      desc: "KC is a microfinance bank solution, can be used to receive, send and make money transfers",
      link: "https://ibank.kcmfb.com/",
      type: "REACT",
      img: kc,
    },
    {
      title: "PayMyBills Web",
      desc: "Paymybills helps you to add and manage all your bills in one place. View a list of all your upcoming bills and their due dates.",
      link: "https://paymybills.ng/",
      type: "REACT",
      img: pmb,
    },
    {
      title: "Adashi Savings Platform",
      desc: "Adashi is savings platform that gives you variety of options to save up your funds.",
      link: "https://adashiesusuakawo.com/",
      type: "REACT",
      img: ada,
    },
    {
      title: "Boton",
      desc: "A simple CSS library for getting nice styled custom buttons.",
      link: "https://boton.vercel.app/",
      type: "CSS",
      img: bot,
    },
  ];

  const [podsFilter, setPodsFilter] = useState(true);
  const [filterArt, setFilterArt] = useState(false);
  const [filterSculpture, setFilterSculpture] = useState(false);
  const [filterStreetArt, setFilterStreetArt] = useState(false);

  const onFilterAll = () => {
    setFilterArt(false);
    setPodsFilter(true);
    setFilterSculpture(false);
    setFilterStreetArt(false);
  };
  const onFilterArt = () => {
    setFilterArt(true);
    setPodsFilter(false);
    setFilterSculpture(false);
    setFilterStreetArt(false);
  };
  const onFilterSculpture = () => {
    setFilterArt(false);
    setPodsFilter(false);
    setFilterSculpture(true);
    setFilterStreetArt(false);
  };
  const onFilterStreetArt = () => {
    setFilterArt(false);
    setPodsFilter(false);
    setFilterSculpture(false);
    setFilterStreetArt(true);
  };

  return (
    <div data-scroll-section>
      <div>
        <div className="split">
          <div ref={(el) => (header = el)}>
            <HeaderTitle title="*WORKS*" />
          </div>
        </div>
        <div className="magazine_top" ref={(el) => (magTop = el)}>
          <div>Categories</div>
          <div className="categories">
            <div
              onClick={onFilterAll}
              className="category_type"
              style={{ borderWidth: podsFilter ? 2 : 1 }}
            >
              ALL
            </div>
            <div
              onClick={onFilterArt}
              className="category_type"
              style={{ borderWidth: filterArt ? 2 : 1 }}
            >
              VUE / NUXT
            </div>
            <div
              onClick={onFilterSculpture}
              className="category_type"
              style={{ borderWidth: filterSculpture ? 2 : 1 }}
            >
              REACT / NEXT
            </div>
            <div
              onClick={onFilterStreetArt}
              className="category_type"
              style={{ borderWidth: filterStreetArt ? 2 : 1 }}
            >
              CSS
            </div>
          </div>
        </div>
        <div className="magazine" ref={(el) => (mag = el)}>
          {podsFilter ? <Art array={pods} /> : null}
          {filterArt ? (
            <Art array={pods.filter((x) => x.type === "VUE")} />
          ) : null}
          {filterStreetArt ? (
            <Art array={pods.filter((x) => x.type === "CSS")} />
          ) : null}
          {filterSculpture ? (
            <Art
              array={pods.filter(
                (x) =>
                  x.type === "REACT/VITE" ||
                  x.type === "REACT/NEXT" ||
                  x.type === "REACT"
              )}
            />
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Magazine;
