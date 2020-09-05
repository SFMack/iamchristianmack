const express = require("express");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const cors = require("cors");

if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const APP = express();

const PORT = process.env.PORT || 8000;

APP.use(bodyParser.json());
APP.use(bodyParser.urlencoded({ extended: true }));

APP.use(cors());

APP.listen(PORT, () => {
  console.log("Port 8000 is live");
});

APP.get("/", (req, res) => {
  res.send("We lit");
});

APP.post("/api/send", (req, res) => {
  const data = req.body;
  console.log(data);

  let smtpTransporter = nodemailer.createTransport({
    service: "Gmail",
    host: "smtp-relay.sendinblue.com",
    port: 587,
    secure: false,
    auth: {
      user: process.env.email,
      pass: process.env.password,
    },
    tls: {
      rejectUnauthorized: false,
    },
  });

  let mailOptions = {
    from: data.email,
    to: "christian.ak.mack@gmail.com",
    subject: `New message from: ${data.email}`,
    html: `<p>${data.name}</p><p>${data.email}</p><p>${data.message}</p>`,
  };

  smtpTransporter.sendMail(mailOptions, (err, info) => {
    if (err) {
      return console.log(err);
    }
    console.log("Message sent");
    smtpTransporter.close();
  });
});
