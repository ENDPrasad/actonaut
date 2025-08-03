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

export function createModalWindowTestCases(): TestCase[] {
  return [
  {
    id: "MODAL_001",
    scenario: "Open modal on delete button click",
    type: "positive",
    description: "Verify that the modal window opens when the delete button is clicked",
    expectedResult: "Modal should appear with confirmation message and buttons",
    priority: "high",
    steps: [
      "Navigate to the page with the delete button",
      "Click on the delete button",
      "Verify that the modal appears with appropriate content"
    ]
  },
  {
    id: "MODAL_002",
    scenario: "Close modal by clicking cancel",
    type: "positive",
    description: "Ensure modal closes without deleting the item when Cancel is clicked",
    expectedResult: "Modal should close and no action should be taken",
    priority: "high",
    steps: [
      "Click the delete button to open modal",
      "Click the Cancel button in the modal",
      "Verify that the modal closes and item remains visible"
    ]
  },
  {
    id: "MODAL_003",
    scenario: "Confirm delete action from modal",
    type: "positive",
    description: "Verify that clicking Delete performs the action and closes the modal",
    expectedResult: "Item should be deleted and modal should close",
    priority: "high",
    steps: [
      "Click the delete button to open modal",
      "Click the Delete button",
      "Check that modal closes and item is removed from the view"
    ]
  },
  {
    id: "MODAL_005",
    scenario: "Press Escape key to close modal",
    type: "positive",
    description: "Verify that pressing the Escape key closes the modal",
    expectedResult: "Modal should close without performing any action",
    priority: "medium",
    steps: [
      "Click the delete button to open modal",
      "Press the Escape key on the keyboard",
      "Confirm that modal closes and item remains"
    ]
  },
  {
    id: "MODAL_006",
    scenario: "Click outside modal to close it",
    type: "positive",
    description: "Verify that clicking outside the modal closes it without taking action",
    expectedResult: "Modal should close and no changes should be made",
    priority: "medium",
    steps: [
      "Click the delete button to open modal",
      "Click anywhere outside the modal window",
      "Ensure the modal disappears and item remains unchanged"
    ]
  }
]

}

export function createDragAndDropTestCases(): TestCase[] {
  return [
  {
    id: "KANBAN_001",
    scenario: "Drag a task from 'Not Started' to 'In Progress'",
    type: "positive",
    description: "Verify that a task can be moved from 'Not Started' to 'In Progress' using drag and drop",
    expectedResult: "Task should appear in 'In Progress' column with status updated",
    priority: "high",
    steps: [
      "Locate a task card under 'Not Started'",
      "Click and drag the task card to the 'In Progress' column",
      "Drop the task and verify it moves to the new column",
      "Check if task status reflects 'In Progress'"
    ]
  },
  {
    id: "KANBAN_002",
    scenario: "Drag a task from 'In Progress' to 'Done'",
    type: "positive",
    description: "Verify that a task can be moved from 'In Progress' to 'Done'",
    expectedResult: "Task should appear under 'Done' with updated status",
    priority: "high",
    steps: [
      "Identify a task card in 'In Progress'",
      "Drag the card into the 'Done' column",
      "Release and verify it is displayed in the 'Done' column",
      "Confirm the status value is updated accordingly"
    ]
  },
  {
    id: "KANBAN_003",
    scenario: "Attempt to drop a card outside any column",
    type: "negative",
    description: "Ensure task cards cannot be dropped outside of valid drop zones",
    expectedResult: "Task should return to original column without changes",
    priority: "medium",
    steps: [
      "Pick a task card from any column",
      "Drag it outside of all columns (e.g., empty space)",
      "Release the card and verify it snaps back to original column"
    ]
  },
  {
    id: "KANBAN_004",
    scenario: "Reorder tasks within the same column (not supported)",
    type: "negative",
    description: "Verify that reordering within the same column has no effect (if not implemented)",
    expectedResult: "No reordering should occur and task positions remain unchanged",
    priority: "low",
    steps: [
      "Pick a task from 'Done' column",
      "Attempt to drag it above/below other tasks within the same column",
      "Release and observe that order remains the same"
    ]
  },
  {
    id: "KANBAN_006",
    scenario: "Verify task status update after drag and drop",
    type: "positive",
    description: "Ensure that internal task state updates accurately after drag and drop",
    expectedResult: "Task object should reflect new status after drop",
    priority: "high",
    steps: [
      "Drag a task from 'Not Started' to 'Done'",
      "Inspect the task state in console or component props/state",
      "Ensure that the status field equals 'Done'"
    ]
  }
]

}

export function createDateTestCases():TestCase[] {
  return [
  {
    id: "EMP_001",
    scenario: "Add a valid employment record",
    type: "positive",
    description: "Verify that a valid employment entry is added successfully",
    expectedResult: "Employment entry should appear in the list without errors",
    priority: "high",
    steps: [
      "Open the employment modal",
      "Enter company name as 'Google'",
      "Select start date as '2022-01-01'",
      "Select end date as '2023-01-01'",
      "Click Add button",
      "Verify that 'Google' appears in the employment list"
    ]
  },
  {
    id: "EMP_002",
    scenario: "Try adding overlapping employment dates",
    type: "negative",
    description: "Verify that overlapping dates between employments are not allowed",
    expectedResult: "Warning should be shown and record should not be added",
    priority: "high",
    steps: [
      "Add a job with start date '2021-01-01' and end date '2022-01-01'",
      "Open modal again",
      "Enter a new job with start date '2021-06-01' and end date '2021-12-01'",
      "Click Add",
      "Verify warning is displayed and job is not added to the list"
    ]
  },
  {
    id: "EMP_003",
    scenario: "Add multiple non-overlapping employment records",
    type: "positive",
    description: "Ensure that user can add multiple non-overlapping jobs successfully",
    expectedResult: "All records should be saved and displayed correctly",
    priority: "medium",
    steps: [
      "Add job A from '2019-01-01' to '2020-01-01'",
      "Add job B from '2020-02-01' to '2021-02-01'",
      "Verify both jobs appear in the employment list"
    ]
  },
  {
    id: "EMP_004",
    scenario: "Try adding a job without selecting any date",
    type: "negative",
    description: "Check validation when no start or end date is provided",
    expectedResult: "Form should show validation error and block submission",
    priority: "high",
    steps: [
      "Open the modal",
      "Enter a company name",
      "Leave start and end dates empty",
      "Click Add",
      "Verify form does not submit and shows date-related errors"
    ]
  },
  {
    id: "EMP_005",
    scenario: "Try adding a job where end date is before start date",
    type: "negative",
    description: "Check behavior when user enters invalid date sequence",
    expectedResult: "Validation message should be shown and form should not submit",
    priority: "medium",
    steps: [
      "Open the modal",
      "Enter start date '2023-01-01'",
      "Enter end date '2022-01-01'",
      "Click Add",
      "Verify an error is shown and job is not added"
    ]
  },
  {
    id: "EMP_006",
    scenario: "Add employment with same start and end date",
    type: "positive",
    description: "Verify if same-day employment entries are allowed",
    expectedResult: "Record should be added if allowed by business logic",
    priority: "low",
    steps: [
      "Open the modal",
      "Enter start date and end date as '2023-05-15'",
      "Enter a valid company name",
      "Click Add",
      "Verify if entry is added without validation errors"
    ]
  },
  {
    id: "EMP_007",
    scenario: "Open employment modal and cancel without saving",
    type: "positive",
    description: "Ensure modal closes properly and data is not saved if cancelled",
    expectedResult: "Modal closes and no new data is added",
    priority: "low",
    steps: [
      "Click Add Employment button",
      "Enter sample data",
      "Click outside or press Escape",
      "Verify modal closes and data is not added to the list"
    ]
  }
]

}

export function createKeyboardTestcases(): TestCase[] {
  return [
  {
    id: "CHAT_001",
    scenario: "Send a normal text message",
    type: "positive",
    description: "Verify that a user can send a basic text message without links",
    expectedResult: "Message should appear in the chat window after clicking Send",
    priority: "high",
    steps: [
      "Render the TeamsChat component",
      "Type 'Hello Team!' in the input field",
      "Click the Send button",
      "Verify the message 'Hello Team!' appears in the chat area"
    ]
  },
  {
    id: "CHAT_002",
    scenario: "Send a message with a clickable link",
    type: "positive",
    description: "Verify that a URL in the sent message becomes clickable directly",
    expectedResult: "Link should be rendered and clickable without Ctrl key after sending",
    priority: "high",
    steps: [
      "Render the TeamsChat component",
      "Type 'Check this https://example.com' in the input field",
      "Click the Send button",
      "Verify that 'https://example.com' is rendered as a clickable link",
      "Click the link and verify it opens in a new tab"
    ]
  },
  {
    id: "CHAT_003",
    scenario: "Ctrl+Click to preview a link before sending",
    type: "positive",
    description: "Verify that URLs typed in the input field require Ctrl+Click to open before sending",
    expectedResult: "Link should only open in new tab when Ctrl is held and clicked in preview",
    priority: "medium",
    steps: [
      "Render the TeamsChat component",
      "Type 'Visit https://openai.com' in the input field",
      "Hold Ctrl and click the link in the preview section",
      "Verify that the link opens in a new tab"
    ]
  },
  {
    id: "CHAT_004",
    scenario: "Click link without Ctrl in preview",
    type: "negative",
    description: "Verify that clicking the link without Ctrl in the input preview does not open the link",
    expectedResult: "Link should not open and should prevent default behavior",
    priority: "medium",
    steps: [
      "Render the TeamsChat component",
      "Type 'Go to https://openai.com' in the input field",
      "Click the link without holding Ctrl",
      "Verify that the link does not open"
    ]
  },

  {
    id: "CHAT_006",
    scenario: "Send message using Enter key",
    type: "positive",
    description: "Verify that pressing Enter sends the message",
    expectedResult: "Message should be added to chat area",
    priority: "high",
    steps: [
      "Render the TeamsChat component",
      "Type 'Hello via Enter' in the input field",
      "Press Enter key",
      "Verify that the message appears in the chat window"
    ]
  }
]

}

export function createTableTestCases(): TestCase[] {
  return [
  {
    id: "EMP_001",
    scenario: "Add a new employee with valid data",
    type: "positive",
    description: "Verify that a new employee is added when valid data is entered in the modal",
    expectedResult: "Employee row should appear in the table with the entered data",
    priority: "high",
    steps: [
      "Click on 'Add Employee' button",
      "Enter valid Name, Position, Department, Email, and Location",
      "Click on 'Save'",
      "Verify that the new employee is listed in the table"
    ]
  },
  {
    id: "EMP_002",
    scenario: "Try to add employee with missing fields",
    type: "negative",
    description: "Verify that the form does not submit when required fields are empty",
    expectedResult: "Form should show validation errors and not add a new row",
    priority: "high",
    steps: [
      "Click on 'Add Employee' button",
      "Leave the name and email fields blank",
      "Click on 'Save'",
      "Verify that validation errors are shown and row is not added"
    ]
  },
  {
    id: "EMP_003",
    scenario: "Edit existing employee details",
    type: "positive",
    description: "Verify that user can successfully update employee details through modal",
    expectedResult: "Updated data should reflect in the corresponding row",
    priority: "medium",
    steps: [
      "Click on 'Edit' for the first employee",
      "Change the department and email",
      "Click 'Save'",
      "Verify the table shows updated department and email"
    ]
  },
  {
    id: "EMP_004",
    scenario: "Delete an employee from the table",
    type: "positive",
    description: "Verify that an employee row is removed when delete button is clicked",
    expectedResult: "The row should be removed from the table",
    priority: "medium",
    steps: [
      "Click on 'Delete' for the first employee",
      "Confirm the deletion",
      "Verify that the employee is no longer in the table"
    ]
  },
  {
    id: "EMP_005",
    scenario: "Sort employees by Position column",
    type: "positive",
    description: "Verify that clicking the Position column header sorts the data",
    expectedResult: "Rows should be sorted in ascending or descending order based on position",
    priority: "low",
    steps: [
      "Click on the Position column header once",
      "Verify that rows are sorted in ascending order",
      "Click again to sort in descending order",
      "Verify order has changed accordingly"
    ]
  },
  {
    id: "EMP_006",
    scenario: "Search employees by name",
    type: "positive",
    description: "Verify that search bar filters employees by name keyword",
    expectedResult: "Only rows with matching names should be visible",
    priority: "medium",
    steps: [
      "Type 'Alice' in the search bar",
      "Verify that only rows with 'Alice' in the name are displayed"
    ]
  },
  {
    id: "EMP_007",
    scenario: "Search with no matching results",
    type: "negative",
    description: "Verify that table handles no results when search query does not match any row",
    expectedResult: "No rows should be displayed and a message like 'No data found' can be shown",
    priority: "low",
    steps: [
      "Type 'Zebra' in the search bar",
      "Verify that no results are shown"
    ]
  },
  {
    id: "EMP_009",
    scenario: "Edit modal opens with existing employee data",
    type: "positive",
    description: "Verify that the modal displays the correct data for the selected employee",
    expectedResult: "Input fields in modal should be pre-filled with employee's current info",
    priority: "medium",
    steps: [
      "Click on 'Edit' for the third employee",
      "Verify modal shows the correct name, email, etc."
    ]
  },
  {
    id: "EMP_010",
    scenario: "Add employee with duplicate email",
    type: "negative",
    description: "Verify that duplicate email is not allowed when adding new employee",
    expectedResult: "Form should prevent submission or show an error for duplicate email",
    priority: "medium",
    steps: [
      "Click on 'Add Employee'",
      "Enter email that already exists in another employee row",
      "Click 'Save'",
      "Verify that error is shown or submission is blocked"
    ]
  }
]
}

export function createScrollTestcases(): TestCase[] {
  return [
  {
    id: "COURSE_001",
    scenario: "Initial load displays first 5 courses",
    type: "positive",
    description: "Verify that only the first 5 courses are loaded on initial render",
    expectedResult: "First 5 courses should be displayed on page load",
    priority: "high",
    steps: [
      "Navigate to the course explorer page",
      "Observe the number of courses rendered initially",
      "Ensure only 5 courses are visible"
    ]
  },
  {
    id: "COURSE_003",
    scenario: "Click on a course card to preview",
    type: "positive",
    description: "Verify that clicking a course displays its full description on the right",
    expectedResult: "Course title and description should be displayed in the preview panel",
    priority: "medium",
    steps: [
      "Navigate to the course explorer page",
      "Click on any visible course card",
      "Verify that the corresponding course content appears on the right"
    ]
  }
]

}

export function createDropDownTestCases2(): TestCase[] {
  return [
  {
    id: "CURR_001",
    scenario: "Select a valid country from the dropdown",
    type: "positive",
    description: "Verify that selecting a valid country displays the correct currency",
    expectedResult: "The currency field should display the correct currency code (e.g., INR for India)",
    priority: "high",
    steps: [
      "Render the country-currency selector component",
      "Click on the country dropdown",
      "Search and select 'India'",
      "Verify that 'INR' is displayed in the currency field"
    ]
  },
  {
    id: "CURR_002",
    scenario: "Clear the selected country",
    type: "positive",
    description: "Verify that clearing the selected country resets the currency field",
    expectedResult: "Currency field should display placeholder or empty value (e.g., '---')",
    priority: "medium",
    steps: [
      "Select any country (e.g., 'Japan')",
      "Clear the selection from the dropdown",
      "Check that the currency display shows '---'"
    ]
  },
  {
    id: "CURR_003",
    scenario: "Search for a country in the dropdown",
    type: "positive",
    description: "Verify that the dropdown filters countries based on search input",
    expectedResult: "Matching countries should appear as the user types",
    priority: "medium",
    steps: [
      "Click on the dropdown",
      "Type 'Can' in the search input",
      "Verify that 'Canada' appears in the results",
      "Select 'Canada' and confirm 'CAD' is displayed"
    ]
  },
  {
    id: "CURR_004",
    scenario: "Select a country not present in the list",
    type: "negative",
    description: "Verify that user cannot select an invalid or non-listed country",
    expectedResult: "Dropdown should not allow manual entry or invalid country selection",
    priority: "high",
    steps: [
      "Click on the dropdown",
      "Try typing 'Wakanda' and pressing Enter",
      "Verify that no currency is selected or shown"
    ]
  },
  {
    id: "CURR_005",
    scenario: "Load component with no country selected initially",
    type: "positive",
    description: "Verify that the currency display shows placeholder when no country is selected",
    expectedResult: "Currency field should display '---'",
    priority: "low",
    steps: [
      "Render the component",
      "Verify that no country is selected by default",
      "Check that currency field shows '---'"
    ]
  },
  {
    id: "CURR_008",
    scenario: "Test special characters in search",
    type: "negative",
    description: "Verify system behavior when user enters special characters in search box",
    expectedResult: "Search should not crash and should return no results or match if exists",
    priority: "low",
    steps: [
      "Click on country dropdown",
      "Type characters like '@#$%'",
      "Verify no crash and an appropriate 'no results' message"
    ]
  }
]

}

export function createTimeTestCases(): TestCase[] {
  return [
  {
    id: "SALON_001",
    scenario: "Book appointment within working hours",
    type: "positive",
    description: "Verify that booking an appointment during salon open hours is successful",
    expectedResult: "Appointment should be booked and success alert should be shown",
    priority: "high",
    steps: [
      "Open the appointment booking component",
      "Select time 10:00 AM",
      "Click the Confirm button",
      "Verify that success alert appears with correct time"
    ]
  },
  {
    id: "SALON_002",
    scenario: "Book appointment before opening time",
    type: "negative",
    description: "Verify that user cannot book appointment before 09:00 AM",
    expectedResult: "Error alert should appear saying selected time is outside salon hours",
    priority: "high",
    steps: [
      "Open the appointment booking component",
      "Select time 08:45 AM",
      "Click the Confirm button",
      "Verify that error alert appears"
    ]
  },
  {
    id: "SALON_003",
    scenario: "Book appointment after closing time",
    type: "negative",
    description: "Verify that user cannot book appointment after 06:00 PM",
    expectedResult: "Error alert should appear saying selected time is outside salon hours",
    priority: "high",
    steps: [
      "Open the appointment booking component",
      "Select time 06:30 PM",
      "Click the Confirm button",
      "Verify that error alert appears"
    ]
  },
  {
    id: "SALON_004",
    scenario: "Book appointment at exact opening time",
    type: "positive",
    description: "Verify that user can book appointment at 09:00 AM",
    expectedResult: "Appointment should be booked and success alert should be shown",
    priority: "medium",
    steps: [
      "Open the appointment booking component",
      "Select time 09:00 AM",
      "Click the Confirm button",
      "Verify that success alert appears"
    ]
  },
  {
    id: "SALON_005",
    scenario: "Book appointment at exact closing time",
    type: "positive",
    description: "Verify that user can book appointment at 06:00 PM",
    expectedResult: "Appointment should be booked and success alert should be shown",
    priority: "medium",
    steps: [
      "Open the appointment booking component",
      "Select time 06:00 PM",
      "Click the Confirm button",
      "Verify that success alert appears"
    ]
  },
  {
    id: "SALON_006",
    scenario: "Book appointment with invalid time input",
    type: "negative",
    description: "Verify behavior when user selects an empty time or non-time value",
    expectedResult: "Form should show validation error or prevent submission",
    priority: "low",
    steps: [
      "Open the appointment booking component",
      "Clear the time input or enter invalid value",
      "Click the Confirm button",
      "Ensure error is shown or submission is blocked"
    ]
  }
]

}

export function createNotificationTestCases(): TestCase[] {
  return [
  {
    id: "NOTIF_001",
    scenario: "Request notification permission for the first time",
    type: "positive",
    description: "Verify user can request and grant notification permission",
    expectedResult: "Permission prompt appears, and upon allowing, a notification is shown",
    priority: "high",
    steps: [
      "Navigate to the page containing the NotificationPermission component",
      "Click on 'Request Notification Permission' button",
      "Click 'Allow' in the browser permission popup",
      "Verify that a notification appears and success alert is shown"
    ]
  },
  {
    id: "NOTIF_002",
    scenario: "User denies the notification permission",
    type: "negative",
    description: "Verify behavior when the user clicks 'Deny' on the permission prompt",
    expectedResult: "An error alert should appear stating permission was denied",
    priority: "high",
    steps: [
      "Click on 'Request Notification Permission'",
      "In the browser prompt, click 'Deny'",
      "Check that an error alert appears with appropriate messaging"
    ]
  },
  {
    id: "NOTIF_003",
    scenario: "User dismisses the notification permission prompt without selecting",
    type: "negative",
    description: "Verify system handles dismissal of the browser permission popup",
    expectedResult: "An alert with appropriate message should be displayed",
    priority: "medium",
    steps: [
      "Click on 'Request Notification Permission'",
      "Close the browser permission popup without selecting",
      "Verify that a warning or neutral error message is shown"
    ]
  },
  {
    id: "NOTIF_004",
    scenario: "User has already granted permission",
    type: "positive",
    description: "Ensure app handles already granted permission gracefully",
    expectedResult: "A success alert appears and a dummy notification is triggered",
    priority: "medium",
    steps: [
      "Ensure permission is already granted (simulate manually if needed)",
      "Click the 'Request Notification Permission' button",
      "Verify that no prompt appears and notification is triggered directly"
    ]
  },
  {
    id: "NOTIF_005",
    scenario: "User has previously denied notification permission",
    type: "negative",
    description: "Check behavior when permission is already set to 'denied'",
    expectedResult: "No prompt is shown, and a warning alert asks to change browser settings",
    priority: "high",
    steps: [
      "Ensure browser has previously denied the notification permission",
      "Reload the app and click the 'Request Notification Permission' button",
      "Verify that no popup appears, and alert guides user to change settings"
    ]
  },
  {
    id: "NOTIF_006",
    scenario: "Browser does not support notifications",
    type: "negative",
    description: "Test compatibility fallback for unsupported browsers",
    expectedResult: "A generic error alert should appear",
    priority: "medium",
    steps: [
      "Simulate or test on an environment where Notification API is not supported",
      "Click the request permission button",
      "Verify that a fallback error is shown"
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
