import type { PracticeScenario } from "../../../interfaces/interfaces";
import ProfileSuggestionV2 from "../../scenarios/LinkedInProfile/ProfileSuggestionV2";
import JobApplicationFormV2 from "../../scenarios/JobApplication/JobApplicationFomV2";
import QuizBoard from "../../scenarios/Quiz/QuizBoard";
import NewsFeedBoard from "../../scenarios/NewsFeed/NewsFeedBoard";
import DeleteModalWindow from "../../scenarios/ModalWindow/DeleteModalWindow";
import KanbanBoard from "../../scenarios/KanbanBoard/KanbanBoard";
import EmploymentHistory from "../../scenarios/EmploymentHistory/EmploymentHistory";
import AppointmentBooking from "../../scenarios/BookAppointment.tsx/ApointmentBooking";
import NotificationPermission from "../../scenarios/Notification/NotificationPermisssion";
import TeamsChat from "../../scenarios/TeamsChat/TeamsChatWindow";
import EmployeeTable from "../../scenarios/TableCRUD/CRUDTable";
import CourseExplorer from "../../scenarios/DynamicCourseLoader/CourseExplorer";
import CountryCurrencySelector from "../../scenarios/CurrencyConverter/CountryCurrencySelector";
import Footer from "../../scenarios/FooterForLinks/FooterForLinks";
import IframePaymentMock from "../../scenarios/PaymentGateway/PaymentGateway";
import BankAccountForm from "../../scenarios/BankAccountForm/BankAccountForm";
import DeleteConfirmScenario from "../../scenarios/DeleteConfirmation/DeleteConfirmationScenario";
import RatingSlider from "../../scenarios/RatingSlider/RatingSlider";
import FileUploadPreview from "../../scenarios/FileUpload/FileUploadPreview";
import QuickLinks from "../../scenarios/QuickLinks/QuickLinks";
import AddToCartWithToast from "../../scenarios/AddToCart/AddToCart";

export function getScenarioById(scenarioId: string): PracticeScenario | null {
  const scenarios: Record<string, PracticeScenario> = {
    "button": {
      id: "button",
      title: "Profile Suggestion Cnario",
      description:
        "Learn to automate button interactions, waits and hover cases",
      category: "Button",
      difficulty: "beginner",
      learningObjectives: [
        "Handle dynamic follow/unfollow buttons",
        "Test loading and disabled states",
        "Verify hover and tooltip behavior",
        "Validate toggle state transitions",
        "Test multiple user suggestion cards",
        "Assert visual and text changes",
        "Handle button clicks with delays",
      ],
      siteContent: ProfileSuggestionV2(),
    },
    "tooltip": {
  id: "tooltip",
  title: "Bank KYC Form with Tooltips",
  description:
    "Practice automating tooltip interactions, input validations, and form submission flows in a real-world-like KYC form",
  category: "Tooltip",
  difficulty: "beginner",
  learningObjectives: [
    "Hover over question mark icons to reveal tooltips",
    "Verify tooltip text matches expected content",
    "Test form validation with required and invalid inputs",
    "Fill inputs and assert dynamic tooltip visibility",
    "Automate submission and validate confirmation modal",
    "Ensure tooltips are accessible for each form field",
    "Test edge cases like missing inputs or partial completion",
  ],
  siteContent: BankAccountForm(),
},

    iframe: {
      id: "iframe",
      title: "HTML Editor Cnario",
      description:
        "Learn to automate interactions within embedded iframe documents",
      category: "Document Structure",
      difficulty: "intermediate",
      learningObjectives: [
        "Understand iframe structure and usage",
        "Switch context between main page and iframe",
      ],
      siteContent: IframePaymentMock(),
    },
    link: {
  id: "links",
  title: "Footer Section Cnario",
  description:
    "Learn to automate and validate navigation using anchor (`<a>`) tags, including internal links, external redirects, and hash-based scrolling.",
  category: "Navigation",
  difficulty: "beginner",
  learningObjectives: [
    "Identify and interact with anchor tags on the page",
    "Test navigation to internal and external pages",
    "Validate hash-based in-page navigation",
    "Verify behavior of `target='_blank'` and other attributes",
    "Detect and handle broken or inactive links"
  ],
  siteContent: Footer(),
},
    modal: {
      id: "modal",
      title: "Delete Item Cnario",
      description:
        "Learn to automate opening, interacting with, and closing modal windows in web applications",
      category: "UI Components",
      difficulty: "intermediate",
      learningObjectives: [
        "Understand modal window behavior and structure",
        "Automate opening and closing modals",
        "Interact with elements inside modals (forms, buttons, etc.)",
        "Handle modals triggered by dynamic events",
        "Verify modal visibility and dismissal actions",
      ],
      siteContent: DeleteModalWindow(),
    },
    multiwindow: {
  id: "multiwindow",
  title: "Quick Links Navigation Cnario",
  description:
    "Practice handling different types of navigation including new tabs, new windows, and external/internal links using the Quick Links section.",
  category: "Navigation & Window Handling",
  difficulty: "intermediate",
  learningObjectives: [
    "Understand how to automate link clicks opening in new tabs or windows",
    "Identify and handle different `target` attributes like _blank, _self, or custom window names",
    "Switch between parent and child windows or tabs using automation tools",
    "Validate navigation paths and content on the destination pages",
    "Handle broken, external, and mail links during automation testing",
  ],
  siteContent: QuickLinks(),
},
    draganddrop: {
      id: "drag-and-drop",
      title: "Kanban Board Drag & Drop Cnario",
      description:
        "Learn to automate dragging elements and dropping them into target containers in web interfaces",
      category: "UI Components",
      difficulty: "advanced",
      learningObjectives: [
        "Understand native and custom drag and drop mechanics",
        "Automate dragging elements across containers or zones",
        "Verify successful drop actions and positioning",
        "Handle dynamic drag sources and drop targets",
        "Test edge cases like restricted or invalid drop zones",
      ],
      siteContent: KanbanBoard(),
    },
    datepicker: {
      id: "date-picker",
      title: "Employment History Cnario",
      description:
        "Learn to automate interactions with date picker components in forms and scheduling interfaces",
      category: "Input",
      difficulty: "intermediate",
      learningObjectives: [
        "Automate selecting single and range dates",
        "Handle native and custom date pickers",
        "Verify selected dates in input fields",
        "Test min/max date restrictions",
        "Handle calendar navigation and validation",
      ],
      siteContent: EmploymentHistory(),
    },
    timepicker: {
      id: "time-picker",
      title: "Saloon Appointment Booking Cnario",
      description:
        "Learn to automate interactions with time picker components in forms and scheduling interfaces",
      category: "Input",
      difficulty: "intermediate",
      learningObjectives: [
        "Automate selecting specific time values",
        "Handle native and custom time pickers",
        "Verify selected time in input fields",
        "Test min/max time restrictions",
        "Handle time format (12hr/24hr) and validation",
      ],
      siteContent: AppointmentBooking(),
    },
    notificationpermission: {
      id: "notification-permission",
      title: "Notification Permission Cnario",
      description:
        "Learn to automate handling of browser notification permission prompts and validate responses",
      category: "Browser APIs",
      difficulty: "advanced",
      learningObjectives: [
        "Trigger and detect notification permission prompts",
        "Simulate allow, deny, and default permission states",
        "Validate behavior based on granted or denied permission",
        "Test notification workflows with different browser settings",
        "Handle permission checks before sending notifications",
      ],
      siteContent: NotificationPermission(),
    },
    keyboard: {
      id: "keyboard-events",
      title: "Teams Chat with keyboard events Cnario",
      description:
        "Learn to automate and validate keyboard interactions such as typing, shortcuts, and form navigation using key events.",
      category: "Input",
      difficulty: "intermediate",
      learningObjectives: [
        "Simulate typing in input fields using key events",
        "Test form submissions via Enter key",
        "Validate keyboard accessibility with Tab navigation",
        "Trigger and verify custom keyboard shortcuts (e.g., Ctrl + S)",
        "Handle and test key combinations for custom behaviors",
      ],
      siteContent: TeamsChat(),
    },
    table: {
      id: "table-interaction",
      title: "Employee Table Cnario",
      description:
        "Learn to automate and validate data interactions within table elements, including sorting, filtering, and pagination.",
      category: "Data Display",
      difficulty: "intermediate",
      learningObjectives: [
        "Extract and validate data from table rows and columns",
        "Test sorting functionality for each column",
        "Automate filtering and search within table data",
        "Test table updates after user actions",
      ],
      siteContent: EmployeeTable(),
    },
    scroll: {
      id: "scroll-behavior",
      title: "Course Explorer Cnario",
      description:
        "Learn to automate and validate scrolling behaviors including lazy loading, infinite scroll, and visibility of dynamic content.",
      category: "Page Interaction",
      difficulty: "intermediate",
      learningObjectives: [
        "Simulate vertical and horizontal scrolling to specific elements",
        "Trigger and validate lazy-loaded content",
        "Automate infinite scroll interactions and assertions",
        "Ensure visibility of elements brought into view via scroll",
      ],
      siteContent: CourseExplorer(),
    },

    radio: {
      id: "radio",
      title: "Quiz Board Cnario",
      description: "Learn to automate radio button selection logic in forms(Quiz)",
      category: "Input",
      difficulty: "beginner",
      learningObjectives: [
        "Automate selection of specific radio button",
        "Handle multiple radio groups independently",
        "Verify correct option is selected",
        "Ensure only one button is selected in each group",
        "Interact with labels for better automation compatibility",
      ],
      siteContent: QuizBoard(),
    },
    dropdown: {
      id: "dropdown",
      title: "Country Currency Checker Cnario",
      description:
        "Learn to automate different dropdowns like searchable and select",
      category: "Input",
      difficulty: "beginner",
      learningObjectives: [
        "Automate selecting options from dropdowns",
        "Verify selected values and defaults",
        "Interact with custom styled dropdown components like search",
      ],
      // siteContent: MultiLingualSite()
      siteContent: CountryCurrencySelector(),
    },

    checkbox: {
      id: "checkbox",
      title: "News Feed Cnario",
      description:
        "Learn to automate checkbox selection and validation",
      category: "Input",
      difficulty: "beginner",
      learningObjectives: [
        "Automate checking and unchecking checkboxes",
        "Verify selected checkbox values",
        "Handle default and pre-checked states",
        "Interact with labels to toggle checkbox state",
      ],
      siteContent: NewsFeedBoard(),
    },

    form: {
      id: "form",
      title: "Job Application Form Cnario",
      description:
        "Learn to automate user input and validation for a job application form",
      category: "Forms",
      difficulty: "advanced",
      learningObjectives: [
        "Understand form structure and input types",
        "Automate data entry for text fields, radio buttons, checkboxes, and dropdowns",
        "Trigger form validation messages",
        "Submit the form and verify success/failure behavior",
        "Test both positive and negative input scenarios",
      ],
      siteContent: JobApplicationFormV2(),
    },
    "alert": {
  id: "alert",
  title: "Delete Confirmation Cnario",
  description:
    "Learn to automate confirm dialogs by simulating OK and Cancel actions and verifying conditional UI updates.",
  category: "Alert",
  difficulty: "beginner",
  learningObjectives: [
    "Trigger a confirm dialog on delete action",
    "Simulate clicking OK and assert the item is removed",
    "Simulate clicking Cancel and assert the item remains",
    "Verify the correct status message is shown after each action",
    "Ensure confirm message content is correct",
    "Handle browser-native confirm interactions in automation tools",
  ],
  siteContent: DeleteConfirmScenario(),
},
"slider": {
  id: "slider",
  title: "Movie Rating Scenario",
  description:
    "Learn to automate slider interactions by simulating user ratings, updating averages, and validating dynamic feedback.",
  category: "Slider",
  difficulty: "beginner",
  learningObjectives: [
    "Simulate sliding input to give a user rating",
    "Verify the average rating updates after submission",
    "Validate dynamic review messages are displayed correctly",
    "Test edge values on slider (min and max)",
    "Ensure only valid ratings update the average",
    "Handle state updates and visual feedback based on rating",
    "Verify post-submit slider gets disabled to prevent re-rating"
  ],
  siteContent: RatingSlider(),
},
"fileupload": {
  id: "fileUpload",
  title: "Text File Upload Preview",
  description:
    "Learn to automate file upload interactions and verify the rendering and validation of uploaded TXT file content.",
  category: "File Upload",
  difficulty: "beginner",
  learningObjectives: [
    "Trigger a file upload input using automation",
    "Upload a `.txt` file without third-party libraries",
    "Read and preview the file content in the UI",
    "Validate that the content displayed matches the file content",
    "Handle edge cases such as empty files or unsupported formats",
    "Ensure file input accepts only `.txt` extensions",
    "Verify UI feedback for successful and failed uploads"
  ],
  siteContent: FileUploadPreview({ acceptedExtension: ".txt" }),
},
wait: {
  id: "wait",
  title: "Add to Cart with Toast Notification",
  description:
    "Simulate a real-world e-commerce interaction where a product is added to the cart and a toast notification confirms the action after a delay. Learn to use both implicit and explicit waits in automation scripts.",
  category: "Interaction",
  difficulty: "intermediate",
  learningObjectives: [
    "Practice handling delayed UI feedback using explicit waits",
    "Use implicit waits for interacting with static elements",
    "Verify success toast notifications after cart actions",
    "Wait for toast visibility and automatic dismissal",
    "Handle synchronization for dynamic DOM updates",
  ],
  siteContent: AddToCartWithToast(),
}


  };

  return scenarios[scenarioId] || null;
}

export function getScenariosByCategory(category: string): PracticeScenario[] {
  const allScenarios = [
    "button-basic",
    "button-states",
    "input-basic",
    "input-validation",
    "dragdrop-basic",
  ].map((id) => getScenarioById(id)!);

  return allScenarios.filter(
    (scenario) => scenario.category.toLowerCase() === category.toLowerCase()
  );
}
