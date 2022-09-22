import { useState } from "react";

const PostCard = ({ user, thought, thoughts, setThoughts }) => {
  // hover shadow effect state
  const [shadow, setShadow] = useState("card shadow-md");

  // like/dislike functionality
  const likeThought = async (id) => {
    // async function to like thought on server and returns the updated thought
    const fetchPosts = async () => {
      try {
        const response = await fetch("http://127.0.0.1:3000/like/" + id);
        const data = await response.json();
        return data;
      } catch (error) {
        console.log(error);
      }
    };

    // storing returned thought in data variable
    const data = await fetchPosts();

    // creating copy of existing thoughts array
    const updatedThoughts = thoughts.map((thought) => {
      // updating the matching item
      if (thought.id == id) {
        return { ...thought, likes: data.thought.likes };
      }
      return thought;
    });

    // setting state variable after update
    setThoughts(updatedThoughts);
  };

  // like/dislike functionality
  const disLikeThought = async (id) => {
    // async function to like thought on server and returns the updated thought
    const fetchPosts = async () => {
      try {
        const response = await fetch("http://127.0.0.1:3000/dislike/" + id);
        const data = await response.json();
        return data;
      } catch (error) {
        console.log(error);
      }
    };

    // storing returned thought in data variable
    const data = await fetchPosts();

    // creating copy of existing thoughts array
    const updatedThoughts = thoughts.map((thought) => {
      // updating the matching item
      if (thought.id == id) {
        return { ...thought, likes: data.thought.likes };
      }
      return thought;
    });

    // setting state variable after update
    setThoughts(updatedThoughts);
  };

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
      {user?.ip === thought.user ? (
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
        <div className="d-flex flex-row justify-content-between align-items-center">
          <div className="d-flex like-action align-items-center">
            <strong className="small">Support</strong>
            <button
              type="button"
              className="btn btn-floating btn-primary btn-sm m-2"
              onClick={() => {
                likeThought(thought.id);
              }}
            >
              <i className="fas fa-thumbs-up"></i>
            </button>
            <button
              type="button"
              className="btn btn-floating btn-outline-primary btn-sm m-2"
              onClick={() => {
                disLikeThought(thought.id);
              }}
            >
              <i className="far fa-thumbs-down"></i>
            </button>
          </div>
          <span className={thought.likes > 0 ? "badge badge-success" : ""}>
            {thought.likes}
          </span>
        </div>
      </div>
      <div className="card-footer d-flex justify-content-between align-items-center">
        <div className="user-location small my-1">
          <i className="fas fa-map-marker-alt me-1"></i>
          <strong className="ms-1">{thought.location}</strong>
        </div>
        <div className="date-posted small my-1">
          <i className="far fa-calendar-check me-1"></i>
          <strong className="ms-1">{thought.posted}</strong>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
