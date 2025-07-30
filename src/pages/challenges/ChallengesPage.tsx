// "use client"

// import { useState } from "react"
// import { Link as RouterLink } from "react-router-dom"
// import {
//   Box,
//   Typography,
//   Container,
//   Paper,
//   Grid,
//   Card,
//   CardContent,
//   CardActions,
//   Button,
//   Chip,
//   TextField,
//   FormControl,
//   InputLabel,
//   Select,
//   MenuItem,
//   Avatar,
// } from "@mui/material"
// import { Timer, Star, TrendingUp, Psychology } from "@mui/icons-material"
// import type { Challenge, ChallengeFilters } from "../../interfaces/interfaces"

// const challenges: Challenge[] = [
//   {
//     id: "login-automation",
//     title: "E-commerce Login Flow",
//     description: "Automate a complete login flow with validation and error handling",
//     difficulty: "easy",
//     category: "Authentication",
//     tags: ["login", "forms", "validation"],
//     estimatedTime: "30 minutes",
//     points: 100,
//     scenario: <div>Login scenario content</div>,
//     objectives: ["Navigate to login page", "Enter valid credentials", "Handle login errors", "Verify successful login"],
//   },
//   {
//     id: "shopping-cart",
//     title: "Shopping Cart Automation",
//     description: "Complete shopping cart flow from product selection to checkout",
//     difficulty: "medium",
//     category: "E-commerce",
//     tags: ["cart", "checkout", "forms"],
//     estimatedTime: "45 minutes",
//     points: 200,
//     scenario: <div>Shopping cart scenario content</div>,
//     objectives: ["Add products to cart", "Modify cart quantities", "Apply discount codes", "Complete checkout process"],
//   },
//   {
//     id: "data-table-operations",
//     title: "Complex Data Table Operations",
//     description: "Automate sorting, filtering, and pagination in a data table",
//     difficulty: "hard",
//     category: "Data Management",
//     tags: ["tables", "sorting", "filtering", "pagination"],
//     estimatedTime: "60 minutes",
//     points: 300,
//     scenario: <div>Data table scenario content</div>,
//     objectives: ["Sort table columns", "Apply multiple filters", "Navigate through pages", "Export table data"],
//   },
//   {
//     id: "multi-step-wizard",
//     title: "Multi-Step Form Wizard",
//     description: "Navigate through a complex multi-step form with conditional logic",
//     difficulty: "expert",
//     category: "Forms",
//     tags: ["wizard", "conditional", "validation", "complex"],
//     estimatedTime: "90 minutes",
//     points: 500,
//     prerequisites: ["login-automation", "shopping-cart"],
//     scenario: <div>Multi-step wizard scenario content</div>,
//     objectives: [
//       "Navigate through form steps",
//       "Handle conditional fields",
//       "Validate each step",
//       "Complete entire wizard",
//     ],
//     hints: [
//       "Pay attention to conditional field visibility",
//       "Some steps may be skipped based on previous selections",
//       "Validation occurs at each step transition",
//     ],
//   },
// ]

// export function ChallengesPage() {
//   const [filters, setFilters] = useState<ChallengeFilters>({
//     difficulty: "all",
//     category: "all",
//     search: "",
//   })

//   const getDifficultyColor = (difficulty: Challenge["difficulty"]) => {
//     switch (difficulty) {
//       case "easy":
//         return "success"
//       case "medium":
//         return "warning"
//       case "hard":
//         return "error"
//       case "expert":
//         return "secondary"
//       default:
//         return "default"
//     }
//   }

//   const getDifficultyIcon = (difficulty: Challenge["difficulty"]) => {
//     switch (difficulty) {
//       case "easy":
//         return <Star />
//       case "medium":
//         return <TrendingUp />
//       case "hard":
//       case "expert":
//         return <Psychology />
//       default:
//         return <Star />
//     }
//   }

//   const filteredChallenges = challenges.filter((challenge) => {
//     const matchesDifficulty = filters.difficulty === "all" || challenge.difficulty === filters.difficulty
//     const matchesCategory = filters.category === "all" || challenge.category === filters.category
//     const matchesSearch =
//       filters.search === "" ||
//       challenge.title.toLowerCase().includes(filters.search.toLowerCase()) ||
//       challenge.description.toLowerCase().includes(filters.search.toLowerCase()) ||
//       challenge.tags.some((tag) => tag.toLowerCase().includes(filters.search.toLowerCase()))

//     return matchesDifficulty && matchesCategory && matchesSearch
//   })

//   const categories = [...new Set(challenges.map((c) => c.category))]

//   return (
//     <Container maxWidth="lg" className="py-6">
//       <Box className="mb-6">
//         <Typography variant="h4" component="h1" className="mb-2">
//           Automation Challenges
//         </Typography>
//         <Typography variant="body1" className="text-gray-600">
//           Test your automation skills with real-world scenarios and challenges
//         </Typography>
//       </Box>

//       {/* Filters */}
//       <Paper elevation={1} className="p-4 mb-6">
//         <Grid container spacing={3} alignItems="center">
//           <Grid item xs={12} md={4}>
//             <TextField
//               fullWidth
//               label="Search challenges"
//               variant="outlined"
//               size="small"
//               value={filters.search}
//               onChange={(e) => setFilters({ ...filters, search: e.target.value })}
//             />
//           </Grid>
//           <Grid item xs={12} md={4}>
//             <FormControl fullWidth size="small">
//               <InputLabel>Difficulty</InputLabel>
//               <Select
//                 value={filters.difficulty}
//                 label="Difficulty"
//                 onChange={(e) => setFilters({ ...filters, difficulty: e.target.value })}
//               >
//                 <MenuItem value="all">All Difficulties</MenuItem>
//                 <MenuItem value="easy">Easy</MenuItem>
//                 <MenuItem value="medium">Medium</MenuItem>
//                 <MenuItem value="hard">Hard</MenuItem>
//                 <MenuItem value="expert">Expert</MenuItem>
//               </Select>
//             </FormControl>
//           </Grid>
//           <Grid item xs={12} md={4}>
//             <FormControl fullWidth size="small">
//               <InputLabel>Category</InputLabel>
//               <Select
//                 value={filters.category}
//                 label="Category"
//                 onChange={(e) => setFilters({ ...filters, category: e.target.value })}
//               >
//                 <MenuItem value="all">All Categories</MenuItem>
//                 {categories.map((category) => (
//                   <MenuItem key={category} value={category}>
//                     {category}
//                   </MenuItem>
//                 ))}
//               </Select>
//             </FormControl>
//           </Grid>
//         </Grid>
//       </Paper>

//       {/* Challenges Grid */}
//       <Grid container spacing={3}>
//         {filteredChallenges.map((challenge) => (
//           <Grid item xs={12} md={6} lg={4} key={challenge.id}>
//             <Card className="h-full flex flex-col">
//               <CardContent className="flex-1">
//                 <Box className="flex items-center justify-between mb-2">
//                   <Chip
//                     label={challenge.difficulty}
//                     color={getDifficultyColor(challenge.difficulty)}
//                     size="small"
//                     icon={getDifficultyIcon(challenge.difficulty)}
//                   />
//                   <Box className="flex items-center gap-1 text-gray-500">
//                     <Timer fontSize="small" />
//                     <Typography variant="caption">{challenge.estimatedTime}</Typography>
//                   </Box>
//                 </Box>

//                 <Typography variant="h6" component="h2" className="mb-2">
//                   {challenge.title}
//                 </Typography>

//                 <Typography variant="body2" className="text-gray-600 mb-3">
//                   {challenge.description}
//                 </Typography>

//                 <Box className="flex flex-wrap gap-1 mb-3">
//                   {challenge.tags.map((tag) => (
//                     <Chip key={tag} label={tag} size="small" variant="outlined" />
//                   ))}
//                 </Box>

//                 <Box className="flex items-center justify-between">
//                   <Typography variant="body2" className="text-gray-500">
//                     {challenge.category}
//                   </Typography>
//                   <Box className="flex items-center gap-1">
//                     <Avatar sx={{ width: 20, height: 20, bgcolor: "primary.main" }}>
//                       <Typography variant="caption" className="text-white">
//                         {challenge.points}
//                       </Typography>
//                     </Avatar>
//                     <Typography variant="caption">pts</Typography>
//                   </Box>
//                 </Box>
//               </CardContent>

//               <CardActions>
//                 <Button
//                   component={RouterLink}
//                   to={`/challenge/${challenge.id}`}
//                   variant="contained"
//                   fullWidth
//                   size="small"
//                 >
//                   Start Challenge
//                 </Button>
//               </CardActions>
//             </Card>
//           </Grid>
//         ))}
//       </Grid>

//       {filteredChallenges.length === 0 && (
//         <Box className="text-center py-12">
//           <Typography variant="h6" className="text-gray-500 mb-2">
//             No challenges found
//           </Typography>
//           <Typography variant="body2" className="text-gray-400">
//             Try adjusting your filters to see more challenges
//           </Typography>
//         </Box>
//       )}
//     </Container>
//   )
// }
