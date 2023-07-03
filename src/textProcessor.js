module.exports = function replacePlaceholders(template, mail) {
    const currentDate = new Date();
    const emailDate = mail.getDate(); 
    
    const placeholders = {
        '{name}': mail.getFromName(),
        '{email}': mail.getFromAddress(),
        '{subject}': mail.getSubject(),
        '{body}': mail.getBody(),
        '{emailDate}': emailDate.toISOString().slice(0, 10),
        '{date}': currentDate.toISOString().slice(0, 10),
        '{date_day}': String(currentDate.getDate()).padStart(2, '0'),
        '{date_month}': String(currentDate.getMonth() + 1).padStart(2, '0'),
        '{date_year}': String(currentDate.getFullYear()),
        '{date_weekday}': currentDate.toLocaleString('en-US', { weekday: 'long' }),
        '{date_weekday_short}': currentDate.toLocaleString('en-US', { weekday: 'short' }),
        '{mail_id}': mail.getID(),
        '{from}': mail.getFrom(),
        '{to}': mail.getTo(),
        '{hour_24}': String(currentDate.getHours()).padStart(2, '0'),
        '{minute}': String(currentDate.getMinutes()).padStart(2, '0'),
        '{second}': String(currentDate.getSeconds()).padStart(2, '0'),
        '{timestamp}': String(currentDate.getTime()),
        '{timezone}': currentDate.toTimeString().split(' ')[1],
        '{email_hour_24}': String(emailDate.getHours()).padStart(2, '0'),
        '{email_minute}': String(emailDate.getMinutes()).padStart(2, '0'),
        '{email_second}': String(emailDate.getSeconds()).padStart(2, '0'),
        '{email_timestamp}': String(emailDate.getTime()),
        '{email_timezone}': emailDate.toTimeString().split(' ')[1],
        '{email_recipient}': mail.getTo(),
        '{random}': Math.random().toString()
    };

    let result = template || '';
    
    // Basic placeholders
    for (let [placeholder, replacement] of Object.entries(placeholders)) {
        result = result.split(placeholder).join(replacement);
    }

    // Conditional placeholders
    const conditionalPattern = /\{(.+?) (contains|=) "(.*?)"\}(.*?)\{end\}/gs;

    let match;
    while ((match = conditionalPattern.exec(result)) !== null) {
        const [fullMatch, placeholder, operator, value, content] = match;
        let shouldReplace = false;

        const actualValue = placeholders[`{${placeholder}}`] || '';

        switch (operator) {
            case '=':
                shouldReplace = actualValue === value;
                break;
            case 'contains':
                shouldReplace = actualValue.includes(value);
                break;
        }

        result = result.replace(fullMatch, shouldReplace ? content : '');
    }

    return result;
}