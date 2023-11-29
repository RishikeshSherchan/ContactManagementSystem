import { Router } from "express";

import {
  getContactController,
  newContactController,
} from "../controller/contact.controller.js";
import uploadProfilePicture from "../middleware/upload_file.middleware.js";

const contactRoute = Router({ mergeParams: true });

contactRoute.post("/newContact", uploadProfilePicture(), newContactController);
contactRoute.get("/getContact", getContactController);

export default contactRoute;
