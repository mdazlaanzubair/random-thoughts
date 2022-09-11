import { Link } from "react-router-dom";
import SvgAbout from "../assets/svgs/about-section.svg";

const About = () => {
  return (
    <div className="container my-5">
      <div className="row justify-content-center">
        <div className="col-10 col-lg-10">
          <div className="d-flex">
            <div className="px-5">
              <h1 className="fw-bold display-4">Random Thoughts</h1>
              <h2 className="fw-light h3 text-uppercase">
                Share Thoughts Anonymously
              </h2>
              <hr className="hr hr-blurry" />
              <p className="">
                An app that enables introverts to share their thoughts
                anonymously to the world.
              </p>
              <p className="fw-light">
                It uses an ad-free system – meaning you won't have to pay for
                your data – so this shouldn't be a big surprise. But it's nice
                to know they're still making it possible.
              </p>

              <Link className="btn btn-primary" to="/">
                Lets post something
              </Link>
            </div>
            <img
              className="d-none d-lg-block"
              src={SvgAbout}
              height="250"
              alt="About Picture"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
