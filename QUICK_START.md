# 🚀 QUICK START - Fix Contact Form Error

## The Problem
The form shows an error because the backend server is not running.

## ✅ Solution (3 Steps - 2 Minutes)

### Step 1: Create Backend .env File

**Navigate to `backend/` folder** and create a file named `.env`:

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

### Step 2: Start Backend Server

Open a terminal/command prompt and run:

```bash
cd backend
npm install
npm start
```

You should see: `✅ Contact form API server running on port 3001`

**Keep this terminal open!** The backend must stay running.

### Step 3: Test the Form

1. In a **new terminal**, start the frontend:
   ```bash
   npm run dev
   ```

2. Go to: http://localhost:3000/contact

3. Fill out and submit the form

4. Check `info@odoomanics.com` for the email!

## ✅ That's It!

The form will now work. The error was happening because:
- ❌ Backend server wasn't running
- ✅ Now it's running on port 3001
- ✅ Form connects to http://localhost:3001/api/contact
- ✅ Emails sent via your SMTP server

## 🔍 Verify It's Working

1. Backend running? Check: http://localhost:3001/health
   - Should show: `{"status":"ok"}`

2. Form submits successfully? 
   - Shows "Thank you!" message
   - Email arrives at info@odoomanics.com

## 📧 What Happens

When someone submits the form:
1. ✅ Form sends data to backend API
2. ✅ Backend sends email to info@odoomanics.com
3. ✅ Backend sends confirmation to user
4. ✅ Form shows success message

## 🌐 For Production

When you deploy:
1. Deploy backend to Railway/Render/Your Server
2. Get your backend URL (e.g., `https://api.odoomanics.com`)
3. Create `.env.local` in root:
   ```env
   NEXT_PUBLIC_CONTACT_API_URL=https://api.odoomanics.com/api/contact
   ```
4. Rebuild: `npm run build`
5. Deploy frontend

## ❓ Still Not Working?

**Error: "Backend server is not running"**
- ✅ Did you run `npm start` in the backend folder?
- ✅ Is it showing "server running on port 3001"?
- ✅ Check http://localhost:3001/health

**Error: "Failed to submit form"**
- ✅ Check backend terminal for errors
- ✅ Verify .env file exists in backend folder
- ✅ Check SMTP credentials are correct

**No email received:**
- ✅ Check spam folder
- ✅ Verify SMTP credentials in backend/.env
- ✅ Check backend console for SMTP errors

## 🎯 Summary

1. ✅ Create `backend/.env` with SMTP credentials
2. ✅ Run `npm install` and `npm start` in backend folder
3. ✅ Keep backend running
4. ✅ Test form at http://localhost:3000/contact

**The form will work immediately once the backend is running!** 🎉

