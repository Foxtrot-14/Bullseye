import React from "react";
import "./Home.css";
import back from "../assets/undraw_investing_re_bov7.svg";
import Results from "../components/Results";
import { useNavigate } from "react-router-dom";
const Home: React.FC = () => {
  const navigate = useNavigate();
  const login = () => {
    navigate("/login");
  };
  //#e2951d--primary
  //#020f11--secondary
  const searchResults = {
    bestMatches: [
      {
        "1. symbol": "AAPL",
        "2. name": "Apple Inc.",
        "3. type": "Equity",
        "4. region": "United States",
        "5. marketOpen": "09:30",
        "6. marketClose": "16:00",
        "7. timezone": "UTC-04",
        "8. currency": "USD",
        "9. matchScore": "1.0000",
      },
      {
        "1. symbol": "AAPL34.SAO",
        "2. name": "Apple Inc.",
        "3. type": "Equity",
        "4. region": "Brazil/Sao Paolo",
        "5. marketOpen": "10:00",
        "6. marketClose": "17:30",
        "7. timezone": "UTC-03",
        "8. currency": "BRL",
        "9. matchScore": "0.8000",
      },
    ],
  };
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
        <input className="quickin" type="text" name="quick" id="quickIn" />
      </article>
      <button className="but">Search</button>
      <article className="res">
        <Results res={searchResults} />
        <Results res={searchResults} />
        <Results res={searchResults} />
        <Results res={searchResults} />
        <Results res={searchResults} />
        <Results res={searchResults} />
        <Results res={searchResults} />
      </article>
    </main>
  );
};

export default Home;
