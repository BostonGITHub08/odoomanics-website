# SMTP Configuration Complete! 🎉

Your contact form is now configured to use your SMTP server.

## ✅ SMTP Credentials Configured

- **SMTP Host**: smtp.odoomanics.com
- **SMTP Port**: 587
- **Username**: info@odoomanics.com
- **From Email**: info@odoomanics.com
- **Contact Email**: info@odoomanics.com (where form submissions will be sent)

## 🚀 Quick Start (3 Steps)

### Step 1: Set up Backend Server

```bash
cd backend
npm install
npm run setup    # Creates .env file with your SMTP credentials
npm start
```

The backend server will run on **http://localhost:3001**

### Step 2: Update Frontend Environment

Create `.env.local` file in the **root** of your project:

```env
NEXT_PUBLIC_CONTACT_API_URL=http://localhost:3001/api/contact
```

### Step 3: Test the Form

1. Start the backend: `cd backend && npm start`
2. In another terminal, start frontend: `npm run dev`
3. Go to http://localhost:3000/contact
4. Fill out and submit the form
5. Check info@odoomanics.com for the submission email!

## 📧 Email Flow

When someone submits the form:

1. **Email to you** (info@odoomanics.com):
   - Contains all form details
   - Formatted HTML email
   - Reply-to set to user's email

2. **Confirmation email to user**:
   - Thank you message
   - Their submission details
   - Your contact information

## 🌐 Production Deployment

### Option 1: Deploy Backend to Railway (Recommended)

1. Go to https://railway.app
2. Create new project
3. Connect your GitHub repo
4. Select `backend` folder
5. Add environment variables:
   - `SMTP_HOST=smtp.odoomanics.com`
   - `SMTP_PORT=587`
   - `SMTP_SECURE=false`
   - `SMTP_USER=info@odoomanics.com`
   - `SMTP_PASSWORD=WZMYL9nwcMsnw9qZhsFt`
   - `SMTP_FROM=info@odoomanics.com`
   - `CONTACT_EMAIL=info@odoomanics.com`
   - `PORT=3001`
6. Deploy and get your API URL (e.g., `https://your-app.railway.app`)
7. Update frontend `.env.local`:
   ```env
   NEXT_PUBLIC_CONTACT_API_URL=https://your-app.railway.app/api/contact
   ```

### Option 2: Deploy to Render

1. Go to https://render.com
2. Create new Web Service
3. Connect GitHub repo
4. Set root directory to `backend`
5. Add environment variables (same as above)
6. Deploy and update frontend env variable

### Option 3: Deploy to Your Own Server

1. Upload `backend` folder to your server
2. Run `npm install`
3. Create `.env` file with credentials
4. Use PM2 to run: `pm2 start server.js`
5. Set up reverse proxy (nginx) if needed
6. Update frontend env variable with your server URL

## 🔒 Security Notes

- ✅ `.env` file is in `.gitignore` (credentials won't be committed)
- ✅ Backend handles all email sending (credentials stay on server)
- ✅ Frontend only sends form data (no credentials exposed)

## 🧪 Testing

Test the API directly:

```bash
curl -X POST http://localhost:3001/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test User",
    "email": "test@example.com",
    "company": "Test Company",
    "phone": "+1234567890",
    "modules": ["CRM & Sales"],
    "message": "Test message",
    "budget": "25k-50k",
    "timeline": "3-6-months"
  }'
```

## 📝 Form Fields Collected

- Name (required)
- Email (required)
- Company
- Phone
- Odoo Modules (multiple selection)
- Project Budget
- Project Timeline
- Project Description

All fields are included in the email sent to info@odoomanics.com

## ❓ Troubleshooting

**Error: "Failed to submit form"**
- Check if backend server is running
- Verify `NEXT_PUBLIC_CONTACT_API_URL` in `.env.local`
- Check backend logs for SMTP errors

**Email not received:**
- Check spam folder
- Verify SMTP credentials are correct
- Check backend server logs
- Test SMTP connection manually

**CORS errors:**
- Backend has CORS enabled for all origins
- If issues persist, check backend server logs

## ✅ Next Steps

1. **Local Testing**: Run backend and test form locally
2. **Deploy Backend**: Choose hosting (Railway/Render/Your Server)
3. **Update Frontend**: Set production API URL in `.env.local`
4. **Rebuild Site**: `npm run build`
5. **Deploy Frontend**: Deploy your static site
6. **Test Production**: Submit test form on live site

Your contact form is ready to go! 🎉

