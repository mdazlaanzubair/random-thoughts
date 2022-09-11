import React from "react";

const PostCard = ({ thought }) => {
  return (
    <div className="card">
      <div className="card-header">
      </div>
      <div className="card-body pb-0">
        <button
          type="button"
          className="btn btn-floating btn-danger btn-sm float-end mb-2"
        >
          <i className="far fa-trash-alt"></i>
        </button>
        <h5 className="card-title">{thought.title}</h5>
        <p className="card-text">{thought.desc}</p>
        <div className="d-flex justify-content-between align-items-center">
          <button type="button" className="btn btn-link btn-sm m-2">
            Like
          </button>
          <span className="likes-counter">
            <i className="fas fa-heart me-2"></i> {thought.likes.length}
          </span>
        </div>
      </div>
      <div className="card-footer">
        <div className="user-location small mb-3">
          <i className="fas fa-map-marker-alt"></i> Posted from{" "}
          {thought.location}
        </div>
        <div className="date-posted small mb-3">
          <i className="far fa-calendar-check"></i> Posted on {thought.dated}
        </div>
      </div>
    </div>
  );
};

export default PostCard;
