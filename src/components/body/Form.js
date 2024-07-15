/* eslint-disable no-unused-vars */
import React from "react";
import { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "./Form.css"
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
      // .catch((err) => {
      //   console.log(err);

      //   alert(err);
      //   alert(message);
      // });
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
        className=" box-shadow mt-2 text-center"
      >
        <h2 className="text-primary">Login PalmPay</h2>

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
                name="mobileno"
                className="form-control w-50 m-2 m-auto"
                placeholder="Mobile No/Email"
              />
              {/* {formik.touched.email && <small className="text-light">{formik.errors.email}</small>} */}
            </div>

            <div className="mt-3 d-flex" id="eyes">
              <input
                onChange={(e) => setpin(e.target.value)}
                type="password"
                className="form-control w-50 m-auto"
                placeholder="Password"
                name="pin"
              />
            </div>
            {/* <p className="text-center">
              {" "}
              <Link className="pass" to="/forgot">
                Forgot Password ?
              </Link>
            </p> */}

            <button onClick={Login} className="btn btn-primary mt-2 w-25">
            {isloading ? "loading please wait" : "Login"}
            </button>

            <p className="mt-5 text-warning">
              Don't have account with us? 
              <a id="aa" href="palmpay.com">Signup here</a>
            </p>
          </div>
        </form>
        <h4>{message}</h4>
      </div>
      <div className="d-flex justify-content-around" id="dey">
        <div className="d-flex" >
          <small>Licenced by CBN as a MMO</small>
          <img id="imgs" src="data:image/jpeg;base64,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" alt="cbn" />
        </div>
        <div>
          <small>Deposits Insured by</small>
          <img id="imgs" src={require('./ndic.png')} alt="ndic" />
        </div>
      </div>
    </>
  );
}

export default Form;
