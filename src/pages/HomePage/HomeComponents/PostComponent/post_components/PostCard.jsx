import { useState } from "react";

const PostCard = ({ user, thought }) => {
  // hover shadow effect state
  const [shadow, setShadow] = useState("card shadow-md");

  return (
    <div
      className={shadow}
      onMouseOver={() => {
        setShadow("card shadow-6");
      }}
      onMouseOut={() => {
        setShadow("card shadow-md");
      }}
    >
      {user.IPv4 === thought.user ? (
        <div className="card-header border-0 p-0 pe-1 pt-1">
          <button
            type="button"
            className="btn btn-floating btn-link text-danger btn-lg float-end"
          >
            <i className="far fa-trash-alt"></i>
          </button>
        </div>
      ) : (
        ""
      )}
      <div className="card-body pb-0">
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
        <div className="user-location small my-1">
          <i className="fas fa-map-marker-alt me-2"></i>
          <strong className="ms-1">{thought.location}</strong>
        </div>
        <div className="date-posted small my-1">
          <i className="far fa-calendar-check me-2"></i>
          <strong className="ms-1">{thought.dated}</strong>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
