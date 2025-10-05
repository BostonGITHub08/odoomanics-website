# OdooManics Website

A production-ready, SEO-optimized marketing website for OdooManics - an expert Odoo implementation, customization, and managed hosting partner.

## 🚀 Features

- **Next.js 14** with App Router and TypeScript
- **Tailwind CSS** for responsive design
- **SEO Optimized** with structured data, meta tags, and sitemaps
- **Performance Focused** with Core Web Vitals optimization
- **Accessibility Compliant** with semantic HTML and ARIA labels
- **Multi-location Support** for Pakistan, USA, and Saudi Arabia
- **Comprehensive Content** including modules, industries, and case studies

## 📁 Project Structure

```
odoomanics-website/
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── about/             # About page
│   │   ├── contact/           # Contact page
│   │   ├── odoo-modules/      # Module pages
│   │   ├── globals.css        # Global styles
│   │   ├── layout.tsx         # Root layout
│   │   └── page.tsx           # Home page
│   ├── components/            # React components
│   │   ├── modules/          # Module-specific components
│   │   ├── pages/            # Page-specific components
│   │   ├── sections/         # Homepage sections
│   │   ├── ui/               # Reusable UI components
│   │   ├── ContactForm.tsx   # Contact form
│   │   ├── ContactLocations.tsx
│   │   ├── Footer.tsx
│   │   ├── GoogleAnalytics.tsx
│   │   ├── Header.tsx
│   │   └── StructuredData.tsx
│   ├── content/              # MDX content (future)
│   └── lib/                  # Utility functions
├── public/                   # Static assets
│   └── _assets/             # Images, logos, etc.
├── package.json
├── tailwind.config.ts
├── tsconfig.json
├── next.config.js
└── README.md
```

## 🛠️ Setup & Installation

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd odoomanics-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Setup**
   Create a `.env.local` file in the root directory:
   ```env
   NEXT_PUBLIC_GA_ID=your-google-analytics-id
   NEXT_PUBLIC_SITE_URL=https://odoomanics.com
   NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION=your-verification-code
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🎨 Design System

### Color Palette (Odoo Theme)

- **Primary**: `#714B67` (Odoo Purple)
- **Primary Light**: `#875A7B`
- **Primary Lighter**: `#B5A2B5`
- **Dark Text**: `#1F2937`
- **Light Surface**: `#F7F7F7`
- **White**: `#FFFFFF`

### Typography

- **Font Family**: Inter (Google Fonts)
- **Responsive**: Scales from mobile to desktop
- **Accessibility**: WCAG AA compliant contrast ratios

### Components

- **Buttons**: Primary, Secondary, Outline variants
- **Cards**: Hover effects and consistent spacing
- **Forms**: Accessible form controls with validation
- **Navigation**: Responsive header with mega-menu
- **Sections**: Consistent padding and layout patterns

## 📄 Content Management

### Adding New Pages

1. **Create page directory** in `src/app/`
2. **Add page.tsx** with proper metadata
3. **Update sitemap** in `src/app/sitemap.xml/route.ts`
4. **Add navigation** in `src/components/Header.tsx`

### Adding New Odoo Modules

1. **Create module directory** in `src/app/odoo-modules/[module-name]/`
2. **Add page.tsx** with module-specific content
3. **Use module components** from `src/components/modules/`
4. **Include structured data** for SEO

### Adding Blog Posts

1. **Create MDX file** in `src/content/blog/`
2. **Add frontmatter** with metadata
3. **Use blog components** for consistent formatting
4. **Update blog listing** page

## 🔧 Configuration

### Google Analytics

Set up Google Analytics by adding your tracking ID to `.env.local`:

```env
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

### SEO Configuration

The website includes comprehensive SEO features:

- **Meta Tags**: Dynamic title and description generation
- **Open Graph**: Social media sharing optimization
- **Twitter Cards**: Enhanced Twitter sharing
- **Structured Data**: JSON-LD for rich snippets
- **Sitemap**: Auto-generated XML sitemap
- **Robots.txt**: Search engine crawling instructions

### Logo Integration

To add the OdooManics logo:

1. **Place logo files** in `public/_assets/`
2. **Update logo references** in components:
   - `src/components/Header.tsx`
   - `src/components/Footer.tsx`
   - `src/components/StructuredData.tsx`

## 📊 Performance Optimization

### Core Web Vitals Targets

- **LCP** (Largest Contentful Paint): < 2.5s
- **FID** (First Input Delay): < 100ms
- **CLS** (Cumulative Layout Shift): < 0.1

### Optimization Features

- **Image Optimization**: Next.js automatic optimization
- **Code Splitting**: Automatic route-based splitting
- **Lazy Loading**: Images and components
- **Font Optimization**: Google Fonts with display=swap
- **Static Generation**: Where possible for better performance

## 🌐 Deployment

### Build for Production

```bash
npm run build
```

### Static Export (Recommended)

```bash
npm run export
```

### Deployment Options

1. **Vercel** (Recommended)
   - Connect GitHub repository
   - Automatic deployments on push
   - Built-in performance monitoring

2. **Netlify**
   - Connect repository
   - Configure build settings
   - Custom domain setup

3. **AWS S3 + CloudFront**
   - Upload static files to S3
   - Configure CloudFront distribution
   - Set up custom domain

### Environment Variables for Production

```env
NEXT_PUBLIC_GA_ID=your-production-ga-id
NEXT_PUBLIC_SITE_URL=https://odoomanics.com
NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION=your-verification-code
```

## 📱 Responsive Design

The website is fully responsive with breakpoints:

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## ♿ Accessibility

- **Semantic HTML**: Proper heading hierarchy and landmarks
- **ARIA Labels**: Screen reader support
- **Keyboard Navigation**: Full keyboard accessibility
- **Color Contrast**: WCAG AA compliant
- **Focus Management**: Visible focus indicators

## 🔍 SEO Features

### On-Page SEO

- **Title Tags**: Dynamic, keyword-rich titles
- **Meta Descriptions**: Compelling descriptions under 160 chars
- **Header Tags**: Proper H1-H6 hierarchy
- **Internal Linking**: Strategic cross-linking
- **Image Alt Text**: Descriptive alt attributes

### Technical SEO

- **Structured Data**: Organization, Service, FAQ schemas
- **XML Sitemap**: Auto-generated sitemap
- **Robots.txt**: Search engine instructions
- **Canonical URLs**: Prevent duplicate content
- **Page Speed**: Optimized loading times

## 📞 Business Information

### Contact Details

**Pakistan Headquarters**
- Address: 8 Ghazali Park – Wahdat Road, Lahore, 54000, Pakistan
- Phone: +92 321 5999030
- Email: pk@odoomanics.com

**Operating Office (Pakistan)**
- Address: 347/3B, Main Lahore–Kasur Rd, near Bhabra Market Road, Block M Gulberg III, Lahore, 54000, Pakistan
- Phone: +92 321 5999030

**USA Office**
- Address: 30 Franklin Street, Unit 208, Malden, MA 02148, USA
- Phone: +1 (617) 386-9728
- Email: us@odoomanics.com

**Saudi Arabia Office**
- Address: Al Muruj 12284, Riyadh, Saudi Arabia
- Phone: +966 53 803 4685
- Email: ksa@odoomanics.com

## 🚀 Getting Started Checklist

- [ ] Install dependencies with `npm install`
- [ ] Set up environment variables in `.env.local`
- [ ] Add OdooManics logo to `public/_assets/`
- [ ] Update contact information if needed
- [ ] Configure Google Analytics ID
- [ ] Test all forms and CTAs
- [ ] Verify responsive design on all devices
- [ ] Check SEO meta tags and structured data
- [ ] Run Lighthouse audit for performance
- [ ] Deploy to production environment

## 📈 Analytics & Monitoring

### Google Analytics 4

- **Page Views**: Track all page visits
- **Events**: Form submissions, downloads, CTAs
- **Conversions**: Lead generation tracking
- **Audience**: Geographic and demographic data

### Performance Monitoring

- **Core Web Vitals**: LCP, FID, CLS tracking
- **Page Speed**: Load time monitoring
- **Uptime**: Website availability tracking

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is proprietary to OdooManics. All rights reserved.

## 📞 Support

For technical support or questions about the website:

- **Email**: dev@odoomanics.com
- **Phone**: +92 321 5999030
- **Website**: https://odoomanics.com

---

**Built with ❤️ for Odoo excellence**
