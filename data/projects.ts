export type ProjectType = "web" | "mobile" | "desktop";

export interface Project {
  title: string;
  category: string;
  description: string;
  technologies: string[];
  image: string;

  /** "web" (default), "mobile" or "desktop". Controls the image frame and the buttons. */
  type?: ProjectType;

  /** Mobile only: shape of the phone frame. Defaults to "portrait". */
  orientation?: "portrait" | "landscape";

  /** Web: shows a "Live project" button. */
  liveUrl?: string;

  /** Mobile and desktop: shows a "Demo" button. */
  demoUrl?: string;

  /** Mobile and desktop: shows a "Download" button (Play Store, Microsoft Store, APK, anywhere). */
  downloadUrl?: string;

  /** All types: shows a "Source" button. */
  githubUrl?: string;
}

/* Any link you leave out is simply hidden. */
export const projects: Project[] = [
  {
    title: "Billing System",
    category: "MERN STACK",
    type: "web",
    description:
      "A full-stack billing application with invoice generation, product search, cart management, billing history, and administrative features.",
    technologies: ["React", "Node.js", "Express.js", "MongoDB"],
    image: "/projects/project1.png",
    liveUrl: "https://billing-system-frontend.vercel.app",
    githubUrl: "https://github.com/nameissakthi/Billing-System",
  },

  {
    title: "FashionNow",
    category: "E-COMMERCE · MERN",
    type: "web",
    description:
      "A responsive clothing e-commerce application with product browsing, shopping workflows, cart management, and checkout functionality.",
    technologies: ["React", "Node.js", "Express.js", "MongoDB"],
    image: "/projects/project2.png",
    liveUrl: "https://fashionnow.vercel.app",
    githubUrl: "https://github.com/nameissakthi/FashionnowEcommerce",
  },

  {
    title: "IsaiVault",
    category: "Music Player - Mobile Application",
    type: "mobile",
    orientation: "landscape",
    description:
      "IsaiVault is a mobile music player that uses Google Drive to store and stream music.",
    technologies: [
      "React Native",
      "Expo",
      "Expo Router",
      "Expo Audio",
      "Google Drive API",
      "Google Sign In",
    ],
    image: "/projects/project3.png",
    // demoUrl: "https://...",
    // downloadUrl: "https://...",
    githubUrl: "https://github.com/nameissakthi/isaivault",
  },
];