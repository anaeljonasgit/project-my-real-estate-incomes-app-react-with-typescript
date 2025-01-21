import "./style.css";

type MainButtonProps = {
  children: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  type?: "submit";
};

const MainButton = ({ children, onClick, type }: MainButtonProps) => {
  return (
    <div className="MainButtonContainer">
      <div className="MainButton">
        <button onClick={onClick} type={type || "button"}>
          {children}
        </button>
      </div>
    </div>
  );
};

export default MainButton;
