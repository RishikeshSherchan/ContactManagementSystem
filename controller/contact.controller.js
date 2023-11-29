import Contact from "../model/contact.model.js";
import sendEmailNotification from "../utils/email.notification.sender.js";
import { failureHandler, successHandler } from "../utils/response.handler.js";

export const newContactController = async (req, res) => {
  try {
    console.log(req.body);
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
    console.log(req.body);
    const contactList = await Contact.find({});
    // console.log("list", contactList);

    successHandler(res, 200, "Successfully Fetched", { data: contactList });
  } catch (error) {
    failureHandler(res, 400, "Failed!! Contact not found.", {
      error: error.message,
    });
  }
};

export const updateContactController = async (req, res) => {
  try {
    console.log(req.body);
    console.log(req.params);
    const { contactId } = req.params;
    const { name, phoneNumber, email } = req.body;

    const updatedContact = await Contact.findByIdAndUpdate(
      contactId,
      { name, phoneNumber, email },
      { new: true }
    );

    if (!updatedContact) {
      return failureHandler(res, 404, "Contact not found for update", null);
    }

    successHandler(res, 200, "Contact updated successfully", {
      contact: updatedContact,
    });
  } catch (error) {
    failureHandler(res, 400, "Failed!! Contact not updated.", {
      error: error.message,
    });
  }
};

export const deleteContactController = async (req, res) => {
  try {
    const { contactId } = req.params;
    const deletedContact = await Contact.findByIdAndDelete(contactId);

    if (!deletedContact) {
      return failureHandler(res, 404, "Contact not found for deletion", null);
    }

    successHandler(res, 200, "Contact deleted successfully", {
      contact: deletedContact,
    });
  } catch (error) {
    failureHandler(res, 400, "Failed!! Contact not deleted.", {
      error: error.message,
    });
  }
};
