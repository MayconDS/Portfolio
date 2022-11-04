import "./skills.css";

import { SiCss3, SiJavascript, SiTypescript } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { IoLogoNodejs } from "react-icons/io5";
import { TfiHtml5 } from "react-icons/tfi";
import { MdOutlineVerified } from "react-icons/md";

import { Slide } from "react-awesome-reveal";

const Skills = () => {
  return (
    <section id="skills" className="skills">
      <div className="container">
        <Slide>
          <h1 id="title-skills">SKILLS</h1>
        </Slide>
        <div className="box-grid-2">
          <Slide>
            <div className="frontend box-skills ">
              <h1>Frontend Development</h1>
              <div className="experience">
                <div className="html language">
                  <span>
                    {" "}
                    <MdOutlineVerified /> HTML
                  </span>
                </div>
                <div className="css language">
                  <span>
                    {" "}
                    <MdOutlineVerified /> CSS
                  </span>
                </div>

                <div className="js language">
                  <span>
                    {" "}
                    <MdOutlineVerified /> JAVASCRIPT
                  </span>
                </div>
                <div className="sass language">
                  <span>
                    {" "}
                    <MdOutlineVerified /> SASS
                  </span>
                  <span id="beginner">Beginner</span>
                </div>
                <div className="reactjs language">
                  <span>
                    {" "}
                    <MdOutlineVerified /> REACTJS
                  </span>
                </div>
                <div className="typescript language">
                  <span>
                    {" "}
                    <MdOutlineVerified /> TYPESCRIPT
                  </span>
                  <span id="beginner">Beginner</span>
                </div>
              </div>
            </div>
          </Slide>
          <Slide delay={50}>
            <div className="backend box-skills">
              <h1>Backend Development</h1>
              <div className="experience">
                <div className="node language">
                  <span>
                    {" "}
                    <MdOutlineVerified /> NODEJS
                  </span>
                  <span id="beginner">Beginner</span>
                </div>
                <div className="mongodb language">
                  <span>
                    {" "}
                    <MdOutlineVerified /> MongoDB
                  </span>
                  <span id="beginner">Beginner</span>
                </div>
                <div className="python language">
                  <span>
                    {" "}
                    <MdOutlineVerified /> Python
                  </span>
                  <span id="beginner">Beginner</span>
                </div>
              </div>
            </div>
          </Slide>
        </div>
      </div>
    </section>
  );
};
export default Skills;
