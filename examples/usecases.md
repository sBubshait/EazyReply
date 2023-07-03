# Use Cases

In this document, we will explore two use cases for EazyReply: Meeting Confirmation and Customer Support Auto-responder.

## Meeting Confirmation

**Scenario:** You have scheduled a meeting and want to keep track of who is attending. When participants send an email to confirm their attendance, EazyReply can automatically send them a confirmation reply and log their email address to a file.

**Triggers:**
- Email subject starts with "Confirm attending meeting"

**Actions:**
- Reply to the email with a message like "Your attendance has been confirmed. Thank you!"
- Save the sender's email address to a file in order to keep track of who is attending the meeting.

To see the code implementation for this use case, please check out the [meetingConfirmation](./examples/meetingConfirmation) subfolder.

## Customer Support Auto-responder

**Scenario:** When a customer sends a support email, you can use EazyReply to send them an automatic response acknowledging receipt of their email and inform them that the support team will get back to them shortly.

**Triggers:**
- Email is sent to support@yourdomain.com

**Actions:**
- Reply with a message like "Thank you for reaching out to our support team. We have received your email and will get back to you shortly."
- Forward the email to the support team.
- Log the inquiry to a file for record-keeping.

To see the code implementation for this use case, please check out the [customerSupport](./examples/customerSupport) subfolder.
