import type { PracticeScenario } from "../../../interfaces/interfaces"
import { InputValidationScenario } from "../../scenarios/InputScenario"
import { BasicDragDropScenario } from "../../scenarios/DragAndDropScenarios"
import UserFollowCard from "../../scenarios/LinkedInProfile/UserFollowCard"
// import ProfileSuggestion from "../../scenarios/LinkedInProfile/ProfileSuggestion"
import ProfileSuggestionV2 from "../../scenarios/LinkedInProfile/ProfileSuggestionV2"
// import JobApplicationForm from "../../scenarios/JobApplication/JobApplicationForm"
import JobApplicationFormV2 from "../../scenarios/JobApplication/JobApplicationFomV2"
import QuizBoard from "../../scenarios/Quiz/QuizBoard"
import NewsFeedBoard from "../../scenarios/NewsFeed/NewsFeedBoard"
import MultiLingualSite from "../../scenarios/LanguageSelection/MultiLingualSite"
import HTMLEditor from "../../scenarios/HTMLCodeEditor/HTMLEditor"
import DeleteModalWindow from "../../scenarios/ModalWindow/DeleteModalWindow"
import KanbanBoard from "../../scenarios/KanbanBoard/KanbanBoard"
import EmploymentHistory from "../../scenarios/EmploymentHistory/EmploymentHistory"
import AppointmentBooking from "../../scenarios/BookAppointment.tsx/ApointmentBooking"
import NotificationPermission from "../../scenarios/Notification/NotificationPermisssion"

export function getScenarioById(scenarioId: string): PracticeScenario | null {
  const scenarios: Record<string, PracticeScenario> = {
    "button-basic": {
      id: "button-basic",
      title: "Basic Button Interactions",
      description: "Learn to automate button interactions, waits and hover cases",
      category: "Button",
      difficulty: "beginner",
      learningObjectives: [
  "Handle dynamic follow/unfollow buttons",
  "Test loading and disabled states",
  "Verify hover and tooltip behavior",
  "Validate toggle state transitions",
  "Test multiple user suggestion cards",
  "Assert visual and text changes",
  "Handle button clicks with delays"
]
,
      siteContent: ProfileSuggestionV2(),
    },
    "iframe": {
  id: "iframe",
  title: "iFrame Interaction Automation",
  description: "Learn to automate interactions within embedded iframe documents",
  category: "Document Structure",
  difficulty: "intermediate",
  learningObjectives: [
    "Understand iframe structure and usage",
    "Switch context between main page and iframe",
    "Automate form and element interaction inside iframe",
    "Handle iframe loading and synchronization",
    "Test cross-origin iframe restrictions and behaviors"
  ],
  siteContent: HTMLEditor()
},
"modal": {
  id: "modal",
  title: "Modal Window Automation",
  description: "Learn to automate opening, interacting with, and closing modal windows in web applications",
  category: "UI Components",
  difficulty: "intermediate",
  learningObjectives: [
    "Understand modal window behavior and structure",
    "Automate opening and closing modals",
    "Interact with elements inside modals (forms, buttons, etc.)",
    "Handle modals triggered by dynamic events",
    "Verify modal visibility and dismissal actions"
  ],
  siteContent: DeleteModalWindow()
}
,
"draganddrop": {
  id: "drag-and-drop",
  title: "Drag and Drop Automation",
  description: "Learn to automate dragging elements and dropping them into target containers in web interfaces",
  category: "UI Components",
  difficulty: "advanced",
  learningObjectives: [
    "Understand native and custom drag and drop mechanics",
    "Automate dragging elements across containers or zones",
    "Verify successful drop actions and positioning",
    "Handle dynamic drag sources and drop targets",
    "Test edge cases like restricted or invalid drop zones"
  ],
  siteContent: KanbanBoard()
},

    "button-states": {
      id: "button-states",
      title: "Button States and Conditions",
      description: "Master automation of buttons in different states during form processing",
      category: "Button",
      difficulty: "intermediate",
      learningObjectives: [
        "Handle buttons in loading/processing states",
        "Test disabled button behavior",
        "Understand error state button handling",
        "Learn to wait for button state changes",
        "Practice state-dependent automation logic",
      ],
      siteContent: UserFollowCard({name: "END Prasad", avatarUrl: 'hello', title: 'Join me in linkedIn'}),
    },
    "input": {
      id: "input",
      title: "Basic Input Field Automation",
      description: "Learn to automate various input fields in a registration form",
      category: "Input",
      difficulty: "beginner",
      learningObjectives: [
        "Automate text input fields",
        "Handle different input types (email, password, tel)",
        "Work with dropdown/select elements",
        "Practice form field validation",
        "Learn input field clearing and updating",
      ],
      siteContent: JobApplicationFormV2(),
    },
    
    "input-validation": {
      id: "input-validation",
      title: "Input Validation Testing",
      description: "Master testing input field validations and error handling",
      category: "Input",
      difficulty: "intermediate",
      learningObjectives: [
        "Test required field validations",
        "Handle input format validations",
        "Verify error message displays",
        "Test minimum/maximum length constraints",
        "Practice validation state automation",
      ],
      siteContent: InputValidationScenario(),
    },
    "datepicker": {
  id: "date-picker",
  title: "Date Picker Automation",
  description: "Learn to automate interactions with date picker components in forms and scheduling interfaces",
  category: "Input",
  difficulty: "intermediate",
  learningObjectives: [
    "Automate selecting single and range dates",
    "Handle native and custom date pickers",
    "Verify selected dates in input fields",
    "Test min/max date restrictions",
    "Handle calendar navigation and validation"
  ],
  siteContent: EmploymentHistory()
},
"timepicker": {
  id: "time-picker",
  title: "Time Picker Automation",
  description: "Learn to automate interactions with time picker components in forms and scheduling interfaces",
  category: "Input",
  difficulty: "intermediate",
  learningObjectives: [
    "Automate selecting specific time values",
    "Handle native and custom time pickers",
    "Verify selected time in input fields",
    "Test min/max time restrictions",
    "Handle time format (12hr/24hr) and validation"
  ],
  siteContent: AppointmentBooking()
},
"notificationpermission": {
  id: "notification-permission",
  title: "Notification Permission Automation",
  description: "Learn to automate handling of browser notification permission prompts and validate responses",
  category: "Browser APIs",
  difficulty: "intermediate",
  learningObjectives: [
    "Trigger and detect notification permission prompts",
    "Simulate allow, deny, and default permission states",
    "Validate behavior based on granted or denied permission",
    "Test notification workflows with different browser settings",
    "Handle permission checks before sending notifications"
  ],
  siteContent: NotificationPermission()
},

    "radio": {
  id: "radio",
  title: "Radio Button Input Automation",
  description: "Learn to automate radio button selection logic in forms",
  category: "Input",
  difficulty: "beginner",
  learningObjectives: [
    "Automate selection of specific radio button",
    "Handle multiple radio groups independently",
    "Verify correct option is selected",
    "Ensure only one button is selected in each group",
    "Interact with labels for better automation compatibility"
  ],
  siteContent: QuizBoard()
},
"dropdown": {
  id: "dropdown",
  title: "Dropdown Select Automation",
  description: "Learn to automate single and multi-select dropdowns in form fields",
  category: "Input",
  difficulty: "beginner",
  learningObjectives: [
    "Automate selecting options from dropdowns",
    "Handle single and multiple select dropdowns",
    "Verify selected values and defaults",
    "Interact with custom styled dropdown components",
    "Handle dynamic option rendering"
  ],
  siteContent: MultiLingualSite()
}
,

    "dragdrop-basic": {
      id: "dragdrop-basic",
      title: "Basic Drag and Drop",
      description: "Learn to automate drag and drop interactions in a task management board",
      category: "Drag & Drop",
      difficulty: "advanced",
      learningObjectives: [
        "Understand drag and drop mechanics",
        "Practice dragging elements between containers",
        "Learn to verify drop zone acceptance",
        "Handle drag and drop events",
        "Test drag and drop validation rules",
      ],
      siteContent: BasicDragDropScenario(),
    },
    "checkbox": {
  id: "checkbox",
  title: "Checkbox Input Automation",
  description: "Learn to automate checkbox selection and validation in various form scenarios",
  category: "Input",
  difficulty: "beginner",
  learningObjectives: [
    "Automate checking and unchecking checkboxes",
    "Work with multiple checkbox groups",
    "Verify selected checkbox values",
    "Handle default and pre-checked states",
    "Interact with labels to toggle checkbox state"
  ],
  siteContent: NewsFeedBoard()
},

    "form": {
  id: "form",
  title: "Basic Form Automation",
  description: "Learn to automate user input and validation for a registration form",
  category: "Forms",
  difficulty: "advanced",
  learningObjectives: [
    "Understand form structure and input types",
    "Automate data entry for text fields, radio buttons, checkboxes, and dropdowns",
    "Trigger form validation messages",
    "Submit the form and verify success/failure behavior",
    "Test both positive and negative input scenarios"
  ],
  siteContent: JobApplicationFormV2(),
}
  }

  return scenarios[scenarioId] || null
}

export function getScenariosByCategory(category: string): PracticeScenario[] {
  const allScenarios = ["button-basic", "button-states", "input-basic", "input-validation", "dragdrop-basic"].map(
    (id) => getScenarioById(id)!,
  )

  return allScenarios.filter((scenario) => scenario.category.toLowerCase() === category.toLowerCase())
}
