const nodeMailer = require('nodemailer');
const config = require('../config.json');

const EMAIL_ADDRESS = config.sendFromEmail.user;

const transporter = nodeMailer.createTransport({
    host: config.sendFromEmail.host,
    port: config.sendFromEmail.port || 465,
    secure: true,
    auth: {
        user: EMAIL_ADDRESS,
        pass: config.sendFromEmail.password
      }
});

module.exports = (to, subject = "No Title", body = '', replyTo = '') => {
    const mailOptions = {
        from: EMAIL_ADDRESS,
        to: to,
        subject: subject,
        text: body
    };

    if (replyTo && replyTo.length > 0) {
        mailOptions.inReplyTo = replyTo;
    }

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ', info.response);
        }
    }
    );
}
