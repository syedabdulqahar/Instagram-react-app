const express = require("express");
const cors = require("cors");
const mysql = require("mysql2");
const bcrypt = require("bcrypt");

const app = express();
app.use(cors());
app.use(express.json());

// Database connection
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "instagram-clone",
});

db.connect((err) => {
  if (err) console.log("Database error:", err);
  else console.log("Database connected");
});

// ===== REGISTER ROUTE =====
app.post("/register", async (req, res) => {
  const { email, password } = req.body;

  // Check agar user pehle se register hai
  db.query(
    "SELECT * FROM users WHERE email = ?",
    [email],
    async (err, result) => {
      if (err) return res.send(err);

      if (result.length > 0) {
        return res.send("User already registered");
      } else {
        const hashedPassword = await bcrypt.hash(password, 10); // password hash
        db.query(
          "INSERT INTO users (email, password) VALUES (?, ?)",
          [email, hashedPassword],
          (err, result) => {
            if (err) return res.send(err);
            res.send("User registered successfully"); // alert ke liye
          },
        );
      }
    },
  );
});

// ===== LOGIN ROUTE =====
app.post("/login", (req, res) => {
  const { email, password } = req.body;

  db.query(
    "SELECT * FROM users WHERE email = ?",
    [email],
    async (err, result) => {
      if (err) return res.send(err);

      if (result.length === 0) {
        return res.send("User not found. Please register first!"); // constraint 1
      }

      const user = result[0];
      const match = await bcrypt.compare(password, user.password);

      if (match) {
        res.send("Login successful"); // constraint 3
      } else {
        res.send("Password galat hai"); // wrong password alert
      }
    },
  );
});

// Server start
app.listen(5000, () => {
  console.log("Server running on port 5000");
});
