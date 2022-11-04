import "./projects.css";
import projects from "../../projects";

import CardProject from "./CardProject";
import { Slide } from "react-awesome-reveal";
const Projects = () => {
  return (
    <section id="projects" className="projects">
      <div className="container">
        <Slide>
          <h1 id="title-project">PROJECTS</h1>
        </Slide>
        <Slide>
          <div className="box-grid-projects">
            {projects.map((item, id) => (
              <CardProject
                id={item.id}
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
