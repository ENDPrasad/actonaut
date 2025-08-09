"use client"

import { useState } from "react"
import { Link as RouterLink } from "react-router-dom"
import {
  Box,
  Typography,
  Container,
  Paper,
  Card,
  CardContent,
  CardActions,
  Button,
  Chip,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material"
import { Star, TrendingUp, Psychology } from "@mui/icons-material"
import type { ChallengeFilters } from "../../interfaces/interfaces"
import { getAllChallenges } from "../../assets/data/ChallengesData"
import { PRIMARY_COLOR } from "../../helper/contants"
import { Link } from "react-router-dom"
import ArrowBackIcon from '@mui/icons-material/ArrowBack';


export default function ChallengesSection() {
  const [filters, setFilters] = useState<ChallengeFilters>({
    difficulty: "all",
    category: "all",
    search: "",
  })

  const challenges = getAllChallenges()

  const getDifficultyColor = (difficulty: string) => {
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

  const getDifficultyIcon = (difficulty: string) => {
    switch (difficulty) {
      case "easy":
        return <Star />
      case "medium":
        return <TrendingUp />
      case "hard":
        return <Psychology />
      case "expert":
        return <Psychology />
      default:
        return <Star />
    }
  }

  const filteredChallenges = challenges.filter((challenge) => {
    const matchesDifficulty = filters.difficulty === "all" || challenge.difficulty === filters.difficulty
    const matchesCategory = filters.category === "all" || challenge.category === filters.category
    const matchesSearch =
      filters.search === "" ||
      challenge.title.toLowerCase().includes(filters.search.toLowerCase()) ||
      challenge.description.toLowerCase().includes(filters.search.toLowerCase()) ||
      challenge.tags.some((tag) => tag.toLowerCase().includes(filters.search.toLowerCase()))

    return matchesDifficulty && matchesCategory && matchesSearch
  })

  const categories = [...new Set(challenges.map((c) => c.category))]

  return (
    <Container maxWidth="lg" className="py-6">
      <div className="py-8 self-start">
          <Link to='/explore'>
          <ArrowBackIcon sx={{color: PRIMARY_COLOR}} />
        </Link>
        </div>
      <Box className="mb-6">
        <Typography variant="h4" component="h1" className="mb-2">
          Automation Challenges
        </Typography>
        <Typography variant="body1" className="text-gray-600">
          Test your automation skills with real-world scenarios and challenges
        </Typography>
      </Box>

      {/* Filters */}
      <Paper elevation={1} className="p-4 mb-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
          <TextField
            fullWidth
            label="Search challenges"
            variant="outlined"
            size="small"
            value={filters.search}
            onChange={(e) => setFilters({ ...filters, search: e.target.value })}
          />
          <FormControl fullWidth size="small">
            <InputLabel>Difficulty</InputLabel>
            <Select
              value={filters.difficulty}
              label="Difficulty"
              onChange={(e) => setFilters({ ...filters, difficulty: e.target.value })}
            >
              <MenuItem value="all">All Difficulties</MenuItem>
              <MenuItem value="easy">Easy</MenuItem>
              <MenuItem value="medium">Medium</MenuItem>
              <MenuItem value="hard">Hard</MenuItem>
              <MenuItem value="expert">Expert</MenuItem>
            </Select>
          </FormControl>
          <FormControl fullWidth size="small">
            <InputLabel>Category</InputLabel>
            <Select
              value={filters.category}
              label="Category"
              onChange={(e) => setFilters({ ...filters, category: e.target.value })}
            >
              <MenuItem value="all">All Categories</MenuItem>
              {categories.map((category) => (
                <MenuItem key={category} value={category}>
                  {category}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>
      </Paper>

      {/* Challenges Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredChallenges.map((challenge) => (
          <Card key={challenge.id} className="h-full flex flex-col">
            <CardContent className="flex-1 flex flex-col gap-1">
              <Box className="flex items-center justify-between mb-2">
                <Chip
                  label={challenge.difficulty}
                  color={getDifficultyColor(challenge.difficulty)}
                  size="small"
                  icon={getDifficultyIcon(challenge.difficulty)}
                />
              </Box>

              <Typography variant="h6" component="h2" sx={{marginBottom: '2'}}>
                {challenge.title}
              </Typography>

              <Typography variant="body2" className="text-gray-600" sx={{marginBottom: '8px'}}>
                {challenge.description}
              </Typography>

              <Box className="flex flex-wrap gap-1" sx={{marginTop: '12px'}}>
                {challenge.tags.map((tag) => (
                  <Chip key={tag} label={tag} size="small" variant="outlined" />
                ))}
              </Box>

              <Box className="flex items-center justify-between">
                <Typography variant="body2" className="text-gray-500">
                  {challenge.category}
                </Typography>
              </Box>
            </CardContent>

            <CardActions>
              <Button
                component={RouterLink}
                to={`/challenges/${challenge.id}`}
                variant="contained"
                fullWidth
                size="small"
                sx={{padding:'0.6rem 1.2rem', backgroundColor: PRIMARY_COLOR}}
              >
                View Challenge
              </Button>
            </CardActions>
          </Card>
        ))}
      </div>

      {filteredChallenges.length === 0 && (
        <Box className="text-center py-12">
          <Typography variant="h6" className="text-gray-500 mb-2">
            No challenges found
          </Typography>
          <Typography variant="body2" className="text-gray-400">
            Try adjusting your filters to see more challenges
          </Typography>
        </Box>
      )}
    </Container>
  )
}
