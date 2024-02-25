const express = require("express");
const { json } = require("body-parser");
const cors = require("cors");
const { mail } = require("./sendMail");

const app = express();
const PORT = 3001 || process.env.PORT;

// Middleware
app.use(json());
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
    optionSuccessStatus: 200,
  })
);

// Routes
app.get("/", (req, res) => {
  res.status(404).send("No data");
});

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
