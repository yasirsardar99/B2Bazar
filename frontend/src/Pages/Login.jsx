import React, { useState } from 'react'
import "./../Style/Login.css"
import { Link } from 'react-router-dom';

const Login = () => {

  const [Email, setEmail]=useState("");
  const [Password, setPassword] = useState("");

  return (
    <div>
        
        <section className="vh-100" >
  <div className="container py-5 h-100">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col-12 col-md-8 col-lg-6 col-xl-5">
        <div className="card log-card shadow" >
          <div className="card-body p-5 text-center">

            <h1 className="login-head mb-3"><b>Login in</b></h1>

            <div className="form-outline mb-3 ">
            <label className="form-label d-flex justify-content-left" for="typeEmailX-2" style={{color: "#002549"}}><b>Email:</b></label>
              <input type="email" id="typeEmailX-2" className="form-control form-control-lg  c" value={Email} onChange={(e)=>setEmail(e.target.value)} autoComplete='current-email' required/>
              
            </div>


            <div className="form-outline mb-3">
            <label className="form-label  d-flex justify-content-left" for="typePasswordX-2" style={{color: "#002549"}} ><b>Password:</b></label>
              <input type="password" id="typePasswordX-2" className="form-control form-control-lg" value={Password} onChange={(e)=>setPassword(e.target.value)} autoComplete='current-password'  required/>
            </div>

            <div className="form-check d-flex justify-content-start mb-4">
              <input className="form-check-input" type="checkbox" value="" id="form1Example3" />
              <label className="form-check-label" for="form1Example3" style={{color: "#002549"}}> Remember password </label>
            </div>

            <button className="btn btn-warning btn-lg btn-block" type="submit">Login</button>

            <hr className="my-4"/>

            {/* <button className="btn btn-lg btn-block btn-primary" 
              type="submit"><i className="fab fa-google me-2"></i> Sign in with google</button>
            <button className="btn btn-lg btn-block btn-primary mb-2" 
              type="submit"><i className="fab fa-facebook-f me-2"></i>Sign in with facebook</button> */}
              <div className='d-flex '>
                <p className='text-muted' >Not have any account? </p>
                <br/>
                {/* <a href='#' className='mx-2' style={{color: "#002549"}} >Sign Up</a> */}
                <Link to="/sign-up" className='mx-2' style={{color: "#002549"}}>Sign Up</Link>
              </div>

          </div>
        </div>
      </div>
    </div>
  </div>
</section>
    </div>
  )
}

export default Login