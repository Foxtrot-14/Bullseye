import React from "react";
import { useNavigate } from "react-router-dom";
import "./Results.css";
interface ResultsProps {
  name: string;
  symbol: string;
}
const Results: React.FC<ResultsProps> = ({ name, symbol }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/detail/${symbol}`);
  };
  return (
    <article className="card">
      <p>
        <h3 className="sub">{name}</h3>
        <h4 className="">{symbol}</h4>
      </p>
      <button onClick={handleClick} className="but carb">
        Get Details
      </button>
    </article>
  );
};
export default Results;
