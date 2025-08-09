import type { Blog } from "../../../interfaces/interfaces";
import tagExplanationSVG from '../assets/tag-explanation.svg'
import whyHTMLNeeded from '../assets/why-html.svg'
import HTMLStructure from '../assets/html-structure.svg'


export const blogData: Blog[] = [
  {
    title: "HTML Basics for Automation",
    slug: "html-basics",
    category: "HTML Basics",
    description: "All you need to know about HTML before writing automation scripts",
    content: [
      {
        type: "header",
        text: "Why HTML Matters in Web Automation?"
      },
      {
        type: "paragraph",
        text: "We need to learn HTML for automation because it helps us understand the structure of a webpage, so we can correctly locate and interact with elements like buttons, inputs, and links."
      },
      {
        type: "header",
        text: "What is HTML?"
      },
      {
        type: "paragraph",
        text: "Using a city map without street names or landmarks is frustrating. You wouldn’t know where you are or where to go next. HTML is like that map — it labels and organizes everything on a webpage. Without it, you’re just guessing your way around."
      },
      {
        type: "image",
        src: whyHTMLNeeded,
        alt: "Why we need HTML Illustration"
      },
      {
        type: "paragraph",
        text: "Just like a well-labeled map helps you find the exact street or location, HTML helps you easily find and target the right elements on a webpage to interact with them accurately."
      },
      {
        type: "header",
        text: "How is HTML Structured?"
      },
      {
        type: "paragraph",
        text: "HTML is written using tags and follows a tree-like structure, just like a family tree. Each tag can have parent, child, and sibling relationships, which helps define the hierarchy of elements on a webpage. Understanding this structure makes it easier to navigate and locate elements—especially when working with tools like XPath later."
      },
      {
        type: "image",
        src: HTMLStructure,
        alt: "React Portals Diagram"
      },
      {
        type: "header",
        text: "Syntax for a tag"
      },
      {
        type: "paragraph",
        text: "In HTML, there are two types of tags: container tags (with opening and closing) and empty tags (self-closing). Here's a quick breakdown of a tag:"
      },
      {
        type: "image",
        src: tagExplanationSVG,
        alt: "React Portals Diagram"
      },
      {
        type: "paragraph",
        text: "Note: A tag can have multiple attributes, and some attributes may not have values."
      },
    ]
  },
];
