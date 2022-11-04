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
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia
          repellendus voluptatem vero illo maxime labore sint excepturi repellat
          iusto facilis sapiente, repudiandae hic dolorum, recusandae vitae
          neque cumque molestiae doloribus?
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
