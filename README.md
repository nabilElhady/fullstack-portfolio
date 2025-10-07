# Nabil Elhady - Full Stack Developer Portfolio

A modern, performant portfolio website built with Next.js, React, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Modern Tech Stack**: Built with Next.js 13, React 18, TypeScript, and Tailwind CSS
- **Performance Optimized**: 
  - Image optimization with Next.js Image component
  - Code splitting and lazy loading
  - SWC minification
  - Compressed assets
- **SEO Optimized**:
  - Comprehensive meta tags
  - Open Graph tags for social media
  - Structured data (JSON-LD)
  - Semantic HTML
- **Accessibility**: ARIA labels, semantic HTML, keyboard navigation support
- **Responsive Design**: Mobile-first approach, works on all devices
- **Smooth Animations**: Framer Motion for fluid page transitions
- **Interactive UI**: Typewriter effects, hover states, smooth scrolling

## 📦 Tech Stack

### Frontend
- **Framework**: Next.js 13
- **UI Library**: React 18
- **Language**: TypeScript
- **Styling**: Tailwind CSS, SASS
- **Animations**: Framer Motion
- **Icons**: Heroicons, React Social Icons

### Backend & Services
- **Form Handling**: React Hook Form
- **Image Hosting**: External CDN services
- **Deployment**: Firebase/Vercel ready

## 🛠️ Installation

1. Clone the repository:
```bash
git clone https://github.com/nabilElhady/fullstack-portfolio.git
cd fullstack-portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Create environment file (optional):
```bash
cp .env.local.example .env.local
```

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📝 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint
- `npm run deploy` - Deploy to Firebase

## 🌟 Sections

1. **Hero** - Introduction with typewriter effect
2. **About** - Professional background and skills
3. **Experiences** - Client reviews and testimonials
4. **Skills** - Technical skills with interactive icons
5. **Projects** - Portfolio projects with live demos
6. **Contact** - Contact form and information

## 🎨 Customization

### Personal Information
Update your information in:
- `components/Hero.tsx` - Name and tagline
- `components/About.tsx` - Bio and background
- `components/ContactMe.tsx` - Contact details
- `pages/index.tsx` - Meta tags

### Projects
Edit the `projectss` array in `components/Projects.tsx` to add/modify your projects.

### Skills
Update the skill icons in `components/Skills.tsx`.

## 🚢 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Import your repository in Vercel
3. Deploy automatically

### Firebase
```bash
npm run deploy
```

## 📊 Performance

- **Lighthouse Score**: 95+ (Performance)
- **Image Optimization**: Next.js Image component with WebP/AVIF
- **Bundle Size**: Optimized with tree shaking and code splitting
- **Loading Time**: < 2s on 3G

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 📄 License

This project is [MIT](LICENSE) licensed.

## 👨‍💻 Author

**Nabil Elhady**
- GitHub: [@nabilElhady](https://github.com/nabilElhady)
- LinkedIn: [Nabil Elhady](https://www.linkedin.com/in/nabil-elhady-1962b4215/)
- Email: nabilelhady73@gmail.com

---

⭐ Star this repo if you find it helpful!
