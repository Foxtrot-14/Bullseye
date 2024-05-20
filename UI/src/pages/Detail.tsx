import React, { useEffect, useState } from "react";
import "./Detail.css";
import axiosInstance from "../Request";
import back from "../assets/detail.svg";

const Detail: React.FC = () => {
  const params = new URLSearchParams(window.location.search);
  const keyword: string | null = params.get("data");
  const [stockData, setStockData] = useState<any | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axiosInstance.get(`/dashboard/detail/${keyword}`);
        setStockData(result.data.data["Global Quote"]);
      } catch (error) {
        console.error("Error:", error);
      }
    };
    fetchData();
  }, [keyword]);

  return (
    <main>
      <article className="dmain">
        <img className="deimg" src={back} alt="logo" />
        <section className="dcon">
          {stockData && (
            <>
              <h2>
                <span className="quick de">Symbol: </span>
                {stockData["01. symbol"]}
              </h2>
              <h2>
                <span className="quick de">Open: </span>
                {stockData["02. open"]}
              </h2>
              <h2>
                <span className="quick de">High: </span>
                {stockData["03. high"]}
              </h2>
              <h2>
                <span className="quick de">Low: </span>
                {stockData["04. low"]}
              </h2>
              <h2>
                <span className="quick de">Price: </span>
                {stockData["05. price"]}
              </h2>
              <h2>
                <span className="quick de">Volume: </span>
                {stockData["06. volume"]}
              </h2>
              <h2>
                <span className="quick de">Latest Trading Day: </span>
                {stockData["07. latest trading day"]}
              </h2>
              <h2>
                <span className="quick de">Previous Close: </span>
                {stockData["08. previous close"]}
              </h2>
              <h2>
                <span className="quick de">Change: </span>
                {stockData["09. change"]}
              </h2>
              <h2>
                <span className="quick de">Change Percent: </span>
                {stockData["10. change percent"]}
              </h2>
            </>
          )}
          <section className="mainde">
            <button className="log">Add</button>
            <button className="log">Delete</button>
          </section>
        </section>
      </article>
    </main>
  );
};

export default Detail;
