import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.json("helloworld");
});
app.listen(8000, () => {
  console.log("http://localhost:8000");
});
