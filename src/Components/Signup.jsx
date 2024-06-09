import React from 'react'
import "./styles.css"
import signupImg from '../Assets/Rectangle 20.png'
import { MDBCheckbox } from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';


const Signup = () => {
  return (
    <div>
      
    <div className='login-container h-1'>
    <div className="img">
       <img src={signupImg} alt="" />
   </div>
       <div className="p-5 mt-5 gap-3">
       <>
       <h2 className='mt-5'>Sign Up</h2>
       <p className='mb-3 text-secondary'>Let’s get you all st up so you can access your personal account.</p>
       <div className='d-flex gap-2 mb-3'>
       <input  type="text" className='form-control' placeholder='First Name'/><br />
       <input  type="text" className='form-control' placeholder='Last Name '/><br />
       </div>
       <input  type="text" className='form-control ' placeholder='Email '/><br />
       <div className='d-flex justify-content-start mb-2'>
       <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='I agree to all the Terms and Conditions' />
   </div>
   <button  className='btn btn-primary form-control mb-4'>Create account</button>
   <div className='d-flex justify-center'>
    <p>Already have an account? <Link to={'/'}><span className='text-red-700'>Login here</span></Link></p>
   </div>
   
     </>
     
   </div>
   
  
   
   </div> 
</div>
  )
}

export default Signup