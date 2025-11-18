# 🚀 Production Deployment Checklist

## Step 1: Deploy Backend (Do This First!)

### Option A: Railway (Recommended - Free Tier Available)

1. **Go to [railway.app](https://railway.app)** and sign up/login
2. **New Project** → **Deploy from GitHub repo**
3. **Select your repository:** `BostonGITHub08/odoomanics-website`
4. **Configure the service:**
   - **Root Directory:** `backend`
   - Railway will auto-detect Node.js
5. **Add Environment Variables** (Settings → Variables):
   ```
   PORT=3001
   CONTACT_EMAIL=info@odoomanics.com
   SMTP_HOST=smtp.odoomanics.com
   SMTP_PORT=587
   SMTP_SECURE=false
   SMTP_USER=info@odoomanics.com
   SMTP_PASSWORD=WZMYL9nwcMsnw9qZhsFt
   SMTP_FROM=info@odoomanics.com
   ```
6. **Deploy** - Railway will automatically build and deploy
7. **Get your backend URL:**
   - Go to **Settings** → **Networking**
   - Generate a domain or use the provided one
   - Copy the URL (e.g., `https://odoomanics-backend.railway.app`)
8. **Test backend:**
   - Visit: `https://your-backend-url.railway.app/health`
   - Should return: `{"status":"ok","message":"Contact form API is running"}`

### Option B: Render

1. **Go to [render.com](https://render.com)** and sign up/login
2. **New** → **Web Service**
3. **Connect GitHub** → Select your repository
4. **Configure:**
   - **Name:** `odoomanics-backend`
   - **Root Directory:** `backend`
   - **Environment:** `Node`
   - **Build Command:** `npm install`
   - **Start Command:** `npm start`
5. **Add Environment Variables** (same as Railway above)
6. **Deploy** and get your URL

---

## Step 2: Deploy Frontend

### Option A: Vercel (Recommended for Next.js)

1. **Go to [vercel.com](https://vercel.com)** and sign up/login
2. **Add New Project** → **Import Git Repository**
3. **Select:** `BostonGITHub08/odoomanics-website`
4. **Configure Project:**
   - **Framework Preset:** Next.js (auto-detected)
   - **Root Directory:** `./` (root)
   - **Build Command:** `npm run build` (auto)
   - **Output Directory:** `out` (auto)
5. **Environment Variables:**
   - Click **Environment Variables**
   - Add:
     ```
     NEXT_PUBLIC_CONTACT_API_URL = https://your-backend-url.railway.app/api/contact
     ```
     ⚠️ **Replace `your-backend-url.railway.app` with your actual backend URL from Step 1!**
6. **Deploy** - Vercel will build and deploy automatically
7. **Your site will be live at:** `https://your-project.vercel.app`

### Option B: Netlify

1. **Go to [netlify.com](https://netlify.com)** and sign up/login
2. **Add new site** → **Import an existing project** → **Deploy with GitHub**
3. **Select your repository**
4. **Build settings:**
   - **Base directory:** (leave empty)
   - **Build command:** `npm run build`
   - **Publish directory:** `out`
5. **Environment variables:**
   - Go to **Site settings** → **Environment variables**
   - Add:
     ```
     NEXT_PUBLIC_CONTACT_API_URL = https://your-backend-url.railway.app/api/contact
     ```
6. **Deploy site**

### Option C: Static Hosting (GitHub Pages, etc.)

1. **Set environment variable and build:**
   ```bash
   # Windows PowerShell
   $env:NEXT_PUBLIC_CONTACT_API_URL="https://your-backend-url.railway.app/api/contact"
   npm run build
   ```
2. **Deploy the `out` folder** to your hosting service

---

## Step 3: Test Production

1. **Test backend health:**
   - Visit: `https://your-backend-url.railway.app/health`
   - Should show: `{"status":"ok","message":"Contact form API is running"}`

2. **Test contact form:**
   - Go to your production site
   - Navigate to the contact page
   - Submit a test form
   - Check your email at `info@odoomanics.com`

3. **Check backend logs:**
   - Railway: Go to your service → **Deployments** → Click on deployment → **View Logs**
   - Look for: `✅ SMTP configured - emails will be sent`
   - Look for: `✅ Email sent to info@odoomanics.com`

---

## Environment Variables Summary

### Backend (Railway/Render):
```
PORT=3001
CONTACT_EMAIL=info@odoomanics.com
SMTP_HOST=smtp.odoomanics.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=info@odoomanics.com
SMTP_PASSWORD=WZMYL9nwcMsnw9qZhsFt
SMTP_FROM=info@odoomanics.com
```

### Frontend (Vercel/Netlify):
```
NEXT_PUBLIC_CONTACT_API_URL=https://your-backend-url.railway.app/api/contact
```

---

## Troubleshooting

**Backend not working?**
- Check environment variables are set correctly
- Check backend logs for errors
- Verify SMTP credentials are correct
- Test `/health` endpoint

**Frontend form not working?**
- Verify `NEXT_PUBLIC_CONTACT_API_URL` is set correctly
- Check browser console for errors
- Ensure backend URL is HTTPS (not HTTP)
- Verify CORS is working (backend has `app.use(cors())`)

**Emails not sending?**
- Check backend logs for SMTP errors
- Verify SMTP credentials in environment variables
- Test SMTP connection manually if needed

---

## Quick Links

- **Railway:** https://railway.app
- **Render:** https://render.com
- **Vercel:** https://vercel.com
- **Netlify:** https://netlify.com

---

**Ready to deploy? Start with Step 1 (Backend) and work your way through!** 🚀

