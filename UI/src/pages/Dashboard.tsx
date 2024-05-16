import Results from "../components/Results";
import "./Dashboard.css";
import dash from "../assets/dash.svg"
const Dashboard = () => {
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
    <main className="dasmain">
      <img src={dash} className="dasim" alt="" />
      <h2 className="quick">Your Dashboard</h2>
      <article className="res">
        <Results res={searchResults} />
        <Results res={searchResults} />
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

export default Dashboard;
