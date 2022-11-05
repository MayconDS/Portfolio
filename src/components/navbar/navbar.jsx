import "./navbar.css";

import {
  AiOutlineHome,
  AiOutlineCode,
  AiOutlinePhone,
  AiOutlineFire,
} from "react-icons/ai";

import { TbCertificate } from "react-icons/tb";

import { useState } from "react";

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
            href="#skills"
            onClick={() => setActiveNav("#skills")}
            className={activeNav === "#experience" ? "active" : ""}
          >
            <AiOutlineCode />
          </a>
        </li>
        <li>
          <a
            href="#projects"
            onClick={() => setActiveNav("#projects")}
            className={activeNav === "#projects" ? "active" : ""}
          >
            <AiOutlineFire />
          </a>
        </li>
        <li>
          <a
            href="#certificate"
            onClick={() => setActiveNav("#certificate")}
            className={activeNav === "#certificate" ? "active" : ""}
          >
            <TbCertificate />
          </a>
        </li>
        <li>
          <a
            href="#contacts"
            onClick={() => setActiveNav("#contacts")}
            className={activeNav === "#contacts" ? "active" : ""}
          >
            <AiOutlinePhone />
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
