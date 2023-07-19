import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Home() {
    const navigate = useNavigate()
    function logout(){
        localStorage.removeItem('Signup')
        window.location.reload()
        // navigate("/")
    }
  return (
    <>
    <h1 style={{textAlign:"center"}}>IN HOME PAGE</h1> 
    <div className='logout'><button onClick={()=>logout()}>Logout</button></div>
    </>
  )
}
