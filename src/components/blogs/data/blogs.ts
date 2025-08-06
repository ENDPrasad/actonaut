import type { Blog } from "../../../interfaces/interfaces";
import canriosSVG from '../../../assets/read-illustration.svg'

export const blogData: Blog[] = [
  {
    title: "HTML for Automation Engineers: What You Really Need to Know",
    slug: "html-basics",
    category: "HTML Basics",
    description: "All you need to know about HTML before writing automation scripts",
    content: [
      {
        type: "header",
        text: "What is HTML?"
      },
      {
        type: "image",
        src: canriosSVG,
        alt: "React Portals Diagram"
      },
      {
        type: "paragraph",
        text: "They’re useful for modals, tooltips, or anything needing to escape overflow or z-index boundaries."
      }
    ]
  },
  {
    title: "JavaScript Event Loop Explained",
    slug: "js-event-loop",
    category: "JavaScript",
    description: "A visual guide to how JavaScript handles asynchronous tasks.",
    content: [
      {
        type: "paragraph",
        text: "The JavaScript event loop is responsible for executing code, collecting and processing events, and executing queued sub-tasks."
      },
      {
        type: "image",
        src: "/images/event-loop.png",
        alt: "JS Event Loop Diagram"
      },
      {
        type: "paragraph",
        text: "Understanding the call stack, task queue, and microtasks is essential for mastering async JS."
      }
    ]
  }
];
