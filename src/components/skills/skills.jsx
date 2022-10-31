import "./skills.css";

import { SiCss3, SiJavascript, SiTypescript } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { IoLogoNodejs } from "react-icons/io5";
import { TfiHtml5 } from "react-icons/tfi";

import bgSkills from "../../utils/bgs/bgSkills.webp";
import moonSkills from "../../utils/bgs/moonSkills.webp";
import { useEffect } from "react";

const Skills = () => {
  return (
    <section id="skills" className="skills">
      <div className="container">
        <h1>SKILLS</h1>
        <div className="box-grid-3">
          <div className="html language">
            <a href="">
              <TfiHtml5 />
            </a>

            <span>HTML</span>
          </div>
          <div className="css language">
            <a href="">
              <SiCss3 />
            </a>
            <span>CSS</span>
          </div>
          <div className="js language">
            <a href="">
              <SiJavascript />
            </a>
            <span>JAVASCRIPT</span>
          </div>
          <div className="reactjs language">
            <a href="">
              <FaReact />
            </a>
            <span>REACTJS</span>
          </div>
          <div className="typescript language">
            <a href="">
              <SiTypescript />
            </a>
            <span>TYPESCRIPT</span>
            <span id="text-blue">Estudando</span>
          </div>
          <div className="node language">
            <a href="">
              <IoLogoNodejs />
            </a>
            <span>NODEJS</span>
            <span id="text-blue">Estudando</span>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Skills;
