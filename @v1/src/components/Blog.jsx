import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons"; // Import the solid version

const Blog = ({ id, data }) => {
  const [likes, setLikes] = useState(10); // Initial like count is 10
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
    <div className="blog" id={id}>
      <img
        src={data.img}
        style={{ width: "200px", height: "200px" }}
        alt="Blog"
      />
      <h3>{data.title}</h3>
      <div className="bolg-owner-details">
        <div className="owner-name">by vaibhav gupta</div>
        <div className="publish-date">18/07/2001</div>
      </div>
      <p>{data.description}</p>
      <div>
        <button
          className={`like-btn ${liked ? "liked" : ""}`}
          onClick={handleLike}
        >
          <FontAwesomeIcon icon={faHeart} color={liked ? "red" : "#bac2cf"} />
        </button>
        <span className="like-count">{likes}</span>
      </div>
      <button className="blog-read-more">
        <span className="circle" aria-hidden="true">
          <span className="icon arrow"></span>
        </span>
        <span className="read-btn-text">Read More</span>
      </button>
    </div>
  );
};

export default Blog;
