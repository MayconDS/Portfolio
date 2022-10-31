import "./about.css";

import Astrounaut from "../../utils/bgs/astronaut.svg";
import bgAbout from "../../utils/bgs/backgroundAbout.png";
import moonAbout from "../../utils/bgs/moonAbout.png";
import { useEffect } from "react";

const About = () => {
  useEffect(() => {
    const Animate = () => {
      let moonAbout = document.querySelector("#moonAbout");

      window.addEventListener("scroll", function () {
        let value = window.scrollY;

        moonAbout.style.top = -45 + (value - 1468) * -0.1 + "%";
      });
    };
    Animate();
  }, []);

  return (
    <section id="about" className="about">
      <img id="bg" src={bgAbout} alt="" />

      <img id="moonAbout" src={moonAbout} alt="" />
      <div className="container">
        <h1 id="title">Sobre mim</h1>
        <div className="box">
          <img id="astronaut" src={Astrounaut} alt="" />

          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus
            harum quasi quo perferendis excepturi sapiente consectetur
            dignissimos maxime, ducimus impedit eum voluptas nemo quibusdam
            doloremque voluptates nam doloribus incidunt obcaecati!
          </p>
        </div>
      </div>
    </section>
  );
};
export default About;
