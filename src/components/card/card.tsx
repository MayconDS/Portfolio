import "./card.css";

const Card = ({ project }: any) => {
  return (
    <div className="card">
      <div className="shadow"></div>

      <img src={project.img} alt="" />
    </div>
  );
};
export default Card;
