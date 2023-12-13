import "./about.css";
import { Slide } from "react-awesome-reveal";

const About = () => {
  return (
    <div id="about" className="about">
      <div className="light"></div>
      <div className="container">
        <Slide className="animation">
          <h1>ABOUT</h1>
        </Slide>
        <div className="box">
          <div className="logo">
            <Slide direction="left" className="animation">
              <h1 id="mi">MI</h1>
              <h1 id="ke">KE</h1>
            </Slide>
          </div>

          <div className="about-me">
            <Slide direction="right" className="animation">
              <p>
                Olá, me chamo <span>Maycon Douglas</span> tenho 18 anos e estudo
                programação desde os 16, tenho como foco o <span>Frontend</span>{" "}
                no entanto estou disponivel para qualquer oportunidade que
                envolva o <span>Backend</span>. Minha ultima experiência foi
                como voluntário na <span>SKILL LABS</span> e tinha como papel
                desenvolver o <span>Frontend</span> e <span>Backend</span> de
                uma plataforma de ensinos. Durante essa atuação pude ter o
                primeiro contato com reuniões
              </p>
            </Slide>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
