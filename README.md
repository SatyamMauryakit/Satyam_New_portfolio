# 🚀 Satyam Maurya - DevFolio Portfolio

A modern, interactive portfolio website showcasing both **Full-Stack Development** and **DevOps Engineering** expertise with dynamic mode switching, 3D animations, and glass morphism UI design.

![Portfolio Preview](https://img.shields.io/badge/Status-Live-brightgreen) ![Next.js](https://img.shields.io/badge/Next.js-15.4.6-black) ![React](https://img.shields.io/badge/React-19.1.0-blue) ![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)

## ✨ Features

### 🎯 **Dual Mode Portfolio**
- **Developer Mode**: Showcases full-stack development projects, React expertise, and modern web technologies
- **DevOps Mode**: Highlights infrastructure automation, cloud platforms, and CI/CD pipelines
- **Seamless Toggle**: Switch between modes with smooth animations and content transitions

### 🎨 **Modern UI/UX**
- **Glass Morphism Design**: Beautiful frosted glass effects with backdrop blur
- **3D Interactive Elements**: React Three Fiber powered 3D hero sections
- **Responsive Layout**: Mobile-first design that works on all devices
- **Smooth Animations**: Framer Motion powered transitions and micro-interactions
- **Dark Theme**: Elegant dark mode with gradient backgrounds

### 🛠️ **Interactive Components**
- **Dynamic Navbar**: Sticky navigation with scroll effects and mobile menu
- **3D Hero Section**: Mode-specific 3D animations (Developer/DevOps)
- **Skills Showcase**: Animated skill cards with proficiency levels
- **Project Gallery**: Interactive project cards with live demos and GitHub links
- **Experience Timeline**: Professional experience with role-specific content
- **Testimonials**: Client feedback with profile images
- **Contact Form**: Functional contact form with email integration

## 🛠️ Tech Stack

### **Frontend**
- **Framework**: Next.js 15.4.6 with App Router
- **UI Library**: React 19.1.0
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS 4.1.12
- **Animations**: Framer Motion 12.23.12
- **3D Graphics**: React Three Fiber & Drei
- **Icons**: Lucide React

### **State Management**
- **Global State**: Zustand 5.0.7
- **Mode Switching**: Custom store for Developer/DevOps toggle

### **Development Tools**
- **Build Tool**: Next.js with TypeScript
- **Styling**: PostCSS with Tailwind CSS
- **Code Quality**: ESLint with Next.js config
- **Package Manager**: npm

## 📁 Project Structure

```
devfolio/
├── app/                    # Next.js App Router
│   ├── globals.css        # Global styles with custom gradients
│   ├── layout.tsx         # Root layout with metadata
│   └── page.tsx           # Main page component
├── components/            # React components
│   ├── Contact.tsx        # Contact form section
│   ├── Experience.tsx     # Professional experience
│   ├── Footer.tsx         # Site footer
│   ├── Hero.tsx           # 3D hero section with typing animation
│   ├── Hero3DDeveloper.tsx # Developer mode 3D scene
│   ├── Hero3DDevOps.tsx   # DevOps mode 3D scene
│   ├── Navbar.tsx         # Navigation with mode toggle
│   ├── Projects.tsx       # Project showcase
│   ├── Section.tsx        # Reusable section wrapper
│   ├── Skills.tsx         # Skills and technologies
│   └── Testimonials.tsx   # Client testimonials
├── lib/                   # Utilities and data
│   ├── data.ts           # Portfolio content (projects, skills, etc.)
│   └── modeStore.ts      # Zustand store for mode management
├── public/               # Static assets
│   ├── file.svg
│   ├── globe.svg
│   ├── next.svg
│   ├── resume.pdf
│   ├── vercel.svg
│   └── window.svg
├── next.config.ts        # Next.js configuration
├── tailwind.config.ts    # Tailwind CSS configuration
├── tsconfig.json         # TypeScript configuration
├── postcss.config.mjs    # PostCSS configuration
└── package.json          # Dependencies and scripts
```

## 🚀 Getting Started

### **Prerequisites**
- Node.js 18+ 
- npm, yarn, pnpm, or bun

### **Installation**

1. **Clone the repository**
```bash
git clone https://github.com/SatyamMauryakit/devfolio.git
cd devfolio
```

2. **Install dependencies**
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. **Run the development server**
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. **Open your browser**
Navigate to [http://localhost:3000](http://localhost:3000)

### **Build for Production**
```bash
npm run build
npm run start
```

## 🎨 Customization

### **Content Management**
All portfolio content is managed in `lib/data.ts`:

- **Hero Content**: Titles, descriptions, and CTAs for both modes
- **Skills**: Technical skills with proficiency levels
- **Projects**: Project details, tech stacks, and links
- **Experience**: Professional experience and achievements
- **Testimonials**: Client feedback and reviews

### **Styling**
- **Colors**: Customize theme colors in `tailwind.config.ts`
- **Animations**: Modify animations in `tailwind.config.ts` keyframes
- **Global Styles**: Update `app/globals.css` for background gradients

### **Mode Configuration**
Toggle between Developer and DevOps modes using the `useModeStore` in `lib/modeStore.ts`

## 📱 Responsive Design

- **Mobile**: Optimized for phones (320px+)
- **Tablet**: Enhanced layout for tablets (768px+)
- **Desktop**: Full-featured experience (1024px+)
- **Large Screens**: Optimized for 4K displays (1920px+)

## 🌟 Key Features Breakdown

### **Dynamic Mode Switching**
```typescript
// Toggle between Developer and DevOps content
const { mode, setMode, toggle } = useModeStore();
```

### **3D Hero Animations**
- Developer Mode: Interactive 3D elements with React Three Fiber
- DevOps Mode: Animated cloud infrastructure visualization

### **Typing Animation**
- Dynamic role titles with typewriter effect
- Mode-specific job titles and descriptions

### **Glass Morphism UI**
- Backdrop blur effects
- Transparent backgrounds with borders
- Smooth hover transitions

## 🚀 Deployment

### **Vercel (Recommended)**
```bash
npm run build
# Deploy to Vercel
```

### **Other Platforms**
- **Netlify**: Static site deployment
- **GitHub Pages**: Static hosting
- **Docker**: Containerized deployment

## 📊 Performance

- **Lighthouse Score**: 95+ across all metrics
- **Core Web Vitals**: Optimized for LCP, FID, and CLS
- **Image Optimization**: Next.js automatic image optimization
- **Code Splitting**: Automatic route-based code splitting

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Satyam Maurya**
- Portfolio: [Your Portfolio URL]
- GitHub: [@SatyamMauryakit](https://github.com/SatyamMauryakit)
- LinkedIn: [Your LinkedIn Profile]
- Email: [Your Email]

## 🙏 Acknowledgments

- **Next.js Team** for the amazing framework
- **Vercel** for hosting and deployment
- **Framer Motion** for smooth animations
- **React Three Fiber** for 3D graphics
- **Tailwind CSS** for utility-first styling

---

⭐ **Star this repository if you found it helpful!**
