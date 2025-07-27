"use client"

import { useParams, Link as RouterLink } from "react-router-dom"
import {
  Box,
  Typography,
  Container,
  Paper,
  Breadcrumbs,
  Link,
  Chip,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Alert,
  Button,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material"
import { ArrowBack, CheckCircle, Timer, Star, Lightbulb, ExpandMore } from "@mui/icons-material"
import type { Challenge } from "../../interfaces/interfaces"

// This would typically come from an API or database
const challengeData: Record<string, Challenge> = {
  "login-automation": {
    id: "login-automation",
    title: "E-commerce Login Flow",
    description: "Automate a complete login flow with validation and error handling",
    difficulty: "easy",
    category: "Authentication",
    tags: ["login", "forms", "validation"],
    estimatedTime: "30 minutes",
    points: 100,
    scenario: (
      <Paper className="p-4 bg-gray-50">
        <Typography variant="h6" className="mb-4">
          Login Portal
        </Typography>
        <Box className="bg-white p-6 rounded max-w-md mx-auto">
          <Typography variant="h5" className="mb-4 text-center">
            Sign In
          </Typography>
          <Box className="space-y-4">
            <input
              id="username"
              type="text"
              placeholder="Username or Email"
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
            />
            <input
              id="password"
              type="password"
              placeholder="Password"
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
            />
            <button
              id="login-btn"
              className="w-full bg-blue-500 text-white p-3 rounded hover:bg-blue-600 transition-colors"
            >
              Sign In
            </button>
            <div className="text-center">
              <a href="#" className="text-blue-500 text-sm">
                Forgot Password?
              </a>
            </div>
          </Box>
        </Box>
      </Paper>
    ),
    objectives: ["Navigate to login page", "Enter valid credentials", "Handle login errors", "Verify successful login"],
  },
  "shopping-cart": {
    id: "shopping-cart",
    title: "Shopping Cart Automation",
    description: "Complete shopping cart flow from product selection to checkout",
    difficulty: "medium",
    category: "E-commerce",
    tags: ["cart", "checkout", "forms"],
    estimatedTime: "45 minutes",
    points: 200,
    scenario: (
      <Paper className="p-4 bg-gray-50">
        <Typography variant="h6" className="mb-4">
          Online Store
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} md={8}>
            <Box className="bg-white p-4 rounded">
              <Typography variant="h6" className="mb-3">
                Products
              </Typography>
              <Grid container spacing={2}>
                {[1, 2, 3].map((i) => (
                  <Grid item xs={12} sm={4} key={i}>
                    <Box className="border p-3 rounded">
                      <Typography variant="subtitle2">Product {i}</Typography>
                      <Typography variant="body2" className="text-gray-600">
                        ${19.99 * i}
                      </Typography>
                      <button
                        id={`add-to-cart-${i}`}
                        className="mt-2 bg-green-500 text-white px-3 py-1 rounded text-sm hover:bg-green-600"
                      >
                        Add to Cart
                      </button>
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box className="bg-white p-4 rounded">
              <Typography variant="h6" className="mb-3">
                Shopping Cart
              </Typography>
              <div id="cart-items" className="space-y-2 mb-4">
                <Typography variant="body2" className="text-gray-500">
                  Your cart is empty
                </Typography>
              </div>
              <button
                id="checkout-btn"
                className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 disabled:bg-gray-300"
                disabled
              >
                Checkout
              </button>
            </Box>
          </Grid>
        </Grid>
      </Paper>
    ),
    objectives: ["Add products to cart", "Modify cart quantities", "Apply discount codes", "Complete checkout process"],
  },
}

export function ChallengePage() {
  const { challengeId } = useParams<{ challengeId: string }>()

  if (!challengeId) {
    return <div>Invalid challenge</div>
  }

  const challenge = challengeData[challengeId]

  if (!challenge) {
    return <div>Challenge not found</div>
  }

  const getDifficultyColor = (difficulty: Challenge["difficulty"]) => {
    switch (difficulty) {
      case "easy":
        return "success"
      case "medium":
        return "warning"
      case "hard":
        return "error"
      case "expert":
        return "secondary"
      default:
        return "default"
    }
  }

  return (
    <Container maxWidth="lg" className="py-6">
      {/* Breadcrumb */}
      <Breadcrumbs aria-label="breadcrumb" className="mb-4">
        <Link component={RouterLink} to="/challenges" className="flex items-center gap-1 no-underline">
          <ArrowBack fontSize="small" />
          Challenges
        </Link>
        <Typography color="text.primary">{challenge.title}</Typography>
      </Breadcrumbs>

      {/* Challenge Header */}
      <Paper elevation={1} className="p-6 mb-6">
        <Box className="flex items-start justify-between mb-4">
          <Box>
            <Typography variant="h4" component="h1" className="mb-2">
              {challenge.title}
            </Typography>
            <Typography variant="body1" className="text-gray-600 mb-3">
              {challenge.description}
            </Typography>
            <Box className="flex flex-wrap gap-2">
              {challenge.tags.map((tag) => (
                <Chip key={tag} label={tag} size="small" variant="outlined" />
              ))}
            </Box>
          </Box>
          <Box className="text-right">
            <Chip
              label={challenge.difficulty}
              color={getDifficultyColor(challenge.difficulty)}
              icon={<Star />}
              className="mb-2"
            />
            <Box className="flex items-center gap-1 text-gray-500 mb-1">
              <Timer fontSize="small" />
              <Typography variant="body2">{challenge.estimatedTime}</Typography>
            </Box>
            <Typography variant="h6" color="primary">
              {challenge.points} points
            </Typography>
          </Box>
        </Box>

        {challenge.prerequisites && (
          <Alert severity="info" className="mb-4">
            <Typography variant="body2">
              <strong>Prerequisites:</strong> Complete these challenges first: {challenge.prerequisites.join(", ")}
            </Typography>
          </Alert>
        )}
      </Paper>

      <Grid container spacing={3}>
        {/* Challenge Scenario */}
        <Grid item xs={12} lg={8}>
          <Paper elevation={1} className="p-6 mb-6">
            <Typography variant="h6" className="mb-4">
              Challenge Scenario
            </Typography>
            {challenge.scenario}
          </Paper>
        </Grid>

        {/* Challenge Details */}
        <Grid item xs={12} lg={4}>
          <Paper elevation={1} className="p-6 mb-6">
            <Typography variant="h6" className="mb-4">
              Objectives
            </Typography>
            <List>
              {challenge.objectives.map((objective, index) => (
                <ListItem key={index} disablePadding>
                  <ListItemIcon>
                    <CheckCircle color="primary" fontSize="small" />
                  </ListItemIcon>
                  <ListItemText primary={objective} />
                </ListItem>
              ))}
            </List>
          </Paper>

          {challenge.hints && (
            <Paper elevation={1} className="p-6 mb-6">
              <Accordion>
                <AccordionSummary expandIcon={<ExpandMore />}>
                  <Box className="flex items-center gap-2">
                    <Lightbulb color="warning" />
                    <Typography variant="h6">Hints</Typography>
                  </Box>
                </AccordionSummary>
                <AccordionDetails>
                  <List>
                    {challenge.hints.map((hint, index) => (
                      <ListItem key={index} disablePadding>
                        <ListItemText primary={hint} />
                      </ListItem>
                    ))}
                  </List>
                </AccordionDetails>
              </Accordion>
            </Paper>
          )}

          <Button variant="contained" size="large" fullWidth>
            Submit Solution
          </Button>
        </Grid>
      </Grid>
    </Container>
  )
}
