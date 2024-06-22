import { Icons } from "@/components/icons";

export const DATA = {
  name: "Ragil Prasetyo",
  initials: "RP",
  url: "https://ragilhadi.io",
  location: "Jakarta, Indonesia",
  locationLink: "https://www.google.com/maps/place/sanfrancisco",
  description:
    "AI Engineer with a passion for computer vision. Loves building and deploying machine learning models to production.",
  summary:
    "currently working as AI Engineer at [GDP Labs](https://www.gdplabs.id/) with around 2 years of experience. I focus on optimizing and maintaining AI models within the EKYC product domain. My expertise spans various areas of computer vision, including image classification, object detection, and text recognition.",
  avatarUrl: "/avatar.jpg",
  skills: [
    "Python",
    "Computer Vision",
    "Machine Learning",
    "Deep Learning",
    "PyTorch",
    "PyTorch Lightning",
    "Scikit-learn",
    "Ultralytics",
    "Flask",
    "Arduino",
    "Docker",
  ],
  contact: {
    email: "ragilhprasetyo@gmail.com",
    social: {
      GitHub: {
        url: "https://github.com/ragilhadi",
        icon: Icons.github,
      },
      LinkedIn: {
        url: "https://www.linkedin.com/in/ragil-hadi-prasetyo/",
        icon: Icons.linkedin,
      },
      X: {
        url: "https://x.com/ragilhadi_",
        icon: Icons.x,
      },
    },
  },

  work: [
    {
      company: "GDP Labs",
      href: "https://www.gdplabs.id/",
      badges: [],
      location: "Jakarta",
      title: "AI Engineer",
      logoUrl: "/gdplabs.png",
      start: "October 2023",
      end: "Present",
      description:
        "AI Engineer for EKYC product, responsible for developing and maintaining the AI model.",
    },
    {
      company: "Purwadhika Digital Technology School",
      badges: [],
      href: "https://purwadhika.com/",
      location: "Remote",
      title: "Data Science Instructor",
      logoUrl: "/purwadhika.png",
      start: "September 2022",
      end: "September 2023",
      description:
        "Instructor teaching data science and machine learning to students in a data science bootcamp. I also help and mentor students with their capstone projects.",
    },
  ],
  education: [
    {
      school: "Universitas Brawijaya",
      href: "https://www.ub.ac.id/id/",
      degree: "Bachelor fo Engineering, Computer Engineering",
      logoUrl: "/ub.png",
      start: "2018",
      end: "2022",
    },
  ],
  projects: [
    {
      title: "Chat Collect",
      href: "https://www.ub.ac.id/id/",
      dates: "Jan 2024 - Feb 2024",
      active: true,
      description:
        "With the release of the [OpenAI GPT Store](https://openai.com/blog/introducing-the-gpt-store), I decided to build a SaaS which allows users to collect email addresses from their GPT users. This is a great way to build an audience and monetize your GPT API usage.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://chatcollect.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/chat-collect.mp4",
    },
    {
      title: "Magic UI",
      href: "https://magicui.design",
      dates: "June 2023 - Present",
      active: true,
      description:
        "Designed, developed and sold animated UI components for developers.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://magicui.design",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/magicuidesign/magicui",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://cdn.magicui.design/bento-grid.mp4",
    },
    {
      title: "llm.report",
      href: "https://llm.report",
      dates: "April 2023 - September 2023",
      active: true,
      description:
        "Developed an open-source logging and analytics platform for OpenAI: Log your ChatGPT API requests, analyze costs, and improve your prompts.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
        "Stripe",
        "Cloudflare Workers",
      ],
      links: [
        {
          type: "Website",
          href: "https://llm.report",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/dillionverma/llm.report",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://cdn.llm.report/openai-demo.mp4",
    },
    {
      title: "Automatic Chat",
      href: "https://automatic.chat",
      dates: "April 2023 - March 2024",
      active: true,
      description:
        "Developed an AI Customer Support Chatbot which automatically responds to customer support tickets using the latest GPT models.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
        "Stripe",
        "Cloudflare Workers",
      ],
      links: [
        {
          type: "Website",
          href: "https://automatic.chat",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/automatic-chat.mp4",
    },
  ],
  hackathons: [
  ],
} as const;
