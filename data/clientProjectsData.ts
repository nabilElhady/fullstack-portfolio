export interface ClientProject {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  achievements: {
    metric: string;
    label: string;
    icon: string;
  }[];
  technologies: string[];
  techIcons: string[];
  challenges: string[];
  status: "production" | "ongoing" | "completed";
  duration?: string;
}

export const clientProjects: ClientProject[] = [
  {
    id: "resume-platform",
    title: "Resume/CV Platform",
    subtitle: "High-Traffic Production System",
    description:
      "Built a production resume creation platform from scratch including custom PDF generation engine, RESTful APIs, authentication system, and AWS serverless infrastructure.",
    achievements: [
      { metric: "10K+", label: "Daily Requests", icon: "📊" },
      { metric: "85%", label: "Query Speed Improvement", icon: "⚡" },
      { metric: "40%", label: "Faster PDF Processing", icon: "📄" },
      { metric: "29hrs", label: "Weekly Maintenance Saved", icon: "⏱️" },
    ],
    technologies: [
      "Node.js",
      "Express",
      "PostgreSQL",
      "AWS Lambda",
      "API Gateway",
      "S3",
      "Cognito",
    ],
    techIcons: [
      "https://img.icons8.com/?size=48&id=54087&format=png",
      "https://cdn.iconscout.com/icon/premium/png-512-thumb/express-js-11217528-9200532.png?f=webp&w=256",
      "https://cdn.iconscout.com/icon/free/png-512/free-postgresql-logo-icon-download-in-svg-png-gif-file-formats--wordmark-programming-langugae-freebies-pack-logos-icons-1175119.png?f=webp&w=256",
      "https://i.ibb.co/x8Hy4Mdx/Lambda.png",
      "https://i.ibb.co/Kp93nxtg/API-Gateway.png",
      "https://i.ibb.co/6c28zP5R/Simple-Storage-Service.png",
    ],
    challenges: [
      "Optimized database queries from 800ms to 120ms",
      "Built custom PDF generation with proper encoding",
      "Implemented compound indexing strategy",
      "Designed REST API with 20+ endpoints",
    ],
    status: "production",
  },
  {
    id: "engagement-tracker",
    title: "Social Engagement Tracker",
    subtitle: "Event-Driven CRM System",
    description:
      "Built an event-driven CRM that polls social APIs every 2 minutes, processes engagement data with AI classification, and identifies sales opportunities. Running continuously for 8+ months.",
    achievements: [
      { metric: "8+", label: "Months Uptime", icon: "🟢" },
      { metric: "2min", label: "Poll Interval", icon: "🔄" },
      { metric: "24/7", label: "Continuous Operation", icon: "⏰" },
      { metric: "0", label: "Crashes", icon: "🛡️" },
    ],
    technologies: [
      "Node.js",
      "BullMQ",
      "Redis",
      "MongoDB",
      "OpenAI API",
      "Winston",
    ],
    techIcons: [
      "https://img.icons8.com/?size=48&id=54087&format=png",
      "https://cdn.iconscout.com/icon/free/png-512/free-redis-logo-icon-download-in-svg-png-gif-file-formats--wordmark-programming-langugae-freebies-pack-logos-icons-1175105.png?f=webp&w=256",
      "https://cdn.iconscout.com/icon/free/png-512/free-mongodb-logo-icon-download-in-svg-png-gif-file-formats--wordmark-programming-langugae-freebies-pack-logos-icons-1175140.png?f=webp&w=256",
    ],
    challenges: [
      "Built event-driven architecture with BullMQ",
      "Implemented AI classification with OpenAI",
      "Designed deduplication logic for events",
      "Rate limiting with exponential backoff",
    ],
    status: "production",
    duration: "8+ months running",
  },
  {
    id: "ai-exam-platform",
    title: "AI Exam Platform",
    subtitle: "Medical/Professional Certification Prep",
    description:
      "AI-powered exam platform with 5 study modes, adaptive difficulty, AI question generation, and comprehensive admin system. Built with Supabase Edge Functions and Claude AI.",
    achievements: [
      { metric: "29", label: "API Endpoints", icon: "🔌" },
      { metric: "5", label: "Study Modes", icon: "📚" },
      { metric: "20+", label: "Exam Types", icon: "📝" },
      { metric: "60+", label: "Files Created", icon: "📁" },
    ],
    technologies: [
      "Node.js",
      "Express",
      "Supabase",
      "PostgreSQL",
      "Claude AI",
      "Zod",
      "JWT",
    ],
    techIcons: [
      "https://img.icons8.com/?size=48&id=54087&format=png",
      "https://cdn.iconscout.com/icon/premium/png-512-thumb/express-js-11217528-9200532.png?f=webp&w=256",
      "https://seeklogo.com/images/S/supabase-logo-DCC676FFE2-seeklogo.com.png",
    ],
    challenges: [
      "Integrated Claude AI for question generation",
      "Built RBAC authorization system",
      "Implemented file upload security with MIME validation",
      "Designed adaptive difficulty algorithms",
    ],
    status: "ongoing",
  },
  {
    id: "erp-restoration",
    title: "Legacy ERP System Restoration",
    subtitle: "System Recovery & Docker Optimization",
    description:
      "Restored a broken legacy ERP system after server migration. Fixed React calendar issues, rewrote SQL queries for UUID handling, and rebuilt the Docker deployment pipeline.",
    achievements: [
      { metric: "100%", label: "System Recovered", icon: "✅" },
      { metric: "6x", label: "UI Bug Fixed", icon: "🔧" },
      { metric: "Full", label: "Data Restored", icon: "💾" },
      { metric: "Live", label: "Deployment Fixed", icon: "🚀" },
    ],
    technologies: ["Node.js", "React", "MySQL", "Docker"],
    techIcons: [
      "https://img.icons8.com/?size=48&id=54087&format=png",
      "https://i.ibb.co/6txhVbc/1174949-js-react-js-logo-react-react-native-icon.png",
      "https://cdn.iconscout.com/icon/free/png-512/free-mysql-logo-icon-download-in-svg-png-gif-file-formats--technology-social-media-company-vol-5-pack-logos-icons-2945040.png?f=webp&w=256",
      "https://cdn.iconscout.com/icon/free/png-512/free-docker-logo-icon-download-in-svg-png-gif-file-formats--social-media-pack-logos-icons-2944835.png?f=webp&w=256",
    ],
    challenges: [
      "Debugged React Big Calendar CSS issues",
      "Fixed UUID buffer issues in SQL queries",
      "Restored admin permissions and orphaned data",
      "Rebuilt Docker deployment pipeline",
    ],
    status: "completed",
  },
  {
    id: "golf4community-platform",
    title: "Golf4Community Platform",
    subtitle: "Full-Stack Web App Revamp",
    description:
      "Engineered a complete transformation of a legacy Next.js codebase into a premium, fully responsive platform. Built an advanced Custom CMS, hierarchical RBAC security, Stripe monetization, and real-time WebSocket communications.",
    achievements: [
      { metric: "100%", label: "Mobile Responsive", icon: "📱" },
      { metric: "6", label: "User Archetypes (RBAC)", icon: "🔐" },
      { metric: "Real-time", label: "WebSocket Sync", icon: "⚡" },
      { metric: "Stripe", label: "Payments & Subs", icon: "💳" },
    ],
    technologies: [
      "Next.js 16",
      "TypeScript",
      "Tailwind CSS",
      "Redux Toolkit",
      "MySQL2",
      "Stripe",
      "Pusher",
      "Cloudinary"
    ],
    techIcons: [
      "https://cdn.iconscout.com/icon/free/png-512/free-next-js-logo-icon-download-in-svg-png-gif-file-formats--technology-social-media-vol-4-pack-logos-icons-2945012.png?f=webp&w=256",
      "https://cdn.iconscout.com/icon/free/png-512/free-typescript-logo-icon-download-in-svg-png-gif-file-formats--programming-language-pack-logos-icons-1174965.png?f=webp&w=256",
      "https://cdn.iconscout.com/icon/free/png-512/free-tailwind-css-logo-icon-download-in-svg-png-gif-file-formats--wordmark-programming-langugae-freebies-pack-logos-icons-1175085.png?f=webp&w=256",
      "https://raw.githubusercontent.com/reduxjs/redux/master/logo/logo.png",
      "https://cdn.iconscout.com/icon/free/png-512/free-mysql-logo-icon-download-in-svg-png-gif-file-formats--technology-social-media-company-vol-5-pack-logos-icons-2945040.png?f=webp&w=256"
    ],
    challenges: [
      "Stripped hardcoded CSS for mobile-first Tailwind design",
      "Built custom CMS with direct-to-cloud file streaming",
      "Optimized legacy DB with direct parameterized SQL queries",
      "Masked sensitive data rendering based on user roles",
    ],
    status: "completed",
  },
];
