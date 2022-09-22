import { useContext, useState } from "react";
import ThoughtsContext from "../../Context/ThoughtsContext";
import useFormValidator from "../../../customHooks/useFormValidator";
import Moment from "moment";

const Form = () => {
  // using context
  const { user, thoughts, setThoughts } = useContext(ThoughtsContext);
  
  // error state
  const [error, setError] = useState(false);

  // function to post new thought
  const postThought = () => {
    // getting user input
    const title = document.getElementById("title");
    const desc = document.getElementById("desc");

    // validating user input
    useFormValidator(title.value, desc.value, setError);

    // checking if there is no error in the input
    if (!error) {
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
    }
  };

  return (
    <form className="card shadow-none">
      {/* error alert */}
      {error ? (
        <p className="small text-danger mb-0">
          <i className="fas fa-exclamation-triangle me-2"></i>
          {error}
        </p>
      ) : (
        ""
      )}

      <div className="card-body">
        <div className="form-title-section mb-3">
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
          className="btn btn-primary btn-block"
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
