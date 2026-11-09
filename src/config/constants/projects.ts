import { Project } from "@/types/project";

export const projects: Project[] = [
  {
    name: "Lattice",
    slug: "lattice",
    logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg",
    tagline:
      "A local-first knowledge OS — block editor, infinite whiteboard, typed knowledge graph, spaced repetition and an optional AI layer. Web, desktop and mobile.",
    description:
      "Lattice combines a block editor, an infinite whiteboard, a typed knowledge graph, a capture inbox, spaced-repetition learning and an optional AI layer into one local-first workspace that runs on the web, as a Tauri desktop app and through an Expo mobile companion.",
    projectUrl: {
      github: "https://github.com/yashladekar/lattice",
    },
  },

  {
    name: "ReelForge",
    slug: "reelforge",
    logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg",
    tagline:
      "AI faceless-reels studio: topic → script → scenes → narration → captions → FFmpeg render → publish, with budgets and checkpointed retries.",
    description:
      "A local-first, cost-aware creator workspace that turns a topic into a validated vertical short video — background jobs, provider adapters, budget accounting, a Video Studio for review and a Publishing Center for YouTube and manual exports.",
    projectUrl: {
      github: "https://github.com/yashladekar/video-generator",
    },
  },

  {
    name: "AFTERMARKET",
    slug: "aftermarket",
    logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/spring/spring-original.svg",
    tagline:
      "Enterprise monorepo: a Spring Boot + Flowable process backend with a Next.js front end, sharing UI, ESLint and TypeScript configs.",
    description:
      "A pnpm + Turborepo workspace for the AFTERMARKET project — a Java backend running embedded Flowable against an MCI reference schema, paired with a React 19 / Tailwind v4 web app.",
    projectUrl: {
      github: "https://github.com/yashladekar/aftermarket",
    },
  },

  {
    name: "FGAC Reference App",
    slug: "fgac-reference-app",
    logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/graphql/graphql-plain.svg",
    tagline:
      "Multi-tenant SaaS where OpenFGA is the single source of authorization truth — the UI projects itself from the user's permissions.",
    description:
      "The same app looks and behaves differently for an Owner, Admin, Project Editor and Project Viewer: different navigation, routes, actions and data — unauthorized resources never leave the server. Built in a Next.js App Router + shadcn/ui Turborepo with Better Auth and Prisma.",
    projectUrl: {
      github: "https://github.com/yashladekar/gql-next-monorepo",
    },
  },

  {
    name: "Aethon",
    slug: "aethon",
    logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg",
    tagline:
      "A graph-first developer operating system: roadmap navigation, adaptive practice, immersive sandboxes and an AI mentor.",
    description:
      "An interactive learning platform built as a monorepo — learner web app, docs, a server with tRPC contracts and AI orchestration, admin tooling, and shared auth and Prisma packages.",
    projectUrl: {
      github: "https://github.com/yashladekar/Aethon",
    },
  },

  {
    name: "plateEditor",
    slug: "plate-editor",
    logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/vscode/vscode-original.svg",
    tagline:
      "A rich-text editing playground built on Plate (Slate) inside a modern Next.js + shadcn/ui app.",
    description:
      "An exploration of block rich-text editing on top of Plate and Slate — editor toolbars, slash-style menus and structured documents inside a Next.js app.",
    projectUrl: {
      github: "https://github.com/yashladekar/plateEditor",
    },
  },

  {
    name: "Rental Design System",
    slug: "rental-design-system",
    logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/tailwindcss/tailwindcss-original.svg",
    tagline:
      "Shared UI kit, components and theme tokens behind my rental and fleet products.",
    description:
      "A Next.js design system package that centralises components, theming and styling conventions so rental and fleet applications stay visually consistent.",
    projectUrl: {
      github: "https://github.com/yashladekar/rental-design-system",
    },
  },

  {
    name: "FleetHub",
    slug: "fleethub",
    logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg",
    tagline:
      "Rental-fleet operations front end wired to an existing SSO/session backend with JWT cookie auth.",
    description:
      "A Next.js front end (FleetHub) integrated with an existing SSO/session flow — configurable app identity, JWT session cookie handling, and login and logout wiring.",
    projectUrl: {
      github: "https://github.com/yashladekar/production-rental-2",
    },
  },
];
