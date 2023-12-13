import "./skils.css";

import {
  BiLogoReact,
  BiLogoTypescript,
  BiLogoNodejs,
  BiLogoMongodb,
} from "react-icons/bi";
import { RiJavascriptFill } from "react-icons/ri";
import { AiFillHtml5 } from "react-icons/ai";
import { IoLogoCss3 } from "react-icons/io";
import { Slide } from "react-awesome-reveal";
const Skills = () => {
  return (
    <div id="skills" className="skills">
      <div className="bg"></div>
      <div className="light"></div>
      <div className="light2"></div>
      <div className="container">
        <Slide direction="down" className="animation">
          <h1>SKILLS</h1>
        </Slide>
        <div className="boxs">
          <div id="languages-box" className="frontend">
            <Slide className="animation">
              {" "}
              <h1>FRONTEND</h1>
            </Slide>
            <div className="frontend-skills">
              <Slide>
                <div id="language">
                  <BiLogoReact /> REACTJS
                </div>
                <div id="language">
                  <RiJavascriptFill /> JAVASCRIPT
                </div>
                <div id="language">
                  <BiLogoTypescript /> TYPESCRIPT
                </div>
                <div id="language">
                  <AiFillHtml5 /> HTML
                </div>
                <div id="language">
                  <IoLogoCss3 /> CSS
                </div>
              </Slide>
            </div>
          </div>
          <div id="languages-box" className="backend">
            <Slide direction="right" className="animation">
              <h1>BACKEND</h1>
            </Slide>
            <div className="backend-skills">
              <Slide direction="right">
                <div id="language">
                  <BiLogoMongodb /> MONGODB
                </div>
                <div id="language">
                  <BiLogoNodejs /> NODEJS
                </div>
              </Slide>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
