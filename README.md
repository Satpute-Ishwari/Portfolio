# Ishwari's Developer Portfolio

A modern, professional portfolio website built with React and Tailwind CSS. Features a cybersecurity-inspired dark theme with glassmorphism effects, smooth animations, and a responsive design.

## 🎨 Design Features

- **Dark Theme**: Black and deep blue gradient background
- **Glassmorphism**: Glass-effect cards with frosted glass appearance
- **Neon Glow Effects**: Cyan/blue neon highlights and glow shadows
- **Smooth Animations**:
  - Fade-in on scroll
  - Hover effects on cards (glow & scale)
  - Typing effect for intro text
  - Animated gradient background
  - Smooth transitions
- **Fully Responsive**: Mobile-first design approach
- **Sticky Navigation**: Scrollable navbar with smooth transitions

## 🚀 Tech Stack

- **React 18**: UI library
- **Vite**: Build tool & dev server
- **Tailwind CSS**: Utility-first CSS framework
- **Lucide React**: Icon library
- **Modern CSS**: Custom animations and effects

## 📦 Project Structure

```
portfolio/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx           # Sticky navbar with responsive menu
│   │   ├── Hero.jsx             # Hero section with typing effect
│   │   ├── About.jsx            # About section with skills overview
│   │   ├── Projects.jsx         # Featured projects showcase
│   │   ├── Skills.jsx           # Skills grid with categories
│   │   ├── Contact.jsx          # Contact form & social links
│   │   ├── ScrollAnimated.jsx   # Scroll animation HOC
│   │   └── FloatingElements.jsx # Background decorative elements
│   ├── App.jsx                  # Main app component
│   ├── main.jsx                 # React entry point
│   └── index.css                # Global styles & animations
├── index.html                   # HTML template
├── vite.config.js              # Vite configuration
├── tailwind.config.js          # Tailwind CSS configuration
├── postcss.config.js           # PostCSS configuration
├── package.json                # Dependencies & scripts
└── README.md                   # This file
```

## 🎯 Sections

### 1. **Hero Section**
- Name display: "Ishwari"
- Dynamic title with typing effect
- Tagline about full-stack development
- Call-to-action buttons
- Smooth scroll indicator

### 2. **About Section**
- Professional bio
- Key skill highlights
- Visual card with emoji icons
- Three main focus areas

### 3. **Projects Section**
- Featured project (CTI-MAF)
- Project cards with descriptions
- Technology stack badges
- GitHub and live demo links
- Hover animations

### 4. **Skills Section**
- 6 skill categories:
  - Frontend Development
  - Backend Development
  - Databases & Storage
  - AI & Machine Learning
  - Cybersecurity
  - Tools & DevOps
- Modern badge design
- Proficiency stats

### 5. **Contact Section**
- Contact form with validation
- Social links (GitHub, LinkedIn, Email)
- Quick contact cards
- Success message on submission
- Response time info

## 🛠️ Installation & Setup

### Prerequisites
- Node.js 16+ 
- npm or yarn

### Steps

1. **Navigate to project directory**
   ```bash
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```
   The site will open at `http://localhost:3000`

4. **Build for production**
   ```bash
   npm run build
   ```

5. **Preview production build**
   ```bash
   npm run preview
   ```

## 🎨 Customization

### Update Personal Information

Edit the following files:

- **Hero Section**: `src/components/Hero.jsx`
  - Update name, title, and tagline
  
- **About Section**: `src/components/About.jsx`
  - Modify bio and key highlights

- **Projects**: `src/components/Projects.jsx`
  - Add/remove projects
  - Update GitHub and live demo links

- **Skills**: `src/components/Skills.jsx`
  - Add/remove skills by category
  - Change icons (emoji)

- **Contact**: `src/components/Contact.jsx`
  - Update email, GitHub, LinkedIn URLs
  - Configure form submission

### Customize Colors

Edit `tailwind.config.js` to change the color scheme:

```javascript
colors: {
  'neon-blue': '#00bfff',      // Primary blue
  'neon-cyan': '#00d4ff',      // Cyan highlight
  'dark-bg': '#0a0e27',        // Background
  'dark-card': '#161b39',      // Card background
  'dark-border': '#1f2749',    // Border color
}
```

### Modify Animations

Customize animations in `src/index.css` or `tailwind.config.js`:
- `fadeIn`: Fade in with translate
- `glowPulse`: Pulsing glow effect
- `slideUp`: Sliding up animation
- `typing`: Typing effect

## 📱 Responsive Design

- **Mobile**: Optimized for small screens
- **Tablet**: Enhanced layout for mid-size screens
- **Desktop**: Full-featured desktop experience
- Sticky mobile menu with smooth transitions

## ⚡ Performance

- Optimized images and icons
- CSS animations use GPU acceleration
- Lazy loading for scroll animations
- Minimal JavaScript bundle
- Fast load times with Vite

## 🔐 Security

- No external CDN dependencies (except fonts)
- Content Security Policy friendly
- XSS protection with React's built-in escaping
- No sensitive data hardcoding

## 📄 License

This project is open source and available for personal use.

## 👨‍💻 Author

**Ishwari** - Full Stack Developer | AI & Cybersecurity Enthusiast

- GitHub: [@ishwari](https://github.com/ishwari)
- LinkedIn: [Ishwari](https://linkedin.com/in/ishwari)
- Email: hello@ishwari.dev

## 🤝 Support

For issues or suggestions, please reach out or submit an issue.

---

Built with ❮3 using React & Tailwind CSS
