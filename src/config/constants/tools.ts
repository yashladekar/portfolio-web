import { Laptop } from "lucide-react";

import { Tool } from "@/types/tool";
import { Icons } from "@/components/icons/icons";

const {
  Chrome,
  Github,
  Java,
  JavaScript,
  NextJs,
  Python,
  React,
  Rust,
  TypeScript,
  VSCode,
  Golang,
  Arc
} = Icons;

export const tools: Tool[] = [
  {
    heading: "Technologies",
    items: [
      {
        name: "React",
        description: "A JavaScript library for building user interfaces",
        url: "https://react.dev/",
        icon: React,
      },
      {
        name: "Next.js",
        description: "The React Framework for Production",
        url: "https://nextjs.org/",
        icon: NextJs,
      },
    ],
  },

  {
    heading: "Languages",
    items: [
      {
        name: "JavaScript",
        description: "The language of the web",
        url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
        icon: JavaScript,
      },
      {
        name: "TypeScript",
        description: "Superset of JavaScript with static type-checking",
        url: "https://www.typescriptlang.org/",
        icon: TypeScript,
      },
      {
        name: "Java",
        description:
          "The language powering robust, scalable enterprise backends",
        url: "https://dev.java/",
        icon: Java,
      },
      {
        name: "Python",
        description:
          "A language that lets you work quickly and integrate systems more effectively",
        url: "https://www.python.org/",
        icon: Python,
      },
      {
        name: "Rust",
        description:
          "A multi-paradigm, general-purpose programming language designed for performance and safety",
        url: "https://www.rust-lang.org/",
        icon: Rust,
      },
      {
        name: "go-lang",
        description: "An open source programming language that makes it easy to build simple, reliable, and efficient software",
        url: "https://golang.org/",
        icon: Golang
      },
    ],
  },

  {
    heading: "Tools",
    items: [
      {
        name: "Visual Studio Code",
        description:
          "Code editing. Redefined. Free. Open source. Runs everywhere.",
        url: "https://code.visualstudio.com/",
        icon: VSCode,
      },
      {
        name: "GitHub",
        description: "Where the world builds software",
        url: "https://github.com/",
        icon: Github,
      },
      {
        name: "Google Chrome",
        description: "A fast, secure, and free web browser",
        url: "https://www.google.com/chrome/",
        icon: Chrome,
      },
      {
        name: "Arc Browser",
        description: "A fast, secure, and free web browser",
        url: "https://arc.net/",
        icon: Arc,
      },
    ],
  },

  {
    heading: "Hardware",
    items: [
      {
        name: "MacBook air m1",
        description: "My daily driver",
        url: "https://www.apple.com/macbook-air/",
        icon: Laptop,
      },
    ],
  },
];
