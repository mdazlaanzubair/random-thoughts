import { Link } from "react-router-dom";
import Post from "./HomeComponents/PostComponent/Post";

const Home = () => {
  return (
    <div className="container mt-5 pt-5">
      <div className="row justify-content-center">
        <div className="col-md-12 d-flex justify-content-between">
          <div className="header text-dark">
            <h1 className="h1 fw-bold mb-0">Random Thoughts</h1>
            <h2 className="h4 fw-light">Posted by anonymous users</h2>
          </div>
          <Link to="/create" className="btn btn-primary btn-lg btn-floating">
            <i className="fas fa-plus"></i>
          </Link>
        </div>
        <div className="col-md-12">
          <Post />
        </div>
      </div>
    </div>
  );
};

export default Home;
