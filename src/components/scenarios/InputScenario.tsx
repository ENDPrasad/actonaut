import { Box, TextField, Typography, Paper, Grid, FormControl, InputLabel, Select, MenuItem } from "@mui/material"

export function BasicInputScenario() {
  return (
    <Box>
      <Typography variant="h6" className="mb-4">
        User Registration Form
      </Typography>
      <Paper className="p-4 bg-gray-50">
        <Box className="bg-white p-4 rounded">
          <Typography variant="h6" className="mb-4">
            Create Your Account
          </Typography>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <TextField id="first-name" label="First Name" variant="outlined" fullWidth required />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField id="last-name" label="Last Name" variant="outlined" fullWidth required />
            </Grid>
            <Grid item xs={12}>
              <TextField id="email" label="Email Address" type="email" variant="outlined" fullWidth required />
            </Grid>
            <Grid item xs={12}>
              <TextField id="password" label="Password" type="password" variant="outlined" fullWidth required />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="confirm-password"
                label="Confirm Password"
                type="password"
                variant="outlined"
                fullWidth
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField id="phone" label="Phone Number" type="tel" variant="outlined" fullWidth />
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth>
                <InputLabel id="country-label">Country</InputLabel>
                <Select labelId="country-label" id="country" label="Country">
                  <MenuItem value="us">United States</MenuItem>
                  <MenuItem value="ca">Canada</MenuItem>
                  <MenuItem value="uk">United Kingdom</MenuItem>
                  <MenuItem value="au">Australia</MenuItem>
                </Select>
              </FormControl>
            </Grid>
          </Grid>
        </Box>
      </Paper>
    </Box>
  )
}

export function InputValidationScenario() {
  return (
    <Box>
      <Typography variant="h6" className="mb-4">
        Form Validation Testing
      </Typography>
      <Paper className="p-4 bg-gray-50">
        <Box className="bg-white p-4 rounded">
          <Typography variant="h6" className="mb-4">
            Contact Form with Validation
          </Typography>
          <Box className="space-y-4">
            <TextField
              id="required-field"
              label="Required Field"
              variant="outlined"
              fullWidth
              required
              error
              helperText="This field is required"
            />
            <TextField
              id="email-validation"
              label="Email"
              type="email"
              variant="outlined"
              fullWidth
              error
              helperText="Please enter a valid email address"
            />
            <TextField
              id="min-length"
              label="Minimum 8 characters"
              variant="outlined"
              fullWidth
              error
              helperText="Must be at least 8 characters long"
            />
            <TextField
              id="number-only"
              label="Numbers Only"
              variant="outlined"
              fullWidth
              error
              helperText="Only numbers are allowed"
            />
          </Box>
        </Box>
      </Paper>
    </Box>
  )
}
