import { Icons } from "@/components/icons";
import { HomeIcon } from "lucide-react";

export const DATA = {
  name: "Abdulkarim Aldeek",

  initials: "AA",
  url: "https://www.abdelkarim-aldeek.me/",
  location: "Amman, Jordan",
  locationLink: "https://www.google.com/maps/place/amman",
  description: "Software Developer",
  summary:
    "Proficient software developer skilled in translating ideas into digital realities using React and React Native. Demonstrated leadership in navigating the intricacies of application development within a tech-centric environment. My unique blend of creative problem-solving and tech enthusiasm ensures smooth user experiences and drives teams toward innovative solutions.",
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
    "Expo",
    "TailwindCSS",
    "Shadcn UI",
    "Next.js",
    "Typescript",
    "Redux",
    "Zustand",
    "React Query",
    "React Hook Form",
    "Zod",
    "Next-auth",
    "RESTful APIs",
    "Agile Methodologies",
    "Problem Solving",
    "Analytical Thinking",
  ],
  navbar: [{ href: "/", icon: HomeIcon, label: "Home" }],
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
        url: "mailto:abdelkarim.aldeek@gmail.com",
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
      title: "Sr. Frontend Developer",
      logoUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaEiHvfAWJBox_NPfACPOg-kkNzS2NcdSesA&s",
      start: "Mar 2024",
      end: "Present",
      description: `
      <ul>
      <li>Worked closely with designers to make sure the app looked good and was easy to use, following the latest design trends and meeting user expectations.</li>
      <li>Oversaw code quality through thorough reviews and by setting up a development workflow from development to testing and production environments.</li>
      <li>Efficiently translate design mockups into functional code</li>
      <li>Deliver high-quality applications that follow industry best practices</li>
      <li>Dedicated to effective project management through streamlined version control and seamless collaboration</li>
      <li>Utilized Git for version control and collaborated with team members using GitHub.</li>
      <li>Participated in code reviews to maintain code quality and share knowledge with team members.</li>
      </ul>
      `,
    },
    {
      company: "7ayyak",
      href: "7ayyak.tech", // Added missing href property
      badges: [],
      location: "King Hussein Business Park . Hybrid",
      title: "Software Developer",
      logoUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUrEF5uW6lNeWg2l08Bz5dXNv3EO0OQw_bYw&s",
      start: "Feb 2022",
      end: "Mar 2024",
      description: `
      <ul>
      <li>Developed and maintained the 7ayyak platform, a remote assistant service, using Vue.js and Nuxt.js.</li>
      <li>Implemented responsive design principles to ensure optimal user experience across various devices.</li>
      <li>Collaborated with cross-functional teams to define, design, and ship new features.</li>
      <li>Utilized Git for version control and collaborated with team members using GitHub.</li>
      <li>Participated in code reviews to maintain code quality and share knowledge with team members.</li>
      <li>Worked on the 7ayyak mobile application using React Native, ensuring a seamless user experience.</li>
      <li>Integrated RESTful APIs to enhance application functionality and performance.</li>
      <li>Contributed to the development of the 7ayyak platform's backend using Node.js and MySQL.</li>
      <li>Implemented state management using Redux and Zustand for efficient data handling.</li>
      </ul>
      `,
    },
    {
      company: "Orange Jordan",
      href: "orange.jo", // Added missing href property
      badges: [],
      location: "Amman, Jordan",
      title: "Full Stack Web Developer (Internship)",
      logoUrl:
        "https://orange.jo/sites/default/files/styles/640x320/public/2024-01/orange-jordan-achievement-2023_0.jpg?itok=vyMp1zSj",
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
    },
  ],
  education: [
    {
      school: "Al-Balqa' Applied University",
      href: "#",
      degree: "Bachelor of Computer Science",
      logoUrl:
        "https://upload.wikimedia.org/wikipedia/commons/8/8b/Al-Balqa%27_Applied_University.jpg",
      start: "2018",
      end: "Sep 2021",
    },
  ],
  projects: [
    {
      title: "Desaisiv Platform",
      href: "https://desaisiv.com/",
      active: true,
      description:
        "Elevate your insurance decisions with Desaisiv – your trusted AI platform. Desaisiv is a platform that uses AI to help insurance companies make better decisions.",
      technologies: [
        "Next.js",
        "Typescript",
        "TailwindCSS",
        "Shadcn UI",
        "Next-auth",
        "next-intl",
        "React Query",
        "React Hook Form",
        "Zod",
        "Redux",
      ],
      links: [
        {
          type: "Website",
          href: "https://desaisiv.com/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/desaisiv-platform.png",
    },
    {
      title: "TameenLink Platform",
      href: "https://tameenlink.com/",
      active: true,
      description:
        "first digital insurance broker in the KSA specializing in serving medium and large companies.",
      technologies: [
        "Next.js",
        "Typescript",
        "TailwindCSS",
        "Shadcn UI",
        "next-intl",
        "Redux",
        "Zustand",
        "React Query",
        "React Hook Form",
        "Zod",
        "Redux",
      ],
      links: [
        {
          type: "Website",
          href: "https://tameenlink.com/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/tameenlink.png",
    },
    {
      title: "TameenLink Admin",
      href: "https://admin.tameenlink.com/",
      active: true,
      description:
        "first digital insurance broker in the KSA specializing in serving medium and large companies.",
      technologies: [
        "Next.js",
        "Typescript",
        "TailwindCSS",
        "Shadcn UI",
        "next-intl",
        "Redux",
        "Zustand",
        "React Query",
        "React Hook Form",
        "Zod",
        "Redux",
      ],
      links: [
        {
          type: "Website",
          href: "https://admin.tameenlink.com/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/admin-tameenlink.png",
    },
    {
      title: "7ayyak",
      href: "https://7ayyak.tech/",
      active: true,
      description:
        "Save time, relief stress and boost your productivity with 7ayyak's remote assistant",
      technologies: ["Typescript", "TailwindCSS", "Vue.js", "Nuxt.js"],
      links: [
        {
          type: "Website",
          href: "https://7ayyak.tech/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/7ayyak.png",
    },
    {
      title: "7ayyak Mobile",
      href: "https://7ayyak.tech/",
      active: true,
      description:
        "Save time, relief stress and boost your productivity with 7ayyak's remote assistant",
      technologies: [
        "Typescript",
        "TailwindCSS",
        "Expo",
        "React Native",
        "React Navigation",
        "React Native Paper",
        "Redux",
        "Axios",
        "React Native Reanimated",
        "React Native Gesture Handler",
      ],
      links: [
        {
          type: "Mobile App",
          href: "https://apps.apple.com/us/app/7ayyak-assistants/id6461456883",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/mobile-7ayyak.png",
    },
  ],
} as const;
