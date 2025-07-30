import { useState } from "react";
import {
  Radio,
  RadioGroup,
  FormControl,
  FormControlLabel,
  FormLabel,
  Button,
  Typography,
  Card,
  CardContent,
} from "@mui/material";

type Question = {
  id: number;
  question: string;
  options: string[];
  correctAnswer: string;
};

type QuizProps = {
  questions: Question[];
};

const Quiz: React.FC<QuizProps> = ({ questions }) => {
  const [answers, setAnswers] = useState<{ [key: number]: string }>({});
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState(0);

  const handleOptionChange = (questionId: number, selected: string) => {
    setAnswers((prev) => ({
      ...prev,
      [questionId]: selected,
    }));
  };

  const handleSubmit = () => {
    let totalScore = 0;
    questions.forEach((q) => {
      if (answers[q.id] === q.correctAnswer) {
        totalScore++;
      }
    });
    setScore(totalScore);
    setSubmitted(true);
  };

  const isPassed = score >= Math.ceil(questions.length * 0.6);

  return (
    <div className="max-w-2xl mx-auto p-4 space-y-6">
      {questions.map((q) => (
        <Card key={q.id} className="shadow-md">
          <CardContent>
            <FormControl component="fieldset" className="w-full">
              <FormLabel component="legend" className="font-bold mb-2">
                {q.id}. {q.question}
              </FormLabel>
              <RadioGroup
                value={answers[q.id] || ""}
                onChange={(e) => handleOptionChange(q.id, e.target.value)}
              >
                {q.options.map((option, index) => (
                  <FormControlLabel
                    key={index}
                    value={option}
                    control={<Radio />}
                    label={option}
                    className="ml-2"
                  />
                ))}
              </RadioGroup>
            </FormControl>
          </CardContent>
        </Card>
      ))}

      {!submitted ? (
        <Button
          variant="contained"
          color="primary"
          onClick={handleSubmit}
          className="w-full"
        >
          Submit
        </Button>
      ) : (
        <div className="text-center">
          <Typography variant="h6" className="mt-4">
            Your Score: {score} / {questions.length}
          </Typography>
          <Typography
            variant="h5"
            className={`font-bold mt-2 ${
              isPassed ? "text-green-600" : "text-red-600"
            }`}
          >
            {isPassed ? "Pass 🎉" : "Fail ❌"}
          </Typography>
        </div>
      )}
    </div>
  );
};

export default Quiz;
