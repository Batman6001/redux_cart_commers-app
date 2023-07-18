import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function Login() {
  const navigate = useNavigate()
  function account (){
    navigate("/create")
  }
  return (
    <>
    <div className='main' style={{display:"flex",justifyContent:"center",alignItems:"center",height:"100vh"}}>
    <form className='main-form'>
    <h4 className='text-center'>Login</h4>
  <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label"> <b>Email</b></label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
  </div>
  <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label font-weight-bold"> <b>Password</b> </label>
    <input type="password" className="form-control" id="exampleInputPassword1"/>
  </div>
  <div className="mb-3">
    <label className="form-check-label" for="exampleCheck1">Forgot your password?</label>
  </div>
  <div className="d-grid gap-2  mx-auto but">
  <button type="submit" className="btn btn-dark">Login</button>
</div>
<div className='text-center text-color-black mt-3 link' onClick={()=>account()}>
<Link>Create an Accout</Link></div>
</form>
</div>
    </>
  )
}
