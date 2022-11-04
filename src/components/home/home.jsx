import { typeWrite } from "../typewriter";
import { Fade } from "react-awesome-reveal";

import astronaut from "../../utils/bgs/header-img.svg";

import "./home.css";
const Home = () => {
  return (
    <section id="#" className="home">
      <div className="shadow-horizontal"></div>
      <Fade>
        <img id="astronaut" src={astronaut} alt="" srcset="" />
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
        <a href="">Baixar CV</a>
        <a href="">Vamos conversar</a>
      </div>
    </section>
  );
};

export default Home;
