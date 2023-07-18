import React, { useEffect, useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function Create() {
  const navigate = useNavigate()
  function sign (){
    navigate("/")
  }
  const first = useRef()
  const last = useRef()
  const email = useRef()
  const password = useRef()
  const check =useRef()
  const [show,setShow]=useState(false)
  const localEmail = localStorage.getItem("email")
  const localPassword = localStorage.getItem("password")

  function handleSubmit (){
if (first.current.value&&last.current.value&&email.current.value&&password.current.value){
  localStorage.setItem("first",first.current.value)
  localStorage.setItem("last",last.current.value)
  localStorage.setItem("email",email.current.value)
  localStorage.setItem("Password",password.current.value)
  localStorage.setItem("Check",check.current.value)
  alert("CREATED ACCOUNT SUCCESSFULLY")
  window.location.reload()
}else {
  alert('Please Fill All Fields')
}
  }

  useEffect(()=>{
if(localEmail){
  setShow(true)
}
  })

  function handleSignIn(){
    if(email.current.value ===localEmail && password.current.value===localPassword){
      localStorage.setItem("signup", email.current.value)
    }
  }
  return (
    <>{
      show? <div className='main' style={{display:"flex",justifyContent:"center",alignItems:"center",height:"100vh"}}>
    <form className='main-form' onSubmit={()=>handleSignIn()}>
    <h4 className='text-center'>Login</h4>
  <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label"> <b>Email</b></label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" ref={email}/>
  </div>
  <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label font-weight-bold"> <b>Password</b> </label>
    <input type="password" className="form-control" id="exampleInputPassword1" ref={password}/>
  </div>
  <div className="mb-3">
    <label className="form-check-label" for="exampleCheck1">Forgot your password?</label>
  </div>
  <div className="d-grid gap-2  mx-auto but">
  <button type="submit" className="btn btn-dark">Login</button>
</div>
<div className='text-center text-color-black mt-3 link'>
<Link>Create an Accout</Link></div>
</form>
</div>
    : ""}
    <div className='main' style={{display:"flex",justifyContent:"center",alignItems:"center",height:"100vh"}}>
    <form className='main-form' onSubmit={()=>handleSubmit()}>
    <h4 className='text-center'>Create Account</h4>
  <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label"> <b>First Name</b></label>
    <input type="text"  required className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" ref={first}/>
  </div>
  <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label"> <b>Last Name</b></label>
    <input type="text" required className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" ref={last}/>
  </div>
  <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label"> <b>Email</b></label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" ref={email}/>
  </div>
  <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label font-weight-bold"> <b>Password</b> </label>
    <input type="password" className="form-control" id="exampleInputPassword1" ref={password}/>
  </div>
  <div className="mb-3 form-check">
  <input type="checkbox" className="form-check-input" id="exampleCheck1" ref={check}></input>
    <label className="form-check-label" for="exampleCheck1">Subscribe to our newsletter?</label>
  </div>
  <div className="d-grid gap-2  mx-auto but">
  <button type="submit" className="btn btn-dark">Sign Up</button>
</div>
<div className='text-center text-color-black mt-3 link'> <span>Returing Customer ?</span>
 <span onClick={()=>sign()}> <Link>Sign In</Link></span></div>
</form>
</div>
    
    </>
  )
}
