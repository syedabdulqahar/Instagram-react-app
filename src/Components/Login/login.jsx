import "../Login/login.css";
import InstagramLogo from "../../assets/Instagram_logo.svg.png";
import { Link, useNavigate } from "react-router-dom";
import LandingImg from "./Picture-Logo/landing.png";
import { useState } from "react";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    fetch("http://localhost:5000/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    })
      .then((res) => res.text())
      .then((data) => {
        alert(data); // constraint 1 & 3
        if (data === "Login successful") {
          navigate("/home"); // constraint 3
        }
      });
  };

  return (
    <main className="main-login-block">
      <section className="Login-page">
        <div className="left-section-login">
          <img className="Landingimg" src={LandingImg} alt="landing" />
        </div>
        <div className="right-section-login">
          <div className="Login-Block">
            <section className="Logo-Div">
              <img className="instagram-logo" src={InstagramLogo} alt="" />
            </section>

            <section className="input-div">
              <input
                className="inputbar"
                type="email"
                value={email}
                placeholder="Phone number, username, or email"
                required
                onChange={(e) => setEmail(e.target.value)}
              />
            </section>

            <section className="input-div">
              <input
                className="inputbar"
                type="password"
                value={password}
                placeholder="Password"
                required
                onChange={(e) => setPassword(e.target.value)}
              />
            </section>

            <section className="login-btn-div">
              <button type="submit" className="login-btn" onClick={handleLogin}>
                Log in
              </button>
            </section>

            <section className="or-div">
              _____________________________________
              <div className="OR">OR</div>
            </section>

            <section className="Account">
              Don't have an account?{" "}
              <Link to="/register">
                <span className="Signup">Sign up</span>
              </Link>
            </section>
          </div>
        </div>
      </section>
    </main>
  );
}

export default LoginPage;
