import { Globe } from "lucide-astro";

export const ICON_BASE =
  "https://cdn.jsdelivr.net/npm/simple-icons@13/icons";

export const skillGroups = [
  {
    title: "Languages",

    skills: [
      {
        name: "Java",
        slug: "openjdk",
        color: "#ED8B00",
      },

      {
        name: "TypeScript",
        slug: "typescript",
        color: "#3178C6",
      },

      {
        name: "JavaScript",
        slug: "javascript",
        color: "#F7DF1E",
      },
    ],
  },

  {
    title: "Frontend",

    skills: [
      {
        name: "React",
        slug: "react",
        color: "#61DAFB",
      },

      {
        name: "HTML",
        slug: "html5",
        color: "#E34F26",
      },

      {
        name: "CSS",
        slug: "css3",
        color: "#1572B6",
      },
    ],
  },

  {
    title: "Backend",

    skills: [
      {
        name: "Spring Boot",
        slug: "springboot",
        color: "#6DB33F",
      },

      {
        name: "Node.js",
        slug: "nodedotjs",
        color: "#5FA04E",
      },

      {
        name: "REST APIs",
        lucide: Globe,
        color: "#e5e5e5",
      },
    ],
  },

  {
    title: "Data",

    skills: [
      {
        name: "MongoDB",
        slug: "mongodb",
        color: "#47A248",
      },

      {
        name: "MySQL",
        slug: "mysql",
        color: "#4479A1",
      },
    ],
  },

  {
    title: "Tooling",

    skills: [
      {
        name: "Git",
        slug: "git",
        color: "#F05032",
      },

      {
        name: "Docker",
        slug: "docker",
        color: "#2496ED",
      },
    ],
  },
];