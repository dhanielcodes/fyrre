import { HeaderTitle, Art } from "../components";
import { eyes2, hope, best, devil, eyes, street } from "../images/index";
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
      title: "Hope dies last",
      img: hope,
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas dui id ornare arcu odio ut sem. Cras ornare arcu dui vivamus arcu felis bibendum ut. Porttitor leo a diam.",
      type: "ART",
    },
    {
      title: "Don’t close your eyes",
      img: eyes2,
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas dui id ornare arcu odio ut sem. Cras ornare arcu dui vivamus arcu felis bibendum ut. Porttitor leo a diam.",
      type: "ART",
    },
    {
      title: "The best art museums",
      img: best,
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas dui id ornare arcu odio ut sem. Cras ornare arcu dui vivamus arcu felis bibendum ut. Porttitor leo a diam.",
      type: "SCULPTURES",
    },
    {
      title: "The devil is the details",
      img: devil,
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas dui id ornare arcu odio ut sem. Cras ornare arcu dui vivamus arcu felis bibendum ut. Porttitor leo a diam.",
      type: "ART",
    },
    {
      title: "An indestructible hope",
      img: eyes,
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas dui id ornare arcu odio ut sem. Cras ornare arcu dui vivamus arcu felis bibendum ut. Porttitor leo a diam.",
      type: "SCULPTURES",
    },
    {
      title: "Street art festival",
      img: street,
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas dui id ornare arcu odio ut sem. Cras ornare arcu dui vivamus arcu felis bibendum ut. Porttitor leo a diam.",
      type: "STREET ART",
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
            <HeaderTitle title="MAGAZINE" />
          </div>
        </div>
        <div className="magazine_top" ref={(el) => (magTop = el)}>
          <div>Categories</div>
          <div className="categories">
            <div onClick={onFilterAll} className="category_type">
              ALL
            </div>
            <div onClick={onFilterArt} className="category_type">
              ART
            </div>
            <div onClick={onFilterStreetArt} className="category_type">
              STREET ART
            </div>
            <div onClick={onFilterSculpture} className="category_type">
              SCULPTURE
            </div>
          </div>
        </div>
        <div className="magazine" ref={(el) => (mag = el)}>
          {podsFilter ? <Art array={pods} /> : null}
          {filterArt ? (
            <Art array={pods.filter((x) => x.type === "ART")} />
          ) : null}
          {filterSculpture ? (
            <Art array={pods.filter((x) => x.type === "SCULPTURES")} />
          ) : null}
          {filterStreetArt ? (
            <Art array={pods.filter((x) => x.type === "STREET ART")} />
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Magazine;
