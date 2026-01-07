
const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

const DB_FILE = "./database/db.json";
if (!fs.existsSync(DB_FILE)) {
  fs.writeFileSync(DB_FILE, JSON.stringify({ users: [] }, null, 2));
}

app.get("/api/test", (req, res) => {
  res.json({ status: "OK", message: "Server running" });
});

app.listen(PORT, () => {
  console.log("Server running on port", PORT);
});
