import express from "express";

const app = express();

app.get("/api", (req, res) => {
  res.json({ users: ["1", "2", "3"] });
});

app.listen(5000, () => {
  console.log("server started port 5000");
});
