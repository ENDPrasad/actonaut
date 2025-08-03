export const conceptsData = {
  links: {
    name: "link",
    type: "link",
    overview:
      "The <a> (anchor) tag defines a hyperlink, allowing navigation between documents or triggering actions like email or file downloads.",
    syntaxCode: '<a href="https://example.com">Visit Example</a>',
    useCases: [
      "Navigating between pages",
      "Jumping to sections in the same page",
      "Opening external links",
      "Triggering email or phone apps",
      "Initiating file downloads",
    ], importantNote: [
      'Finding Links: We should target anchor tags(<a href="">Click here</a>)',
      'Some times button will also acts as link and they will be writing the navigation logic in script file'
    ]
  },
  button: {
    name: "button",
    type: "button",
    overview:
      "A <button> is an HTML element used to trigger actions when a user clicks on it. \nIt's commonly used to submit forms, open popups, like a post, remove items, or start a process like login or signup.",
    syntaxCode: '<button type="submit">Submit</button>',
    useCases: [
      "Submit Form → Login, Signup, Contact forms",
      "Trigger Action → Save settings, Start process (e.g., generate report)",
      "Remove / Delete → Remove item from cart, Delete post",
      "Follow / Like / Subscribe → Social media platforms (e.g., follow button on LinkedIn)"
    ], importantNote: [
      'Finding button: We should target button tag (because it is the standard way for defining a button)',
      'Sometimes div element will also acts as a button'
    ]
  },
  form: {
  name: "form",
  type: "form",
  overview:
    "The <form> element is used to collect user input and submit it to a server or handle it through client-side logic. \nIt can include text fields, checkboxes, radio buttons, dropdowns, and file uploads, often accompanied by validation and submission actions.",
  syntaxCode: `<form action="/submit" method="POST">\n  <input type="text" name="name" />\n  <button type="submit">Submit</button>\n</form>`,
  useCases: [
    "User Registration → Sign up forms with multiple input types",
    "Login → Collect credentials securely",
    "Feedback / Contact → Allow users to submit queries or reviews",
    "Checkout / Payment → Gather shipping and billing info",
    "Search → Submit keywords for product or content lookup"
  ], importantNote: [
    'We may find form tag or sometimes they will use simple div to wrap all the input elements'
  ]
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
    ], importantNote: [
      'We may find select tag as dropdown and option tag as values or simply a div',
      'If we have select tag then we can use Select class in Selenium'
    ]
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
    ], importantNote: [
      'Finding checkbox: We should target input tag with attribute type as checkbox (<input type="checkbox" />',
      'Sometimes we can see div tags as checkboxes',
      'We can assert a checkbox state using isSelected method',
      'Most of the times we can click on the label of the checkbox to select the option'
    ]
  },
  keyboard: {
  name: "keyboard",
  type: "keyboard",
  overview:
    "Keyboard events allow automation scripts to simulate or respond to user key interactions such as typing, pressing shortcuts, or navigating forms.",
  syntaxCode: 'element.dispatchEvent(new KeyboardEvent("keydown", { key: "Enter" }))',
  useCases: [
    "Form submission using Enter key",
    "Navigating through inputs with Tab",
    "Testing keyboard accessibility",
    "Triggering shortcuts (e.g., Ctrl + S)",
    "Simulating typing in input fields"
  ], importantNote: [
    'We need to use Actions class (Selenium) to perform keyboard actions'
  ]
},
table: {
  name: "table",
  type: "table",
  overview:
    "Tables display structured data in rows and columns. Automation scripts interact with them for data validation, sorting, filtering, and pagination testing.",
  syntaxCode: 'document.querySelector("table").rows[1].cells[0].textContent',
  useCases: [
    "Validating table data after form submissions",
    "Testing sorting functionality in columns",
    "Filtering and verifying search results",
    "Paginating large datasets",
    "Extracting tabular information for assertions"
  ], importantNote: [
    'Finding Table: We should target table tag which contains tHead, tBody, tr and td tags',
    'tHead: This is where the table headers present',
    'tBody: This is where actual data of the table present',
    'tr: This represents a particular row data',
    'td: This is where actual data be stored'
  ]
},
scroll: {
  name: "scroll",
  type: "scroll",
  overview:
    "Scroll automation involves simulating or validating vertical or horizontal scroll behaviors to reveal hidden content, trigger lazy loading, or interact with infinite scroll components.",
  syntaxCode: 'element.scrollIntoView({ behavior: "smooth" })',
  useCases: [
    "Triggering lazy-loaded content",
    "Interacting with elements outside the viewport",
    "Testing infinite scroll pagination",
    "Validating sticky header or footer behavior",
    "Ensuring smooth scrolling transitions and performance"
  ], importantNote: [
    'We can acheive scrolling in two different ways - using Actions class & using JSExecutor',
    
  ]
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
    ], importantNote: []
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
    ], importantNote: []
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
    ], importantNote: []
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
    ], importantNote: []
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
    ], importantNote: []
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
    ], importantNote: []
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
    ], importantNote: []
  },
  modal: {
  name: "modal",
  type: "modal",
  overview:
    "A modal is a dialog or popup window that appears on top of the current page, often used to display important information, forms, confirmations, or custom content without navigating away.",
  syntaxCode: `<div class="modal">Your content here</div>`,
  useCases: [
    "Login or signup forms",
    "Delete confirmation dialogs",
    "Image previews or detailed content views",
    "Alert or success messages in workflows",
    "Form wizards or step-based processes"
  ], importantNote: []
}
,
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
    ], importantNote: []
  },
  timepicker: {
  name: "timepicker",
  type: "timepicker",
  overview:
    "Allows users to select a specific time value, typically using a clock-style UI or dropdown. Helps ensure consistent and valid time input in forms.",
  syntaxCode: '<input type="time" />',
  useCases: [
    "Scheduling meetings or appointments",
    "Booking time slots for services",
    "Setting reminders or alarms",
    "Logging time for tasks or events"
  ], importantNote: []
},
notificationpermission: {
  name: "notificationpermission",
  type: "notificationpermission",
  overview:
    "Manages permission requests for showing browser notifications to users. Typically triggered on page load or by user interaction to allow, deny, or default notification access.",
  syntaxCode: 'Notification.requestPermission().then(permission => { console.log(permission); })',
  useCases: [
    "Requesting permission for push notifications",
    "Testing allow/deny/default permission flows",
    "Validating notification behavior based on permission",
    "Automating scenarios for browser-based alerts or reminders"
  ], importantNote: []

},
  datepicker: {
  name: "datepicker",
  type: "datepicker",
  overview:
    "Allows users to select a date from a calendar interface instead of typing manually. Useful for ensuring consistent date formats and enhancing user experience.",
  syntaxCode: '<input type="date" />',
  useCases: [
    "Selecting birth dates in forms",
    "Choosing booking or reservation dates",
    "Filtering reports by date range",
    "Scheduling appointments or meetings"
  ], importantNote: []
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
    ], importantNote: []
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
    ], importantNote: []
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
    ], importantNote: []
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
    ], importantNote: []
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
    ], importantNote: []
  },
};
