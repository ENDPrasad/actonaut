import { Box, Typography } from "@mui/material";
import { BACKGROUND_GRADIENT, PRIMARY_COLOR, scrollToTop, YOUTUBE_LINK } from "../../helper/contants";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <Box component="footer" sx={{ backgroundColor: BACKGROUND_GRADIENT }}>
      <hr style={{ color: PRIMARY_COLOR }} />

      <div className="px-8 py-12 flex flex-col md:flex-row justify-between gap-8">
        {/* Left: Logo */}
        <div className="flex justify-start">
          <Link to="/" onClick={() => scrollToTop()}>
            <img src="/cnarios.svg" alt="cnarios logo" width="150px" />
          </Link>
        </div>

        {/* Right: Social Links */}
        <div className="flex gap-12">
          <div className="flex flex-col gap-2 text-sm">
            <a href="https://www.linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
            <a href={YOUTUBE_LINK} target="_blank" rel="noopener noreferrer">
              YouTube
            </a>
            <a href="https://www.instagram.com/your-handle" target="_blank" rel="noopener noreferrer">
              Instagram
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Stripe */}
      <div className="h-2" style={{ backgroundColor: PRIMARY_COLOR }}></div>

      {/* Bottom Text */}
      <div className="py-4 text-center text-xs" style={BACKGROUND_GRADIENT }>
        <Typography variant="body2" sx={{ fontSize: "0.75rem" }}>
          © {new Date().getFullYear()} Cnarios. All rights reserved. | Designed by <strong>END Prasad</strong>
        </Typography>
      </div>
    </Box>
  );
}

export default Footer;
