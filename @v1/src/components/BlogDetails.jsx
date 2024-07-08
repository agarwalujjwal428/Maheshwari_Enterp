import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { useParams, Link, useNavigate } from "react-router-dom";
import blogData from "../blog.json";
import "../styles/BlogDetails.css";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const BlogDetails = () => {
  const navigate = useNavigate();
  const handlePrevious = () => {
    navigate(-1);
  };
  const { title, blogId } = useParams();
  const numericBlogId = parseInt(blogId);

  const blogItem = blogData.blogs.find((blog) => blog.id === numericBlogId);

  const [likes, setLikes] = useState(parseInt(blogItem.likes));
  const [liked, setLiked] = useState(false);

  const sortedBlogs = [...blogData.blogs].sort((a, b) => {
    const dateA = new Date(a.publish_date.split("/").reverse().join("/"));
    const dateB = new Date(b.publish_date.split("/").reverse().join("/"));
    return dateB - dateA;
  });

  const latestBlogs = sortedBlogs.slice(0, 4);

  const handleLike = () => {
    if (!liked) {
      setLikes(likes + 1);
    } else {
      setLikes(likes - 1);
    }
    setLiked(!liked);
  };

  useEffect(() => {
    window.scrollTo(0, 500);
  }, []);

  return (
    <>
      <div className="blog-bg">
        <img src="/assets/images/7.jpg" alt="Blog Background" />
        <h2 className="blog-head">Blogs</h2>
      </div>
      <div className="blog-details-container">
        <div className="blog-details-leftSide">
          <div className="blog-details-blogItem">
            <div className="bd-img">
            {blogItem.img2 === "" ? (
          <img src={blogItem.img1} alt="Blog" />
        ) : (
          <div className="blogdetails_img_collage">
            <img src={blogItem.img1} alt="Blog" />
            <img src={blogItem.img2} alt="Blog" />
          </div>
        )}
            </div>

            <div className="bd-head">{title}</div>
            <div className="bd-owner-details">
              <div className="bd-owner-name">{`By ${blogItem.author}`}</div>
              <div className="bd-publish-date">{blogItem.publish_date}</div>
            </div>

            <div className="bd-desc">{blogItem.description}</div>

            <div className="bd-bI-map">
              {blogItem.content.map((contentItem, index) => {
                if (contentItem.type === "paragraph") {
                  return <div key={index}>{contentItem.text}</div>;
                } else if (contentItem.type === "subheading") {
                  return <div className="bd-content-subhead" key={index}>{contentItem.text}</div>;
                } else if (contentItem.type === "list") {
                  return (
                    <div className="bd-content-list" key={index}>
                      {contentItem.subheading && <div className="bd-content-subhead">{contentItem.subheading}</div>}
                      <ul>
                        {contentItem.items.map((item, itemIndex) => (
                          <li key={itemIndex}>
                            {item.listHead &&<span id="bd-content-list-head">{item.listHead}</span>}
                            <span>{item.listData}</span></li>
                        ))}
                      </ul>
                    </div>
                  );
                } else {
                  return null;
                }
              })}
            </div>

            <div className="bd-likes">
              <button
                className={`like-btn ${liked ? "liked" : ""}`}
                onClick={handleLike}
              >
                <FontAwesomeIcon
                  icon={faHeart}
                  color={liked ? "red" : "#bac2cf"}
                />
              </button>
              <span className="like-count">{likes}</span>
            </div>
            <div className="navigation-buttons">
              <button
                onClick={handlePrevious}
                style={{ border: "none", marginTop: "35px", fontSize: "1em" }}
              >
                <FontAwesomeIcon icon={faArrowLeft} onClick={handlePrevious} />
                Prev
              </button>
            </div>
          </div>
        </div>
        <div className="blog-details-rightSide">
          <h2>Recent Blogs</h2>
          <ul>
            {latestBlogs.map((blog) => (
              <Link to={`/blog/${blog.title}/${blog.id}`} key={blog.id}>
                <li>
                  <span>{blog.title}</span>
                  <div className="bd_latestBlog_author">
                    <div>By {blog.author},</div>
                    <div>On {blog.publish_date}</div>
                  </div>
                </li>
              </Link>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default BlogDetails;
