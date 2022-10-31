import "./home.css";
import Astrounaut from "../../utils/bgs/astronaut.svg";

import PlanetBlue from "../../utils/bgs/planet_blue.svg";
import Background from "../../utils/bgs/home.webp";
import { useEffect } from "react";

const Home = () => {
  return (
    <section id="#" className="home">
      <div className="container">
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
    </section>
  );
};

export default Home;
