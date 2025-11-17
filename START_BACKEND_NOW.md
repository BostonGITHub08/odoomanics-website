# 🚀 START BACKEND SERVER - RIGHT NOW!

## ⚡ Quick Start (Choose One Method)

### Method 1: Double-Click (Easiest - Windows)

1. **Open File Explorer**
2. **Navigate to:** `odoomanics-website\backend\` folder
3. **Double-click:** `start-server.bat`
4. **Wait** for it to start (you'll see "server running on port 3001")
5. **Keep the window open!** Don't close it.

### Method 2: Command Prompt

1. **Open Command Prompt** (Press `Win + R`, type `cmd`, press Enter)
2. **Copy and paste these commands one by one:**

```bash
cd backend
npm install
npm start
```

3. **Wait** for "server running on port 3001"
4. **Keep the window open!**

### Method 3: PowerShell

1. **Open PowerShell**
2. **Navigate to project:**
   ```powershell
   cd C:\Users\786\odoomanics-website\backend
   ```
3. **Install dependencies (first time only):**
   ```powershell
   npm install
   ```
4. **Start server:**
   ```powershell
   npm start
   ```

## ✅ How to Know It's Working

You'll see this message:
```
✅ Contact form API server running on port 3001
✅ Health check: http://localhost:3001/health
```

## 🧪 Test It

1. **Open browser:** http://localhost:3001/health
2. **Should show:** `{"status":"ok","message":"Contact form API is running"}`

## 📝 Then Test Your Form

1. **Keep backend running** (don't close the terminal!)
2. **Go to:** http://localhost:3000/contact
3. **Fill out and submit the form**
4. **The error will be gone!** ✅
5. **Check email** at info@odoomanics.com

## ⚠️ Important

- **Keep the terminal window open** - closing it stops the server
- The server must stay running for the form to work
- If you see errors, check the terminal for details

## ❓ Troubleshooting

**"npm is not recognized"**
- Install Node.js: https://nodejs.org
- Download LTS version
- Install it
- Restart terminal
- Try again

**"Port 3001 already in use"**
- Another program is using port 3001
- Close other programs
- OR change port in `backend/.env` to `PORT=3002`
- Update `next.config.js` to use port 3002

**"Cannot find module"**
- Run `npm install` in the `backend` folder first
- Make sure you're in the correct directory

**Still getting error after starting server**
- Check if server is actually running
- Open: http://localhost:3001/health
- Should show: `{"status":"ok"}`
- If not, check terminal for error messages

## 🎯 That's It!

Once the backend is running, your contact form will work perfectly!

---

**Need help?** The backend folder has all the files you need. Just run `start-server.bat` or use the commands above.

