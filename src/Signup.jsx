import React, { useEffect, useRef, useState} from 'react'
import Home from './Home'
export default function Signup() {
  const first = useRef()
  const last = useRef()
  const email = useRef()
  const password = useRef()
  const check =useRef()

  const localSignup = localStorage.getItem("Signup")
  const localEmail = localStorage.getItem("email")
  const localPassword = localStorage.getItem("password")
  const [showHome,setShowHome]=useState(false)
  const [show,setShow]=useState(false)

  useEffect(()=>{
    if(localSignup){
        setShowHome(true)
    }
    if(localEmail){
        setShow(true)
    }
  },[])
    function handleSubmit (e){
        e.preventDefault()
        if (first.current.value && last.current.value && email.current.value && password.current.value){
          localStorage.setItem("first",first.current.value)
          localStorage.setItem("last",last.current.value)
          localStorage.setItem("email",email.current.value)
          localStorage.setItem("Password",password.current.value)
          localStorage.setItem("Check",check.current.value)
          localStorage.setItem("Signup",email.current.value)
          alert("CREATED ACCOUNT SUCCESSFULLY")
          window.location.reload()
        }
          }
function handleAccount (){
    if(email.current.value ===localEmail && password.current.value ===localPassword){
        localStorage.setItem("Signup",email.current.value)
        window.location.reload()
    }
}


  return (
    <>
   {showHome? <Home/> : show? <div className='main' style={{display:"flex",justifyContent:"center",alignItems:"center",height:"100vh"}}>
    <form className='main-form' onSubmit={()=>handleAccount()} >
    <h4 className='text-center'>Login</h4>
  <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label"> <b>Email</b></label>
    <input type="email" ref={email} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
  </div>
  <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label font-weight-bold"> <b>Password</b> </label>
    <input type="password" ref={password} className="form-control" id="exampleInputPassword1"/>
  </div>
  <div className="mb-3">
    <label className="form-check-label" for="exampleCheck1">Forgot your password?</label>
  </div>
  <div className="d-grid gap-2  mx-auto but">
  <button  className="btn btn-dark" >Login</button>
</div>
<div className='text-center text-color-black mt-3 link'>
<button style={{border:"none",textDecoration:"underline",background:"none"}}>Create an Accout</button></div>
</form>
</div> : 

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
    <label className="form-check-label" for="exampleCheck1"> <b>Subscribe to our newsletter?</b> </label>
  </div>
  <div className="d-grid gap-2  mx-auto but">
  <button type="submit" className="btn btn-dark">Sign Up</button>
</div>
<div className='text-center text-color-black mt-3 link'> <span>Returing Customer ?</span>
 <span> <button style={{border:"none",textDecoration:"underline",background:"none"}}>Sign In</button></span></div>
</form>
   
</div>}
    </>
  )
}
