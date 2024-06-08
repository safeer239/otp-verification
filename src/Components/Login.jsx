import React from 'react'
import "./styles.css"
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <>
       <div className='login-container h-1'>
        <div className="p-5 mt-5 gap-3">
            <h2 className='mt-5'>Login</h2>
            <p className='mb-3 text-secondary'>Login to access your travelwise account</p>
            <input type="text" className='form-control' placeholder='Enter your number'/><br />
        <button className='btn btn-primary form-control mb-4'>get otp</button>
        <div className='d-flex justify-content-center'>
            <p>Dont have an account? <Link to="/signup"><span class="text-danger">Sign Up</span></Link> </p>
        </div>
        </div>
        <div className="img">
            <img src="https://s3-alpha-sig.figma.com/img/f031/e5b1/caa0632b7cb3d2dc29294fc91b0a771f?Expires=1718582400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=YxIfL71FHSfaaRn0QcAme01VkcuRlKbgSBX6AfeLlakObKlHn5ci1AdYsoUQQe5yUe0-ncG4UC7JHHX3zSfLuBPyP~m9TuqliW~S9ztopB-TIypOo~zIMW4gGB75RDl6OyVAfIcyeFsJN3Co8b9b0bqRzT2-IMrj7X1tEjW6hJ~GIBMBt0unrYYG2vG0RT8~EuHBReZ3OWIrB4U4RQ26bmO3pAjjjTCc71uSvvK7LvT93QvACGHgxq5LRcWV8MTIYqXmDe7NaCyZtH4Q5QgvxzJMq6WS0kZlmpP42n70a5DHjvDgArNVKmNxmKOMV6taGwbCUbPZA16g03WUWuEDCw__ " alt="" />
        </div>
        </div> 
    </>
  )
}

export default Login