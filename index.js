// Welcome! This is the entry point of the application. Please read the README.md file for more information.

const notifier = require('mail-notifier');
const send = require('./src/mailSender');
const Mail = require('./src/Mail.js');
const processor = require('./src/processor.js');
const config = require('./config.json');


const imap = {
  user: config.readFromEmail.user,
  password: config.readFromEmail.password,
  host: config.readFromEmail.host,
  port: config.readFromEmail.port || 993,
  tls: true, 
  tlsOptions: { rejectUnauthorized: false }
};

// Reading incoming emails.
notifier(imap)
  .on('mail', async mail => {
    console.log(mail);
    var mailObj = new Mail(mail.from[0], mail.to, mail.messageId, mail.subject, mail.text, mail.attachments, mail.date);
    await processor.load();
    return processor.process(mailObj);
  })
  .start();