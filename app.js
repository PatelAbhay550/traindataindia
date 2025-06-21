import express from "express";
import cors from "cors";
import { config } from "dotenv";
import home from "./routes/home.js";
import gettrain from "./routes/getTrains.js";

config();

const app = express();

// Enable CORS for all routes
app.use(cors());

// You can customize CORS like this:
// app.use(cors({ origin: "https://yourdomain.com" }));

app.use("/", home);
app.use("/trains", gettrain);

export default app;
