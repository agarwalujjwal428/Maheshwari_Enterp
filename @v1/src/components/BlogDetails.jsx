import React from "react";
import { useParams } from "react-router-dom";
import blogData from "../blog.json";

const BlogDetails = () => {
  const { title, blogId } = useParams();

  // Convert blogId to number
  const numericBlogId = parseInt(blogId);

  // Find the blog item with matching id
  const blogItem = blogData.blogs.find((blog) => blog.id === numericBlogId);

  console.log("blog", blogItem);

  if (!blogItem) {
    return <div>Blog not found</div>;
  }

  return (
    <div>
      <div>{title}</div>
      <div>
        <img src={blogItem.img} style={{ width: "200px", height: "200px" }}></img>
      </div>
      <div>
        {blogItem.blogItems.map((blog_item) => (
          <div key={blog_item.id}>{blog_item.fullDescription}</div>
        ))}
      </div>
      <div>{blogItem.description}</div>

    </div>
  );
};

export default BlogDetails;
