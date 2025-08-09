import { useParams } from "react-router-dom";
import type { Blog, BlogContent } from "../../../interfaces/interfaces";
import {blogData} from "../data/blogs";
import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { PRIMARY_COLOR, PRIMARY_TEXT_COLOR } from "../../../helper/contants";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import NavBar from "../../NavBar/NavBar";
import Footer from "../../Footer/Footer";


const BlogPage = () => {
  const { slug } = useParams();
  const blog = blogData.find((b: Blog) => b.slug === slug);

  if (!blog) {
    return <Typography variant="h6">Blog not found.</Typography>;
  }

  return (
    <>
    <NavBar />
    <Box className="p-8 max-w-4xl mx-auto" sx={{color: PRIMARY_TEXT_COLOR}}>
        <div className="py-8">
          <Link to='/blogs'>
          <ArrowBackIcon sx={{color: PRIMARY_COLOR}} />
        </Link>
        </div>
      <Typography variant="h4" className="mb-2.5" sx={{fontWeight: 'bold'}}>{blog.title}</Typography>
      <Typography variant="subtitle1" color="textSecondary" className="mb-6">{blog.category}</Typography>
      {blog.content.map((item: BlogContent, idx: number) => {
        if(item.type === 'header'){
          return <Typography key={idx} sx={{marginBottom: '10px', lineHeight: '1.6em', fontWeight: 'bold'}} variant="h5">{item.text}</Typography>;
        }
        else if (item.type === "paragraph") {
          return <Typography key={idx} sx={{marginBottom: '20px', lineHeight: '1.6em'}} variant="body1">{item.text}</Typography>;
        } else if (item.type === "image") {
          return <div className="max-w-3xl mx-auto" style={{marginBottom: '20px'}}>
  <img
    key={idx}
    src={item.src}
    alt={item.alt}
    loading="lazy"
    className="my-6 max-w-full h-auto rounded"
  />
</div>
;
        }
        return null;
      })}
    </Box>
    <Footer />
    </>
  );
};

export default BlogPage;