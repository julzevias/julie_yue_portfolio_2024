import {
  growthAccelerationPartners,
  assetMark,
  longhornTactical,
  nitecore,
  colorGenerator,
  weatherApp,
  dogApp,
  personalPortfolioV1,
  blackjack,
  imageUploader,
  LTShopify,
} from "@/assets/images/index.ts";
import {
  contact,
  css,
  express,
  git,
  github,
  html,
  javascript,
  linkedin,
  mui,
  nextjs,
  nodejs,
  react,
  redux,
  sass,
  tailwind,
  typescript,
} from "@/assets/icons/index.ts";

export const skills = [
  {
    imageUrl: css,
    name: "CSS",
    type: "Frontend",
  },
  {
    imageUrl: express,
    name: "Express",
    type: "Backend",
  },
  {
    imageUrl: git,
    name: "Git",
    type: "Version Control",
  },
  {
    imageUrl: github,
    name: "GitHub",
    type: "Version Control",
  },
  {
    imageUrl: html,
    name: "HTML",
    type: "Frontend",
  },
  {
    imageUrl: javascript,
    name: "JavaScript",
    type: "Frontend",
  },
  {
    imageUrl: mui,
    name: "Material-UI",
    type: "Frontend",
  },
  {
    imageUrl: nextjs,
    name: "Next.js",
    type: "Frontend",
  },
  {
    imageUrl: nodejs,
    name: "Node.js",
    type: "Backend",
  },
  {
    imageUrl: react,
    name: "React",
    type: "Frontend",
  },
  {
    imageUrl: redux,
    name: "Redux",
    type: "State Management",
  },
  {
    imageUrl: sass,
    name: "Sass",
    type: "Frontend",
  },
  {
    imageUrl: tailwind,
    name: "Tailwind CSS",
    type: "Frontend",
  },
  {
    imageUrl: typescript,
    name: "TypeScript",
    type: "Frontend",
  },
];

export const experiences = [
  {
    title: "E-commerce Frontend Developer",
    company_name: "Lumen Tactical",
    icon: nitecore,
    iconBg: "#accbe1",
    date: "Oct 2023 - current",
    points: [
      "Developing custom storefront in Shopify with Liquid, HTML, CSS, and JavaScript.",
      "Migrating hundreds of thousands of entities from Volusion to Shopify.",
      "Set up automated CI/CD pipeline, enabling development code to be updated to GitHub and deployed to Shopify.",
    ],
  },
  {
    title: "Frontend Developer",
    company_name: "AssetMark",
    icon: assetMark,
    iconBg: "#fbc3bc",
    date: "May 2022 - Oct 2023",
    points: [
      "Implemented user-friendly features for 300+ private labels and enterprises, covering aspects such as profile data editing, capital market assumptions management for advisors, and intelligent report generation.",
      "Developed a secure 2-step authentication via text message across 5 web applications, increasing overall security.",
    ],
  },
  {
    title: "Frontend Developer Intern",
    company_name: "Growth Acceleration Partners",
    icon: growthAccelerationPartners,
    iconBg: "#b7e4c7",
    date: "Aug 2021 - May 2022",
    points: [
      "Developed real-time staffing cost display tool for development staff across locations, leading to successful client engagements.",
      "Contributed to employee profile dashboard in React by implementing UI features and connecting APIs.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
    ],
  },
];

export const socialLinks = [
  {
    name: "Contact",
    iconUrl: contact,
    email: "julie.yue@gmail.com",
    phone: "512-412-1653",
  },
  {
    name: "GitHub",
    iconUrl: github,
    link: "https://github.com/jw-yue",
  },
  {
    name: "LinkedIn",
    iconUrl: linkedin,
    link: "https://www.linkedin.com/in/j-yue/",
  },
];

export const professionalProjects = [
  {
    client: "Nitecore Store (Lumen Tactical)",
    logos: [nitecore, longhornTactical],
    projectName: "Storefront Development",
    image: LTShopify,
    description:
      "As the lead developer for a Shopify storefront project, I crafted a shopping experience by migrating product data from a previous CMS, customizing look and feel of the website, and designing storefront features through mockups with Figma. I collaborated closely with stakeholders, providing regular updates and overseeing the project's technical aspects.",
    technologies: ["Shopify", "Liquid", "HTML", "CSS", "JavaScript", "Figma"],
    liveSite: "This site will be released soon!",
  },
];

export const personalProjects = [
  {
    name: "Image Uploader",
    description:
      "Created an application that enables users to upload images from their local device or a URL, showcase the image within the app, or download the image.",
    image: imageUploader,
    technologies: ["React", "TypeScript", "Express", "Node", "REST APIs"],
    github: "https://github.com/jw-yue/image_uploader",
    liveSite: "",
  },
  {
    name: "BlackJack",
    description:
      "Constructed a game that allows multiple players to engage in rounds of BlackJack in person.",
    image: blackjack,
    technologies: ["React", "TypeScript", "HTML", "Bootstrap"],
    github: "https://github.com/jw-yue/blackjack",
    liveSite: "https://blackjack.julzcreations.dev/",
  },
  {
    name: "Personal Portfolio v1",
    description:
      "Crafted and built a personal portfolio that highlights past projects.",
    image: personalPortfolioV1,
    technologies: ["React", "JavaScript", "HTML", "CSS"],
    github: "https://github.com/jw-yue/julie-yue-portfolio-v1",
    liveSite: "",
  },
  {
    name: "Weather Application",
    description:
      "Created an application that enables users to retrieve weather information for a specific city.",
    image: weatherApp,
    technologies: ["React", "JavaScript", "REST APIs", "HTML", "CSS"],
    github: "https://github.com/jw-yue/weather-app",
    liveSite: "",
  },
  {
    name: "Dog App",
    description:
      "Created a CRUD application that enables users to efficiently search, add, edit, and delete dog records.",
    image: dogApp,
    technologies: ["React", "HTML", "CSS", "JavaScript"],
    github: "https://github.com/jw-yue/dog-app",
    liveSite: "",
  },
  {
    name: "Color Generator",
    description:
      "Developed an application capable of producing a spectrum of colors based on a provided specific color.",
    image: colorGenerator,
    technologies: ["React", "HTML", "CSS", "JavaScript"],
    github: "https://github.com/jw-yue/task-tracker",
    liveSite: "",
  },
];
