import type { AutomationTopic } from "../../interfaces/interfaces";

export const automationTopics: AutomationTopic[] = [
  {
    id: "btn",
    title: "Button",
    aliases: ["Click", "Action", "CTA", "Hover", "Double Click"],
    description: "Learn how to automate interactions with buttons including hover, click, and double-click actions.",
    path: "/concepts/button",
    category: "Element",
    tags: ["click", "interaction", "hover"]
  },
  {
  id: "form",
  title: "Form",
  aliases: ["Input Form", "User Form", "Submit", "Validation", "Text Fields"],
  description: "Learn how to automate interactions with forms including input fields, validation, and form submission.",
  path: "/concepts/form",
  category: "Element",
  tags: ["input", "form", "validation", "submit", "automation"]
}
,
  {
    id: "checkbox",
    title: "Checkbox",
    aliases: ["Tickbox", "Selection", "Options", "Check", "Multi-select"],
    description: "Automate checking and unchecking checkboxes, including groups and dynamic ones.",
    path: "/concepts/checkbox",
    category: "Input"
  },
  {
    id: "radio",
    title: "Radio Button",
    aliases: ["Single Select", "Choice", "Options", "Form Radio"],
    description: "Learn how to work with radio groups, default selections and state assertions.",
    path: "/concepts/radio",
    category: "Input"
  },
  {
  id: "datepicker",
  title: "Date Picker",
  aliases: ["Calendar", "Date Input", "Select Date", "Form Datepicker"],
  description: "Learn how to work with date pickers, select dates, and validate date-based inputs.",
  path: "/concepts/datepicker",
  category: "Input"
},

  {
    id: "dropdown",
    title: "Dropdown",
    aliases: ["Select", "Options", "Combo Box", "List", "Select Menu"],
    description: "Automate selecting options from dropdowns (static, dynamic, searchable).",
    path: "/concepts/dropdown",
    category: "Input"
  },
  {
  id: "timepicker",
  title: "Time Picker",
  aliases: ["Time Input", "Clock Picker", "Select Time", "Form Timepicker"],
  description: "Learn how to automate selecting and validating time inputs in forms and scheduling interfaces.",
  path: "/concepts/timepicker",
  category: "Input"
},
// {
//   id: "notificationpermission",
//   title: "Notification Permission",
//   aliases: ["Browser Notification", "Push Permission", "Notification Prompt", "Allow Notifications"],
//   description: "Automate handling browser notification permission prompts and validating user responses during tests.",
//   path: "/concepts/notificationpermission",
//   category: "Browser APIs"
// },
  {
    id: "alert",
    title: "Alert & Prompt",
    aliases: ["JavaScript Alerts", "Popup", "Confirm", "Prompt"],
    description: "Handle browser alerts, confirmations, and prompt windows during automation.",
    path: "/concepts/alert",
    category: "Event"
  },
  {
    id: "iframe",
    title: "iFrame",
    aliases: ["Embedded Content", "Nested Page", "Inline Frame"],
    description: "Understand how to switch contexts and interact with elements inside iframes.",
    path: "/concepts/iframe",
    category: "Navigation"
  },
  {
    id: "modal",
    title: "Modal",
    aliases: ["Popup", "Dialog", "Overlay", "Popup Box"],
    description: "Work with modal windows, visibility checks, and closing mechanisms.",
    path: "/concepts/modal",
    category: "Overlay"
  },
  {
    id: "tooltip",
    title: "Tooltip",
    aliases: ["Hover Info", "Help Text", "Info Icon"],
    description: "Trigger and validate tooltips using hover or focus.",
    path: "/concepts/tooltip",
    category: "Interaction"
  },
  {
    id: "draganddrop",
    title: "Drag & Drop",
    aliases: ["Reorder", "Draggable", "Sort"],
    description: "Test drag-and-drop features across lists, containers, or grids.",
    path: "/concepts/draganddrop",
    category: "Event"
  },
  {
    id: "keyboard",
    title: "Keyboard Events",
    aliases: ["KeyPress", "KeyUp", "KeyDown", "Shortcut"],
    description: "Simulate and test keyboard-based interactions and shortcuts.",
    path: "/concepts/keyboard",
    category: "Event"
  },
  // {
  //   id: "navigation",
  //   title: "Navigation",
  //   aliases: ["Page Load", "Redirect", "Back", "Forward", "Multi-tab"],
  //   description: "Test page transitions, redirects, and browser navigation behaviors.",
  //   path: "/concepts/navigation",
  //   category: "Navigation"
  // },
  {
  id: "table",
  title: "Table",
  aliases: ["Data Table", "Grid", "Rows and Columns", "Table Cell", "Tabular Data"],
  description: "Automate interactions with tables including reading data, sorting, filtering, and validating row-column values.",
  path: "/concepts/table",
  category: "DOM Interaction"
},
  {
    id: "multiwindow",
    title: "Multi Window",
    aliases: ["New Tab", "Multiple Windows", "Popup Window"],
    description: "Test interactions involving multiple tabs or windows.",
    path: "/concepts/multiwindow",
    category: "Navigation"
  },
  {
    id: "slider",
    title: "Slider",
    aliases: ["Range Input", "Seekbar", "Progress Bar"],
    description: "Simulate sliding behavior and test UI response for value change.",
    path: "/concepts/slider",
    category: "Input"
  },
  {
    id: "scroll",
    title: "Scroll Events",
    aliases: ["Scroll", "Lazy Load", "Infinite Scroll"],
    description: "Test visibility and lazy loading behavior triggered on scroll.",
    path: "/concepts/scroll",
    category: "Interaction"
  },
  {
  id: "links",
  title: "Anchor Tag Navigation",
  aliases: ["Links", "In-Page Navigation", "External Links", "Href"],
  description: "Test different types of anchor tag navigations including in-page, external, new tab/window, and broken links.",
  path: "/concepts/links",
  category: "Navigation"
},
  {
    id: "fileupload",
    title: "File Upload",
    aliases: ["Choose File", "Browse", "Upload"],
    description: "Practice file uploads with local files and validation steps.",
    path: "/concepts/fileupload",
    category: "Input"
  },
  {
    id: "wait",
    title: "Wait Conditions",
    aliases: ["Explicit Wait", "Implicit Wait", "Delay", "Timeout"],
    description: "Handle synchronization issues by practicing smart waits and retries.",
    path: "/concepts/wait",
    category: "Control Flow"
  }
];

