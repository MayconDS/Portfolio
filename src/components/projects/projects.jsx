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
        <Slide>
          <div className="box-grid-projects">
            {projects.map((item) => (
              <CardProject
                description={item.description}
                img={item.img}
                title={item.title}
              />
            ))}
          </div>
        </Slide>
      </div>
    </section>
  );
};
export default Projects;
