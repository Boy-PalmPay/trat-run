/* eslint-disable no-unused-vars */
import React from "react";
import { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
// import { Nav } from "../Navbar component/Nav"
import { useNavigate, Link } from "react-router-dom";

function Form() {
  const endpoint = "http://localhost:419/admin/signup";
  const [mobileno, setmobileno] = useState("mobileno");
  const [pin, setpin] = useState("pin");
  const [message, setmessage] = useState("");
  const [showing, setShowing] = useState(false);
  const [isloading, setisloading] = useState(false);

  const values = {
    mobileno: mobileno,
    pin: pin,
  };
  const navigate = useNavigate();
  const Login = (e) => {
    e.preventDefault();
    console.log(values);
    axios
      .post(endpoint, values)
      .then((response) => {
        console.log(response.data);
        // alert("Login went throng");
        // alert(response.data.message);
        localStorage.setItem("token", response.data.token);
        toast.success(response.data.message);
        setmessage(response.data.message);
        if (response.data.status) {
          localStorage.token = response.data.token;
          localStorage.firstname = response.data.firstname;
          localStorage.setItem("firstname", response.data.firstname);
          setisloading(false);
          navigate("/otp");
        }
      })
      .catch((err) => {
        console.log(err);

        alert(err);
        alert(message);
      });
    if (message === false) {
      console.log(message);
      alert(message);
    } else {
      console.log(message);
    }
  };

  return (
    <>
      
      <div
        id="all"
        className=" border border-2 
           border-primary box-shadow mt-2 text-center"
      >
        <h2 className="text-info">Login Here</h2>

        <div className={message === "" ? "" : "alert-alert-info"}>
          <h3>{message}</h3>
        </div>

        <form method="POST" typeof="submit">
          <div className="form-group">
            <div id="input" className="mt-2">
              <input
                // onBlur={formik.handleBlur}
                onChange={(e) => setmobileno(e.target.value)}
                type="true"
                autoComplete="mobileno"
                name="mobileno"
                className="form-control w-50 m-2 m-auto"
                placeholder="phone number"
              />
              {/* {formik.touched.email && <small className="text-light">{formik.errors.email}</small>} */}
            </div>

            <div className="mt-3 d-flex" id="eyes">
              <input
                onChange={(e) => setpin(e.target.value)}
                type="password"
                className="form-control w-50 m-auto"
                placeholder="Password"
                autoComplete="password"
              />
            </div>
            <p className="text-center">
              {" "}
              <Link className="pass" to="/forgot">
                Forgot Password ?
              </Link>
            </p>

            <button onClick={Login} className="btn btn-primary mt-2 w-25">
            {isloading ? "loading please wait" : "Login"}
            </button>

            <p className="mt-5 text-warning">
              Don't have account with us, Signup
              <strong>
                <Link
                  className="text-danger fw-bolder fs-3"
                  to="/student/signup"
                >
                  Here
                </Link>
              </strong>{" "}
            </p>
          </div>
        </form>
        <h4>{message}</h4>
      </div>
    </>
  );
}

export default Form;
