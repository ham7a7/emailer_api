const express = require("express");
const { json } = require("body-parser");
const cors = require("cors");
const { mail } = require("./sendMail");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT;

// Middleware
app.use(json());
app.use(
  cors({
    origin: process.env.ORIGIN, // Your client side url
    credentials: true,
    optionSuccessStatus: 200,
  })
);

// Routes
app.post("/send/message", (req, res) => {
  const messageData = req.body;
  if (!messageData) {
    return res.status(400).send("No message data provided");
  }

  mail(messageData)
    .then(() => res.status(200).send("Message Sent"))
    .catch((error) => {
      console.error("Error sending message:", error);
      res.status(500).send("Internal Server Error");
    });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
