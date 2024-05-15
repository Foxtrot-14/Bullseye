import React from "react";
import login from "../assets/signup.svg";
import "./Signup.css";
const SignUp: React.FC = () => {
  return (
    <main>
      <article className="amain">
        <section className="acen">
          <img className="aside" src={login} alt="login" />
          <section className="lform">
            <h1 className="quick">Sign Up</h1>
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
            <input
              className="ainp"
              type="password"
              placeholder="Re-enter your password"
            />
            <button className="log">Sign Up</button>
            <h3>
              Already have an account? <a href="/login">LogIn</a>
            </h3>
          </section>
        </section>
      </article>
    </main>
  );
};

export default SignUp;
