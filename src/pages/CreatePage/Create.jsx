import Form from "../PagesComponents/Form";

const Create = () => {
  return (
    <div className="container mt-5 pt-5">
      <div className="row justify-content-center">
        <div className="col-md-5 text-center">
          <h1 className="fw-bold h1">Random Thoughts</h1>
          <h2 className="fw-light h6 text-uppercase">
            Share Thoughts Anonymously
          </h2>
          <hr className="hr hr-blurry" />

          {/* form */}
          <Form />
        </div>
      </div>
    </div>
  );
};

export default Create;
