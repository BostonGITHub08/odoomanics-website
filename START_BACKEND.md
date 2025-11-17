# 🚀 START BACKEND SERVER - Quick Instructions

## ✅ I've Created the .env File For You!

The `.env` file with your SMTP credentials has been created in the `backend/` folder.

## 🎯 Start the Backend Server (Choose One Method)

### Method 1: Double-Click Script (Easiest)

1. **Navigate to** `backend/` folder
2. **Double-click** `start-server.bat`
3. **Wait** for it to install dependencies and start
4. **Keep the window open** - server must stay running!

### Method 2: Command Line

1. **Open Command Prompt or PowerShell**
2. **Navigate to backend folder:**
   ```bash
   cd backend
   ```
3. **Install dependencies (first time only):**
   ```bash
   npm install
   ```
4. **Start the server:**
   ```bash
   npm start
   ```

## ✅ You'll Know It's Working When You See:

```
✅ Contact form API server running on port 3001
✅ SMTP transporter configured successfully
```

## 🧪 Test the Server

Open in browser: **http://localhost:3001/health**

Should show: `{"status":"ok"}`

## 📝 What to Do Next

1. ✅ **Backend is running** (you see the success message above)
2. **Start frontend** in a NEW terminal:
   ```bash
   npm run dev
   ```
3. **Go to:** http://localhost:3000/contact
4. **Submit the form** - it should work now!
5. **Check email** at info@odoomanics.com

## ⚠️ Important Notes

- **Keep the backend terminal open** - closing it stops the server
- The server must run on **port 3001**
- If port 3001 is busy, change `PORT=3002` in `.env` and update `next.config.js`

## 🔍 Troubleshooting

**"npm is not recognized"**
- Install Node.js from https://nodejs.org
- Restart your terminal after installing

**"Port 3001 already in use"**
- Change `PORT=3002` in `backend/.env`
- Update `NEXT_PUBLIC_CONTACT_API_URL` in `next.config.js` to use port 3002

**"Cannot find module"**
- Run `npm install` in the backend folder
- Make sure you're in the `backend/` directory

**Server starts but form still errors**
- Check backend terminal for error messages
- Verify `.env` file exists in `backend/` folder
- Test: http://localhost:3001/health

## 🎉 Once Backend is Running

The contact form will work immediately! The error message will disappear and submissions will send emails to info@odoomanics.com.

