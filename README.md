# ECG TJNC Web2 - Church Website

A modern, responsive website for ECG TJNC USA Church (Enlightened Christian Gathering - The Jesus Nation Church) built with React, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Modern Design**: Clean, professional design with smooth animations
- **Responsive**: Fully responsive design that works on all devices
- **Interactive Components**: Hero slider, leadership carousel, location finder
- **SEO Optimized**: Built-in SEO with meta tags and structured data
- **Performance**: Optimized images and lazy loading
- **Accessibility**: WCAG compliant with proper ARIA labels

## 🛠️ Tech Stack

- **Frontend**: React 18, TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Carousel/Slider**: Swiper.js
- **Icons**: Lucide React
- **SEO**: React Helmet Async
- **Build Tool**: Vite
- **Linting**: ESLint + Prettier

## 📦 Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd ecg-tjnc-web2
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:5173`

## 🏗️ Build & Deploy

### Development
```bash
npm run dev          # Start development server
npm run lint         # Run ESLint
npm run format       # Format code with Prettier
npm run typecheck    # Run TypeScript type checking
```

### Production
```bash
npm run build        # Build for production
npm run preview      # Preview production build locally
```

The build output will be in the `dist/` directory, ready for deployment to any static hosting service.

## 📁 Project Structure

```
src/
├── components/           # React components
│   ├── ModernHeader.tsx     # Navigation header
│   ├── HeroSlider.tsx       # Hero section with slides
│   ├── WelcomeSection.tsx   # Welcome/intro section
│   ├── PresidentsMessage.tsx # President's message
│   ├── Mission.tsx          # Mission, vision, values
│   ├── Ministries.tsx       # Church ministries
│   ├── LeadershipSlider.tsx # Leadership team
│   ├── CampusSlider.tsx     # Church locations
│   ├── Events.tsx           # Upcoming events
│   ├── Testimonials.tsx     # Member testimonials
│   ├── MobileAppPromo.tsx   # Mobile app promotion
│   ├── Give.tsx             # Donation section
│   ├── Footer.tsx           # Site footer
│   ├── ContactForm.tsx      # Contact form
│   ├── NewsletterSignup.tsx # Newsletter subscription
│   ├── ScrollToTop.tsx      # Scroll to top button
│   └── SEOHead.tsx          # SEO meta tags
├── App.tsx              # Main app component
├── main.tsx             # App entry point
└── index.css            # Global styles
```

## 🎨 Customization

### Colors
The site uses a blue and yellow color scheme defined in Tailwind CSS:
- Primary Blue: `#04198C` (blue-900)
- Secondary Yellow: `#fbbf24` (yellow-400)

### Content
Update content in the respective component files:
- Church information: `src/components/WelcomeSection.tsx`
- Leadership team: `src/components/LeadershipSlider.tsx`
- Locations: `src/components/CampusSlider.tsx`
- Events: `src/components/Events.tsx`

### Images
Replace placeholder images with actual church photos. Update image URLs in component files.

## 🔧 Configuration

### Site Metadata
Update site information in:
- `index.html` - Page title and meta tags
- `src/components/SEOHead.tsx` - SEO configuration
- `package.json` - Project details

### Contact Information
Update contact details in:
- `src/components/Footer.tsx`
- `src/components/ContactForm.tsx`

## 📱 Mobile App Integration

The site includes a mobile app promotion section. Update the download links in `src/components/MobileAppPromo.tsx` when the mobile app is available.

## 🌐 Deployment

This is a static site that can be deployed to:
- **Netlify**: Connect your Git repository for automatic deployments
- **Vercel**: Import project and deploy with zero configuration
- **GitHub Pages**: Use GitHub Actions for automated deployment
- **AWS S3 + CloudFront**: For enterprise hosting

### Environment Variables
Create a `.env` file for any environment-specific configuration:
```env
VITE_SITE_URL=https://your-domain.com
VITE_CONTACT_EMAIL=contact@your-church.org
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/new-feature`
3. Commit changes: `git commit -am 'Add new feature'`
4. Push to branch: `git push origin feature/new-feature`
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 📞 Support

For support or questions about this website, please contact:
- Email: info@ecg-usa.org
- Phone: +1 508-361-4307

---

Built with ❤️ for ECG TJNC USA Church