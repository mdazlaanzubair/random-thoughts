import { Link } from "react-router-dom";
import Form from "../PagesComponents/Form";

const About = () => {
  return (
    <div className="container mt-5 pt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <h1 className="fw-bold display-4">Random Thoughts</h1>
          <h2 className="fw-light h3 text-uppercase">
            Share Thoughts Anonymously
          </h2>
          <hr className="hr hr-blurry" />
          <p className="">
            An app that enables introverts to share their thoughts anonymously
            to the world.
            It uses an ad-free system – meaning you won't have to pay for your
            data – so this shouldn't be a big surprise. But it's nice to know
            we're still making it possible.
          </p>

          <p className="fw-bold">
            Chaout some anonymous thoughts
            <Link className="ms-2" to="/">
              here!
            </Link>
          </p>
        </div>
        <div className="col-md-4">
          <Form />
        </div>
      </div>
    </div>
  );
};

export default About;
