# Quick Fix for Contact Form Error

## The Problem
The form is showing an error because no API endpoint is configured. The form needs a URL to send submissions to.

## Quick Solution (Choose One)

### Option 1: Use Formspree (Easiest - 2 minutes)

1. **Sign up for free at:** https://formspree.io
2. **Create a new form** and copy your form endpoint (looks like: `https://formspree.io/f/YOUR_FORM_ID`)
3. **Create `.env.local` file** in your project root:
   ```env
   NEXT_PUBLIC_CONTACT_API_URL=https://formspree.io/f/YOUR_FORM_ID
   ```
4. **Rebuild your site:**
   ```bash
   npm run build
   ```
5. **Done!** Form will now work.

**Formspree Free Tier:**
- 50 submissions/month
- Email notifications
- Spam protection
- No credit card required

### Option 2: Use Your Backend Server

If you want to use the backend server I created:

1. **Provide your SMTP credentials:**
   - SMTP Host (e.g., smtp.gmail.com)
   - SMTP Port (587 or 465)
   - SMTP Username (your email)
   - SMTP Password
   - Contact Email (where to send submissions)

2. **I'll help you set it up** with your credentials

3. **Deploy the backend** to:
   - Vercel (as serverless function)
   - Railway/Render (as Node.js service)
   - Your own server

4. **Update `.env.local`:**
   ```env
   NEXT_PUBLIC_CONTACT_API_URL=https://your-backend-url.com/api/contact
   ```

### Option 3: Use EmailJS (Alternative)

1. Sign up at https://www.emailjs.com
2. Set up email service
3. Get your service ID and template ID
4. I can update the form to use EmailJS

## Current Error Explained

The error "There was an error submitting your form" appears because:
- The form tries to POST to `/api/contact`
- But your site uses static export (no API routes)
- The endpoint doesn't exist, so the request fails

## Recommended: Formspree

**Why Formspree?**
- ✅ Works immediately with static sites
- ✅ No backend needed
- ✅ Free tier available
- ✅ Email notifications
- ✅ Spam protection built-in
- ✅ Takes 2 minutes to set up

**Steps:**
1. Go to https://formspree.io/register
2. Create account (free)
3. Click "New Form"
4. Copy the form endpoint
5. Add to `.env.local` as shown above
6. Rebuild and deploy

## Need Help?

If you want me to set it up with your SMTP credentials, please provide:
- SMTP Host
- SMTP Port  
- SMTP Username
- SMTP Password
- Contact Email (where submissions go)

Or if you prefer Formspree, just sign up and share your form endpoint URL!

