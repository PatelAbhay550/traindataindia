import express from "express";
import { config } from "dotenv";
import home from "./routes/home.js";
import gettrain from "./routes/getTrains.js";

config();

const app = express();

app.use("/", home);
app.use("/trains", gettrain);

// Export the app instead of listening
export default app;
