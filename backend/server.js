const express = require('express')
const cors = require('cors')
const nodemailer = require('nodemailer')
const path = require('path')
require('dotenv').config({ path: path.join(__dirname, '.env') })

const app = express()
const PORT = process.env.PORT || 3001

// Middleware
app.use(cors())
app.use(express.json())

// Create SMTP transporter (only if SMTP is configured)
let transporter = null
// Debug: Log environment variables (remove in production)
console.log('SMTP_HOST:', process.env.SMTP_HOST ? 'Set' : 'Not set')
console.log('SMTP_USER:', process.env.SMTP_USER ? 'Set' : 'Not set')
console.log('SMTP_PASSWORD:', process.env.SMTP_PASSWORD ? 'Set' : 'Not set')

if (process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASSWORD) {
  transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: parseInt(process.env.SMTP_PORT || '587'),
    secure: process.env.SMTP_SECURE === 'true', // true for 465, false for other ports
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASSWORD,
    },
  })
  console.log('✅ SMTP configured - emails will be sent')
} else {
  console.log('⚠️  SMTP not configured - form submissions will be logged but emails will not be sent')
  console.log('   To configure SMTP, create a .env file in the backend directory with SMTP settings')
}

// Contact form endpoint
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, company, phone, modules, message, budget, timeline } = req.body

    // Validate required fields
    if (!name || !email) {
      return res.status(400).json({ error: 'Name and email are required' })
    }

    // Format modules list
    const modulesList = modules && modules.length > 0 
      ? modules.join(', ') 
      : 'None selected'

    // Create email content
    const emailContent = `
New Contact Form Submission from OdooManics Website

Contact Information:
- Name: ${name}
- Email: ${email}
- Company: ${company || 'Not provided'}
- Phone: ${phone || 'Not provided'}

Project Details:
- Budget: ${budget || 'Not specified'}
- Timeline: ${timeline || 'Not specified'}
- Modules of Interest: ${modulesList}

Message:
${message || 'No message provided'}

---
This email was sent from the OdooManics contact form.
Submitted at: ${new Date().toLocaleString()}
    `.trim()

    // Send email to admin
    const mailOptions = {
      from: process.env.SMTP_FROM || process.env.SMTP_USER,
      to: process.env.CONTACT_EMAIL || 'info@odoomanics.com',
      replyTo: email,
      subject: `New Contact Form Submission from ${name}${company ? ` - ${company}` : ''}`,
      text: emailContent,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #714B67;">New Contact Form Submission</h2>
          <div style="background: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #333; margin-top: 0;">Contact Information</h3>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
            <p><strong>Company:</strong> ${company || 'Not provided'}</p>
            <p><strong>Phone:</strong> ${phone ? `<a href="tel:${phone}">${phone}</a>` : 'Not provided'}</p>
          </div>
          
          <div style="background: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #333; margin-top: 0;">Project Details</h3>
            <p><strong>Budget:</strong> ${budget || 'Not specified'}</p>
            <p><strong>Timeline:</strong> ${timeline || 'Not specified'}</p>
            <p><strong>Modules of Interest:</strong> ${modulesList}</p>
          </div>
          
          ${message ? `
          <div style="background: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #333; margin-top: 0;">Message</h3>
            <p style="white-space: pre-wrap;">${message}</p>
          </div>
          ` : ''}
          
          <p style="color: #666; font-size: 12px; margin-top: 30px; border-top: 1px solid #ddd; padding-top: 20px;">
            This email was sent from the OdooManics contact form.<br>
            Submitted at: ${new Date().toLocaleString()}
          </p>
        </div>
      `,
    }

    // Try to send emails if SMTP is configured
    if (transporter) {
      try {
        await transporter.sendMail(mailOptions)
        console.log(`✅ Email sent to ${process.env.CONTACT_EMAIL || 'info@odoomanics.com'}`)
      } catch (emailError) {
        console.error('⚠️  Failed to send admin email:', emailError.message)
        // Continue even if email fails
      }

      // Send confirmation email to the user
      try {
        const confirmationMailOptions = {
          from: process.env.SMTP_FROM || process.env.SMTP_USER,
          to: email,
          subject: 'Thank you for contacting OdooManics',
          text: `
Thank you for contacting OdooManics!

We've received your inquiry and our team will get back to you within 24 hours.

Your submission details:
- Name: ${name}
- Company: ${company || 'Not provided'}
- Modules of Interest: ${modulesList}

If you have any urgent questions, please feel free to contact us directly:
- Email: info@odoomanics.com
- Phone: +92 321 5999030

Best regards,
The OdooManics Team
          `.trim(),
          html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
              <h2 style="color: #714B67;">Thank you for contacting OdooManics!</h2>
              <p>We've received your inquiry and our team will get back to you within 24 hours.</p>
              
              <div style="background: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
                <h3 style="color: #333; margin-top: 0;">Your Submission Details</h3>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Company:</strong> ${company || 'Not provided'}</p>
                <p><strong>Modules of Interest:</strong> ${modulesList}</p>
              </div>
              
              <p>If you have any urgent questions, please feel free to contact us directly:</p>
              <ul>
                <li>Email: <a href="mailto:info@odoomanics.com">info@odoomanics.com</a></li>
                <li>Phone: <a href="tel:+923215999030">+92 321 5999030</a></li>
              </ul>
              
              <p style="margin-top: 30px;">Best regards,<br>The OdooManics Team</p>
            </div>
          `,
        }
        await transporter.sendMail(confirmationMailOptions)
        console.log(`✅ Confirmation email sent to ${email}`)
      } catch (emailError) {
        console.error('⚠️  Failed to send confirmation email:', emailError.message)
        // Continue even if email fails
      }
    } else {
      // Log the submission if SMTP is not configured
      console.log('\n📧 Contact Form Submission (SMTP not configured - email not sent):')
      console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━')
      console.log(`Name: ${name}`)
      console.log(`Email: ${email}`)
      console.log(`Company: ${company || 'Not provided'}`)
      console.log(`Phone: ${phone || 'Not provided'}`)
      console.log(`Budget: ${budget || 'Not specified'}`)
      console.log(`Timeline: ${timeline || 'Not specified'}`)
      console.log(`Modules: ${modulesList}`)
      console.log(`Message: ${message || 'No message provided'}`)
      console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n')
    }

    res.status(200).json({ message: 'Form submitted successfully' })
  } catch (error) {
    console.error('Error sending email:', error)
    res.status(500).json({ error: 'Failed to send email. Please try again later.' })
  }
})

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ status: 'ok', message: 'Contact form API is running' })
})

app.listen(PORT, () => {
  console.log(`Contact form API server running on port ${PORT}`)
  console.log(`Health check: http://localhost:${PORT}/health`)
})

