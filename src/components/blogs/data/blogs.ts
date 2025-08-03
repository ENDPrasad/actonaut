import type { Blog } from "../../../interfaces/interfaces";
import canriosSVG from '../../../assets/read-illustration.svg'

export const blogData: Blog[] = [
  {
    title: "Understanding React Portals",
    slug: "react-portals",
    category: "React",
    description: "Learn how portals help you render elements outside the DOM hierarchy.",
    content: [
      {
        type: "paragraph",
        text: "React portals allow you to render children into a DOM node that exists outside the DOM hierarchy."
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
