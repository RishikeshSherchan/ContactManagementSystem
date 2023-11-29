import express from "express";
import swaggerJSDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";

import { ConnectToDB } from "./config/db.js";
import mainRoute from "./routes/main.route.js";

const app = express();

const port = process.env.PORT;

ConnectToDB();

app.use(express.json());
app.use("/api", mainRoute);

const options = {
  swaggerDefinition: {
    info: {
      title: "REST API",
      version: "1.0.0",
      description: "Example docs",
    },
  },
  apis: ["swagger.yaml"],
};

const specs = swaggerJSDoc(options);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));

app.listen(port, () => {
  console.log(`Server is running.`);
});
