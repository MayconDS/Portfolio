import "./projects.css";
import projects from "../../projects";

import CardProject from "./CardProject";
import { Slide } from "react-awesome-reveal";
const Projects = () => {
  return (
    <section id="projects" className="projects">
      <div className="container">
        <h1 className="visible" id="title-project">
          PROJECTS
        </h1>
        <div className="box-grid-projects visible">
          {projects.map((item) => (
            <Slide direction="left" cascade={true}>
              <CardProject
                description={item.description}
                img={item.img}
                title={item.title}
              />
            </Slide>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Projects;
