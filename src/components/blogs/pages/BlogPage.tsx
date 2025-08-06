import { useParams } from "react-router-dom";
import type { Blog, BlogContent } from "../../../interfaces/interfaces";
import {blogData} from "../data/blogs";
import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { PRIMARY_COLOR } from "../../../helper/contants";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';


const BlogPage = () => {
  const { slug } = useParams();
  const blog = blogData.find((b: Blog) => b.slug === slug);

  if (!blog) {
    return <Typography variant="h6">Blog not found.</Typography>;
  }

  return (
    <Box className="p-8 max-w-4xl mx-auto">
        <div className="py-8">
          <Link to='/blogs'>
          <ArrowBackIcon sx={{color: PRIMARY_COLOR}} />
        </Link>
        </div>
      <Typography variant="h4" className="mb-2">{blog.title}</Typography>
      <Typography variant="subtitle1" color="textSecondary" className="mb-6">{blog.category}</Typography>
      {blog.content.map((item: BlogContent, idx: number) => {
        if(item.type === 'header'){
          return <Typography key={idx} className="mb-4" variant="subtitle1">{item.text}</Typography>;
        }
        else if (item.type === "paragraph") {
          return <Typography key={idx} className="mb-4" variant="body1">{item.text}</Typography>;
        } else if (item.type === "image") {
          return <div className="max-w-3xl mx-auto">
  <img
    key={idx}
    src={item.src}
    alt={item.alt}
    className="my-6 max-w-full h-auto rounded"
  />
</div>
;
        }
        return null;
      })}
    </Box>
  );
};

export default BlogPage;