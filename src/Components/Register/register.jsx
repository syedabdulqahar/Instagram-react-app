import "./register.css";
import backIcon from "./backbutton.svg";
import metaIcon from "./meta-brands-solid.svg";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = () => {
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    fetch("http://localhost:5000/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    })
      .then((res) => res.text())
      .then((data) => {
        alert(data); // constraint 2
        if (data === "User registered successfully") {
          navigate("/login"); // constraint 3
        }
      });
  };

  return (
    <main className="Main_Register_div">
      <section className="Register-Block">
        <Link to="/">
          <div className="arrow-div">
            <img className="backicon" src={backIcon} alt="back" />
          </div>
        </Link>
        <div className="second-block">
          <p className="Meta-div">
            <img className="metaicon" src={metaIcon} alt="meta" /> Meta
          </p>
          <div className="header-div">
            <h2>Get Started with Instagram</h2>
            <h4>Sign up to see photos and videos from your friends</h4>
          </div>
        </div>

        <div className="input-divs">
          <h4 className="emailhead">Mobile number or email</h4>
          <input
            className="inputbar-register"
            type="text"
            placeholder="Mobile Number or Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <h4 className="emailhead">Password</h4>
          <input
            className="inputbar-register"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <h4 className="emailhead">Confirm Password</h4>
          <input
            className="inputbar-register"
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>

        <div className="button-div">
          <button onClick={handleRegister}>Register</button>
        </div>
      </section>
    </main>
  );
}

export default Register;
