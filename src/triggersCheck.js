// Check one condition:
// e.g., validateCondition('contains', 'hello', 'hello world this is real email text', false);
function validateCondition(condition, emailValue) {

    let { field, validationType, value, caseSensitive } = condition;
    console.log('checking condition:', condition);
    if (!caseSensitive) {
        emailValue = emailValue.toLowerCase();
        value = value.toLowerCase();
    }

    switch (validationType) {
        case 'equals':
            return emailValue === value;

        case 'contains':
            return emailValue.includes(value);

        case 'regex':
            return new RegExp(value, caseSensitive ? '' : 'i').test(emailValue);

        case 'startsWith':
            return emailValue.startsWith(value);

        case 'endsWith':
            return emailValue.endsWith(value);
            
        default:
            console.error('Invalid validation type:', validationType);
            return false;
    }
}

// Checks all conditions
function checkConditions(conditions, email, operator = 'and') { // email is a Mail object
    return conditions.reduce((acc, condition) => {
        const isValid = Array.isArray(condition.conditions)
            ? checkConditions(condition.conditions, email, condition.operator) // recursive call
            : validateCondition(condition, email[condition.field]);

        return operator === 'and' ? acc && isValid : acc || isValid;
    }, operator === 'and');
}

module.exports = (email, triggers) => { // email is a Mail object
    // For now only triggers accepted are emails:
    if (triggers.type !== 'email') {
        console.error('Trigger type must be email');
        return false;
    }

    const { conditions } = triggers.conditions;
    return checkConditions(conditions, email);
};