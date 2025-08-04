"use client";

import { useState } from "react";
import { Slider, TextField, Button, Typography, Box, Alert } from "@mui/material";

export default function RatingSlider() {
  const [sliderValue, setSliderValue] = useState<number | null>(null);
  const [averageRating, setAverageRating] = useState(8.2); // example starting average
  const [totalRatings, setTotalRatings] = useState(10);
  const [userRating, setUserRating] = useState<number | null>(null);
  const [userReview, setUserReview] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = () => {
    if (sliderValue === null) {
      setError("Please provide a rating using the slider.");
      return;
    }

    // New average calculation
    const newTotal = totalRatings + 1;
    const newAverage = (averageRating * totalRatings + sliderValue) / newTotal;

    setAverageRating(Number(newAverage.toFixed(1)));
    setTotalRatings(newTotal);
    setUserRating(sliderValue);
    setSubmitted(true);
    setError("");
  };

  return (
    <Box className="max-w-xl mx-auto my-auto p-4 rounded-xl shadow-md bg-white flex flex-col gap-2">
      <Typography variant="h6" gutterBottom>
        Rate This Product
      </Typography>

      <Typography variant="body1" className="mb-4">
        Current Average Rating: <strong>{averageRating}</strong> ({totalRatings} ratings)
      </Typography>

      <Box className="my-8">
        <Slider
          disabled={submitted}
          value={sliderValue ?? 0}
          onChange={(_e, val) => setSliderValue(val as number)}
          min={1}
          max={10}
          step={1}
          marks
          valueLabelDisplay="on"
        />
      </Box>

      <TextField
        disabled={submitted}
        fullWidth
        label="Your Review"
        value={userReview}
        onChange={(e) => setUserReview(e.target.value)}
        multiline
        rows={3}
        className="mb-6"
        
      />

      {error && (
        <Alert severity="error" sx={{marginBottom: '12px'}}>
          {error}
        </Alert>
      )}

      {!submitted ? (
        <Button
          variant="contained"
          fullWidth
          onClick={handleSubmit}
          className="bg-blue-600 hover:bg-blue-700 text-white my-4"
        >
          Submit Rating
        </Button>
      ) : (
        <Alert severity="success" className="mb-4">
          Thank you for your feedback!
        </Alert>
      )}

      {submitted && userRating && (
        <Box className="mt-6">
          <Typography variant="subtitle1">Your Rating: {userRating}/10</Typography>
          {userReview && (
            <Typography variant="body2" className="mt-1 italic">
              "{userReview}"
            </Typography>
          )}
        </Box>
      )}
    </Box>
  );
};

