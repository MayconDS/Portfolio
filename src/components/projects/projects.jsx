import "./projects.css";
import projects from "../../projects";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import CardProject from "./CardProject";

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <div className="container">
        <h1>PROJECTS</h1>
        <div className="box-grid-projects">
          {projects.map((item) => (
            <CardProject
              description={item.description}
              img={item.img}
              title={item.title}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
export default Projects;
