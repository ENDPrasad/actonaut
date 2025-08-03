import type { Blog } from "../../interfaces/interfaces";
import { Box, Typography, Card, CardContent } from "@mui/material";
import { Link } from "react-router-dom";
import {blogData} from "./data/blogs";

const BlogFactory = () => {
  return (
    <Box className="p-8 grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {blogData.map((blog: Blog) => (
        <Link
          to={`/blog/${blog.slug}`}
          key={blog.slug}
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <Card className="hover:shadow-lg transition-shadow duration-300 h-full">
            <CardContent>
              <Typography variant="h6" gutterBottom>{blog.title}</Typography>
              <Typography variant="subtitle2" color="textSecondary">{blog.category}</Typography>
              <Typography variant="body2" className="mt-2">{blog.description}</Typography>
            </CardContent>
          </Card>
        </Link>
      ))}
    </Box>
  );
};

export default BlogFactory;