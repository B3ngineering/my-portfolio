// Portfolio data configuration - easily editable content

export interface Experience {
  id: string;
  title: string;
  company?: string;
  organization?: string;
  duration: string;
  description: string;
  technologies?: string[];
  image?: string;
  highlights?: string[];
}

export interface PersonalInfo {
  name: string;
  title: string;
  email: string;
  phone?: string;
  location: string;
  linkedin?: string;
  github?: string;
  website?: string;
  bio: string;
  profileImage?: string;
}

// Personal Information - Update this with your details
export const personalInfo: PersonalInfo = {
  name: "Your Name",
  title: "Software Developer",
  email: "your.email@example.com",
  phone: "+1 (555) 123-4567",
  location: "Your City, State",
  linkedin: "https://linkedin.com/in/yourprofile",
  github: "https://github.com/yourusername",
  website: "https://yourwebsite.com",
  bio: "Passionate software developer with expertise in modern web technologies. I love creating intuitive user experiences and solving complex problems through clean, efficient code.",
  profileImage: "/images/profile.jpg" // Add your profile photo to public/images/
};

// Professional Experience - Add your work experience here
export const professionalExperience: Experience[] = [
  {
    id: "job1",
    title: "Senior Software Developer",
    company: "Tech Company Inc.",
    duration: "2022 - Present",
    description: "Lead development of scalable web applications using React, Node.js, and cloud technologies. Collaborated with cross-functional teams to deliver high-quality products.",
    technologies: ["React", "TypeScript", "Node.js", "AWS", "PostgreSQL"],
    image: "/images/company1.jpg",
    highlights: [
      "Improved application performance by 40%",
      "Led a team of 5 developers",
      "Implemented CI/CD pipelines reducing deployment time by 60%"
    ]
  },
  {
    id: "job2",
    title: "Frontend Developer",
    company: "Digital Agency",
    duration: "2020 - 2022",
    description: "Developed responsive web applications and user interfaces for various clients. Specialized in React and modern CSS frameworks.",
    technologies: ["React", "JavaScript", "CSS", "Tailwind CSS", "Git"],
    image: "/images/company2.jpg",
    highlights: [
      "Built 15+ client websites",
      "Achieved 98% client satisfaction rate",
      "Mentored junior developers"
    ]
  }
];

// Personal Projects & Experiences - Add your side projects, education, etc.
export const personalExperience: Experience[] = [
  {
    id: "project1",
    title: "E-commerce Platform",
    organization: "Personal Project",
    duration: "2023",
    description: "Built a full-stack e-commerce platform with user authentication, payment processing, and admin dashboard.",
    technologies: ["Next.js", "TypeScript", "Stripe", "Prisma", "PostgreSQL"],
    image: "/images/project1.jpg",
    highlights: [
      "Integrated Stripe payment processing",
      "Implemented real-time inventory management",
      "Deployed on Vercel with 99.9% uptime"
    ]
  },
  {
    id: "education1",
    title: "Bachelor of Computer Science",
    organization: "University Name",
    duration: "2016 - 2020",
    description: "Focused on software engineering, algorithms, and web development. Graduated Magna Cum Laude.",
    image: "/images/university.jpg",
    highlights: [
      "GPA: 3.8/4.0",
      "Dean's List: 6 semesters",
      "President of Computer Science Club"
    ]
  },
  {
    id: "project2",
    title: "Weather App",
    organization: "Open Source",
    duration: "2023",
    description: "React Native mobile app providing weather forecasts with beautiful animations and offline capability.",
    technologies: ["React Native", "TypeScript", "Weather API", "Expo"],
    image: "/images/weather-app.jpg",
    highlights: [
      "500+ downloads on app stores",
      "Featured in local tech newsletter",
      "Offline functionality with local storage"
    ]
  }
];

// Skills categories
export const skills = {
  frontend: ["React", "Next.js", "TypeScript", "JavaScript", "HTML5", "CSS3", "Tailwind CSS", "Sass"],
  backend: ["Node.js", "Python", "Express.js", "REST APIs", "GraphQL"],
  database: ["PostgreSQL", "MongoDB", "Prisma", "Supabase"],
  tools: ["Git", "Docker", "AWS", "Vercel", "Figma", "VS Code"],
  mobile: ["React Native", "Expo"]
};
