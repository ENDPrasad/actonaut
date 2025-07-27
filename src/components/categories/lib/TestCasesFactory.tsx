import type { TestCase } from "../../../interfaces/interfaces"

export function createButtonTestCases(): TestCase[] {
  return [
  {
    "id": "BTN_001",
    "scenario": "Click Follow button when enabled",
    "type": "positive",
    "description": "Verify that clicking the Follow button changes its state to Following",
    "expectedResult": "Button text and icon should change to 'Following' with a check icon",
    "priority": "high",
    "steps": [
      "Navigate to the Suggestions section",
      "Identify a card with Follow button enabled",
      "Click the Follow button",
      "Verify button changes to 'Following'",
      "Verify icon changes to check mark"
    ]
  },
  {
    "id": "BTN_002",
    "scenario": "Tooltip visibility on hover",
    "type": "positive",
    "description": "Verify tooltip appears on hovering over the Follow button",
    "expectedResult": "Tooltip should display 'Click to follow' or 'Click to unfollow' based on state",
    "priority": "medium",
    "steps": [
      "Navigate to the Suggestions section",
      "Hover over the Follow or Following button",
      "Verify tooltip text matches the button state"
    ]
  },
  {
    "id": "BTN_003",
    "scenario": "Follow button shows loading spinner",
    "type": "positive",
    "description": "Ensure spinner appears while follow action is in progress",
    "expectedResult": "Circular loading spinner should appear before state changes",
    "priority": "medium",
    "steps": [
      "Click the Follow button",
      "Observe the spinner displayed in the button",
      "Wait for 1 second",
      "Verify button state changes to 'Following'"
    ]
  },
  {
    "id": "BTN_004",
    "scenario": "Button should be disabled during loading",
    "type": "positive",
    "description": "Ensure button cannot be clicked multiple times during loading",
    "expectedResult": "Button remains disabled until the async operation completes",
    "priority": "high",
    "steps": [
      "Click the Follow button",
      "Immediately try clicking again",
      "Verify the second click has no effect",
      "Wait for button to finish loading",
      "Verify state updates only once"
    ]
  },
  {
    "id": "BTN_005",
    "scenario": "Click Unfollow (toggle back)",
    "type": "positive",
    "description": "Verify the button toggles back to Follow on second click",
    "expectedResult": "Button should return to Follow state after click",
    "priority": "medium",
    "steps": [
      "Click Follow button",
      "Wait for it to change to Following",
      "Click Following button",
      "Verify button reverts to Follow"
    ]
  },
  {
    "id": "BTN_006",
    "scenario": "Try clicking disabled button",
    "type": "negative",
    "description": "Ensure no action is taken when clicking a disabled button",
    "expectedResult": "Button should not change state or trigger any function",
    "priority": "medium",
    "steps": [
      "Click Follow button to trigger loading",
      "During loading, try to click the button again",
      "Verify no second request or state change occurs"
    ]
  },
  {
    "id": "BTN_007",
    "scenario": "Multiple follow buttons - consistent behavior",
    "type": "positive",
    "description": "Ensure multiple cards have independent follow state handling",
    "expectedResult": "Clicking one Follow button should not affect others",
    "priority": "high",
    "steps": [
      "Navigate to Suggestions with 3 user cards",
      "Click Follow on the first card",
      "Verify only the first card changes to Following",
      "Ensure other buttons remain unchanged",
      "Navigate to other sections(concept or Testcases) and come back. State of the buttons should be consistent"
    ]
  },
  {
    "id": "BTN_008",
    "scenario": "Fast repeated clicks on Follow button",
    "type": "negative",
    "description": "Simulate repeated clicks and check for race conditions",
    "expectedResult": "Button should handle rapid clicks gracefully without duplicate state toggles",
    "priority": "high",
    "steps": [
      "Rapidly click the Follow button multiple times",
      "Observe whether it triggers the loading spinner only once",
      "Verify the state transitions correctly",
      "Ensure no UI glitch or incorrect state appears"
    ]
  },
  {
    "id": "BTN_009",
    "scenario": "Check accessibility focus on Follow button",
    "type": "positive",
    "description": "Verify keyboard tab navigation focuses on the button",
    "expectedResult": "User can focus and trigger the button using keyboard",
    "priority": "low",
    "steps": [
      "Use Tab key to navigate to Follow button",
      "Press Enter or Space",
      "Verify button click is triggered",
      "Verify focus ring appears on button"
    ]
  },
  {
    "id": "BTN_010",
    "scenario": "Missing user data edge case",
    "type": "negative",
    "description": "Handle case where user data like name or avatar is missing",
    "expectedResult": "Card should still render without breaking layout or crashing",
    "priority": "high",
    "steps": [
      "Pass empty string or null as avatar and name",
      "Render the user card component",
      "Verify default avatar is shown",
      "Verify layout remains intact"
    ]
  },
  {
    id: "BTN_011",
    scenario: "Remove a suggestion card",
    type: "positive",
    description: "Verify that clicking the remove icon deletes the suggestion from the UI",
    expectedResult: "The selected suggestion card should be removed from the visible list",
    priority: "medium",
    steps: [
      "Navigate to the home page",
      "Locate a suggestion card under 'Suggestions for you'",
      "Click on the 'Remove' (X) icon of that suggestion card",
      "Verify that the suggestion card disappears from the list",
      "Ensure other cards remain unaffected",
    ],
  },
  {
    id: "BTN_012",
    scenario: "Click remove on a non-existing card (after fast deletion)",
    type: "negative",
    description: "Ensure no errors occur if user clicks remove multiple times quickly",
    expectedResult: "Component should not throw any error and card should only be removed once",
    priority: "low",
    steps: [
      "Navigate to the home page",
      "Locate a suggestion card",
      "Click remove icon multiple times quickly",
      "Observe that the card disappears smoothly",
      "Verify no crash or unexpected behavior occurs",
    ],
  }
]

}

export function createCheckBoxTestCases(): TestCase[] {
  return [
  {
    id: "NEWS_001",
    scenario: "Select multiple categories and view filtered news",
    type: "positive",
    description: "Verify that selecting multiple categories displays only news items from those categories",
    expectedResult: "Only news from the selected categories should appear",
    priority: "high",
    steps: [
      "Navigate to the news feed page",
      "Click 'Set Preferences'",
      "Check 'Technology' and 'Health'",
      "Click 'Done'",
      "Verify only Technology and Health news are displayed",
    ],
  },
  {
    id: "NEWS_002",
    scenario: "Unselect all categories",
    type: "negative",
    description: "Verify that no news is shown when no categories are selected",
    expectedResult: "A message indicating no news should be displayed",
    priority: "medium",
    steps: [
      "Click 'Set Preferences'",
      "Uncheck all categories",
      "Click 'Done'",
      "Verify that no news cards are shown",
      "Verify that a friendly message is displayed",
    ],
  },
  {
    id: "NEWS_003",
    scenario: "Open and close preference dialog without changes",
    type: "positive",
    description: "Verify that news feed remains unchanged if preferences are not modified",
    expectedResult: "News items before and after dialog open should match",
    priority: "low",
    steps: [
      "Note current news items",
      "Click 'Set Preferences'",
      "Close the dialog without making changes",
      "Verify that news items remain the same",
    ],
  },
  {
    id: "NEWS_004",
    scenario: "Rapidly toggle category checkboxes",
    type: "negative",
    description: "Verify system stability when toggling categories rapidly",
    expectedResult: "No crash or unexpected behavior should occur",
    priority: "medium",
    steps: [
      "Click 'Set Preferences'",
      "Rapidly check and uncheck several categories",
      "Click 'Done'",
      "Verify the UI updates correctly without any glitches",
    ],
  }
]

}

export function createRadioTestCases(): TestCase[] {
  return [
  {
    id: "QUIZ_001",
    scenario: "Submit quiz with all correct answers",
    type: "positive",
    description: "Verify that a user gets full score and sees 'Pass' if all answers are correct",
    expectedResult: "Score displays as full and result shows 'Pass 🎉'",
    priority: "high",
    steps: [
      "Navigate to the quiz page",
      "Select correct answers for all 4 questions",
      "Click 'Submit'",
      "Verify the score is 4",
      "Verify 'Pass 🎉' is shown",
    ],
  },
  {
    id: "QUIZ_002",
    scenario: "Submit quiz with all incorrect answers",
    type: "negative",
    description: "Verify that a user fails the quiz if all answers are wrong",
    expectedResult: "Score should be 0 and result should show 'Fail ❌'",
    priority: "high",
    steps: [
      "Navigate to the quiz page",
      "Select incorrect answers for all questions",
      "Click 'Submit'",
      "Verify the score is 0",
      "Verify 'Fail ❌' is shown",
    ],
  },
  {
    id: "QUIZ_003",
    scenario: "Submit quiz with partial correct answers",
    type: "positive",
    description: "Verify that result reflects partial score and determines pass/fail correctly",
    expectedResult: "Score is accurate, and result shows Pass if ≥60%, else Fail",
    priority: "medium",
    steps: [
      "Select 3 correct answers and 1 incorrect",
      "Click 'Submit'",
      "Verify score is 3",
      "Verify result is 'Pass 🎉'",
    ],
  },
  {
    id: "QUIZ_004",
    scenario: "Submit without answering any questions",
    type: "negative",
    description: "Verify system handles submission when no answers are selected",
    expectedResult: "Score should be 0 and 'Fail ❌' should be shown",
    priority: "medium",
    steps: [
      "Navigate to quiz page",
      "Click 'Submit' without selecting any options",
      "Verify score is 0",
      "Verify result shows 'Fail ❌'",
    ],
  },
  {
    id: "QUIZ_005",
    scenario: "Change answer before submission",
    type: "positive",
    description: "Verify that changing an answer updates the selection correctly",
    expectedResult: "Only the latest selected option should be considered during evaluation",
    priority: "medium",
    steps: [
      "Select an answer for a question",
      "Change it to a different option",
      "Submit the quiz",
      "Verify only the last selected answer is considered",
    ],
  }
]

}

export function createDropDownTestCases():TestCase[] {
  return [
  {
    id: "LANG_001",
    scenario: "Select a different language from the dropdown",
    type: "positive",
    description: "Verify that the translated text updates according to the selected language",
    expectedResult: "Displayed text should change to the translation for the selected language",
    priority: "high",
    steps: [
      "Navigate to the language selector component",
      "Click on the dropdown",
      "Select 'French' from the options",
      "Verify that the message updates to French translation"
    ]
  },
  {
    id: "LANG_002",
    scenario: "Select the same language again",
    type: "positive",
    description: "Verify that selecting the same language does not change the text",
    expectedResult: "Message remains unchanged when the selected language is reselected",
    priority: "low",
    steps: [
      "Navigate to the language selector component",
      "Ensure 'English' is selected by default",
      "Click the dropdown and select 'English' again",
      "Verify that the message stays in English"
    ]
  },
  {
    id: "LANG_003",
    scenario: "No language selected (default load)",
    type: "positive",
    description: "Verify that a default language message is shown when component loads",
    expectedResult: "Default message in English should be displayed",
    priority: "medium",
    steps: [
      "Navigate to the language selector component",
      "Do not select any language",
      "Verify that the message appears in English by default"
    ]
  },
  {
    id: "LANG_004",
    scenario: "Attempt to select an unsupported language",
    type: "negative",
    description: "Verify that selecting an invalid or unsupported language does not break the UI",
    expectedResult: "Component should either ignore it or fallback to default without crashing",
    priority: "medium",
    steps: [
      "Simulate setting selected language to an invalid code (e.g., 'jp') in state manually",
      "Render the component",
      "Verify that no crash occurs and fallback/default message is shown"
    ]
  },
  {
    id: "LANG_005",
    scenario: "Rapidly switch between multiple languages",
    type: "negative",
    description: "Verify that the component handles rapid language switching without delay or error",
    expectedResult: "Text should update correctly and no performance or visual glitches should occur",
    priority: "medium",
    steps: [
      "Navigate to the language selector component",
      "Quickly select 'German', then 'Hindi', then 'Spanish'",
      "Verify that the final displayed message matches 'Spanish' translation"
    ]
  }
]

}

export function createIFrameTestCases(): TestCase[] {
  return [
  {
    id: "IFRAME_001",
    scenario: "Render basic HTML correctly",
    type: "positive",
    description: "Verify that simple HTML content renders properly inside the iframe",
    expectedResult: "Content such as headers and paragraphs should appear in the preview area",
    priority: "high",
    steps: [
      "Navigate to the HTML editor component",
      "Enter '<h1>Hello</h1><p>This is a test</p>' in the editor",
      "Verify that the preview area displays the corresponding header and paragraph"
    ]
  },
  {
    id: "IFRAME_002",
    scenario: "Update preview in real-time as user types",
    type: "positive",
    description: "Ensure that changes to the HTML editor update the iframe content instantly",
    expectedResult: "Preview pane should reflect changes without needing to reload or save",
    priority: "high",
    steps: [
      "Navigate to the HTML editor component",
      "Type '<p>Hello</p>' and observe the preview",
      "Add '<b>World</b>' and ensure the preview updates with both changes"
    ]
  },
  {
    id: "IFRAME_003",
    scenario: "Enter invalid HTML code",
    type: "negative",
    description: "Verify the preview still attempts to render and doesn’t crash on malformed HTML",
    expectedResult: "Iframe should render as much valid content as possible without error",
    priority: "medium",
    steps: [
      "Navigate to the HTML editor component",
      "Enter '<div><p>Broken HTML' (no closing tags)",
      "Verify iframe still shows partial content and no crash or console error occurs"
    ]
  },
  {
    id: "IFRAME_004",
    scenario: "Inject script tags",
    type: "negative",
    description: "Ensure that scripts do not execute inside the iframe for security reasons",
    expectedResult: "Script tags should be blocked due to sandboxing; no alert or JS execution should happen",
    priority: "high",
    steps: [
      "Navigate to the HTML editor component",
      "Enter '<script>alert(\"Hacked\")</script>' in the editor",
      "Verify that no alert box appears and preview pane does not execute JS"
    ]
  },
  {
    id: "IFRAME_005",
    scenario: "Preview complex nested HTML structure",
    type: "positive",
    description: "Validate iframe can handle deep HTML structures without breaking layout",
    expectedResult: "Complex layout should render correctly in preview area",
    priority: "medium",
    steps: [
      "Navigate to the HTML editor component",
      "Paste a deeply nested HTML like nested tables or divs",
      "Ensure the layout renders without breaking and matches structure"
    ]
  },
  {
    id: "IFRAME_006",
    scenario: "Clear HTML editor input",
    type: "positive",
    description: "Check if clearing the input removes the preview content",
    expectedResult: "Iframe should render a blank or empty page",
    priority: "low",
    steps: [
      "Navigate to the HTML editor component",
      "Clear all content from the editor",
      "Verify the preview area becomes blank"
    ]
  },
  {
    id: "IFRAME_007",
    scenario: "Resize browser window",
    type: "positive",
    description: "Verify that the iframe remains responsive and resizes with the layout",
    expectedResult: "Preview pane should adapt to new dimensions without layout issues",
    priority: "low",
    steps: [
      "Navigate to the HTML editor component",
      "Resize the browser window to smaller and larger widths",
      "Ensure iframe adjusts its size responsively"
    ]
  }
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
      "Navigate to the form page",
      "Enter valid name",
      "Enter valid email address",
      "Enter valid phone number",
      "Upload a PDF resume",
      "Add at least one skill",
      "Select one or more job roles",
      "Click the Submit button",
      "Verify success toast appears",
    ],
  },
  {
    id: "FORM_002",
    scenario: "Preview filled form before submitting",
    type: "positive",
    description: "Verify the preview modal displays all entered data correctly",
    expectedResult: "All filled values should be shown correctly in the preview modal",
    priority: "medium",
    steps: [
      "Navigate to the form page",
      "Fill in all valid form details",
      "Click on the Preview button",
      "Verify the preview modal opens",
      "Verify all field data is displayed accurately",
    ],
  },
  {
    id: "FORM_003",
    scenario: "Try submitting without filling any fields",
    type: "negative",
    description: "Verify validation errors appear when form is submitted with empty fields",
    expectedResult: "Validation errors should appear below each required field",
    priority: "high",
    steps: [
      "Navigate to the form page",
      "Click Submit without entering any information",
      "Verify validation errors for Name, Email, Phone, Resume, Skills, and Job Roles",
    ],
  },
  {
    id: "FORM_004",
    scenario: "Enter invalid email format",
    type: "negative",
    description: "Verify error message is shown when email is in invalid format",
    expectedResult: "Email field should show an error and block submission",
    priority: "high",
    steps: [
      "Navigate to the form page",
      "Enter a valid name and phone number",
      "Enter 'user@invalid' in the email field",
      "Move focus to the next field",
      "Verify validation error for email format appears",
    ],
  },
  {
    id: "FORM_005",
    scenario: "Upload non-PDF file as resume",
    type: "negative",
    description: "Ensure that non-PDF file uploads are rejected",
    expectedResult: "Resume field should reject file and show an error or ignore the input",
    priority: "medium",
    steps: [
      "Navigate to the form page",
      "Fill other fields with valid data",
      "Try uploading a `.docx` or `.png` file",
      "Verify that the file is not accepted",
    ],
  },
  {
    id: "FORM_006",
    scenario: "Add duplicate skill",
    type: "negative",
    description: "Verify that duplicate skill entries are prevented",
    expectedResult: "Duplicate skill should not be added again",
    priority: "low",
    steps: [
      "Navigate to the form page",
      "Add 'React' as a skill and press Enter",
      "Add 'React' again and press Enter",
      "Verify that skill appears only once",
    ],
  },
  {
    id: "FORM_007",
    scenario: "Submit form with only required fields filled",
    type: "positive",
    description: "Verify form submits successfully when all required fields are valid",
    expectedResult: "Form should submit successfully without optional fields",
    priority: "medium",
    steps: [
      "Navigate to the form page",
      "Fill in Name, Email, Phone, Upload Resume, at least one Skill, and one Job Role",
      "Leave optional notes (if any) blank",
      "Click Submit",
      "Verify success toast appears",
    ],
  },
  {
    id: "FORM_008",
    scenario: "Cancel form after partially filling data",
    type: "positive",
    description: "Verify that clicking cancel clears the form",
    expectedResult: "All fields should be reset and empty",
    priority: "low",
    steps: [
      "Navigate to the form page",
      "Enter data in some fields (e.g., Name, Email)",
      "Click Cancel",
      "Verify that all input fields are cleared",
    ],
  },
  {
    id: "FORM_009",
    scenario: "Click preview with empty fields",
    type: "negative",
    description: "Ensure preview doesn't open when required fields are empty",
    expectedResult: "Validation errors should appear instead of opening preview modal",
    priority: "medium",
    steps: [
      "Navigate to the form page",
      "Leave some required fields blank",
      "Click on Preview",
      "Verify error messages are shown and modal does not open",
    ],
  },
  {
    id: "FORM_010",
    scenario: "Use keyboard to add skills via Enter key",
    type: "positive",
    description: "Verify that skills can be added using the Enter key only when input is non-empty",
    expectedResult: "Skill chip should appear and input should clear",
    priority: "medium",
    steps: [
      "Navigate to the form page",
      "Type 'JavaScript' in the skill field",
      "Press Enter key",
      "Verify that 'JavaScript' chip appears",
      "Verify input field is cleared",
    ],
  },
]
}
