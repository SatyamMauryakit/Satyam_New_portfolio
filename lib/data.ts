import { RoleMode } from "./modeStore";

export const heroCopy = (mode: RoleMode) => ({
  title:
    mode === "developer"
      ? "Full-Stack Developer crafting delightful, scalable web apps."
      : "DevOps Engineer building reliable, automated cloud platforms.",
  subtitle:
    mode === "developer"
      ? "React, Next.js, Node.js, TypeScript, performance-first."
      : "Docker, Kubernetes, CI/CD, IaC, observability-first.",
  ctaPrimary: "View Projects",
  ctaSecondary: "Contact Me",
});

export const skillsByMode = (mode: RoleMode) =>
  mode === "developer"
    ? [
        { name: "React / Next.js", level: "Expert" },
        { name: "TypeScript / JavaScript", level: "Advanced" },
        { name: "Node.js / Express", level: "Advanced" },
        { name: "Tailwind CSS", level: "Expert" },
        { name: "REST API", level: "Advanced" },
        { name: "MongoDB", level: "Advanced" },
        { name: "Shadcn UI", level: "Advanced" },
        { name: " React Hooks", level: "Advanced" },
        { name: "GitHub", level: "Advanced" },
      ]
    : [
        { name: "Docker / Compose", level: "Expert" },
        { name: "Kubernetes", level: "Advanced" },
        { name: "CI/CD (GitHub Actions)", level: "Advanced" },
        { name: "IaC (Terraform)", level: "Advanced" },
        { name: "AWS (EC2, ECS, S3, IAM)", level: "Advanced" },
        { name: "Prometheus / Grafana", level: "Advanced" },
        { name: "Linux / Bash", level: "Advanced" },
        { name: "Security & SRE", level: "Intermediate+" },
      ];

export const projectsByMode = (mode: RoleMode) =>
  mode === "developer"
    ? [
        {
          title: "AI Website Builder",
          desc: "An intelligent web application that generates code and file structures through AI prompts, featuring live preview, user authentication, and payment processing.",
          stack: ["Next.js", "TypeScript", "Node.js", "Tailwind","Convex","OpenRouter","Sandbox","Shadcn UI"],
          image:
            "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1200&auto=format&fit=crop",
          demo: "website-build-seven.vercel.app",
          repo: "https://github.com/SatyamMauryakit/Website_Build",
        },
        {
          title: "🩺 AI Medical Voice Assist",
          desc: "A web-based conversational assistant designed to help users with medical inquiries using natural voice communication.",
          stack: ["Next.js","TypeScript", "Tailwind", "Assemblyai","drizzle","Neondatabase","OpenRouter","VapiAI","Shadcn UI"],
          image:
            "https://images.unsplash.com/photo-1551590192-8070a16d9f67?q=80&w=1200&auto=format&fit=crop",
          demo: "#",
          repo: "https://github.com/SatyamMauryakit/AI_Medical_Voice_Assist",
        },
        {
          title: "🌱 AI-Based Crop Disease Detection",
          desc: "🌾 AI-Based Crop Disease Detection An AI-powered web application designed to detect diseases in crop images. Users can upload images of their plants, and the system uses a deep learning model to identify potential diseases and suggest treatments.",
          stack: ["React", "Tailwind","Tensorflow","MongoDB","Teachable Machine","GeminiAPI"],
          image:
            "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?q=80&w=1200&auto=format&fit=crop",
          demo: "#",
          repo: "https://github.com/SatyamMauryakit/AI-based-Crop--Disease",
        },
        {
          title: "Chat_Applicaton_Fullstack",
          desc: "A web-based chat application with user authentication and real-time messaging features. It features a modern UI, responsive design, and secure authentication.",
          stack: ["React.js","TypeScript", "Tailwind", "Socket.io","Node.js","MongoDB","Express.js","JWT","Cloudinary","Zustand"],
          image:
            "https://plus.unsplash.com/premium_photo-1681487683141-e72c5ccd94e6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2hhdHxlbnwwfHwwfHx8MA%3D%3D",
          demo: "#",
          repo: "https://github.com/SatyamMauryakit/Chat_Applicaton_Fullstack",
        },{
          title: "Chrome_Extension_for_Time_Tracking",
          desc: "A web-based conversational assistant designed to help users with medical inquiries using natural voice communication.",
          stack: ["HTML","JavaScript", "Tailwind",
            "MongoDB","Node.js","Express.js"
           ],
          image:
            "https://images.unsplash.com/photo-1735116356965-ad5b323d1af8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Z29vZ2xlJTIwY2hyb21lJTIwZXh0ZXNpb258ZW58MHx8MHx8fDA%3D",
          demo: "#",
          repo: "https://github.com/SatyamMauryakit/Chrome_Extension_for_Time_Tracking",
        },{
          title: "🚀 Code Review Website",
          desc: "A platform for developers to submit, review, and improve their code collaboratively. This website helps streamline the code review process by integrating with GitHub, allowing users to push repositories, request feedback, and improve code quality efficiently.",
          stack: ["React.js", "Tailwind",
            "MongoDB","Node.js","Express.js"
            ,"JWT","GeminiAPI","Sandbox"
           ],
          image:
            "https://plus.unsplash.com/premium_photo-1678565999588-08fdd0b1410b?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y29kZSUyMHJldmlld3xlbnwwfHwwfHx8MA%3D%3D",
          demo: "#",
          repo: "https://github.com/SatyamMauryakit/Code-Review",
        },
      ]
    : [
        {
          title: "Kubernetes Platform Template",
          desc: "Multi-env K8s with Helm, GitOps, and blue/green.",
          stack: ["K8s", "Helm", "ArgoCD", "GitHub Actions"],
          image:
            "https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=1200&auto=format&fit=crop",
          demo: "#",
          repo: "#",
        },
        {
          title: "Terraform AWS Stack",
          desc: "EKS, VPC, IAM, ALB with reusable modules.",
          stack: ["Terraform", "AWS", "EKS", "ALB"],
          image:
            "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1200&auto=format&fit=crop",
          demo: "#",
          repo: "#",
        },
        {
          title: "Observability Starter",
          desc: "Prometheus, Grafana, Loki, alerting, SLOs.",
          stack: ["Prometheus", "Grafana", "Loki", "Alertmanager"],
          image:
            "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1200&auto=format&fit=crop",
          demo: "#",
          repo: "#",
        },
      ];

export const experienceByMode = (mode: RoleMode) =>
  mode === "developer"
    ? [
        {
          role: "Full-Stack Developer",
          company: "College Tips Pvt Ltd",
          period: "1/04/2025 - 20/05/2025",
          bullets: [
            "Collaborated with the development team to build and enhance user interfaces using React.js, HTML, Tailwind CSS, Node.js",
            "Participated in API integration and UI optimization to improve performance and usability.",
            "Used Git and GitHub for version control and contributed to team workflows",
          ],
        },
        {
          role: "Web Developer",
          company: "Freelance",
          period: "2024 — Present",
          bullets: [
            "Delivered 20+ responsive sites with modern stacks.",
            "Set up CI previews & analytics-driven UX.",
            "Used Git and GitHub for version control and contributed to team workflows",
            "Participated in code reviews and provided feedback to improve code quality.",
            "Collaborated with the development team to build and enhance user interfaces using React.js, HTML, Tailwind CSS, Node.js",
          ],
        },
      ]
    : [
        {
          role: "DevOps Engineer",
          company: "CloudWorks",
          period: "2023 — Present",
          bullets: [
            "Implemented GitHub Actions CI/CD; MTTR down 45%.",
            "Migrated to EKS; infra costs reduced 20%.",
            "Added observability stack; SLO compliance 99.9%.",
          ],
        },
        {
          role: "SRE / DevOps",
          company: "Freelance",
          period: "2021 — 2023",
          bullets: [
            "Containerized legacy apps; improved release cadence.",
            "Automated infra with Terraform modules.",
          ],
        },
      ];

export const testimonials = [
  { quote: "Satyam elevates quality and ships fast  ", author: "Priya K.", role: "PM, Acme", 
    image: "https://images.unsplash.com/photo-1588516903720-8ceb67f9ef84?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d29tZW58ZW58MHx8MHx8fDA%3D",
   },
  
  { quote: "Our Web Vitals and uptime improved a lot.", author: "Rahul M.", role: "CTO, StartFlow", 
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bWVufGVufDB8fDB8fHww",
  },
  { quote: "Great communication and polished delivery.", author: "Anita S.", role: "Founder, Pixelly",
    image: "https://images.unsplash.com/photo-1481214110143-ed630356e1bb?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8d29tZW58ZW58MHx8MHx8fDA%3D",
   },
];
