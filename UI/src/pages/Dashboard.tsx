import Results from "../components/Results";
import "./Dashboard.css";
import dash from "../assets/dash.svg";
import { useEffect, useState } from "react";
import axiosInstance from "../Request";
import { useNavigate } from "react-router-dom";

interface Match {
  symbol: string; // Update property names without numbering
  name: string;
}

type SearchResult = Match[];

const Dashboard: React.FC = () => {
  const [user, setUser] = useState<string | null>(null); // Initialize user state with null
  const [data, setData] = useState<SearchResult | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const onArrival = async () => {
      try {
        const x = localStorage.getItem("access");
        if (!x) {
          navigate("/login");
          return;
        }
        setUser(x);
        const result = await axiosInstance.request({
          url: "/dashboard/list",
          method: "get",
          headers: {
            Authorization: `Bearer ${user}`,
          },
        });
        setData(result.data);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    onArrival();
  }, [navigate]);
  console.log(user);
  console.log("Data", data);
  return (
    <main className="dasmain">
      <img src={dash} className="dasim" alt="" />
      <h2 className="quick">Your Dashboard</h2>
      <article className="res">
        {data &&
          data.map((item, index) => (
            <Results key={index} name={item.name} symbol={item.symbol} />
          ))}
      </article>
    </main>
  );
};

export default Dashboard;
