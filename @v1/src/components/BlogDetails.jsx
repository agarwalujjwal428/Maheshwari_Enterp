import React from "react";
import { useParams } from "react-router-dom";

const BlogDetails = () => {
  const { id } = useParams();
  const blog = blogs[id];

  return (
    <div className="product-service-details">
      <h3>{blog.title}</h3>
      <p>{blog.fullDescription}</p>
    </div>
  );
};

export default BlogDetails;
