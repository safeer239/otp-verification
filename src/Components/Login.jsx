import React, { useState } from 'react'
import "./styles.css"
import { Link, useNavigate } from 'react-router-dom'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import { RecaptchaVerifier, signInWithPhoneNumber } from 'firebase/auth'
import {CgSpinner} from "react-icons/cg"
import {auth} from "./firebase.config"
import toast, { Toaster } from 'react-hot-toast'
import OtpInput from 'otp-input-react'

const Login = () => {

  const [phone,setPhone]=useState("")
  const [user,setUser]= useState(null)
  const [otp,setOtp]=useState("") 
  const [loading,setLoading]=useState(false) 
  const [showOtp,setShowOtp]=useState(true)
  const navigate =useNavigate()

  function onCaptchaVerify(){
    if(!window.recaptchaVerifier){
      window.recaptchaVerifier = new RecaptchaVerifier(auth, 'recaptcha-container', {
        'size': 'invisible',
        'callback': (response) => {
          onSignup()
        },
        'expired-callback': () => {}
      },auth);
      
    }
  }

  function onSignup(){
    setLoading(true);
    onCaptchaVerify()

    const appVerifier= window.recaptchaVerifier
    const formatPh= '+' + phone
signInWithPhoneNumber(auth, formatPh, appVerifier)
    .then((confirmationResult) => {
      window.confirmationResult = confirmationResult;
      setLoading(false)
      setShowOtp(false);

    }).catch((error) => {
      console.log(error);
      setLoading(false)
    });
  }

  function otpVerify(){
    setLoading(true);
    window.confirmationResult.confirm(otp).then(async(res)=>{
      console.log(res)
      setUser(res.user)
      setLoading(false)
      toast.success("OTP sent Successfully")
    }).catch((error) => {
      console.log(error)
    setLoading(false)}
)  }

function backLogin(){
  setShowOtp(true)
}
function logout(){
  setUser(null)
}
  return (
    <>
    <Toaster toastOptions={{duration: 4000}}/>
    {
      user ?
      <div className='d-flex justify-center items-center  w-50 '>
        <div style={{padding:"50px",margin:"200px"}} className='d-flex flex-col border justify-center items-center bg-slate-300  rounded-lg' > <h2>{user}</h2>
        
          <button onClick={logout} className='btn btn-primary '>Logout</button>
           
        </div>
      </div>
         :
       <div className='login-container h-1'>
        <div className="p-5 mt-5 gap-3">
          {!showOtp ?  <>
          <h2 className='mt-5'>Login</h2>
            <p className='mb-3 text-secondary'>Login to access your travelwise account</p>
            <PhoneInput className='mb-3' country={"in"} value={phone} onChange={(phone)=>setPhone("+" + phone)} />
              <div id='recaptcha-container'></div>
            <button  onClick={onSignup} className='btn btn-primary form-control mb-4 d-flex justify-center gap-1 '>{loading && <CgSpinner size={20} className='animate-spin mt-1'/>} <span className='mt-1.5'>Send otp</span></button>
            <div id='recaptcha'></div>
        <div className='d-flex justify-content-center'>
            <p>Dont have an account? <Link to="/signup"><span class="text-danger">Sign Up</span></Link> </p>
        </div>
          </>:<>
          <a onClick={backLogin}href=""><p>Back to login</p></a>
            <h2 className='mt-5'>Verify code</h2>
            <p className='mb-3 text-secondary'>An authentication code has been sent to your number</p>
            <OtpInput OTPLength={4} otpType="number" disabled={false} autoFocus className="d-flex justify-between gap-2 rounded-lg bg-slate-200 p-3"></OtpInput>
            {/* <input  type="text" className='form-control' placeholder='Enter the code '/><br /> */}
            <div className='d-flex justify-content-center'>
            <p>Dont get the code? <span class="text-danger">Resend</span> </p>
        </div>
        <button  onClick={otpVerify} className='btn btn-primary form-control mb-4 d-flex justify-center gap-1 '>{loading && <CgSpinner size={20} className='animate-spin mt-1'/>} <span className='mt-1.5'>Verify otp</span></button>
        
          </>}  
        </div>
        
       
        <div className="img">
            <img src="https://s3-alpha-sig.figma.com/img/f031/e5b1/caa0632b7cb3d2dc29294fc91b0a771f?Expires=1718582400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=YxIfL71FHSfaaRn0QcAme01VkcuRlKbgSBX6AfeLlakObKlHn5ci1AdYsoUQQe5yUe0-ncG4UC7JHHX3zSfLuBPyP~m9TuqliW~S9ztopB-TIypOo~zIMW4gGB75RDl6OyVAfIcyeFsJN3Co8b9b0bqRzT2-IMrj7X1tEjW6hJ~GIBMBt0unrYYG2vG0RT8~EuHBReZ3OWIrB4U4RQ26bmO3pAjjjTCc71uSvvK7LvT93QvACGHgxq5LRcWV8MTIYqXmDe7NaCyZtH4Q5QgvxzJMq6WS0kZlmpP42n70a5DHjvDgArNVKmNxmKOMV6taGwbCUbPZA16g03WUWuEDCw__ " alt="" />
        </div>
        </div> 
        
        
    }


    </>
  )
}

export default Login