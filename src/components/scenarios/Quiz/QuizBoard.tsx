import Quiz from "./Quiz";

const seleniumQuestions = [
  {
    id: 1,
    question: "Which WebDriver method is used to open a URL in the browser?",
    options: ["navigate().refresh()", "get(url)", "open(url)", "launch(url)"],
    correctAnswer: "get(url)",
  },
  {
    id: 2,
    question: "What is the use of the WebDriver `findElement()` method?",
    options: [
      "To close the browser",
      "To locate a single web element",
      "To submit a form",
      "To take screenshots",
    ],
    correctAnswer: "To locate a single web element",
  },
  {
    id: 3,
    question: "Which locator strategy is considered the most efficient in Selenium?",
    options: ["Class Name", "XPath", "ID", "CSS Selector"],
    correctAnswer: "ID",
  },
  {
    id: 4,
    question: "What is the purpose of `WebDriverWait` in Selenium?",
    options: [
      "To refresh the browser",
      "To wait for an element to disappear",
      "To provide explicit wait until a condition is met",
      "To stop execution permanently",
    ],
    correctAnswer: "To provide explicit wait until a condition is met",
  },
];


export default function QuizBoard() {
  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <h1 className="text-3xl font-bold text-center mb-8">Quiz App</h1>
      <Quiz questions={seleniumQuestions} />
    </div>
  );
};

