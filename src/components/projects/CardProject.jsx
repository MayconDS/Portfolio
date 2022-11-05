import "./CardProject.css";
import { FiGithub } from "react-icons/fi";
import { IoRocketOutline } from "react-icons/io5";

const CardProject = ({ img, title, repositorie, deploy }) => {
  return (
    <div className="card-project">
      <div className="thumb">
        <div className="shadow-vertical"></div>
        <img id="img" src={img} alt="" />
      </div>
      <div className="title">
        <h1>{title}</h1>
      </div>

      <div className="btns">
        <div className="demo button">
          <a target="_blank" className="button-content" href={deploy}>
            <IoRocketOutline /> DEMO
          </a>
        </div>
        <div className="github button">
          <a target="_blank" className="button-content" href={repositorie}>
            <FiGithub /> GITHUB
          </a>
        </div>
      </div>
    </div>
  );
};
export default CardProject;
