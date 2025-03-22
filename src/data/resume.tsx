import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Abdulkarim Aldeek",
  
  initials: "AA",
  url: "https://almuhanad.vercel.app/",
  location: "Amman, Jordan",
  locationLink: "https://www.google.com/maps/place/amman",
  description: "Software Developer",
  summary: "Proficient software developer skilled in translating ideas into digital realities using React and React Native. Demonstrated leadership in navigating the intricacies of application development within a tech-centric environment. My unique blend of creative problem-solving and tech enthusiasm ensures smooth user experiences and drives teams toward innovative solutions.",
  avatarUrl: "/me.jpeg",
  skills: [
    "HTML",
    "CSS",
    "JavaScript",
    "React.js",
    "Vue.js (Nuxt)",
    "Node.js",
    "MySQL",
    "React Native",
    "Sequelize (ORM)",
    "Git",
    "GitHub",
    "Jira",
    "Expo"
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
  ],
  contact: {
    email: "abdelkarim.aldeek@gmail.com",
    phone: "0775650001",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/DeekCS",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/abdulkareem-aldeek/",
        icon: Icons.linkedin,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,
        navbar: false,
      },
    },
  },
  work: [
    {
      company: "Desaisiv",
      href: "desaisiv.com",
      badges: [],
      location: "King Hussein Business Park . Hybrid",
      title: "MID-Frontend Developer",
      logoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaEiHvfAWJBox_NPfACPOg-kkNzS2NcdSesA&s",
      start: "Mar 2024",
      end: "Present",
      description: `
      <ul>
      <li>Worked closely with designers to make sure the app looked good and was easy to use, following the latest design trends and meeting user expectations.</li>
      <li>Oversaw code quality through thorough reviews and by setting up a development workflow from development to testing and production environments.</li>
      <li>Efficiently translate design mockups into functional code</li>
      <li>Deliver high-quality applications that follow industry best practices</li>
      <li>Dedicated to effective project management through streamlined version control and seamless collaboration</li>
      </ul>
      `,
    },
    {
      company: "7ayyak",
      href: "7ayyak.tech", // Added missing href property
      badges: [],
      location: "King Hussein Business Park . Hybrid",
      title: "Software Developer",
      logoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUrEF5uW6lNeWg2l08Bz5dXNv3EO0OQw_bYw&s",
      start: "Feb 2022",
      end: "Mar 2024",
      description: `
      <ul>
      <li>Created a customized ERC-20 token with built-in distribution logic upon deployment.</li>
      <li>Edited and adapted a vesting-tokens dapp to seamlessly operate on a new blockchain chain.</li>
      <li>Deployed an airdropper contract, streamlining the efficient distribution of tokens.</li>
      <li>Collaborated with cross-functional team.</li>
      <li>Generated detailed documentation for ERC-20 token, vesting tokens dapp, and airdropper contract.</li>
      </ul>
      `,
    },
    {
      company: "Orange Jordan",
      href: "orange.jo", // Added missing href property
      badges: [],
      location: "Amman, Jordan",
      title: "Full Stack Web Developer (Internship)",
      logoUrl: "https://orange.jo/sites/default/files/styles/640x320/public/2024-01/orange-jordan-achievement-2023_0.jpg?itok=vyMp1zSj",
      start: "Sep 2021",
      end: "Mar 2022",
      description: `
      <ul>
      <li>Proficient in programming languages and tools such as HTML, CSS, JavaScript, jQuery, Bootstrap, and React.js.</li>
      <li>Skilled in creating wireframes and mockups, and experienced in using GitHub, Trello, and Discord.</li>
      <li>Practiced problem-solving on a daily basis and developed strong analytical and critical thinking skills.</li>
      <li>Capable of self-learning through active learning methodology, with the ability to quickly adapt to new technologies.</li>
      </ul>
      `,
    }
  ],
  education: [
    {
      school: "Al-Balqa' Applied University",
      href: "#",
      degree: "Bachelor of Computer Science",
      logoUrl: "https://upload.wikimedia.org/wikipedia/commons/8/8b/Al-Balqa%27_Applied_University.jpg",
      start: "2018",
      end: "Sep 2021",
    }
  ],
  projects: [
    {
      title: "Desaisiv Platform",
      href: "https://desaisiv.com/",
      active: true,
      description: "Elevate your insurance decisions with Desaisiv – your trusted AI platform. Desaisiv is a platform that uses AI to help insurance companies make better decisions.",
      technologies: [
        "Next.js",
        "Typescript",
        "TailwindCSS",
        "Shadcn UI",
        "Next-auth",
        "next-intl",
      ],
      links: [
        {
          type: "Website",
          href: "https://skylinetraveltr.com/en",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/desaisiv-platform.png"
    },
    {
      title: "7ayyak",
      href: "https://7ayyak.tech/",
      active: true,
      description: "Save time, relief stress and boost your productivity with 7ayyak's remote assistant",
      technologies: [
        "Typescript",
        "TailwindCSS",
        "Vue.js",
        "Nuxt.js",
      ],
      links: [
        {
          type: "Website",
          href: "https://skylinetraveltr.com/en",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/7ayyak.png"
    },
    {
      title: "7ayyak Mobile",
      href: "https://7ayyak.tech/",
      active: true,
      description: "Save time, relief stress and boost your productivity with 7ayyak's remote assistant",
      technologies: [
        "Typescript",
        "TailwindCSS",
        "Expo",
        "React Native",
        "React Navigation",
        "React Native Paper",
      ],
      links: [
        {
          type: "Mobile App",
          href: "https://apps.apple.com/us/app/7ayyak-assistants/id6461456883",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/mobile-7ayyak.png"
    },
  ],
} as const;