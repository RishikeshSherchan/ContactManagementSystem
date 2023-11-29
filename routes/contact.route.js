import { Router } from "express";

import {
  deleteContactController,
  getContactController,
  newContactController,
  updateContactController,
} from "../controller/contact.controller.js";
import uploadProfilePicture from "../middleware/upload_file.middleware.js";

const contactRoute = Router({ mergeParams: true });

contactRoute.post("/newContact", uploadProfilePicture(), newContactController);
contactRoute.get("/getContact", getContactController);
contactRoute.patch("/updateContact/:contactId", updateContactController);
contactRoute.delete("/deleteContact/:contactId", deleteContactController);

export default contactRoute;
