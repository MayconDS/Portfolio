import "./navbar.css";
import BurgerMenu from "../burger-menu/burger-menu";
import { RxHamburgerMenu } from "react-icons/rx";
import { useContext } from "react";
import { SidebarContext } from "../../contexts/SidebarContext";

const Navbar = () => {
  const { sidebarState, setSidebarState }: any = useContext(SidebarContext);

  return (
    <header className="navbar">
      <div className="sidebar">
        {sidebarState == false ? (
          <div onClick={() => setSidebarState(true)} className="hamburger">
            <RxHamburgerMenu />
          </div>
        ) : (
          <BurgerMenu />
        )}
      </div>
      <a href="#home" className="logo">
        <div id="mi">MI</div>
        <div id="ke">KE</div>
      </a>
      <nav>
        <ul>
          <li>
            <a href="#about">ABOUT</a>
          </li>
          <li>
            <a href="#projects">PROJECTS</a>
          </li>

          <li>
            <a href="#skills">SKILLS</a>
          </li>
          <li>
            <a href="#certificates">CERTIFICATES</a>
          </li>
          <li>
            <a href="#contacts">CONTACTS</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
