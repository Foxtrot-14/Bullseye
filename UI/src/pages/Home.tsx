import React, { useState } from "react";
import "./Home.css";
import back from "../assets/undraw_investing_re_bov7.svg";
import Results from "../components/Results";
import axiosInstance from "../Request";
import { useNavigate } from "react-router-dom";
import axios from "axios";
interface Match {
  "1. symbol": string;
  "2. name": string;
  "3. type": string;
  "4. region": string;
  "5. marketOpen": string;
  "6. marketClose": string;
  "7. timezone": string;
  "8. currency": string;
  "9. matchScore": string;
}
type SearchResult = Match[];
const Home: React.FC = () => {
  const [data, setData] = useState<SearchResult | null>(null);
  const navigate = useNavigate();
  const [keyword, setKeyword] = useState<string>("");
  const login = () => {
    navigate("/login");
  };
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const result = await axiosInstance.request({
        url: `dashboard/search/${keyword}`,
        method: "get",
      });
      setData(result.data.data.bestMatches);
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
  //#e2951d--primary
  //#020f11--secondary
  return (
    <main className="hmain">
      <button className="log hlog" onClick={login}>
        Login
      </button>
      <article className="cmain">
        <h1 className="htitle">Bullseye </h1>
        <img src={back} alt="back" className="mback" />
      </article>
      <article className="fmain">
        <h2 className="quick">Search for a Stock</h2>
        <form onSubmit={handleSubmit}>
          <input
            className="quickin"
            value={keyword}
            type="text"
            name="quick"
            id="quickIn"
            onChange={(e) => {
              setKeyword(e.target.value);
            }}
            placeholder="Enter your keyword"
          />
          <button type="submit" className="but">
            Search
          </button>
        </form>
      </article>
      <article className="res">
        {data &&
          data.map((data) => {
            return (
              <Results name={data["2. name"]} symbol={data["1. symbol"]} />
            );
          })}
      </article>
    </main>
  );
};

export default Home;
