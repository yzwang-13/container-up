var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

var indexRouter = require("./routes/index");
var greetingRouter = require("./routes/greeting");
var dataRouter = require("./routes/data");

var app = express();
const port = 4000;

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/greeting", greetingRouter);
app.use("/data", dataRouter);
app.listen(port, () => console.log(`RCL API v1.0 listening on port ${port}!`));

module.exports = app;
