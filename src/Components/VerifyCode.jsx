import React from 'react'

const VerifyCode = () => {
  return (
    <div>
         <div className='login-container h-1'>
        <div className="p-5 mt-5 gap-3">
            <p>Back to login</p>
            <h2 className='mt-5'>Verify code</h2>
            <p className='mb-3 text-secondary'>An authentication code has been sent to your number</p>
            <input type="text" className='form-control' placeholder='Enter the code '/><br />
            <div className='d-flex justify-content-center'>
            <p>Dont get the code? <span class="text-danger">Resend</span> </p>
        </div>
        </div>
        <button className='btn btn-primary form-control mb-4'>Verify otp</button>
       
        <div className="img">
            <img src="https://s3-alpha-sig.figma.com/img/f031/e5b1/caa0632b7cb3d2dc29294fc91b0a771f?Expires=1718582400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=YxIfL71FHSfaaRn0QcAme01VkcuRlKbgSBX6AfeLlakObKlHn5ci1AdYsoUQQe5yUe0-ncG4UC7JHHX3zSfLuBPyP~m9TuqliW~S9ztopB-TIypOo~zIMW4gGB75RDl6OyVAfIcyeFsJN3Co8b9b0bqRzT2-IMrj7X1tEjW6hJ~GIBMBt0unrYYG2vG0RT8~EuHBReZ3OWIrB4U4RQ26bmO3pAjjjTCc71uSvvK7LvT93QvACGHgxq5LRcWV8MTIYqXmDe7NaCyZtH4Q5QgvxzJMq6WS0kZlmpP42n70a5DHjvDgArNVKmNxmKOMV6taGwbCUbPZA16g03WUWuEDCw__ " alt="" />
        </div>
        </div> 
    </div>
  )
}

export default VerifyCode