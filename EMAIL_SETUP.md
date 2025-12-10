# Email Setup Guide

This project uses Mailtrap with Nodemailer to handle form submissions from the Hero Section and Contact Form.

## Setup Instructions

### 1. Install Dependencies

Dependencies have already been installed:
- `nodemailer` - Email sending library
- `mailtrap` - Mailtrap transport for Nodemailer

### 2. Configure Mailtrap API Token

1. Sign up or log in to [Mailtrap](https://mailtrap.io/)
2. Navigate to your inbox or create a new one
3. Get your API token from the Mailtrap dashboard
4. Open the `.env.local` file in the project root
5. Replace `<YOUR_API_TOKEN>` with your actual Mailtrap API token:

```env
MAILTRAP_API_TOKEN=your_actual_token_here
```

### 3. Configure Email Recipients

To change who receives the form submissions:

1. Open `/app/api/mail/route.ts`
2. Update the `recipients` array on line 40:

```typescript
const recipients = ['sungeun8877@gmail.com']; // Change to your email(s)
```

### 4. Test the Forms

Start the development server:

```bash
npm run dev
```

Test both forms:
- **Hero Section Form**: Quick consultation form in the hero banner
- **Contact Form Section**: Detailed contact form with email and message fields

## Features

### Hero Section Form
- Name input
- Phone number (with prefix selection: 010, 02)
- Privacy agreement checkbox
- Sends email with form type "hero"

### Contact Form Section
- Name input
- Phone number input
- Email input (optional)
- Message textarea (optional)
- Privacy agreement checkbox
- Sends email with form type "contact"

### Email Content

Emails sent include:
- Contact name
- Phone number
- Email (if provided)
- Message (if provided)
- Submission timestamp
- Form type (hero or contact)

### Error Handling

Both forms include:
- Loading state during submission
- Success/error message display
- Form validation
- Automatic message clearing after 5 seconds
- Form reset on successful submission

## Production Deployment

When deploying to production:

1. Add `MAILTRAP_API_TOKEN` to your hosting provider's environment variables
2. Update the sender email address in `/app/api/mail/route.ts` if needed:

```typescript
const sender = {
  address: 'hello@smallbusiness.co.kr',
  name: '제이에스에너지 웹사이트',
};
```

## Troubleshooting

### Email not sending

1. Check that `MAILTRAP_API_TOKEN` is set in `.env.local`
2. Restart the development server after adding the token
3. Check browser console and terminal for error messages
4. Verify your Mailtrap account is active and the token is valid

### Form not submitting

1. Open browser developer tools (F12)
2. Check the Network tab for API requests to `/api/mail`
3. Review any error messages in the console
4. Ensure all required fields are filled

## Security Notes

- `.env.local` is already in `.gitignore` to prevent committing sensitive tokens
- Never commit your actual API token to version control
- The API route validates required fields before sending
- Email addresses are only used for the contact form submission purpose
