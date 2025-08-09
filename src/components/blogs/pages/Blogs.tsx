import { Link } from "react-router";
import BlogFactory from "../BlogFactory";
import { Box, Typography } from "@mui/material";
import { PRIMARY_COLOR } from "../../../helper/contants";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import NavBar from "../../NavBar/NavBar";
import Footer from "../../Footer/Footer";


function Blogs() {
  return (
    <>
    <NavBar />
    <Box className="p-8">
      <Typography variant="h4" gutterBottom>Our Blogs</Typography>
      <div className="px-8">
          <Link to='/'>
          <ArrowBackIcon sx={{color: PRIMARY_COLOR}} />
        </Link>
        </div>
      <div className="grid grid-cols-1 gap-6 mt-4">
        <BlogFactory />
      </div>
    </Box>
    <Footer />
    </>
  );
}

export default Blogs;
