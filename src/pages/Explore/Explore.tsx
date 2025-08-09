import React from "react";
import { Card, CardContent, Typography, Button, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import SchoolIcon from "@mui/icons-material/School";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import ArticleIcon from "@mui/icons-material/Article";
import { Link } from "react-router-dom";
import { PRIMARY_COLOR } from "../../helper/contants";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';


type ExploreSection = {
  title: string;
  description: string;
  buttonText: string;
  route: string;
  icon: React.ReactNode;
};

const sections: ExploreSection[] = [
  {
    title: "Concepts",
    description:
      "Learn automation concepts with interactive examples and hands-on practice for each topic.",
    buttonText: "Start Learning",
    route: "/concepts",
    icon: <SchoolIcon sx={{ fontSize: 40, color: "#4052B5" }} />,
  },
  {
    title: "Challenges",
    description:
      "Test your skills with interview questions and automation challenges.",
    buttonText: "Take Challenge",
    route: "/challenges",
    icon: <EmojiEventsIcon sx={{ fontSize: 40, color: "#4052B5" }} />,
  },
  {
    title: "Blogs",
    description:
      "Dive deeper into automation theory with well-structured articles.",
    buttonText: "Read Blogs",
    route: "/blogs",
    icon: <ArticleIcon sx={{ fontSize: 40, color: "#4052B5" }} />,
  },
];

const Explore: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div
      className="min-h-screen flex flex-col items-center px-6"
      style={{ backgroundColor: "#f6f4f0" }}
    >
        <div className="py-8 px-16 self-start">
          <Link to='/'>
          <ArrowBackIcon sx={{color: PRIMARY_COLOR}} />
        </Link>
        </div>
      {/* Heading */}
      <div className="flex flex-col gap-1">
        <Typography
        variant="h3"
        className="mb-12"
        sx={{
          color: "#4052B5",
          textAlign: "center",
          fontSize: { xs: "2rem", md: "2.5rem" },
          marginBottom: '20px',
          fontWeight: 'bold'
        }}
      >
        Explore. Practice. Master.
      </Typography>
      <Typography
        variant="body1"
        className="mb-12 font-bold px-16 lg:px-56"
        sx={{
          textAlign: "center",
          marginBottom: '20px'
        }}
      >
        Welcome to your one-stop space for mastering automation.
Whether you’re here to explore concepts, challenge yourself with real interview questions, or dive into insightful blogs — you’ll find everything you need to grow your skills, step-by-step.
      </Typography>
      </div>

      {/* Cards Grid */}
      <div className="grid gap-10 w-full max-w-6xl sm:grid-cols-2 lg:grid-cols-3">
        {sections.map((section, index) => (
          <Card
            key={index}
            className="rounded-3xl shadow-md"
            sx={{
              backgroundColor: "#ffffff",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              minHeight: "300px",
              padding: "0.5rem",
            }}
          >
            <CardContent
              sx={{
                padding: "1.5rem",
                textAlign: "center",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              {/* Icon Circle */}
              <Box
                sx={{
                  backgroundColor: "#e8ebf8",
                  borderRadius: "50%",
                  width: 70,
                  height: 70,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "1rem",
                }}
              >
                {section.icon}
              </Box>

              <Typography
                variant="h5"
                gutterBottom
                sx={{
                  color: "#4052B5",
                  fontWeight: "bold",
                  marginBottom: "0.75rem",
                }}
              >
                {section.title}
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: "#3c3c3c",
                  lineHeight: 1.6,
                  fontSize: "0.95rem",
                }}
              >
                {section.description}
              </Typography>
            </CardContent>

            <div className="px-6 pb-6">
              <Button
                fullWidth
                variant="contained"
                sx={{
                  backgroundColor: "#4052B5",
                  paddingY: "0.6rem",
                  borderRadius: "12px",
                  fontWeight: "bold",
                  fontSize: "0.95rem",
                  textTransform: "none",
                  "&:hover": { backgroundColor: "#2e3c8c" },
                }}
                onClick={() => navigate(section.route)}
              >
                {section.buttonText}
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Explore;
