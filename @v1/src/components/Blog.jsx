import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons"; // Import the solid version
import { Link } from "react-router-dom";


const Blog = ({ blogId, data }) => {
  const like = parseInt(data.likes);
  const [likes, setLikes] = useState(like); // Initial like count is 10
  const [liked, setLiked] = useState(false); // Initial state of like button

  const handleLike = () => {
    if (!liked) {
      setLikes(likes + 1); // Increment like count
    } else {
      setLikes(likes - 1); // Decrement like count if already liked
    }
    setLiked(!liked); // Toggle liked state
  };

  return (
    <div className="blog" id={blogId}>
      <img src={data.img} alt="Blog" />
      <h3>{data.title}</h3>
      <div className="blog-owner-details">
        <div className="owner-name">{`By ${data.author}`}</div>
        <div className="publish-date">{data.publish_date}</div>
      </div>
      <p className="blog-desc">{data.description}</p>
      <div>
        <button
          className={`like-btn ${liked ? "liked" : ""}`}
          onClick={handleLike}
        >
          <FontAwesomeIcon icon={faHeart} color={liked ? "red" : "#bac2cf"} />
        </button>
        <span className="like-count">{likes}</span>
      </div>
      <Link to={`/blog/${data.title}/${blogId}`}>
        <button className="blog-read-more">
          <span className="circle" aria-hidden="true">
            <span className="icon arrow"></span>
          </span>
          <span className="read-btn-text">Read More</span>
        </button>
      </Link>
    </div>
  );
};

export default Blog;
