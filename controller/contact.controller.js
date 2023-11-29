import Contact from "../model/contact.model.js";
import sendEmailNotification from "../utils/email.notification.sender.js";
import { failureHandler, successHandler } from "../utils/response.handler.js";

export const newContactController = async (req, res) => {
  try {
    const { name, phoneNumber, email } = req.body;
    const profilePicture = req.file.path;

    const contact = new Contact({
      name,
      phoneNumber,
      email,
      profilePicture,
    });

    const contactData = await contact.save();
    sendEmailNotification(
      email,
      "Contact added successfully",
      `${name} your contact has been successfully added to the database.`
    );
    successHandler(res, 200, "Successfully!! Contact entered.", {
      contact: contactData,
    });
  } catch (error) {
    failureHandler(res, 400, "Failed!! Contact not entered.", {
      error: error.message,
    });
  }
};

export const getContactController = async (req, res) => {
  try {
    const contactList = await Contact.find({});
    // console.log("list", contactList);

    successHandler(res, 200, "Successfully Fetched", { data: contactList });
  } catch (error) {
    failureHandler(res, 400, "Failed!! Contact not found.", {
      error: error.message,
    });
  }
};
