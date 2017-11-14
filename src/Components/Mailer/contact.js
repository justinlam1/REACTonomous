
// module.exports = function sendMailPlease() {

  var nodemailer = require('nodemailer');
  var smtpTransport = require('nodemailer-smtp-transport');

  let transporter = nodemailer.createTransport(smtpTransport({
    service: 'gmail',
    secure: false,
    port: 25,
    auth: {
      user: 'watowebteam@gmail.com',
      pass: 'WATonomous'
    },
    tls: {
      rejectUnauthorized: false
    }
  }));

  let HelperOptions = {
    from: '"Wato Contact Form" <watowebteam@gmail.com',
    to: 'eddie.ren.2013@gmail.com',
    subject: 'dd',
    text: 'dd'
  };



  transporter.sendMail(HelperOptions, (error, info) => {
    if (error) {
      return console.log(error);
    }
    console.log("The message was sent!");
    console.log(info);
  });






// };
