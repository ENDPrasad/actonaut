import { Box, Typography, Link as MUILink, IconButton } from '@mui/material'
import {
  Facebook,
  Twitter,
  Instagram,
  LinkedIn,
  YouTube,
} from '@mui/icons-material'

export default function Footer() {
  const openNewWindow = () => {
    window.open('https://example.com/reviews', 'popup', 'width=600,height=400')
  }

  return (
    <Box component="footer" className="bg-gray-900 text-white py-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {/* Branding */}
        <div>
          <Typography variant="h6" gutterBottom>
            MySite
          </Typography>
          <Typography variant="body2">
            Your go-to platform for all automation and tech practice needs.
          </Typography>
        </div>

        {/* Navigation */}
        <div>
          <Typography variant="h6" gutterBottom>
            Navigation
          </Typography>
          <ul className="space-y-1">
            <li>
              <MUILink href="#features" color="inherit" underline="hover">
                In-Page: Features
              </MUILink>
            </li>
            <li>
              <MUILink href="#pricing" color="inherit" underline="hover">
                In-Page: Pricing
              </MUILink>
            </li>
            <li>
              <MUILink
                href="https://example.com/blog"
                target="_blank"
                rel="noopener noreferrer"
                color="inherit"
                underline="hover"
              >
                Blog (New Tab)
              </MUILink>
            </li>
            <li>
              <MUILink href="#" onClick={openNewWindow} underline="hover" color="inherit">
                Reviews (New Window)
              </MUILink>
            </li>
            <li>
              <MUILink
                href="https://external-partner.com"
                target="_blank"
                rel="noopener noreferrer"
                color="inherit"
                underline="hover"
              >
                External Link
              </MUILink>
            </li>
            <li>
              <MUILink href="/non-existent-page" underline="hover" color="inherit">
                Broken Link (404)
              </MUILink>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <Typography variant="h6" gutterBottom>
            Contact
          </Typography>
          <ul className="space-y-1">
            <li>
              <MUILink href="mailto:support@example.com" color="inherit" underline="hover">
                Email: support@example.com
              </MUILink>
            </li>
            <li>
              <MUILink href="tel:+919999999999" color="inherit" underline="hover">
                Call Us: +91 99999 99999
              </MUILink>
            </li>
            <li>
              <MUILink href="/resume.pdf" download color="inherit" underline="hover">
                Download Resume
              </MUILink>
            </li>
            <li>
              <MUILink
                href="#"
                onClick={() => alert('Logged out')}
                underline="hover"
                color="inherit"
              >
                Logout (JS Action)
              </MUILink>
            </li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <Typography variant="h6" gutterBottom>
            Follow Us
          </Typography>
          <div className="flex gap-4 mt-2">
            {[Facebook, Twitter, Instagram, LinkedIn, YouTube].map((Icon, idx) => (
              <IconButton
                key={idx}
                component="a"
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-blue-400"
              >
                <Icon />
              </IconButton>
            ))}
          </div>
        </div>
      </div>

      <Typography variant="body2" className="text-center text-gray-400 mt-8">
        © {new Date().getFullYear()} MySite. All rights reserved.
      </Typography>
    </Box>
  )
}

