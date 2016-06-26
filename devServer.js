"use strict";
import morgan from "morgan";
import path from "path";
import express from "express";
import webpack from "webpack";
import webpackMiddleware from "webpack-dev-middleware";
import webpackHotMiddleware from "webpack-hot-middleware";
import config from "./webpack.config.js";
import bodyParser from "body-parser";
import mongoose from "mongoose";
const port = 80;
let app = express();
mongoose.connect("mongodb://localhost/abc");

let abcSchema = mongoose.Schema({
  when: String,
  antecedent: String,
  antecedentOther: String,
  location: String,
  people: [String],
  peopleOther: String,
  behavior: [String],
  behaviorOther: String,
  duration: String,
  intensity: String,
  consequence: [String],
  consequenceOther: String
});
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(morgan("dev"));

console.log("Running the \"hot\" version of the code");
let compiler = webpack(config);
let middleware = webpackMiddleware(compiler, {
  publicPath: config.output.publicPath,
  contentBase: "src",
  stats: {
    colors: true,
    hash: false,
    timings: true,
    chunks: false,
    chunkModules: false,
    modules: false
  }
});

app.use(middleware);
app.use(webpackHotMiddleware(compiler));
app.get("*", function response(req, res) {
  res.write(middleware.fileSystem.readFileSync(path.join(__dirname, "dist/index.html")));
  res.end();
});

app.post("/saveABC", function response(req, res) {
  console.log(req.body);

  let ABC = mongoose.model("ABC", abcSchema);
  let abcInstance = new ABC(req.body);
  abcInstance.save(function (err) {
    if (err) {
      console.log(err);
      res.send(err);
    } else {
      res.send("ABC Saved!");
    }
  });
});

app.post("/mail.php", function response(req, res) {
  console.log(req.body);
  res.send("Email Success!");
});

app.listen(port);
console.info("==> Listening on port %s.", port);
