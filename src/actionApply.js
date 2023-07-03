const logger = require('./logger');
const send = require('./mailSender');
const processText = require('./textProcessor');
const axios = require('axios');

module.exports = (actions, email) => {

    for (let action of actions) {
        if (action.type == 'replyEmail' || action.type == 'sendEmail' || action.type == 'forwardEmail') { 
            action.params.subject = processText(action.params.subject, email);
            action.params.body = processText(action.params.body, email);
            action.params.to = processText(action.params.to, email);
        }

        switch(action.type) {
            case 'sendEmail':
                send(action.params.to, action.params.subject, action.params.message);
                break;
            case 'replyEmail':
                send(email.getFromAddress(), action.params.subject, action.params.body, email.getID());
                break;
            case 'forwardEmail':
                send(action.params.to, `Fwd: ${email.getSubject()}`, `Forwarded Message From: ${email.getFromAddress()}\n\n${email.getBody()}`);
                break;
            case 'saveToFile':
                logger.saveToFile(processText(action.params.message, email), processText(action.params.file, email));
                break;
            case 'log':
                logger.log(processText(action.params.message, email), processText(action.params.file, email) || "default");
                break;
            case 'HTTPRequest':
                performHttpRequest(action.params, email);
                break;
            // TO-DO: Add more actions here
            default:
                console.log('Unknown action type:', action.type);
        }
    }
}

function performHttpRequest(params, email) {

    if(params.data) {
        for (let key in params.data) {
            params.data[key] = processText(params.data[key], email);
        }
    }
    // Check if GET or POST.
    if (params.method === 'GET') {
        axios.get(params.url, { params: params.data })
            .then(response => {
                console.log('GET response:', response.data);
            })
            .catch(error => {
                console.error('Error in GET request:', error);
            });

    } else if (params.method === 'POST') {
        axios.post(params.url, params.data)
            .then(response => {
                console.log('POST response:', response.data);
            })
            .catch(error => {
                console.error('Error in POST request:', error);
            });
            
    } else {
        console.error('Invalid method for HTTP request. Supported methods are GET and POST.');
    }
}