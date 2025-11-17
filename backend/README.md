# OdooManics Contact Form API

Backend server for handling contact form submissions from the OdooManics website.

## Setup Instructions

### 1. Install Dependencies

```bash
cd backend
npm install
```

### 2. Configure Environment Variables

Copy `.env.example` to `.env` and fill in your SMTP credentials:

```bash
cp .env.example .env
```

Edit `.env` with your SMTP settings:

```env
SMTP_HOST=smtp.gmail.com          # Your SMTP server
SMTP_PORT=587                      # SMTP port (587 for TLS, 465 for SSL)
SMTP_SECURE=false                  # true for 465, false for 587
SMTP_USER=your-email@gmail.com     # Your email address
SMTP_PASSWORD=your-app-password    # Your email password or app password
SMTP_FROM=your-email@gmail.com     # From email address
CONTACT_EMAIL=info@odoomanics.com  # Where to send form submissions
PORT=3001                          # Server port
```

### 3. Gmail Setup (if using Gmail)

If using Gmail, you need to:
1. Enable 2-Step Verification
2. Generate an App Password: https://myaccount.google.com/apppasswords
3. Use the app password in `SMTP_PASSWORD`

### 4. Run the Server

```bash
npm start
```

For development with auto-reload:
```bash
npm run dev
```

### 5. Update Frontend Environment Variable

In your Next.js project, add to `.env.local`:

```env
NEXT_PUBLIC_CONTACT_API_URL=http://localhost:3001/api/contact
```

For production, update to your deployed API URL:
```env
NEXT_PUBLIC_CONTACT_API_URL=https://your-api-domain.com/api/contact
```

## Deployment Options

### Option 1: Deploy to Vercel/Netlify Functions
- Convert to serverless function
- Deploy alongside your Next.js app

### Option 2: Deploy to Railway/Render
- Deploy as a Node.js service
- Set environment variables in dashboard

### Option 3: Deploy to Your Own Server
- Use PM2 or similar process manager
- Set up reverse proxy (nginx)

## Testing

Test the API endpoint:

```bash
curl -X POST http://localhost:3001/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test User",
    "email": "test@example.com",
    "company": "Test Company",
    "phone": "+1234567890",
    "modules": ["CRM & Sales", "Inventory"],
    "message": "Test message",
    "budget": "25k-50k",
    "timeline": "3-6-months"
  }'
```

## Alternative: Using Formspree (No Backend Needed)

If you prefer not to run a backend server, you can use Formspree:

1. Sign up at https://formspree.io
2. Create a form and get your form endpoint
3. Update `NEXT_PUBLIC_CONTACT_API_URL` in `.env.local`:
   ```env
   NEXT_PUBLIC_CONTACT_API_URL=https://formspree.io/f/YOUR_FORM_ID
   ```

The form will automatically work with Formspree's endpoint.

