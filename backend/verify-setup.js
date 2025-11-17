const fs = require('fs')
const path = require('path')

console.log('🔍 Verifying Backend Setup...\n')

const envPath = path.join(__dirname, '.env')

// Check if .env exists
if (fs.existsSync(envPath)) {
  console.log('✅ .env file exists')
  const envContent = fs.readFileSync(envPath, 'utf8')
  
  // Check for required variables
  const required = [
    'SMTP_HOST',
    'SMTP_PORT',
    'SMTP_USER',
    'SMTP_PASSWORD',
    'CONTACT_EMAIL',
    'PORT'
  ]
  
  let allPresent = true
  required.forEach(key => {
    if (envContent.includes(key + '=')) {
      console.log(`✅ ${key} is configured`)
    } else {
      console.log(`❌ ${key} is missing`)
      allPresent = false
    }
  })
  
  if (allPresent) {
    console.log('\n✅ All required environment variables are set!')
    console.log('\n📝 Next steps:')
    console.log('   1. Run: npm install')
    console.log('   2. Run: npm start')
    console.log('   3. Server will run on http://localhost:3001')
  } else {
    console.log('\n❌ Some environment variables are missing')
    console.log('   Run: npm run setup (or create .env manually)')
  }
} else {
  console.log('❌ .env file not found')
  console.log('   Run: npm run setup (or create .env manually)')
}

console.log('\n')

