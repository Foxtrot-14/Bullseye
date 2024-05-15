import React from "react";
import login from "../assets/login.svg";
import "./LogIn.css";
const Auth: React.FC = () => {
  return (
    <main>
      <article className="amain">
        <section className="acen">
          <img className="aside" src={login} alt="login" />
          <section className="lform">
            <h1 className="quick">Log In</h1>
            <input
              className="ainp"
              type="email"
              placeholder="Enter your email"
            />
            <br />
            <input
              className="ainp"
              type="password"
              placeholder="Enter your password"
            />
            <br />
            <button className="log">Log In</button>
            <h3>
              Don't have an account? <a href="/signup">SignUp</a>
            </h3>
          </section>
        </section>
      </article>
    </main>
  );
};

export default Auth;
