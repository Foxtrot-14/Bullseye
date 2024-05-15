import React from "react";
import "./Results.css";
interface SearchResult {
  bestMatches: {
    "1. symbol": string;
    "2. name": string;
    "3. type": string;
    "4. region": string;
    "5. marketOpen": string;
    "6. marketClose": string;
    "7. timezone": string;
    "8. currency": string;
    "9. matchScore": string;
  }[];
}
interface ResultsProps {
  res: SearchResult | null;
}
const Results: React.FC<ResultsProps> = (props) => {
  const { res } = props;
  return (
    <article className="card">
      {res && res.bestMatches && res.bestMatches.length > 0 ? (
        <p>
          <h3 className="rdata">{res.bestMatches[0]["2. name"]}</h3>
          <h4 className="rdata sub">{res.bestMatches[0]["1. symbol"]}</h4>
        </p>
      ) : (
        <p>No matches found</p>
      )}
      <button className="but carb">Get Details</button>
    </article>
  );
};
export default Results;
