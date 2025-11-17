const fs = require('fs')
const path = require('path')

const envContent = `# SMTP Configuration
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
`

const envPath = path.join(__dirname, '.env')

if (!fs.existsSync(envPath)) {
  fs.writeFileSync(envPath, envContent)
  console.log('✅ .env file created successfully!')
  console.log('📧 SMTP configured: smtp.odoomanics.com')
  console.log('📬 Contact email: info@odoomanics.com')
  console.log('\n🚀 Next steps:')
  console.log('   1. Run: npm install')
  console.log('   2. Run: npm start')
  console.log('   3. Server will run on http://localhost:3001')
} else {
  console.log('⚠️  .env file already exists. Skipping creation.')
  console.log('   If you need to update it, edit backend/.env manually')
}

