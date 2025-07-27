export const conceptsData = {
  anchor: {
    name: "anchor",
    type: "anchor",
    overview:
      "The <a> (anchor) tag defines a hyperlink, allowing navigation between documents or triggering actions like email or file downloads.",
    syntaxCode: '<a href="https://example.com">Visit Example</a>',
    useCases: [
      "Navigating between pages",
      "Jumping to sections in the same page",
      "Opening external links",
      "Triggering email or phone apps",
      "Initiating file downloads",
    ],
  },
  button: {
    name: "button",
    type: "button",
    overview:
      "The <button> element represents a clickable button used to submit forms or trigger actions via JavaScript.",
    syntaxCode: '<button type="submit">Submit</button>',
    useCases: [
      "Submitting forms",
      "Triggering JavaScript functions",
      "Performing custom actions on click",
    ],
  },
  input: {
    name: "input",
    type: "input",
    overview:
      "The <input> tag is used to create interactive controls in a form that accept data from the user.",
    syntaxCode: '<input type="text" placeholder="Enter name" />',
    useCases: [
      "Capturing user input (text, email, password, etc.)",
      "Uploading files",
      "Toggling checkboxes and radio buttons",
    ],
  },
  select: {
    name: "select",
    type: "select",
    overview:
      "The <select> tag creates a dropdown list that lets users choose from a set of predefined options.",
    syntaxCode: '<select><option>Option 1</option></select>',
    useCases: [
      "Providing dropdown selections",
      "Allowing multi-select with `multiple` attribute",
    ],
  },
  checkbox: {
    name: "checkbox",
    type: "checkbox",
    overview:
      "Checkboxes allow the user to select one or more options from a set.",
    syntaxCode: '<input type="checkbox" checked />',
    useCases: [
      "Accepting terms and conditions",
      "Enabling filters",
      "Multi-option selection",
    ],
  },
  radio: {
    name: "radio",
    type: "radio",
    overview:
      "Radio buttons allow users to select one option from a set of mutually exclusive choices.",
    syntaxCode: '<input type="radio" name="gender" value="male" /> Male',
    useCases: [
      "Choosing one option from a list",
      "Survey and quiz forms",
    ],
  },
  textarea: {
    name: "textarea",
    type: "textarea",
    overview:
      "The <textarea> element is used for multi-line text input.",
    syntaxCode: '<textarea rows="4" cols="50">Text here</textarea>',
    useCases: [
      "Collecting long-form input like comments or feedback",
      "Message boxes",
    ],
  },
  dropdown: {
    name: "dropdown",
    type: "dropdown",
    overview:
      "Dropdowns are UI elements that allow selection from a hidden list of items when triggered.",
    syntaxCode: "<Select options={['One', 'Two']} /> // Custom",
    useCases: [
      "Choosing from a list of options",
      "Dynamic filtering",
    ],
  },
  alerts: {
    name: "alerts",
    type: "alerts",
    overview:
      "Alerts notify the user of important information using popups or messages.",
    syntaxCode: 'alert("Are you sure you want to delete this?")',
    useCases: [
      "Warning or confirmation before critical actions",
      "Informing user of errors or success",
    ],
  },
  tooltip: {
    name: "tooltip",
    type: "tooltip",
    overview:
      "Tooltips display additional information when a user hovers over or focuses on an element.",
    syntaxCode: '<button title="Click to submit">Submit</button>',
    useCases: [
      "Providing context or hints",
      "Labeling icons or buttons",
    ],
  },
  iframe: {
    name: "iframe",
    type: "iframe",
    overview:
      "The <iframe> element embeds another HTML page within the current document.",
    syntaxCode: '<iframe src="https://example.com" width="600"></iframe>',
    useCases: [
      "Embedding external content",
      "Sandboxed environments for forms or ads",
    ],
  },
  fileupload: {
    name: "fileupload",
    type: "fileupload",
    overview:
      "Used for uploading files from a user's computer to the server.",
    syntaxCode: '<input type="file" />',
    useCases: [
      "Image and document uploads",
      "Resume uploads in job portals",
    ],
  },
  draganddrop: {
    name: "draganddrop",
    type: "draganddrop",
    overview:
      "Enables dragging and dropping elements using mouse or touch events.",
    syntaxCode: 'element.setAttribute("draggable", true)',
    useCases: [
      "Custom file uploads",
      "Reordering list items",
      "Visual builders",
    ],
  },
  multitab: {
    name: "multitab",
    type: "multitab",
    overview:
      "Multi-tab interaction deals with handling state across different browser tabs or windows.",
    syntaxCode: '// Use sessionStorage/localStorage or BroadcastChannel API',
    useCases: [
      "Session sharing between tabs",
      "Preventing multiple logins",
    ],
  },
  slider: {
    name: "slider",
    type: "slider",
    overview:
      "A slider (range input) allows users to select a numeric value by sliding a handle.",
    syntaxCode: '<input type="range" min="0" max="100" />',
    useCases: [
      "Volume or brightness controls",
      "Adjusting values dynamically",
    ],
  },
  doubleclick: {
    name: "doubleclick",
    type: "doubleclick",
    overview:
      "Double click events detect two rapid clicks on the same element.",
    syntaxCode: 'element.ondblclick = () => alert("Double clicked!")',
    useCases: [
      "Zooming into images",
      "Triggering edit mode",
    ],
  },
  contextclick: {
    name: "contextclick",
    type: "contextclick",
    overview:
      "Triggers when the user right-clicks on an element, usually opening a context menu.",
    syntaxCode: 'element.oncontextmenu = (e) => e.preventDefault()',
    useCases: [
      "Custom right-click menus",
      "Preventing copy/download",
    ],
  },
  clickandhold: {
    name: "clickandhold",
    type: "clickandhold",
    overview:
      "Click and hold interactions detect long presses on elements.",
    syntaxCode:
      'element.onmousedown = () => setTimeout(() => alert("Held!"), 1000)',
    useCases: [
      "Activating secondary actions",
      "Revealing hidden content",
    ],
  },
};
