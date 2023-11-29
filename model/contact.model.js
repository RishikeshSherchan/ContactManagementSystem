import mongoose, { Schema } from "mongoose";

const contactSchema = new Schema(
  {
    name: {
      type: String,
      require: true,
    },
    phoneNumber: {
      type: Number,
      require: true,
    },
    email: {
      type: String,
      require: true,
    },
    profilePicture: {
      type: String,
      require: true,
    },
  },
  { timestamps: true }
);

const Contact = mongoose.model("Contact", contactSchema);

export default Contact;
