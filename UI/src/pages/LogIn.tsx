import { useState, useEffect } from "react";
import React from "react";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../Request";
import login from "../assets/login.svg";
import "./LogIn.css";
const Auth: React.FC = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<JSON>();
  useEffect(() => {
    const x = localStorage.getItem("access");
    if (x !== null) {
      navigate("/dashboard");
    }
  });
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const result = await axiosInstance.request({
        url: "auth/login/",
        method: "post",
        data: {
          email: email,
          password: password,
        },
      });

      localStorage.setItem("access", result.data.token.access);
      localStorage.setItem("refresh", result.data.token.refresh);
      navigate("/dashboard");
    } catch (error) {
      console.log(error.response.data);
      setError(error.response.data);
    }
  };
  return (
    <main>
      <article className="amain">
        <section className="acen">
          <img className="aside" src={login} alt="login" />
          <section className="lform">
            <h1 className="quick">Log In</h1>
            <form onSubmit={handleSubmit}>
              <input
                className="ainp"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
              />
              <br />
              <input
                className="ainp"
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
              />
              <br />
              <button type="submit" className="log">
                Login
              </button>
            </form>
            <h3>
              Don't have an account? <a href="/signup">SignUp</a>
            </h3>
            {error && <p className="error-message">{error}</p>}
          </section>
        </section>
      </article>
    </main>
  );
};
export default Auth;
