import express from "express";
import { ConnectToDB } from "./config/db.js";
import mainRoute from "./routes/main.route.js";

const app = express();
const port = process.env.PORT;

ConnectToDB();

app.use("/api", mainRoute);

app.listen(port, () => {
  console.log(`Server is running.`);
});
