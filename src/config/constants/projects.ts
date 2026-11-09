import { Project } from "@/types/project";

export const projects: Project[] = [
  {
    name: "Lattice",
    slug: "lattice",
    year: "2026",
    status: "Active",
    tagline:
      "A local-first knowledge OS: block editor, infinite whiteboard, typed knowledge graph, spaced repetition and an optional AI layer. Web, desktop and mobile.",
    description:
      "Lattice combines a block editor, an infinite whiteboard, a typed knowledge graph, a capture inbox, spaced-repetition learning and an optional AI layer into one local-first workspace that runs on the web, as a Tauri desktop app and through an Expo mobile companion.",
    stack: ["TypeScript", "Next.js", "Prisma", "PostgreSQL", "Tauri", "Expo", "IndexedDB"],
    projectUrl: {
      github: "https://github.com/yashladekar/lattice",
    },
  },

  {
    name: "ReelForge",
    slug: "reelforge",
    year: "2026",
    status: "Active",
    tagline:
      "AI faceless-reels studio: topic to script, scenes, narration, captions and an FFmpeg render, with budgets and checkpointed retries.",
    description:
      "A local-first, cost-aware creator workspace that turns a topic into a validated vertical short video: background jobs, provider adapters, budget accounting, a review studio and a publishing centre for YouTube and manual exports.",
    stack: ["Next.js", "tRPC", "Prisma", "BullMQ", "Redis", "FFmpeg", "Better Auth"],
    projectUrl: {
      github: "https://github.com/yashladekar/video-generator",
    },
  },

  {
    name: "AFTERMARKET",
    slug: "aftermarket",
    year: "2026",
    tagline:
      "Enterprise monorepo: a Spring Boot and Flowable process backend with a Next.js front end, sharing UI, ESLint and TypeScript configs.",
    description:
      "A pnpm and Turborepo workspace — a Java backend running embedded Flowable against an MCI reference schema, paired with a React 19 and Tailwind v4 web app.",
    stack: ["Java", "Spring Boot", "Flowable", "Next.js", "Turborepo", "Tailwind CSS"],
    projectUrl: {
      github: "https://github.com/yashladekar/aftermarket",
    },
  },

  {
    name: "FGAC Reference App",
    slug: "fgac-reference-app",
    year: "2026",
    tagline:
      "Multi-tenant SaaS where OpenFGA is the single source of authorization truth — the UI projects itself from the user's permissions.",
    description:
      "The same app looks and behaves differently for an Owner, Admin, Project Editor and Project Viewer: different navigation, routes, actions and data. Unauthorized resources never leave the server. Built on the Next.js App Router with Better Auth and Prisma.",
    stack: ["Next.js", "OpenFGA", "Better Auth", "Prisma", "PostgreSQL", "Turborepo"],
    projectUrl: {
      github: "https://github.com/yashladekar/gql-next-monorepo",
    },
  },

  {
    name: "Aethon",
    slug: "aethon",
    year: "2026",
    tagline:
      "A graph-first developer operating system: roadmap navigation, adaptive practice, immersive sandboxes and an AI mentor.",
    description:
      "An interactive learning platform built as a monorepo — learner web app, docs, a server with tRPC contracts and AI orchestration, admin tooling, and shared auth and Prisma packages.",
    stack: ["Next.js", "tRPC", "Prisma", "Better Auth", "PostgreSQL"],
    projectUrl: {
      github: "https://github.com/yashladekar/Aethon",
    },
  },

  {
    name: "plateEditor",
    slug: "plate-editor",
    year: "2026",
    tagline:
      "A rich-text editing playground built on Plate and Slate inside a modern Next.js app.",
    description:
      "An exploration of block rich-text editing on top of Plate and Slate — editor toolbars, slash-style menus and structured documents.",
    stack: ["Next.js", "Plate", "Slate", "TypeScript", "shadcn/ui"],
    projectUrl: {
      github: "https://github.com/yashladekar/plateEditor",
    },
  },

  {
    name: "Rental Design System",
    slug: "rental-design-system",
    year: "2026",
    tagline:
      "Shared UI kit, components and theme tokens behind my rental and fleet products.",
    description:
      "A Next.js design system package that centralises components, theming and styling conventions so rental and fleet applications stay visually consistent.",
    stack: ["Next.js", "Tailwind CSS", "TypeScript", "Design tokens"],
    projectUrl: {
      github: "https://github.com/yashladekar/rental-design-system",
    },
  },

  {
    name: "FleetHub",
    slug: "fleethub",
    year: "2026",
    tagline:
      "Rental-fleet operations front end wired to an existing SSO session backend with JWT cookie auth.",
    description:
      "A Next.js front end integrated with an existing SSO and session flow — configurable app identity, JWT session cookie handling, and login and logout wiring.",
    stack: ["Next.js", "TypeScript", "JWT", "SSO"],
    projectUrl: {
      github: "https://github.com/yashladekar/production-rental-2",
    },
  },
];
