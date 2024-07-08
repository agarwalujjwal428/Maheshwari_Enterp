import React, { useState, useEffect, useRef } from "react";
import Blog from "./Blog";
import blogData from "../blog.json";
import "../styles/BlogPage.css";
import { Link } from "react-router-dom";

const AllBlog = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 3;

  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = blogData.blogs.slice(indexOfFirstBlog, indexOfLastBlog);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const blogContainerRef = useRef(null);

  useEffect(() => {
    blogContainerRef.current.scrollIntoView({ behavior: "smooth" });
  }, [currentPage]);

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(blogData.blogs.length / blogsPerPage); i++) {
    pageNumbers.push(i);
  }

  const sortedBlogs = [...blogData.blogs].sort((a, b) => {
    const dateA = new Date(a.publish_date.split("/").reverse().join("/"));
    const dateB = new Date(b.publish_date.split("/").reverse().join("/"));
    return dateB - dateA;
  });

  console.log("*latest blogs", sortedBlogs);

  const latestBlogs = sortedBlogs.slice(0, 4);
  console.log(latestBlogs);

  return (
    <>
      <div className="blog-bg">
        <img src="/assets/images/7.jpg" alt="Blog Background" />
        <h2 className="blog-head">Blogs</h2>
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
          <ul>
            {latestBlogs.map((blog) => (
              <Link to={`/blog/${blog.title}/${blog.id}`}>
                <li key={blog.id}>
                  <span>{blog.title}</span>
                  <div className="latestBlog_author">
                    <div>By {blog.author},</div>
                    <div>On {blog.publish_date}</div>
                  </div>
                </li>
              </Link>
            ))}
          </ul>
        </div>
      </div>

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
