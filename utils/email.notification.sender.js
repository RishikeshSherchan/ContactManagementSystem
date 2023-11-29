import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.SENDEREMAIL,
    pass: process.env.SENDERPASS,
  },
});

const sendEmailNotification = async (to, subject, text) => {
  const mailDetails = {
    from: process.env.SENDEREMAIL,
    to,
    subject,
    text,
  };

  try {
    const emailInfo = await transporter.sendMail(mailDetails);
    console.log("Email sent:", emailInfo.response);
  } catch (error) {
    console.error("Error sending email:", error.message);
  }
};

export default sendEmailNotification;
