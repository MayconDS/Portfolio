import "./navbar.css";

import {
  AiOutlineHome,
  AiOutlineUser,
  AiOutlineCode,
  AiOutlinePhone,
  AiOutlineFire,
} from "react-icons/ai";

import { useState, useEffect } from "react";

const Navbar = () => {
  const [activeNav, setActiveNav] = useState("#");
  return (
    <nav id="navbar">
      <ul>
        <li>
          <a
            href="##"
            onClick={() => setActiveNav("#")}
            className={activeNav === "#" ? "active" : ""}
          >
            <AiOutlineHome />
          </a>
        </li>
        <li>
          <a
            href="#about"
            onClick={() => setActiveNav("#about")}
            className={activeNav === "#about" ? "active" : ""}
          >
            <AiOutlineUser />
          </a>
        </li>
        <li>
          <a
            href="#skills"
            onClick={() => setActiveNav("#experience")}
            className={activeNav === "#experience" ? "active" : ""}
          >
            <AiOutlineCode />
          </a>
        </li>
        <li>
          <a
            href="#projects"
            onClick={() => setActiveNav("#services")}
            className={activeNav === "#services" ? "active" : ""}
          >
            <AiOutlineFire />
          </a>
        </li>
        <li>
          <a
            href="#contacts"
            onClick={() => setActiveNav("#contact")}
            className={activeNav === "#contact" ? "active" : ""}
          >
            <AiOutlinePhone />
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
