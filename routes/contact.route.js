import { Router } from "express";

import {
  getContactController,
  setContactController,
} from "../controller/contact.controller.js";

const contactRoute = Router({ mergeParams: true });

contactRoute.get("/getContact", getContactController);
contactRoute.post("/setContact", setContactController);

export default contactRoute;
