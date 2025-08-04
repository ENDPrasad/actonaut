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

export function createTooltipTestCases(): TestCase[] {
  return [
  {
    id: "TOOLTIP_001",
    scenario: "Render payment form with tooltips",
    type: "positive",
    description: "Verify that tooltips appear when hovering over question marks in the form fields",
    expectedResult: "Each input field displays an appropriate tooltip when the user hovers over the question mark icon",
    priority: "high",
    steps: [
      "Navigate to the Payment Form component",
      "Hover over the question mark icon next to 'Card Number'",
      "Verify the tooltip displays 'Enter 16-digit card number without spaces'",
      "Repeat hover and verification for 'Expiry Date', 'CVV', 'Cardholder Name' fields"
    ]
  },
  {
    id: "TOOLTIP_002",
    scenario: "Submit form with valid data",
    type: "positive",
    description: "Verify that the form submits successfully and confirmation modal appears when all fields are valid",
    expectedResult: "Form is submitted and a modal with masked card details appears",
    priority: "high",
    steps: [
      "Fill in all form fields with valid data",
      "Click the Submit button",
      "Verify that a modal opens showing masked card details and an OK button"
    ]
  },
  {
    id: "TOOLTIP_003",
    scenario: "Dismiss confirmation modal",
    type: "positive",
    description: "Verify that clicking the OK button in the modal closes the confirmation modal",
    expectedResult: "Modal disappears after clicking the OK button",
    priority: "medium",
    steps: [
      "Submit form with valid data to trigger confirmation modal",
      "Click the OK button",
      "Verify that the modal disappears"
    ]
  },
  {
    id: "TOOLTIP_004",
    scenario: "Submit form with invalid card number",
    type: "negative",
    description: "Verify that validation prevents form submission with an invalid card number",
    expectedResult: "Error message appears below the Card Number field and form is not submitted",
    priority: "high",
    steps: [
      "Enter invalid card number (e.g., '1234')",
      "Fill other fields with valid data",
      "Click the Submit button",
      "Verify that an error message is shown and modal does not appear"
    ]
  }
]

}

export function createAlertTestCases(): TestCase[] {
  return [
  {
    id: "CONFIRM_001",
    scenario: "Show confirmation dialog on delete action",
    type: "positive",
    description: "Verify that clicking the delete button shows a confirm dialog",
    expectedResult: "A confirm dialog with the message 'Are you sure you want to delete this item?' appears",
    priority: "high",
    steps: [
      "Navigate to the Confirm Dialog demo page",
      "Click on the 'Delete' button",
      "Observe the confirm dialog popup"
    ]
  },
  {
    id: "CONFIRM_002",
    scenario: "Accept confirmation dialog",
    type: "positive",
    description: "Verify that accepting the confirm dialog deletes the item and updates the UI",
    expectedResult: "Item is removed and message 'Item deleted successfully' is displayed",
    priority: "high",
    steps: [
      "Navigate to the Confirm Dialog demo page",
      "Click on the 'Delete' button",
      "Click 'Ok' on the confirm dialog",
      "Verify that the item is removed from the UI",
      "Verify the success message is displayed"
    ]
  },
  {
    id: "CONFIRM_003",
    scenario: "Dismiss confirmation dialog",
    type: "positive",
    description: "Verify that dismissing the confirm dialog retains the item and shows cancellation message",
    expectedResult: "Item remains on the UI and message 'Deletion cancelled' is displayed",
    priority: "medium",
    steps: [
      "Navigate to the Confirm Dialog demo page",
      "Click on the 'Delete' button",
      "Click 'Cancel' on the confirm dialog",
      "Verify that the item is still visible",
      "Verify the cancellation message is displayed"
    ]
  },
  {
    id: "CONFIRM_004",
    scenario: "Validate confirm dialog message",
    type: "negative",
    description: "Ensure the confirm dialog message is accurate and not empty",
    expectedResult: "Confirm dialog message matches: 'Are you sure you want to delete this item?'",
    priority: "medium",
    steps: [
      "Navigate to the Confirm Dialog demo page",
      "Click on the 'Delete' button",
      "Verify the dialog message text"
    ]
  },
  {
    id: "CONFIRM_005",
    scenario: "Prevent deletion if item already removed",
    type: "negative",
    description: "Verify that the delete button is hidden if the item is already deleted",
    expectedResult: "Delete button is not visible and item is not present",
    priority: "low",
    steps: [
      "Navigate to the Confirm Dialog demo page",
      "Click on 'Delete' and accept the dialog",
      "Try clicking 'Delete' again",
      "Verify the button and item are no longer visible"
    ]
  }
]


}

export function createIFrameTestCases(): TestCase[] {
  return [
  {
    id: "IFRAME_002",
    scenario: "Show validation error for empty fields",
    type: "negative",
    description: "Validate that clicking 'Pay Now' with empty fields shows error messages",
    expectedResult: "All input fields show respective error messages",
    priority: "high",
    steps: [
      "Navigate to the payment page",
      "Leave all input fields blank",
      "Click on 'Pay Now' button inside iframe",
      "Verify error messages for card number, expiry date, and CVV"
    ]
  },
  {
    id: "IFRAME_003",
    scenario: "Validate card number format",
    type: "negative",
    description: "Check validation for invalid card number",
    expectedResult: "An error message should appear stating card number must be 16 digits",
    priority: "medium",
    steps: [
      "Enter '1234' in the card number field",
      "Enter valid expiry and CVV",
      "Click 'Pay Now'",
      "Verify only the card number error is shown"
    ]
  },
  {
    id: "IFRAME_004",
    scenario: "Validate expiry format",
    type: "negative",
    description: "Check validation for invalid expiry date format",
    expectedResult: "An error message should appear stating expiry must be in MM/YY format",
    priority: "medium",
    steps: [
      "Enter valid card number and CVV",
      "Enter '13/2025' in expiry field",
      "Click 'Pay Now'",
      "Verify expiry field error message is shown"
    ]
  },
  {
    id: "IFRAME_005",
    scenario: "Validate CVV format",
    type: "negative",
    description: "Check validation for CVV field with non-3-digit value",
    expectedResult: "An error message should appear stating CVV must be 3 digits",
    priority: "medium",
    steps: [
      "Enter valid card number and expiry date",
      "Enter '12' in CVV field",
      "Click 'Pay Now'",
      "Verify CVV error message is shown"
    ]
  },
  {
    id: "IFRAME_006",
    scenario: "Successful payment data submission",
    type: "positive",
    description: "Verify that valid payment data shows a success modal",
    expectedResult: "Payment success dialog appears with entered card details",
    priority: "high",
    steps: [
      "Enter '4242424242424242' in card number field",
      "Enter '12/25' in expiry field",
      "Enter '123' in CVV field",
      "Click 'Pay Now'",
      "Verify modal window appears showing the card number, expiry, and CVV"
    ]
  },
  {
    id: "IFRAME_007",
    scenario: "Close the success modal",
    type: "positive",
    description: "Ensure the modal can be dismissed after payment success",
    expectedResult: "Clicking 'Close' should dismiss the modal window",
    priority: "low",
    steps: [
      "Complete a successful payment flow",
      "When the modal appears, click the 'Close' button",
      "Verify the modal is closed and component returns to default state"
    ]
  }
]
}
export function createLinksTestCases(): TestCase[] {
  return [
  {
    id: "FOOTER_001",
    scenario: "Verify in-page navigation link works correctly",
    type: "positive",
    description: "Clicking on 'In-page Navigation' should scroll to the #concept section",
    expectedResult: "User is navigated to '/explore/links/#concept'",
    priority: "high",
    steps: [
      "Render the footer component",
      "Click on the 'In-page Navigation' link",
      "Verify the URL changes to include '#concept'",
      "Ensure the corresponding section is visible in the viewport"
    ]
  },
  {
    id: "FOOTER_002",
    scenario: "External link opens in a new tab",
    type: "positive",
    description: "Clicking on 'External Navigation (New Tab)' should open /explore/button in a new tab",
    expectedResult: "Link opens the correct page in a new browser tab",
    priority: "medium",
    steps: [
      "Click on 'External Navigation (New Tab)' link",
      "Check if a new tab is opened",
      "Verify the URL is '/explore/button'"
    ]
  },
  {
    id: "FOOTER_003",
    scenario: "External link opens in a new window",
    type: "positive",
    description: "Clicking 'External Navigation (New Window)' button opens /explore/slider in a new window",
    expectedResult: "New window is launched with '/explore/slider' page",
    priority: "medium",
    steps: [
      "Click on the 'External Navigation (New Window)' button",
      "Confirm a new browser window opens",
      "Validate the new window URL is '/explore/slider'"
    ]
  },
  {
    id: "FOOTER_004",
    scenario: "Clicking broken link leads to error page",
    type: "negative",
    description: "Broken link should route to a 404 or appropriate error page",
    expectedResult: "User sees a 404 or custom error message",
    priority: "low",
    steps: [
      "Click on the 'Broken Link'",
      "Check if 404 page or custom error message is shown"
    ]
  },
  {
    id: "FOOTER_005",
    scenario: "Contact Us link opens default mail client",
    type: "positive",
    description: "Clicking on 'Contact Us' opens user's default email app",
    expectedResult: "Mail client opens with 'mailto:cnaarios@gmail.com'",
    priority: "medium",
    steps: [
      "Click on the 'Contact Us' link",
      "Ensure user's default mail app opens",
      "Validate email address is pre-filled as 'cnaarios@gmail.com'"
    ]
  },
  {
    id: "FOOTER_006",
    scenario: "YouTube link opens in a new tab",
    type: "positive",
    description: "Clicking 'Follow Us on YouTube' should open the YouTube channel",
    expectedResult: "YouTube channel opens in a new browser tab",
    priority: "medium",
    steps: [
      "Click on 'Follow Us on YouTube'",
      "Verify a new tab opens",
      "Ensure it loads the correct YouTube URL"
    ]
  },
  {
    id: "FOOTER_007",
    scenario: "Site name 'Cnarios' is clickable and navigates to homepage",
    type: "positive",
    description: "Clicking on 'Cnarios' in the footer should route to '/'",
    expectedResult: "User is navigated to homepage",
    priority: "high",
    steps: [
      "Click on 'Cnarios' link in footer",
      "Verify the URL changes to '/'",
      "Ensure homepage is rendered"
    ]
  }
]

}

export function createFileUploadTestcases(): TestCase[] {
  return [
  {
    id: "FILEUPLOAD_001",
    scenario: "Upload and preview valid TXT file",
    type: "positive",
    description: "Ensure that uploading a valid .txt file displays its content in the UI",
    expectedResult: "Content of the uploaded file is correctly shown on the screen",
    priority: "high",
    steps: [
      "Navigate to the file upload section",
      "Click on the 'Choose File' button",
      "Select a valid .txt file with known content",
      "Verify that the preview displays the exact content from the file"
    ]
  },
  {
    id: "FILEUPLOAD_002",
    scenario: "Reject unsupported file types",
    type: "negative",
    description: "Ensure that non-.txt files cannot be uploaded",
    expectedResult: "File input shows an error or prevents file selection for unsupported formats",
    priority: "medium",
    steps: [
      "Navigate to the file upload section",
      "Click on the 'Choose File' button",
      "Attempt to select a .jpg or .pdf file",
      "Verify that upload is rejected or no preview is shown"
    ]
  },
  {
    id: "FILEUPLOAD_003",
    scenario: "Show message for empty TXT file",
    type: "negative",
    description: "Verify appropriate message is shown when an empty file is uploaded",
    expectedResult: "UI displays 'File is empty' or equivalent message",
    priority: "medium",
    steps: [
      "Navigate to the file upload section",
      "Upload an empty .txt file",
      "Verify the UI shows appropriate error or empty state message"
    ]
  }
]

}

export function createWaitTestCases(): TestCase[] {
  return [
  {
    id: "WAITS_001",
    scenario: "Add item to cart and verify toast message",
    type: "positive",
    description: "Verify user can click add to cart and see a toast after network delay",
    expectedResult: "Toast notification appears confirming item addition",
    priority: "high",
    steps: [
      "Navigate to product card",
      "Click on 'Add to Cart' button",
      "Wait explicitly for the toast notification to appear",
      "Validate toast message text",
      "Dismiss toast and verify it disappears"
    ]
  },
  {
    id: "WAITS_002",
    scenario: "Toast auto-dismisses after timeout",
    type: "positive",
    description: "Ensure the toast disappears automatically after a set duration",
    expectedResult: "Toast auto-closes in 4 seconds",
    priority: "medium",
    steps: [
      "Click on 'Add to Cart'",
      "Wait for toast to appear",
      "Wait implicitly for it to dismiss",
      "Ensure it is no longer visible"
    ]
  }
]

}

export function createMultiWindowTestCases(): TestCase[] {
  return [
  {
    id: "QUICKLINKS_001",
    scenario: "Open link in new tab",
    type: "positive",
    description: "Ensure clicking the button link opens in a new browser tab",
    expectedResult: "New tab is opened with correct content",
    priority: "high",
    steps: [
      "Click on 'Learn about Button' link",
      "Verify a new tab opens",
      "Check the URL is '/explore/button'",
      "Assert that the button content is rendered"
    ]
  },
  {
    id: "QUICKLINKS_002",
    scenario: "Open link in new window",
    type: "positive",
    description: "Check window popup opens for time picker link",
    expectedResult: "New window with correct dimensions opens and renders content",
    priority: "medium",
    steps: [
      "Click on 'Learn about Time Picker'",
      "Verify window opens with 800x600 size",
      "Assert that Time Picker component is loaded"
    ]
  },
  {
    id: "QUICKLINKS_003",
    scenario: "Broken or missing navigation",
    type: "negative",
    description: "Handle missing or broken links gracefully",
    expectedResult: "User is redirected to a 404 page or shown an error message",
    priority: "low",
    steps: [
      "Click on a non-existent link like '/explore/xyz'",
      "Verify it shows a proper 404 message"
    ]
  },
];
}

export function createSliderTestCases(): TestCase[] {
  return [
  { 
    id: "SLIDER_001",
    scenario: "Submit a valid rating using the slider",
    type: "positive",
    description: "Ensure that moving the slider and submitting updates the average and shows the user’s rating",
    expectedResult: "Average rating updates correctly and user’s rating is displayed",
    priority: "high",
    steps: [
      "Navigate to the rating page",
      "Drag the slider to value '8'",
      "Click on 'Submit Rating' button",
      "Verify that average rating updates",
      "Verify that the user's rating is displayed"
    ]
  },
  {
    id: "SLIDER_002",
    scenario: "Prevent rating submission without slider interaction",
    type: "negative",
    description: "Ensure that clicking 'Submit' without moving the slider doesn’t update the average",
    expectedResult: "Rating is not accepted and a message prompts user to provide a rating",
    priority: "medium",
    steps: [
      "Navigate to the rating page",
      "Click on 'Submit Rating' button without interacting with the slider",
      "Verify that an error or message is shown",
      "Ensure that the average rating remains unchanged"
    ]
  },
  {
    id: "SLIDER_003",
    scenario: "Display user review below slider after submission",
    type: "positive",
    description: "Ensure that after submitting a rating and review, the review is displayed",
    expectedResult: "Review text entered by user is displayed clearly below the slider",
    priority: "medium",
    steps: [
      "Navigate to the rating page",
      "Drag the slider to value '9'",
      "Enter review text like 'Great product!'",
      "Click on 'Submit Rating' button",
      "Verify that review text is shown on the UI"
    ]
  },
  {
    id: "SLIDER_004",
    scenario: "Prevent duplicate submissions",
    type: "negative",
    description: "Ensure user cannot submit multiple ratings",
    expectedResult: "After first submission, the slider is disabled or button is hidden",
    priority: "low",
    steps: [
      "Navigate to the rating page",
      "Provide a rating using slider and submit",
      "Attempt to rate again",
      "Verify that second submission is not allowed"
    ]
  },
  {
    id: "SLIDER_005",
    scenario: "Ensure slider accepts only values within range",
    type: "negative",
    description: "Slider should not allow values outside 1–10 range",
    expectedResult: "Slider input is clamped between 1 and 10",
    priority: "high",
    steps: [
      "Navigate to the rating page",
      "Try to set slider value below 1 or above 10 via dev tools or JS",
      "Verify that slider resets to min/max limit and UI reflects it"
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
