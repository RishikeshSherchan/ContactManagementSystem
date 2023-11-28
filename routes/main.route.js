import { Router } from "express";
import contactRoute from "./contact.route.js";

const mainRoute = Router({ mergeParams: true });

mainRoute.use("/contact", contactRoute);

export default mainRoute;
