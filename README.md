# Personal Portfolio Website

A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS. Perfect for showcasing your professional experience, personal projects, and skills to potential employers.

## ✨ Features

- **Modern Design**: Clean, professional design with smooth animations
- **Fully Responsive**: Looks great on desktop, tablet, and mobile devices
- **Easy to Customize**: Simple data-driven approach for easy content updates
- **Photo Support**: Easy image integration for projects and profile photos
- **SEO Optimized**: Built-in SEO best practices with Next.js
- **Free Hosting Ready**: Optimized for deployment on Vercel, Netlify, or GitHub Pages

## 🚀 Quick Start

### 1. Clone and Install

```bash
git clone <your-repo-url>
cd my-portfolio
npm install
```

### 2. Customize Your Content

Edit the file `/src/data/portfolio.ts` to add your information:

```typescript
// Update with your personal information
export const personalInfo: PersonalInfo = {
  name: "Your Name",
  title: "Your Job Title",
  email: "your.email@example.com",
  // ... add your details
};

// Add your work experience
export const professionalExperience: Experience[] = [
  {
    title: "Your Job Title",
    company: "Company Name",
    duration: "2022 - Present",
    description: "What you did in this role...",
    // ... more details
  }
];

// Add your projects, education, etc.
export const personalExperience: Experience[] = [
  // Your projects and personal experiences
];
```

### 3. Add Your Photos

1. Place your images in `/public/images/`
2. Update the image paths in `/src/data/portfolio.ts`
3. See `/public/images/README.md` for image guidelines

### 4. Run Locally

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to see your portfolio.

## 📁 Project Structure

```
my-portfolio/
├── src/
│   ├── app/                 # Next.js app directory
│   │   ├── page.tsx        # Home page
│   │   ├── about/          # About me page
│   │   ├── professional/   # Professional experience page
│   │   └── personal/       # Personal experience page
│   ├── components/         # Reusable React components
│   └── data/              # Portfolio content (EDIT THIS!)
├── public/
│   └── images/            # Your photos and images
└── ...config files
```

## 🌐 Free Hosting Options

### Option 1: Vercel (Recommended)

Vercel is the easiest option since it's made by the Next.js team:

1. Push your code to GitHub
2. Visit [vercel.com](https://vercel.com)
3. Sign up with your GitHub account
4. Click "New Project" and select your repository
5. Deploy! Your site will be live in minutes

### Option 2: Netlify

1. Push your code to GitHub
2. Visit [netlify.com](https://netlify.com)
3. Sign up and connect your GitHub account
4. Add build settings:
   - Build command: `npm run build`
   - Publish directory: `out`
5. Add this to your `next.config.ts`:
   ```typescript
   const nextConfig = {
     output: 'export',
     trailingSlash: true,
     images: { unoptimized: true }
   };
   ```

### Option 3: GitHub Pages

1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add to your `package.json` scripts:
   ```json
   "scripts": {
     "export": "next build && next export",
     "deploy": "npm run export && gh-pages -d out"
   }
   ```
3. Run: `npm run deploy`

## 🎨 Customization

### Colors and Styling

The site uses Tailwind CSS. To change colors:

1. Edit the Tailwind classes in the component files
2. Primary blue: `bg-blue-600`, `text-blue-600`, etc.
3. You can also customize Tailwind in `tailwind.config.js`

### Adding New Sections

1. Create a new component in `/src/components/`
2. Add it to one of the page files in `/src/app/`
3. Update the data structure in `/src/data/portfolio.ts` if needed

### Navigation

Edit the navigation items in `/src/components/Navbar.tsx`:

```typescript
const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Professional Experience', href: '/professional' },
  { name: 'Personal Experience', href: '/personal' },
  { name: 'About Me', href: '/about' },
  // Add more pages here
];
```

## 📱 Pages Overview

- **Home (/)**: Hero section with your intro, skills overview, and contact preview
- **Professional (/professional)**: Your work experience and career achievements
- **Personal (/personal)**: Personal projects, education, certifications
- **About (/about)**: Detailed bio, skills breakdown, and contact information

## 🔧 Available Scripts

- `npm run dev` - Run development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 💡 Tips for Success

1. **Keep it updated**: Regularly update your experience and projects
2. **Use quality images**: Professional photos make a big difference
3. **Write compelling descriptions**: Focus on achievements and impact
4. **Include metrics**: "Improved performance by 40%" is better than "Improved performance"
5. **Proofread**: Check for typos and grammar errors
6. **Test on mobile**: Many recruiters view portfolios on phones

## 🤝 Contributing

Feel free to submit issues or pull requests to improve this template!

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

**Ready to showcase your skills?** Update your content and deploy your portfolio today! 🚀
