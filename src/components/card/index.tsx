import "./style.css";

type CardProps = {
  children: React.ReactNode;
};

const Card = ({ children }: CardProps) => {
  return (
    <div className="CardContainer">
      <div className="Card">{children}</div>
    </div>
  );
};

export default Card;
