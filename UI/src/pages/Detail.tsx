import React from "react";
import "./Detail.css";
import back from "../assets/detail.svg";
const Detail: React.FC = () => {
  const searchResults = {
    "1. symbol": "AAPL",
    "2. name": "Apple Inc.",
    "3. type": "Equity",
    "4. region": "United States",
    "5. marketOpen": "09:30",
    "6. marketClose": "16:00",
    "7. timezone": "UTC-04",
    "8. currency": "USD",
    "9. matchScore": "1.0000",
  };
  const {
    "1. symbol": symbol,
    "2. name": name,
    "3. type": type,
    "4. region": region,
    "5. marketOpen": marketOpen,
    "6. marketClose": marketClose,
    "7. timezone": timezone,
    "8. currency": currency,
    "9. matchScore": matchScore,
  } = searchResults || {};
  const formattedMarketHours = `${marketOpen} - ${marketClose} ${
    timezone || "Unknown Timezone"
  }`;

  return (
    <main>
      <article className="dmain">
        <img className="deimg" src={back} alt="logo" />
        <section className="dcon">
          <h2 className="dquick">
            <span className="quick">Name: </span>
            {name}
          </h2>
          <h2 className="dquick">
            <span className="quick">Symbol: </span>
            {symbol}
          </h2>
          <h2 className="dquick">
            <span className="quick">Type: </span>
            {type}
          </h2>
          <h2 className="dquick">
            <span className="quick">Region: </span>
            {region}
          </h2>
          <h2 className="dquick">
            <span className="quick">Market hours: </span>
            {formattedMarketHours}
          </h2>
          <h2 className="dquick">
            <span className="quick">Currency: </span>
            {currency}
          </h2>
          <h2 className="dquick">
            <span className="quick">Match Score: </span>
            {matchScore}
          </h2>
          <section>
            <button className="log">Add</button>
            <button className="log">Delete</button>
          </section>
        </section>
      </article>
    </main>
  );
};

export default Detail;
