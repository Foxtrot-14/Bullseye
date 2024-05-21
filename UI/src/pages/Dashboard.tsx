import Results from "../components/Results";
import "./Dashboard.css";
import dash from "../assets/dash.svg";
import { useEffect, useState } from "react";
import axiosInstance from "../Request";
import { useNavigate } from "react-router-dom";

interface Match {
  symbol: string;
  name: string;
}

type SearchResult = Match[];

const Dashboard: React.FC = () => {
  const [user, setUser] = useState<string | null>(null);
  const [data, setData] = useState<SearchResult | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const onArrival = async () => {
      try {
        const token = localStorage.getItem("access");
        if (!token) {
          navigate("/login");
          return;
        }
        setUser(token);
        const result = await axiosInstance.request({
          url: "/dashboard/list",
          method: "get",
          headers: {
            Authorization: `Bearer ${token}`, // Use the token directly here
          },
        });
        if (result.data && Array.isArray(result.data.data)) {
          const { data } = result.data;
          setData(data);

          // Logging each field
          data.forEach((item: { symbol: string; name: string }) => {
            const { symbol, name } = item;
            console.log(`Symbol: ${symbol}`);
            console.log(`Name: ${name}`);
          });
        } else {
          console.error("Unexpected response format:", result.data);
        }
      } catch (error) {
        console.error("Error:", error);
      }
    };

    onArrival();
  }, [navigate]);

  console.log(user);

  return (
    <main className="dasmain">
      <img src={dash} className="dasim" alt="" />
      <h2 className="quick da">Your Dashboard</h2>
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
