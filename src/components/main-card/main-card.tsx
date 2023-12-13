import "./main-card.css";

const MainCard = ({ project }: any) => {
  return (
    <div className="main-card">
      <div className="shadow"></div>

      <img src={project.img} alt="" />
    </div>
  );
};
export default MainCard;
