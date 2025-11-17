# 🚀 Contact Form Setup - START HERE

## Your SMTP Credentials Are Configured! ✅

- **SMTP Host**: smtp.odoomanics.com
- **Username**: info@odoomanics.com  
- **Password**: WZMYL9nwcMsnw9qZhsFt
- **Contact Email**: info@odoomanics.com

## ⚡ Quick Setup (5 Minutes)

### Step 1: Create Backend .env File

Navigate to `backend/` folder and create a file named `.env` with this content:

```env
SMTP_HOST=smtp.odoomanics.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=info@odoomanics.com
SMTP_PASSWORD=WZMYL9nwcMsnw9qZhsFt
SMTP_FROM=info@odoomanics.com
CONTACT_EMAIL=info@odoomanics.com
PORT=3001
```

**OR** run the setup script (if Node.js is installed):
```bash
cd backend
npm run setup
```

### Step 2: Install Backend Dependencies

```bash
cd backend
npm install
```

### Step 3: Start Backend Server

```bash
npm start
```

You should see: `Contact form API server running on port 3001`

### Step 4: Create Frontend .env.local

In the **root** of your project (not in backend folder), create `.env.local`:

```env
NEXT_PUBLIC_CONTACT_API_URL=http://localhost:3001/api/contact
```

### Step 5: Test the Form

1. Keep backend running (Step 3)
2. In a new terminal, start frontend: `npm run dev`
3. Go to http://localhost:3000/contact
4. Fill out and submit the form
5. Check info@odoomanics.com inbox!

## 📧 What Happens When Form is Submitted?

1. **Email to you** (info@odoomanics.com):
   - Subject: "New Contact Form Submission from [Name] - [Company]"
   - Contains all form details (name, email, company, phone, modules, budget, timeline, message)
   - HTML formatted, easy to read
   - Reply-to is set to user's email

2. **Confirmation email to user**:
   - Thank you message
   - Their submission summary
   - Your contact information

## 🌐 Production Deployment

### Deploy Backend First

**Option A: Railway (Easiest)**
1. Go to https://railway.app
2. New Project → Deploy from GitHub
3. Select `backend` folder
4. Add environment variables (copy from backend/.env)
5. Deploy → Get your URL (e.g., `https://odoomanics-api.railway.app`)

**Option B: Render**
1. Go to https://render.com
2. New Web Service
3. Connect GitHub, select `backend` folder
4. Add environment variables
5. Deploy → Get URL

**Option C: Your Server**
- Upload backend folder
- Install: `npm install`
- Create .env file
- Run: `pm2 start server.js`

### Update Frontend for Production

Update `.env.local` with production API URL:
```env
NEXT_PUBLIC_CONTACT_API_URL=https://your-backend-url.com/api/contact
```

Then rebuild:
```bash
npm run build
```

## 🔍 Testing

Test backend API directly:
```bash
curl -X POST http://localhost:3001/api/contact \
  -H "Content-Type: application/json" \
  -d '{"name":"Test","email":"test@test.com","message":"Test message"}'
```

## ❓ Troubleshooting

**"Failed to submit form" error:**
- ✅ Backend server running? (Check http://localhost:3001/health)
- ✅ `.env.local` file created in root?
- ✅ `NEXT_PUBLIC_CONTACT_API_URL` set correctly?

**No email received:**
- Check spam folder
- Verify SMTP credentials in backend/.env
- Check backend server console for errors
- Test SMTP connection

**Backend won't start:**
- Run `npm install` in backend folder
- Check if port 3001 is already in use
- Verify .env file exists in backend folder

## 📁 File Structure

```
odoomanics-website/
├── backend/
│   ├── .env              ← Create this with SMTP credentials
│   ├── server.js         ← Backend API server
│   ├── package.json
│   └── setup-env.js      ← Auto-creates .env
├── .env.local            ← Create this in root with API URL
└── src/
    └── components/
        └── ContactForm.tsx  ← Form component
```

## ✅ Checklist

- [ ] Created `backend/.env` file with SMTP credentials
- [ ] Ran `npm install` in backend folder
- [ ] Started backend server (`npm start` in backend)
- [ ] Created `.env.local` in root with API URL
- [ ] Tested form submission locally
- [ ] Deployed backend to production
- [ ] Updated production `.env.local` with production API URL
- [ ] Rebuilt and deployed frontend

## 🎉 You're All Set!

Once backend is running and frontend has the API URL, your contact form will work perfectly!

For detailed instructions, see:
- `SMTP_SETUP_COMPLETE.md` - Full setup guide
- `backend/README.md` - Backend documentation

