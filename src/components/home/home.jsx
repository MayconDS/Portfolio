import "./home.css";

import PlanetBlue from "../../utils/bgs/planet_blue.svg";
import Background from "../../utils/bgs/home.webp";
import { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    const Animate = () => {
      let parallax = document.querySelector(".parallax");

      window.addEventListener("scroll", function () {
        let value = window.scrollY;
        if (value < 463) {
          parallax.style.top = 7 + value * +0.2 + "%";
          if (scrollY >= 86) {
            parallax.style.zIndex = -1;
          } else {
            parallax.style.zIndex = 1;
          }
        }
      });
    };
    Animate();
  }, [scrollY]);
  return (
    <section id="#" className="home">
      <div className="container">
        <img id="planet__blue" src={PlanetBlue} alt="" />
        <img id="background" src={Background} alt="" />
        <div className="parallax">
          <div className="profile">
            <h1>
              Olá
              <br /> eu sou <span>Maycon</span>,
              <br />
              Desenvolvedor Web
            </h1>
          </div>
          <div className="links">
            <a href="">Baixar CV</a>
            <a href="">Vamos conversar</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
