import "./projects.css";
import projects from "../../projects";

import { Navigation, Pagination, Scrollbar, A11y, EffectFade } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import CardProject from "./CardProject";

const Projects = () => {
  return (
    <>
      <section id="projects" className="projects">
        <Swiper
          id="slide"
          slidesPerView={1}
          spaceBetween={1}
          navigation={true}
          modules={[EffectFade, Navigation, Pagination, Scrollbar, A11y]}
        >
          <div>
            {projects.map((item) => (
              <SwiperSlide>
                <CardProject
                  img={item.img}
                  title={item.title}
                  description={item.description}
                />
              </SwiperSlide>
            ))}
          </div>
        </Swiper>
      </section>
    </>
  );
};
export default Projects;
