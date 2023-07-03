// If you want to use the rule template in your project, you can copy the file and paste it in your ./rules folder.

module.exports = {
    name: 'Customer Support',
    description: '-',

    trigger: {
        type: 'email',        
        conditions: {
            conditions: [
            {
                field: 'subject',
                validationType: 'startsWith', 
                value: '', // Keeping the value empty will match all emails
            }
        ]
        },
    },

    actions: [{
        type: 'replyEmail',
        params: {
            subject: 'Attendance Confirmation',
            body: `<html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta http-equiv="X-UA-Compatible" content="IE=edge">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Thank You for Contacting Us</title>
                <style>
                    body {
                        font-family: Arial, sans-serif;
                        line-height: 1.6;
                        margin: 0 auto;
                        max-width: 600px;
                        padding: 20px;
                    }
                    .email-header {
                        background: #4CAF50;
                        color: white;
                        padding: 10px;
                        text-align: center;
                    }
                    .email-content {
                        margin: 20px 0;
                    }
                    .email-footer {
                        text-align: center;
                        margin-top: 20px;
                        padding-top: 10px;
                        border-top: 1px solid #eee;
                    }
                </style>
            </head>
            <body>
                <div class="email-container">
                    <div class="email-header">
                        <h2>Thank You for Reaching Out!</h2>
                    </div>
                    <div class="email-content">
                        <p>Dear Valued Customer,</p>
                        <p>Thank you so much for contacting [Your Company Name]. We appreciate the time you’ve taken to reach out to us. Your feedback helps us improve our services and support our valued customers like you.</p>
                        <p>We have received your query and our support team is currently reviewing it. We will get back to you as soon as possible. If you need immediate assistance, please do not hesitate to give us a call at [Your Phone Number].</p>
                        <p>Thank you once again for giving us the opportunity to assist you. We value your business and are committed to providing you with the highest level of service.</p>
                        <p>Warm regards,</p>
                        <p>[Your Name]<br>[Your Position]<br>[Your Company Name]</p>
                    </div>
                    <div class="email-footer">
                        <p>[Your Company Name] | [Your Company Address] | [Your Company Phone Number]</p>
                    </div>
                </div>
            </body>
            </html>`
        },
    },
    {
        type: 'forwardEmail',
        params: {
           to: 'contact@bubshait.me',
        }
    },
    {
        type: 'saveToFile',
        params: {
            file: '{date}.txt', // dw this will create the file if it does not exist.
            message: '{email}',
        }
    }
],
}