import "./CardProject.css";

const CardProject = ({ img, title, description }) => {
  return (
    <div className="card-project">
      <div className="thumb">
        <img id="img" src={img} alt="" />
      </div>

      <div className="links-project">
        <h1>{title}</h1>
        <div className="btns">
          <div className="demo button">
            <a className="button-content" href="">
              DEMO
            </a>
          </div>
          <div className="github button">
            <a className="button-content" href="">
              GITHUB
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CardProject;
