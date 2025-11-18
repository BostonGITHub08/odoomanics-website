# 🚀 Production Deployment Guide

This guide will help you deploy both the frontend and backend to production.

## Prerequisites

- Git repository (already set up)
- Backend hosting account (Railway, Render, Heroku, etc.)
- Frontend hosting account (Vercel, Netlify, etc.)

## Step 1: Deploy Backend First

### Option A: Railway (Recommended - Easy & Free)

1. **Sign up at [railway.app](https://railway.app)**
2. **Create a new project**
3. **Add a new service** → Select "Deploy from GitHub repo"
4. **Select your repository** and choose the `backend` folder
5. **Set environment variables** in Railway dashboard:
   ```
   PORT=3001
   CONTACT_EMAIL=info@odoomanics.com
   SMTP_HOST=your-smtp-host.com
   SMTP_PORT=587
   SMTP_SECURE=false
   SMTP_USER=your-email@example.com
   SMTP_PASSWORD=your-password
   SMTP_FROM=your-email@example.com
   ```
6. **Deploy** - Railway will automatically detect it's a Node.js app
7. **Get your backend URL** - Something like: `https://your-app-name.railway.app`

### Option B: Render

1. **Sign up at [render.com](https://render.com)**
2. **New** → **Web Service**
3. **Connect your GitHub repo**
4. **Settings:**
   - Build Command: `npm install`
   - Start Command: `npm start`
   - Environment: Node
5. **Add environment variables** (same as Railway above)
6. **Deploy** and get your URL

## Step 2: Update Frontend Configuration

Once you have your backend URL (e.g., `https://your-backend.railway.app`):

### For Vercel Deployment:

1. **Sign up at [vercel.com](https://vercel.com)**
2. **Import your GitHub repository**
3. **Add Environment Variable:**
   - Name: `NEXT_PUBLIC_CONTACT_API_URL`
   - Value: `https://your-backend.railway.app/api/contact`
4. **Deploy**

### For Netlify Deployment:

1. **Sign up at [netlify.com](https://netlify.com)**
2. **Add new site** → **Import from Git**
3. **Build settings:**
   - Build command: `npm run build`
   - Publish directory: `out`
4. **Site settings** → **Environment variables:**
   - Add `NEXT_PUBLIC_CONTACT_API_URL` = `https://your-backend.railway.app/api/contact`
5. **Deploy**

### For Static Hosting (GitHub Pages, etc.):

1. **Build the project:**
   ```bash
   npm run build
   ```
2. **Set environment variable before building:**
   ```bash
   # Windows
   set NEXT_PUBLIC_CONTACT_API_URL=https://your-backend.railway.app/api/contact
   npm run build
   
   # Or create .env.production file:
   NEXT_PUBLIC_CONTACT_API_URL=https://your-backend.railway.app/api/contact
   ```
3. **Deploy the `out` folder** to your hosting service

## Step 3: Test Production

1. **Test backend health:** `https://your-backend.railway.app/health`
2. **Test contact form** on your production site
3. **Check backend logs** to see form submissions

## Important Notes

- ✅ Backend must be deployed first
- ✅ Backend URL must be HTTPS in production
- ✅ CORS is already configured in backend
- ✅ Frontend uses static export (works with any static host)
- ⚠️  SMTP is optional - form will work without it (logs to console)

## Troubleshooting

**Form not working in production?**
- Check `NEXT_PUBLIC_CONTACT_API_URL` is set correctly
- Verify backend is running (check `/health` endpoint)
- Check browser console for errors
- Verify CORS is working (backend has `app.use(cors())`)

**Backend not receiving requests?**
- Check backend logs
- Verify environment variables are set
- Check backend URL is accessible

## Quick Commands

```bash
# Build frontend for production
npm run build

# Test production build locally
npm run start

# Backend runs on port 3001 by default
# Frontend runs on port 3000 by default
```

