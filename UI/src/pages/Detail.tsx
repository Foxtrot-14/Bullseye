import React, { useEffect, useState } from "react";
import "./Detail.css";
import axiosInstance from "../Request";
import { useParams } from "react-router-dom";
import back from "../assets/detail.svg";
interface RouteParams {
  keyword: string;
}
const Detail: React.FC = () => {
  const { keyword } = useParams<RouteParams>();
  const [searchResults, setSearchResults] = useState<any | null>(null);
  const onLoad = async () => {
    try {
      const result = await axiosInstance.request({
        url: `dashboard/detail/${keyword}`,
        method: "get",
      });
      setSearchResults(result.data);
    } catch (error: any) {}
  };
  useEffect(() => {
    onLoad();
  }, []);
  console.log(searchResults);
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
            <span className="quick">Market Open: </span>
            {marketOpen}
          </h2>
          <h2 className="dquick">
            <span className="quick">Market Close: </span>
            {marketClose}
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
