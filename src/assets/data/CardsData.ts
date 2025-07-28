import type { AutomationTopic } from "../../interfaces/interfaces";

export const automationTopics: AutomationTopic[] = [
  {
    id: "btn",
    title: "Button",
    aliases: ["Click", "Action", "CTA", "Hover", "Double Click"],
    description: "Learn how to automate interactions with buttons including hover, click, and double-click actions.",
    path: "/explore/button",
    category: "Element",
    tags: ["click", "interaction", "hover"]
  },
  {
  id: "form",
  title: "Form",
  aliases: ["Input Form", "User Form", "Submit", "Validation", "Text Fields"],
  description: "Learn how to automate interactions with forms including input fields, validation, and form submission.",
  path: "/explore/form",
  category: "Element",
  tags: ["input", "form", "validation", "submit", "automation"]
}
,
  {
    id: "checkbox",
    title: "Checkbox",
    aliases: ["Tickbox", "Selection", "Options", "Check", "Multi-select"],
    description: "Automate checking and unchecking checkboxes, including groups and dynamic ones.",
    path: "/explore/checkbox",
    category: "Input"
  },
  {
    id: "radio",
    title: "Radio Button",
    aliases: ["Single Select", "Choice", "Options", "Form Radio"],
    description: "Learn how to work with radio groups, default selections and state assertions.",
    path: "/explore/radio",
    category: "Input"
  },
  {
  id: "datepicker",
  title: "Date Picker",
  aliases: ["Calendar", "Date Input", "Select Date", "Form Datepicker"],
  description: "Learn how to work with date pickers, select dates, and validate date-based inputs.",
  path: "/explore/datepicker",
  category: "Input"
},

  {
    id: "dropdown",
    title: "Dropdown",
    aliases: ["Select", "Options", "Combo Box", "List", "Select Menu"],
    description: "Automate selecting options from dropdowns (static, dynamic, searchable).",
    path: "/explore/dropdown",
    category: "Input"
  },
  {
  id: "timepicker",
  title: "Time Picker",
  aliases: ["Time Input", "Clock Picker", "Select Time", "Form Timepicker"],
  description: "Learn how to automate selecting and validating time inputs in forms and scheduling interfaces.",
  path: "/explore/timepicker",
  category: "Input"
},
{
  id: "notificationpermission",
  title: "Notification Permission",
  aliases: ["Browser Notification", "Push Permission", "Notification Prompt", "Allow Notifications"],
  description: "Automate handling browser notification permission prompts and validating user responses during tests.",
  path: "/explore/notificationpermission",
  category: "Browser APIs"
},
  {
    id: "alert",
    title: "Alert & Prompt",
    aliases: ["JavaScript Alerts", "Popup", "Confirm", "Prompt"],
    description: "Handle browser alerts, confirmations, and prompt windows during automation.",
    path: "/explore/alert",
    category: "Event"
  },
  {
    id: "iframe",
    title: "iFrame",
    aliases: ["Embedded Content", "Nested Page", "Inline Frame"],
    description: "Understand how to switch contexts and interact with elements inside iframes.",
    path: "/explore/iframe",
    category: "Navigation"
  },
  {
    id: "modal",
    title: "Modal",
    aliases: ["Popup", "Dialog", "Overlay", "Popup Box"],
    description: "Work with modal windows, visibility checks, and closing mechanisms.",
    path: "/explore/modal",
    category: "Overlay"
  },
  {
    id: "tooltip",
    title: "Tooltip",
    aliases: ["Hover Info", "Help Text", "Info Icon"],
    description: "Trigger and validate tooltips using hover or focus.",
    path: "/explore/tooltip",
    category: "Interaction"
  },
  {
    id: "draganddrop",
    title: "Drag & Drop",
    aliases: ["Reorder", "Draggable", "Sort"],
    description: "Test drag-and-drop features across lists, containers, or grids.",
    path: "/explore/draganddrop",
    category: "Event"
  },
  {
    id: "keyboard",
    title: "Keyboard Events",
    aliases: ["KeyPress", "KeyUp", "KeyDown", "Shortcut"],
    description: "Simulate and test keyboard-based interactions and shortcuts.",
    path: "/explore/keyboard",
    category: "Event"
  },
  {
    id: "navigation",
    title: "Navigation",
    aliases: ["Page Load", "Redirect", "Back", "Forward", "Multi-tab"],
    description: "Test page transitions, redirects, and browser navigation behaviors.",
    path: "/explore/navigation",
    category: "Navigation"
  },
  {
  id: "table",
  title: "Table",
  aliases: ["Data Table", "Grid", "Rows and Columns", "Table Cell", "Tabular Data"],
  description: "Automate interactions with tables including reading data, sorting, filtering, and validating row-column values.",
  path: "/explore/table",
  category: "DOM Interaction"
},
  {
    id: "multiwindow",
    title: "Multi Window",
    aliases: ["New Tab", "Multiple Windows", "Popup Window"],
    description: "Test interactions involving multiple tabs or windows.",
    path: "/explore/multiwindow",
    category: "Navigation"
  },
  {
    id: "slider",
    title: "Slider",
    aliases: ["Range Input", "Seekbar", "Progress Bar"],
    description: "Simulate sliding behavior and test UI response for value change.",
    path: "/explore/slider",
    category: "Input"
  },
  {
    id: "scroll",
    title: "Scroll Events",
    aliases: ["Scroll", "Lazy Load", "Infinite Scroll"],
    description: "Test visibility and lazy loading behavior triggered on scroll.",
    path: "/explore/scroll",
    category: "Interaction"
  },
  {
    id: "fileupload",
    title: "File Upload",
    aliases: ["Choose File", "Browse", "Upload"],
    description: "Practice file uploads with local files and validation steps.",
    path: "/explore/file-upload",
    category: "Input"
  },
  {
    id: "wait",
    title: "Wait Conditions",
    aliases: ["Explicit Wait", "Implicit Wait", "Delay", "Timeout"],
    description: "Handle synchronization issues by practicing smart waits and retries.",
    path: "/explore/wait",
    category: "Control Flow"
  }
];

