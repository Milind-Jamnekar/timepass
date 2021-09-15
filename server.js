// import express from "express";
// import path, { dirname } from "path";

const express = require("express");
const cors = require("cors");

const app = express();

app.use("/static", express.static("public"));
app.use(cors());
app.get("/", (req, res) => {
  res.sendFile("public/index.html", { root: __dirname });
});

app.get("/login", (req, res) => {
  res.sendFile("views/login.html", { root: __dirname });
});

app.listen(3000, () => console.log("listening To port 3000"));
