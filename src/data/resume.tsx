import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Almuhanad Alnihmy",
  initials: "AA",
  url: "https://almuhanad.vercel.app/",
  location: "Istanbul, Turkiye",
  locationLink: "https://www.google.com/maps/place/istanbul",
  description: "Software Engineer | Full-Stack Developer | Web3 Developer",
  summary:
    "With a love for creating dynamic and engaging applications, I bring over 3 years of experience as a full-stack developer focused on crafting seamless Web2 experiences and expanding into Web3. I'm always on the lookout for new tools, best practices, and the latest tech to enhance my work.",
  avatarUrl: "/me.jpeg",
  skills: [
    "React",
    "Next.js",
    "Angular",
    "Svelte",
    "SvelteKit",
    "Typescript",
    "Node.js",
    "Express.js",
    "Python",
    "Java",
    "C++",
    "MySql",
    "MongoDB",
    "Firebase",
    "Supabase",
    "Solidity",
    "Web3",
    "Hardhat",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    // { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "almuhanad.alnihmy@gmail.com",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/Almuhanad-1",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/almuhanad-alnihmy",
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
      company: "Skyline Holdings",
      href: "",
      badges: [],
      location: "Turkey . Remote",
      title: "Frontend Web Developer",
      logoUrl: "/skylineholding.webp",
      start: "Jan 2024",
      end: "present",
      description: `
      <ul>
      <li>Collaborated with a team of UI/UX designers and backend developers to build web applications.</li>
      <li>Followed Figma designs meticulously to ensure the application matched the design specifications.</li>
      <li>Developed and maintained multiple web applications over the past year.</li>
      </ul>
      `,
    },
    {
      company: "STYLE Protocol",
      badges: [],
      href: "",
      location: "Switzerland . Remote",
      title: "Full Stack Web3 Developer (Internship)",
      logoUrl: "/style.png",
      start: "Feb 2024",
      end: "May 2024",
      description: `
      <ul>
<li>Created a customized ERC-20 token with built-in distribution logic upon
deployment.</li>
<li>Edited and adapted a vesting-tokens dapp to seamlessly operate on a new
blockchain chain.</li>
<li>Deployed an airdropper contract, streamlining the efficient distribution of
tokens.</li>
<li>Collaborated with cross-functional team.</li>
<li>Generated detailed documentation for ERC-20 token, vesting tokens dapp, and
airdropper contract.</li>
</ul>
      `,
    },
    {
      company: "CPP Tokens",
      href: "",
      badges: [],
      location: "Remote",
      title: "Full Stack Web Developer (Internship)",
      logoUrl: "/cpp.jpeg",
      start: "Aug 2023",
      end: "Jan 2024",
      description: `<ul>
<li>Developed a secure web store with Binance and PayPal integration.</li>
<li>Led the creation of an e-commerce platform using Next.js and Firebase.</li>
<li>Innovated a Telegram bot for real-time job listings updates.</li>
<li>Revamped a SaaS app with SvelteKit, Supabase, and database migration.</li>
<li>Created a Chrome extension that helps turning any phone number in a page to a whatsapp link.</li>
<li>Integrated web components for modular and scalable applications.</li>
</ul>`,
    },
    {
      company: "Youthink Academy",
      href: "https://www.youthink.la",
      badges: [],
      location: "Istanbul, Turkey",
      title: "Teaching Assistant & Full Stack Developer",
      logoUrl: "/youthink.jpeg",
      start: "Jul 2022",
      end: "Feb 2023",
      description: `
      <ul>
<li>Provided support to more than 60 students.</li>
<li>Provided tech mentorship and support for students to build websites and applications.</li>
<li>My tasks vary in nature frequently. On a given day, I perform code reviews, have one-on-one meetings with students who need extra help, give lectures on new topics, live-code examples, and help coach interpersonal skills.</li>
  </ul>`,
    },
  ],
  education: [
    {
      school: "Kütahya University",
      href: "#",
      degree: "Bachelor's Degree of Software Engineering",
      logoUrl: "/dpu.png",
      start: "2023",
      end: "-",
    },
    {
      school: "Youthink Academy",
      href: "#",
      degree: "Full-stack Web Development Bootcamp",
      logoUrl: "/youthink.jpeg",
      start: "Feb 2022",
      end: "Jun 2022",
    },
    {
      school: "Taiz University",
      href: "#",
      degree: "Bachelor's Degree of Software Engineering",
      logoUrl: "/taiz.png",
      start: "2019",
      end: "-",
    },
  ],
  projects: [
    {
      title: "Skyline Travel",
      href: "https://skylinetraveltr.com",
      active: true,
      description:
        "A tourism platform for booking tours, apartments, and cars. It also provides a blog for travel tips and news.",
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
          href: "skylinetraveltr.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/skylinetravel.webp",
    },
    {
      title: "Skyline Travel Dashboard",
      active: true,
      description:
        "Admin dashboard (with permission-based access) to manage skyline travel platform, bookings, payments, users, partners..etc",
      technologies: [
        "Next.js",
        "Typescript",
        "TailwindCSS",
        "Shadcn UI",
        "Next-auth",
        "next-intl",
      ],
      links: [],
      image: "/skylinetravel-dashboard.webp",
    },
    {
      title: "Skyline Real Estate",
      active: true,
      description:
        "A real estate platform for buying, and renting apartments, villas, and lands.",
      technologies: [
        "Next.js",
        "Typescript",
        "TailwindCSS",
        "Shadcn UI",
        "next-intl",
      ],
      image: "/skyline-realestate.webp",
      links: [
        {
          type: "Website",
          href: "https://skylineholding.com/en",
          icon: <Icons.globe className="size-3" />,
        },
      ],
    },
    {
      title: "Tvman Store",
      href: "https://www.tvmanstore.com/",
      active: true,
      description:
        "An e-commerce platform for selling TVs, accessories, and other related products.",
      technologies: ["Next.js", "Typescript", "TailwindCSS", "Firebase"],
      links: [
        {
          type: "Website",
          href: "tvmanstore.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/tvmanstore.webp",
    },
    {
      title: "Leadlinker",
      active: true,
      description:
        "Boost sales with personalized links for WhatsApp, calls, and custom URLs. Sell without a website and track link visits with detailed stats.",
      technologies: [
        "SvelteKit",
        "TailwindCSS",
        "Supabase",
        "Auth.js",
        "PayPal",
        "Binance",
      ],
      links: [
        {
          type: "Website",
          href: "leadlinker.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/leadlinker.webp",
    },
  ],
} as const;
