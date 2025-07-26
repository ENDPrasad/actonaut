import type { PracticeEnvironment } from "../../../interfaces/interfaces"

export function createButtonPracticeEnvironment(): PracticeEnvironment {
  return {
    title: "Button Automation Practice",
    description: "Practice automating different types of buttons and their interactions.",
    instructions: [
      "Click on each button to see its selector and properties",
      "Try writing automation code to click each button",
      "Test different button states (enabled, disabled, loading)",
      "Practice handling button click events and validations",
    ],
    interactiveElements: [
      {
        id: "submit-btn",
        type: "button",
        label: "Submit",
        selector: "#submit-button",
        description: "Primary submit button for form submission",
      },
      {
        id: "cancel-btn",
        type: "button",
        label: "Cancel",
        selector: "#cancel-button",
        description: "Secondary cancel button to abort operations",
      },
      {
        id: "delete-btn",
        type: "button",
        label: "Delete",
        selector: ".delete-btn",
        description: "Destructive action button with confirmation",
      },
    ],
  }
}

export function createFormPracticeEnvironment(): PracticeEnvironment {
  return {
    title: "Form Automation Practice",
    description: "Practice automating form elements including inputs, dropdowns, and checkboxes.",
    instructions: [
      "Fill out the form using automation",
      "Test form validation scenarios",
      "Practice handling different input types",
      "Test form submission and error handling",
    ],
    interactiveElements: [
      {
        id: "username-input",
        type: "input",
        label: "Username",
        selector: "#username",
        description: "Text input for username with validation",
      },
      {
        id: "email-input",
        type: "input",
        label: "Email",
        selector: "#email",
        description: "Email input with format validation",
      },
      {
        id: "country-select",
        type: "dropdown",
        label: "Country",
        selector: "#country-select",
        description: "Dropdown selection for country",
      },
      {
        id: "terms-checkbox",
        type: "checkbox",
        label: "Accept Terms",
        selector: "#terms-checkbox",
        description: "Checkbox for terms and conditions",
      },
    ],
  }
}
