const nodemailer = require("nodemailer");
require("dotenv").config();

async function mail(messageData) {
  try {
    const { senderName, senderEmail, message, receiverEmail } = messageData;

    const transportOptions = {
      service: process.env.SERVICE,
      auth: {
        user: process.env.MY_EMAIL,
        pass: process.env.MY_PASSWORD,
      },
    };
    const transporter = nodemailer.createTransport(transportOptions);

    // send mail with defined transport object
    const mailOptions = {
      from: process.env.MY_EMAIL,
      to: receiverEmail,
      subject: "Notification from your Portfolio",
      html: `
        <h1>Notification from your Portfolio</h1>
        <p><strong>Sender Name:</strong> ${senderName}</p>
        <p><strong>Sender Email:</strong> ${senderEmail}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log("Message sent: %s", info.messageId);
  } catch (error) {
    console.error("Error sending email:", error);
    throw error; // Re-throw the error to be caught by the caller
  }
}

module.exports = { mail };
