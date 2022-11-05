import { Fade } from "react-awesome-reveal";

import { FiDownload } from "react-icons/fi";

import { typeWrite } from "../typewriter";
import astronaut from "../../utils/imgs/header-img.svg";
import cv from "../../utils/cv.pdf";

import "./home.css";
const Home = () => {
  return (
    <section id="#" className="home">
      <div className="shadow-horizontal"></div>
      <Fade>
        <img id="astronaut" src={astronaut} alt="" srcSet="" />
      </Fade>

      <div className="profile">
        <h1>
          Olá
          <br /> eu sou <span>Maycon</span>,
          <br />
          Desenvolvedor Web
        </h1>
        <p className="typewriter">
          Me chamo Maycon Douglas, mas pode me chamar de <span>Mike</span>,
          tenho 17 anos e sou apaixonado por tecnologia e astronomia
        </p>
      </div>
      <div className="links">
        <a id="full" download href={cv}>
          <FiDownload /> Baixar CV
        </a>
        <a target="_blank" href="https://wa.me/+5584981916377">
          Vamos conversar
        </a>
      </div>
    </section>
  );
};

export default Home;
