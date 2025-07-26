import type { TestCase } from "../../../interfaces/interfaces"

export function createButtonTestCases(): TestCase[] {
  return [
    {
      id: "BTN_001",
      scenario: "Click enabled submit button",
      type: "positive",
      description: "Verify that clicking an enabled submit button triggers the expected action",
      expectedResult: "Form should be submitted successfully and user should see confirmation message",
      priority: "high",
      steps: [
        "Navigate to the form page",
        "Fill in required form fields",
        "Click the Submit button",
        "Verify confirmation message appears",
        "Verify form data is processed correctly",
      ],
    },
    {
      id: "BTN_002",
      scenario: "Click disabled button",
      type: "negative",
      description: "Verify that disabled buttons cannot be clicked and do not trigger actions",
      expectedResult: "Button should not respond to click events and no action should be triggered",
      priority: "high",
      steps: [
        "Navigate to page with disabled button",
        "Attempt to click the disabled button",
        "Verify no action is triggered",
        "Verify button remains in disabled state",
      ],
    },
    {
      id: "BTN_003",
      scenario: "Click button with missing form data",
      type: "error",
      description: "Test button behavior when required form validation fails",
      expectedResult: "Validation errors should be displayed and form should not submit",
      priority: "medium",
      steps: [
        "Navigate to form page",
        "Leave required fields empty",
        "Click Submit button",
        "Verify validation error messages appear",
        "Verify form is not submitted",
      ],
    },
    {
      id: "BTN_004",
      scenario: "Double-click prevention",
      type: "negative",
      description: "Verify button prevents double-click to avoid duplicate submissions",
      expectedResult: "Only one action should be triggered despite multiple rapid clicks",
      priority: "medium",
      steps: [
        "Navigate to form page",
        "Fill in form data",
        "Rapidly click Submit button multiple times",
        "Verify only one submission occurs",
        "Verify button is temporarily disabled during processing",
      ],
    },
    {
      id: "BTN_005",
      scenario: "Button hover state",
      type: "positive",
      description: "Verify button visual feedback on hover",
      expectedResult: "Button should show hover state with appropriate visual changes",
      priority: "low",
      steps: [
        "Navigate to page with interactive buttons",
        "Hover mouse over button",
        "Verify hover state styling is applied",
        "Move mouse away and verify normal state returns",
      ],
    },
  ]
}

export function createFormTestCases(): TestCase[] {
  return [
    {
      id: "FORM_001",
      scenario: "Submit form with valid data",
      type: "positive",
      description: "Verify successful form submission with all valid input data",
      expectedResult: "Form should submit successfully and show confirmation",
      priority: "high",
      steps: [
        "Navigate to form page",
        "Enter valid username",
        "Enter valid email address",
        "Select country from dropdown",
        "Check terms and conditions checkbox",
        "Click Submit button",
        "Verify success message appears",
      ],
    },
    {
      id: "FORM_002",
      scenario: "Submit form with invalid email",
      type: "negative",
      description: "Test form validation with invalid email format",
      expectedResult: "Email validation error should be displayed",
      priority: "high",
      steps: [
        "Navigate to form page",
        "Enter valid username",
        "Enter invalid email (e.g., 'invalid-email')",
        "Select country and check terms",
        "Click Submit button",
        "Verify email validation error message",
        "Verify form is not submitted",
      ],
    },
    {
      id: "FORM_003",
      scenario: "Submit empty form",
      type: "error",
      description: "Test form behavior when all required fields are empty",
      expectedResult: "Multiple validation errors should be displayed for required fields",
      priority: "high",
      steps: [
        "Navigate to form page",
        "Leave all fields empty",
        "Click Submit button",
        "Verify validation errors for all required fields",
        "Verify form is not submitted",
      ],
    },
  ]
}
