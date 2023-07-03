// Email Rule Template
module.exports = {

    // The name of the rule. This is used for logging and debugging purposes.
    name: 'Confirmation of Attendance',

    // The description of the rule. This is used for logging and debugging purposes.
    description: 'Receives an email from a customer confirming their attendance to a meeting.',
    
    // The trigger for the rule. This is used to determine when the rule should be executed.
    trigger: {
        type: 'email',   // trigger type. Currently, 'email' is the only acceptable type.
        conditions: {   // Conditions under which the trigger should fire
            // if there is no operator, it is assumed to be 'and'
            // operator: 'and' OR 'or',
            conditions: [
            {
                field: 'subject',
                validationType: 'startsWith', // Type of validation (e.g., equals, contains, regex, startsWith, endsWith)
                value: 'VALUE', // Value to check against
                caseSensitive: false, // Case sensitivity flag (false by default)
            }
        ]
        },
    },

    // Actions section: what to do when the rule is triggered
    actions: [
        {
            // Example of an action to reply to the email. Have a look at ./examples to know more about 
            type: 'action_type', // e.g., replyEmail, forwardEmail, HTTPRequest, log, saveToFile
            params: {
                // Parameters for the action
                // e.g., subject, body, to, url, method, data, file, message
            },
        },
        // Add more actions here...
    ],
}