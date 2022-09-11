import { useContext, useState } from "react";
import ThoughtsContext from "../Context/ThoughtsContext";
import Moment from "moment";

const Form = () => {
  // using context
  const { user, thoughts, setThoughts } = useContext(ThoughtsContext);

  // function to post new thought
  const postThought = () => {
    const title = document.getElementById("title");
    const desc = document.getElementById("desc");

    // creating new thought object
    const thought = {
      id: new Date().getTime() + Math.random(),
      user: user.IPv4,
      title: title.value,
      desc: desc.value,
      likes: [],
      location: `${user.city}, ${user.state}, ${user.country_name}`,
      dated: Moment().format("MMMM Do, YYYY"),
      isDeleted: false,
    };

    // posting thought object in thoughts array
    setThoughts([...thoughts, thought]);

    title.value = "";
    desc.value = "";
  };

  return (
    <form className="card">
      <div className="card-body">
        <div className="form-title-section my-3">
          <input
            type="text"
            id="title"
            className="form-control"
            placeholder="Title"
            autoFocus
            required
          />
        </div>
        <div className="form-desc-section mb-3">
          <textarea
            className="form-control"
            id="desc"
            rows="4"
            placeholder="What's the thought ...?"
            required
          />
        </div>
        <button
          type="button"
          className="btn btn-primary btn-block mb-3"
          onClick={postThought}
        >
          Post it out!
        </button>
      </div>
      <div className="card-footer">
        <small>
          <i className="fas fa-map-marker-alt"></i> Karachi, Pakistan
        </small>
      </div>
    </form>
  );
};

export default Form;
