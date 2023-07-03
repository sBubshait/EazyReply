module.exports = class Mail {
  
    constructor(from, to, messageID, subject, body, attachments = [], date = new Date()) {
        this.from = from;
        this.to = to;
        this.messageID = messageID;
        this.subject = subject;
        this.body = body;
        this.attachments = attachments;
        this.date = new Date(date);
    }

    getID() {
        return this.messageID;
    }
    
    getFrom() {
        return this.from;
    }

    getFromAddress() {
        return this.from.address;
    }

    getFromName() {
        return this.from.name;
    }

   getTo() {
        return this.to;
    }

    getSubject() {
        return this.subject;
    }

    getBody() {
        return this.body;
    }

    getDate() {
        return this.date;
    }
}