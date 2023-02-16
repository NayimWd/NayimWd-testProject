const express = require("express");
const router = require("./src/routes/api");

const app = express();

// import security middleware

const rateLimit = require("express-rate-limit");
const helmet = require("helmet");
const mongoSenitize = require("express-mongo-sanitize");

const xssClean = require("xss-clean");
const hpp = require("hpp");
const cors = require("cors");

// implement security middleware;

app.use(mongoSenitize());
app.use(helmet());

app.use(xssClean());
app.use(hpp());
app.use(cors());

// request rate limiting
const limiter = rateLimit({
  windowMS: 15 * 60 * 1000,
  max: 100,
  message:
		'Too many accounts created from this IP, please try again after an hour',
 
})

app.use(limiter);



app.use("/api/v2", router);

app.use("*", (req, res) => {
	res.status(404).json({ status: "not found", data: "router dose not exist!" });
});

module.exports = app;
