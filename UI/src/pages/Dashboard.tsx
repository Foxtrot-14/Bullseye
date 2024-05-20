import Results from "../components/Results";
import "./Dashboard.css";
import dash from "../assets/dash.svg";
import { useEffect, useState } from "react";
import axiosInstance from "../Request";
import axios from "axios";
import { useNavigate } from "react-router-dom";
interface Match {
  "1. symbol": string;
  "2. name": string;
}
type SearchResult = Match[];
const Dashboard = () => {
  const [user, setUser] = useState<string | null>();
  const [data, setData] = useState<SearchResult | null>(null);
  const navigate = useNavigate();
  const onArrival = async () => {
    try {
      const result = await axiosInstance.request({
        url: `/dashboard/list/`,
        method: "get",
        headers: {
          Authorization: `Bearer ${user}`,
        },
      });
      setData(result.data);
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
    const x = localStorage.getItem("access");
    if (x === null) {
      navigate("/login");
    }
    setUser(x);
    onArrival();
  }, []);
  console.log(user);
  // console.log(`Data ${data}`);
  return (
    <main className="dasmain">
      <img src={dash} className="dasim" alt="" />
      <h2 className="quick">Your Dashboard</h2>
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

export default Dashboard;
