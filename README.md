# EazyReply - Your Email Assistant 💌

Welcome to EazyReply! It is a powerful Email Assistant designed to automate your email responses and actions. EazyReply makes your email handling easy, efficient, and highly customizable. ✨ 

👉 Check out the *[Use Cases](./examples/usecases.md)* to see EazyReply in action!

## Features 🌟

- Send out-of-office (OOO) replies
- Automatically forward emails
- Reply to emails with custom templates
- Execute HTTP requests based on email triggers
- Log email data to files
- Save email content or custom text to files
- Utilize placeholders for dynamic content in email templates

## Possible Email Template Actions ✉️

- [x] `email` - Send an email
- [x] `reply_email` - Reply to an email
- [x] `forward_email` - Forward an email
- [x] `HTTPRequest` - Execute an HTTP request (GET or POST)
- [x] `log` - Log data to a file
- [x] `saveToFile` - Save text to a file


## Placeholders 📝

Placeholders can be used in your email templates to insert dynamic content. Here are some placeholders you can use:

- `{name}` - Name of the email sender
- `{email}` - Email address of the sender
- `{subject}` - Subject of the email
- `{body}` - Body of the email
- `{emailDate}` - Date of the email
- `{date}` - Today's date in YYYY-MM-DD format
- `{date_day}` - Today's day (e.g., 12)
- `{date_month}` - Today's month (e.g., 3)
- `{date_year}` - Today's year (e.g., 2023)
- `{date_weekday}` - Today's weekday (e.g., Monday)
- `{date_weekday_short}` - Today's weekday in short form (e.g., Mon)

## Placeholder Logic 🧠

EazyReply supports conditional logic with placeholders. You can use this feature to perform different actions based on the content of the email.

- `= "VALUE"` - Matches if the placeholder is exactly "VALUE".
  - Example: `{email = "example@abc.com"}` - Matches if the email address is exactly example@abc.com
  - Must end logic with `{end}`

- `contains "VALUE"` - Matches if the placeholder contains "VALUE".
  - Example: `{email contains "example"}` - Matches if the email address contains "example"
  - Must end logic with `{end}`

## Getting Started 🚀

1. Clone the repository to your local machine.
2. Navigate to the project directory.
3. Run `npm install` to install all dependencies.
4. Configure your email templates and actions.
5. Run the Email Assistant using `node index.js`.

## Contribution 🤝

Contributions are welcome! If you have ideas for more features or find an issue, feel free to make a pull request or open an issue.

## To-Do 📝

Here's a list of features and improvements that are planned for future releases. Contributions are welcome!

- [ ] **Comprehensive Documentation:** Create a comprehensive documentation for the project.
- [ ] **Enhanced Placeholder Logic:** Expand the conditional logic system to include more operators such as `startsWith`, `endsWith`, and regex matching, in addition to supporting *or* and *and* operators.
- [ ] **Scheduling:** Implement a scheduling system that allows users to schedule emails and actions to be executed at a specific time.
- [ ] **Template Library:** Create a library of pre-made email templates for common use cases.
- [ ] **UI Dashboard:** Develop a user-friendly dashboard for easier configuration and management of email templates and actions.
- [ ] **Support for Additional Email Providers:** Currently only supports custom email providers. Add support for Gmail, Outlook, and other popular email providers.
- [ ] **Documentation Expansion:** Extend the documentation to include detailed explanations of features, how-tos, and examples.
- [ ] **Increased Actions:** Add more actions such as executing custom scripts, and more.
- [ ] **Incoporate AI:** Use AI to automatically generate email templates based on email content.
- [ ] **HTTP Request in Body:** Allow users to include HTTP request's responses in the body of an email template. 


Please feel free to contribute by opening an issue, suggesting new features, or making a pull request!

---

## License 📄

This project is licensed under the MIT License.

---

Thank you for using EazyReply! 🎉 Let it take care of your emails while you focus on what matters most. 🍰