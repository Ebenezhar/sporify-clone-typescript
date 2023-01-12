import { ErrorMessage, useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import { BsSpotify } from "react-icons/bs";

type inputData = {
  email?: string;
  password?: string;
};

function Login() {
  let navigate = useNavigate();
  let formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validate: (values) => {
      let errors: inputData = {};
      if (!values.email) {
        errors.email = "Please enter your email-id";
      }
      if (!values.password) {
        errors.password = "Please enter your password";
      }
    },
    onSubmit: (values: inputData) => {
      try {
        console.log(values);
        navigate("/portal");
      } catch (error) {
        console.log(error);
      }
    },
  });

  return (
    <div className="justify-content-center overflow-hidden py-5 b-success">
      <div className="row">
        <div className="col-lg-6 p-5 p-10 overflow-hidden cover d-none d-lg-block">
          {/* <img
            src="https://audioxide.com/api/images/article-images/how-spotify-has-changed-the-way-we-listen-to-music-medium-original.jpg"
            alt="Music"
          /> */}
        </div>
        <div className="col-lg-6 p-5">
          <header className="d-flex justify-content-center">
            <h1>
              <BsSpotify />
            </h1>
            <h1 className="p-1">Spotify</h1>
          </header>
          <div className="d-flex justify-content-center p-5 ">
            <form onSubmit={formik.handleSubmit} className="p-2 col-lg-12">
              <div className="d-flex justify-content-center m-2">
                <h3 className="d-flex justify-content-start">Login</h3>
              </div>
              <div className="form-group d-flex justify-content-center m-2">
                <label className="col-lg-8 fw-bold">
                  Email:
                  <input
                    id="email"
                    onChange={formik.handleChange}
                    value={formik.values.email}
                    className="form-control form-control-user mb-2 fw-bold"
                    type="email"
                    name="email"
                  />
                </label>
              </div>
              <div className="form-group d-flex justify-content-center m-2">
                <label className="col-lg-8 fw-bold">
                  Password:
                  <input
                    id="password"
                    onChange={formik.handleChange}
                    value={formik.values.password}
                    className="form-control form-control-user mb-2 fw-bold"
                    type="password"
                    name="password"
                  />
                </label>
              </div>
              <div className="d-flex justify-content-center m-2">
                <button type={"submit"} className="btn btn-dark mt-2">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
