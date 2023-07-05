import React from "react";
import "../styles/PostCard.css"; // Import the CSS file

const PostCard = ({ title, description, onEdit, onDelete }) => {
  return (
    <div className="card post-card">
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <div className="btn-group">
          <button className="btn btn-primary" onClick={onEdit}>
            Edit
          </button>
          <button className="btn btn-danger" onClick={onDelete}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
