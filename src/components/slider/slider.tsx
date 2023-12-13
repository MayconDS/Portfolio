import "./slider.css";

import { useEffect, useState } from "react";
import {
  MdKeyboardDoubleArrowLeft,
  MdKeyboardDoubleArrowRight,
} from "react-icons/md";
import { ProjectsType } from "../pages/projects/types";

import Card from "../card/card";
import MainCard from "../main-card/main-card";
import { Slide } from "react-awesome-reveal";
import { FaGithub } from "react-icons/fa";
import { GrDeploy } from "react-icons/gr";

const Slider = ({ projects }: { projects: ProjectsType[] }) => {
  const [Projects, setProjects] = useState(projects);
  const [SlideAnimation, setSlideAnimation] = useState("");
  const [Transition, setTransition] = useState(false);
  const [WindowWidth, setWindowWidth] = useState(window.innerWidth);

  const NextSlide = () => {
    setSlideAnimation(WindowWidth > 780 ? "right" : "");

    setTimeout(
      () => {
        setTransition(true);
      },
      WindowWidth > 780 ? 250 : 0
    );

    setTimeout(
      () => {
        const projectsCopy = [...Projects];
        const lastSlide: ProjectsType | undefined = projectsCopy.pop();
        if (lastSlide !== undefined) {
          projectsCopy.unshift(lastSlide);
          setProjects(projectsCopy);
          setSlideAnimation("");
          setTransition(false);
        }
      },
      WindowWidth > 780 ? 1200 : 0
    );
  };

  const PreviousSlide = () => {
    setSlideAnimation(WindowWidth > 780 ? "left" : "");

    setTimeout(
      () => {
        setTransition(true);
      },
      WindowWidth > 780 ? 250 : 0
    );

    setTimeout(
      () => {
        const projectsCopy = [...Projects];
        const firstSlide: ProjectsType | undefined = projectsCopy.shift();
        if (firstSlide !== undefined) {
          projectsCopy.push(firstSlide);
          setProjects(projectsCopy);
          setSlideAnimation("");
          setTransition(false);
        }
      },
      WindowWidth > 780 ? 1200 : 0
    );
  };

  const UpdateWindowWidth = () => {
    setWindowWidth(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", UpdateWindowWidth);

    return () => {
      window.removeEventListener("resize", UpdateWindowWidth);
    };
  }, []);

  return (
    <div className="slider">
      <div className="caroussel">
        <div onClick={() => PreviousSlide()} className="left-arrow">
          <MdKeyboardDoubleArrowLeft />
        </div>
        <div onClick={() => NextSlide()} className="right-arrow">
          <MdKeyboardDoubleArrowRight />
        </div>
        <div
          className="left-card"
          id={
            SlideAnimation == "left"
              ? "left"
              : SlideAnimation == "right"
              ? "right"
              : ""
          }
        >
          <Slide direction="left">
            {SlideAnimation == "left" && Transition == true ? (
              <Card project={Projects[3]} />
            ) : (
              <Card project={Projects[0]} />
            )}
          </Slide>
        </div>
        <div
          className="center-card"
          id={
            SlideAnimation == "left"
              ? "left"
              : SlideAnimation == "right"
              ? "right"
              : ""
          }
        >
          <Slide direction="up">
            {SlideAnimation !== "" ? (
              <Card project={Projects[1]} />
            ) : (
              <MainCard project={Projects[1]} />
            )}
          </Slide>
        </div>
        <div
          className="right-card"
          id={
            SlideAnimation == "left"
              ? "left"
              : SlideAnimation == "right"
              ? "right"
              : ""
          }
        >
          <Slide direction="right">
            {SlideAnimation == "right" && Transition == true ? (
              <Card project={Projects[Projects.length - 1]} />
            ) : (
              <Card project={Projects[2]} />
            )}
          </Slide>
        </div>
      </div>
      <div className="project-info">
        <Slide direction="down" className="animation">
          <h1>{Projects[1].title}</h1>
          <p>{Projects[1].description}</p>
          <div className="links">
            <a target="_blank" href={Projects[1].demo}>
              PAGE <GrDeploy />
            </a>
            <a target="_blank" href={Projects[1].github} id="outlined">
              GITHUB <FaGithub />
            </a>
          </div>
        </Slide>
      </div>
    </div>
  );
};

export default Slider;
