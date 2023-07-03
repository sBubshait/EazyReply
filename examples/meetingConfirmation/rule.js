// If you want to use the rule template in your project, you can copy the file and paste it in your ./rules folder.
module.exports = {
    name: 'Confirmation of Attendance',
    description: 'Receives an email from a customer confirming their attendance to a meeting.',

    trigger: {
        type: 'email',        
        conditions: {
            conditions: [
            {
                field: 'subject',
                validationType: 'startsWith', 
                value: 'Confirming attendance meeting 24',
                caseSensitive: false,
            }
        ]
        },
    },

    actions: [{
        type: 'replyEmail',
        params: {
            subject: 'Attendance Confirmation',
            body: 'Copy that! Thank you for your confirmation. See you soon!',
        },
    },
    {
        type: 'saveToFile',
        params: {
            file: 'meeting_attendance.txt',
            message: '{email}',
        }
    }],
}