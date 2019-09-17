import express from "express";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import helmet from "helmet";

const app = express();
const PORT = 4000;

const handleListening = () =>
  console.log(`Listening on: http://localhost:${PORT}`);

const handleHome = (req, res) => res.send("Hello from home");

const handleProfile = (req, res) => res.send("You are on my profile");

const betweenHome = (req, res, next) => {
  console.log("I'm between");
  next();
};

app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(helmet());
app.use(morgan("dev"));
app.use(betweenHome);

app.get("/", handleHome);

app.get("/profile", handleProfile);

app.listen(PORT, handleListening);
