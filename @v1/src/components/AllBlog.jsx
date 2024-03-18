import React, { useState } from "react";
import Blog from "./Blog";
import blogData from "../blog.json";
import "../styles/BlogPage.css";

const AllBlog = () => {
  const [active, setActive] = useState(true);

  return (
    <div className="blog-container">
      <h2 className="blog-head">
        Blogs
        <div className="blog-border"></div>
      </h2>
      <div className="blog-data">
        {blogData.blogs.map((blog) => (
          <Blog key={blog.id} blogId={blog.id} data={blog} />
        ))}
      </div>
    </div>
  );
};

export default AllBlog;
