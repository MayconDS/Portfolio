import "./projects.css";
import projects from "../../projects";

import { Navigation, Pagination, Scrollbar, A11y, EffectFade } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import CardProject from "./CardProject";
import Slider from "./Slider";

const Projects = () => {
  return (
    <>
      <section id="projects" className="projects">
        <h1>PROJECTS</h1>
        <Slider />
      </section>
    </>
  );
};
export default Projects;
