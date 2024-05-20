import React, { useEffect, useState } from "react";
import "./Detail.css";
import axiosInstance from "../Request";
// import back from "../assets/detail.svg";
import axios from "axios";

const Detail: React.FC = () => {
  const params = new URLSearchParams(window.location.search);
  const keyword: string | null = params.get("data");
  const [searchResults, setSearchResults] = useState<any | null>(null);
  console.log(keyword);
  const onLoad = async () => {
    try {
      const result = await axiosInstance.request({
        url: `/dashboard/detail/AAPL`,
        method: "get",
      });
      setSearchResults(result.data.data);
    } catch (error: any) {
      if (axios.isAxiosError(error)) {
        // Handle known Axios error
        console.error("Axios error message:", error.message);
        if (error.response) {
          // Server responded with a status code outside 2xx
          console.error("Response data:", error.response.data);
          console.error("Response status:", error.response.status);
          console.error("Response headers:", error.response.headers);
        } else if (error.request) {
          // No response was received
          console.error("Request made but no response received", error.request);
        } else {
          // Something happened in setting up the request
          console.error("Error setting up request:", error.message);
        }
      } else {
        // Handle other errors
        console.error("Unexpected error:", error);
      }
    }
  };
  useEffect(() => {
    onLoad();
  }, []);
  console.log(searchResults);
  return (
    <main>
      {/* <article className="dmain">
        <img className="deimg" src={back} alt="logo" />
        <section className="dcon">
          <h2 className="dquick">
            <span className="quick">Name: </span>
            {searchResults.name}
          </h2>
          <h2 className="dquick">
            <span className="quick">Symbol: </span>
            {searchResults.symbol}
          </h2>
          <h2 className="dquick">
            <span className="quick">Type: </span>
            {searchResults.type}
          </h2>
          <h2 className="dquick">
            <span className="quick">Region: </span>
            {searchResults.region}
          </h2>
          <h2 className="dquick">
            <span className="quick">Market Open: </span>
            {searchResults.marketOpen}
          </h2>
          <h2 className="dquick">
            <span className="quick">Market Close: </span>
            {searchResults.marketClose}
          </h2>
          <h2 className="dquick">
            <span className="quick">Currency: </span>
            {searchResults.currency}
          </h2>
          <h2 className="dquick">
            <span className="quick">Match Score: </span>
            {searchResults.matchScore}
          </h2>
          <section>
            <button className="log">Add</button>
            <button className="log">Delete</button>
          </section>
        </section>
      </article> */}
    </main>
  );
};
export default Detail;
