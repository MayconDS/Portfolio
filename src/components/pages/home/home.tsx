import "./home.css";
import { Slide } from "react-awesome-reveal";

import { AiOutlineGithub } from "react-icons/ai";
import { BsLinkedin } from "react-icons/bs";

const Home = () => {
  return (
    <div id="home" className="home">
      <div className="light"></div>

      <div className="bg">
        <h1>MAYCON</h1>
        <span>Desenvolvedor Web</span>
      </div>

      <div className="container">
        <Slide direction="left" className="animation">
          <div className="presentation">
            <div className="profile">
              <h3>OLÁ EU SOU</h3>
              <div className="name">
                <h1>MAYCON</h1>
                <span>Desenvolvedor Web</span>
              </div>

              <button>CURRICULO</button>
            </div>
          </div>
        </Slide>
        <div className="socials">
          <a target="_blank" href="https://github.com/MayconDS">
            {" "}
            <AiOutlineGithub />
          </a>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/maycondouglasss/"
          >
            {" "}
            <BsLinkedin />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
