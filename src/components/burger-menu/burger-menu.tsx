import "./burger-menu.css";

import { useContext } from "react";
import { MdOutlineClose } from "react-icons/md";
import { SidebarContext } from "../../contexts/SidebarContext";
import { Slide } from "react-awesome-reveal";

const BurgerMenu = () => {
  const { setSidebarState }: any = useContext(SidebarContext);

  return (
    <div className="burger-menu">
      <div onClick={() => setSidebarState(false)} className="left-side"></div>

      <div className="right-side">
        <div
          onClick={() => {
            setSidebarState(false);
          }}
          className="burger"
        >
          <MdOutlineClose />
        </div>
        <nav>
          <ul>
            <Slide direction="right">
              <li
                onClick={() => {
                  setSidebarState(false);
                }}
              >
                <a href="#about">ABOUT</a>
              </li>
            </Slide>
            <Slide direction="right">
              <li
                onClick={() => {
                  setSidebarState(false);
                }}
              >
                <a href="#projects">PROJECTS</a>
              </li>
            </Slide>
            <Slide direction="right">
              <li
                onClick={() => {
                  setSidebarState(false);
                }}
              >
                <a href="#skills">SKILLS</a>
              </li>
            </Slide>
            <Slide direction="right">
              <li
                onClick={() => {
                  setSidebarState(false);
                }}
              >
                <a href="#certificates">CERTIFICATES</a>
              </li>
            </Slide>
            <Slide direction="right">
              <li
                onClick={() => {
                  setSidebarState(false);
                }}
              >
                <a href="#contacts">CONTACTS</a>
              </li>
            </Slide>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default BurgerMenu;
