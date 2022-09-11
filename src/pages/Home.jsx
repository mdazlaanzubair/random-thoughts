import Post from "../components/Post";
import Form from "../components/Form";

const Home = () => {
  return (
    <div className="container-fluid my-5">
      <div className="row justify-content-center">
        <div className="col-md-3">
          <Form />
        </div>
        <div className="col-md-8">
          <h1 className="h3 fw-bold mb-0">Random Thoughts</h1>
          <h2 className="h6 fw-light">Posted by anonymous users</h2>
          <div className="row">
            <Post />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
