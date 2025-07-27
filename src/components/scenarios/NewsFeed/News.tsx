import React, { useState } from "react";
import {
  Checkbox,
  FormControlLabel,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Typography,
  Card,
  CardContent,
} from "@mui/material";

type NewsItem = {
  id: number;
  title: string;
  category: string;
};

const newsData: NewsItem[] = [
  { id: 1, title: "Tech giants release AI updates", category: "Technology" },
  { id: 2, title: "World Cup 2025: Schedule announced", category: "Sports" },
  { id: 3, title: "Global markets see rise in stocks", category: "Business" },
  { id: 4, title: "New planet discovered in galaxy", category: "Science" },
  { id: 5, title: "Latest health trends in 2025", category: "Health" },
  { id: 6, title: "Oscars 2025: Complete winners list", category: "Entertainment" },
];

const categories = [
  "Technology",
  "Sports",
  "Business",
  "Science",
  "Health",
  "Entertainment",
];

const NewsFeed: React.FC = () => {
  const [selectedCategories, setSelectedCategories] = useState<string[]>(["Technology", "Sports"]);
  const [open, setOpen] = useState(false);

  const handleCategoryChange = (category: string) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
  };

  const filteredNews = newsData.filter((item) =>
    selectedCategories.includes(item.category)
  );

  return (
    <div className="max-w-3xl mx-auto p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Your News Feed</h1>
        <Button variant="outlined" onClick={() => setOpen(true)}>
          Set Preferences
        </Button>
      </div>

      {filteredNews.length === 0 ? (
        <Typography variant="body1" className="text-gray-500">
          No news to display. Select categories using "Set Preferences".
        </Typography>
      ) : (
        filteredNews.map((news) => (
          <Card key={news.id} className="mb-4 shadow-sm">
            <CardContent>
              <Typography variant="h6">{news.title}</Typography>
              <Typography variant="caption" className="text-gray-500">
                Category: {news.category}
              </Typography>
            </CardContent>
          </Card>
        ))
      )}

      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogTitle>Select News Categories</DialogTitle>
        <DialogContent>
          <div className="flex flex-col">
            {categories.map((cat) => (
              <FormControlLabel
                key={cat}
                control={
                  <Checkbox
                    checked={selectedCategories.includes(cat)}
                    onChange={() => handleCategoryChange(cat)}
                  />
                }
                label={cat}
              />
            ))}
          </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)}>Done</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default NewsFeed;
