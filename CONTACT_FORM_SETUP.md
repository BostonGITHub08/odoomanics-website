# Contact Form Setup Guide

## Current Status

The contact form is now configured to send submissions to an API endpoint. You have **two options** for handling form submissions:

## Option 1: Backend Server (Recommended for Full Control)

I've created a Node.js backend server in the `backend/` folder that handles email sending via SMTP.

### Quick Setup:

1. **Navigate to backend folder:**
   ```bash
   cd backend
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Create `.env` file** with your SMTP credentials:
   ```env
   SMTP_HOST=smtp.gmail.com
   SMTP_PORT=587
   SMTP_SECURE=false
   SMTP_USER=your-email@gmail.com
   SMTP_PASSWORD=your-app-password
   SMTP_FROM=your-email@gmail.com
   CONTACT_EMAIL=info@odoomanics.com
   PORT=3001
   ```

4. **Start the server:**
   ```bash
   npm start
   ```

5. **Update frontend `.env.local`:**
   ```env
   NEXT_PUBLIC_CONTACT_API_URL=http://localhost:3001/api/contact
   ```

### For Production:

Deploy the backend server to:
- **Vercel** (as serverless function)
- **Netlify Functions**
- **Railway** or **Render** (as Node.js service)
- **Your own server** (with PM2)

Then update `NEXT_PUBLIC_CONTACT_API_URL` to your production API URL.

## Option 2: Formspree (Easiest - No Backend Needed)

1. Sign up at https://formspree.io (free tier available)
2. Create a new form
3. Copy your form endpoint (e.g., `https://formspree.io/f/YOUR_FORM_ID`)
4. Add to `.env.local`:
   ```env
   NEXT_PUBLIC_CONTACT_API_URL=https://formspree.io/f/YOUR_FORM_ID
   ```

That's it! Formspree will handle email delivery.

## What I Need From You

**If using Option 1 (Backend Server), please provide:**

1. **SMTP Host** (e.g., smtp.gmail.com, smtp.outlook.com)
2. **SMTP Port** (usually 587 for TLS or 465 for SSL)
3. **SMTP Username** (your email address)
4. **SMTP Password** (or app password for Gmail)
5. **From Email** (sender email address)
6. **Contact Email** (where form submissions should be sent - e.g., info@odoomanics.com)

**If using Option 2 (Formspree):**
- Just sign up and provide the form endpoint URL

## Testing

Once set up, test the form by:
1. Filling out the contact form on your website
2. Submitting it
3. Checking the email inbox specified in `CONTACT_EMAIL`

The form will:
- Send an email to your specified contact email with all form details
- Send a confirmation email to the user who submitted the form

## Current Form Fields

The form collects:
- Name (required)
- Email (required)
- Company
- Phone
- Odoo Modules of Interest (checkboxes)
- Project Budget
- Project Timeline
- Message/Project Description

All submissions will be formatted nicely in the email with all details.

