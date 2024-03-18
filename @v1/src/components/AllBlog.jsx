import React, { useState, useEffect, useRef } from "react";
import Blog from "./Blog";
import blogData from "../blog.json";
import "../styles/BlogPage.css";

const AllBlog = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 3;

  // Calculate the index of the first and last blog on the current page
  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = blogData.blogs.slice(indexOfFirstBlog, indexOfLastBlog);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Ref for blog container
  const blogContainerRef = useRef(null);

  useEffect(() => {
    blogContainerRef.current.scrollIntoView({ behaviour: "smooth" });
  }, [currentPage]);

  // Logic to display page numbers
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(blogData.blogs.length / blogsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <>
      <div className="blog-bg">
        <img
          src="/src/assets/images/blog_background.jpg"
          alt="Blog Background"
        ></img>
        <h2 className="blog-head">Blogs/</h2>
      </div>
      <div className="blog-container" ref={blogContainerRef}>
        <div className="blog-leftSide">
          <div className="blog-data">
            {currentBlogs.map((blog) => (
              <Blog key={blog.id} blogId={blog.id} data={blog} />
            ))}
          </div>
        </div>
        <div className="blog-rightSide">
          <h2>Recent Blogs</h2>
        </div>
      </div>
      {/* Pagination */}
      <ul className="pagination">
        {pageNumbers.map((number) => (
          <li key={number} className={currentPage === number ? "active" : ""}>
            <button onClick={() => paginate(number)}>{number}</button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default AllBlog;
