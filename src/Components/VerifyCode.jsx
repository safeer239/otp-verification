// import React, { useState } from 'react'
// import { Link } from 'react-router-dom'
// import "./styles.css"
// import loginImg from "../Assets/Rectangle 20 (1).png"

// const VerifyCode = ({user}) => {
//   const [otp,setOtp]=useState("")
//   const verifyOtp=async()=>{
//     try{
//       const data=await user.confirm(otp)
//       console.log(data)
//     }
//     catch(err){
//       console.error(err)
//     }
   
//   }
//   return (
//     <div>
//          <div className='login-container h-1'>
//             <div className="p-5 mt-5 gap-3">
//             <>
//           <Link to="/"><p>Back to login</p></Link>
//             <h2 className='mt-5'>Verify code</h2>
//             <p className='mb-3 text-secondary'>An authentication code has been sent to your number</p>
//             <input onChange={(e)=>setOtp(e.target.value)} type="text" className='form-control' placeholder='Enter the code '/><br />
//             <div className='d-flex justify-content-center'>
//             <p>Dont get the code? <span class="text-danger">Resend</span> </p>
//         </div>
//         <button onClick={verifyOtp} className='btn btn-primary form-control mb-4'>Verify otp</button>
        
//           </>
          
//         </div>
        
       
//         <div className="img">
//             <img src={loginImg} alt="" />
//         </div>
//         </div> 
//     </div>
//   )
// }

// export default VerifyCode