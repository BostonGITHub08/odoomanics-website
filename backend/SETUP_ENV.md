# Backend Environment Setup

## Create .env file in backend folder

Create a file named `.env` in the `backend/` folder with the following content:

```env
# SMTP Configuration
SMTP_HOST=smtp.odoomanics.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=info@odoomanics.com
SMTP_PASSWORD=WZMYL9nwcMsnw9qZhsFt
SMTP_FROM=info@odoomanics.com

# Contact Email (where form submissions will be sent)
CONTACT_EMAIL=info@odoomanics.com

# Server Port
PORT=3001
```

## Quick Setup Commands

```bash
cd backend
npm install
# Create .env file with the content above
npm start
```

The server will run on http://localhost:3001

## For Production Deployment

When deploying, set these as environment variables in your hosting platform (Vercel, Railway, Render, etc.)

