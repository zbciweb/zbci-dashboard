import React from 'react'
import { Logo } from '../Images/Index'
import { Link } from 'react-router-dom'

const AuthLoginBasic = () => {
  return (
    <div>
        <div>
  <div className="container-xxl">
    <div className="authentication-wrapper authentication-basic container-p-y">
      <div className="authentication-inner">
        {/* Register */}
        <div className="card">
          <div className="card-body">
            {/* Logo */}
            <div className="app-brand justify-content-center">
                <span className="brand-name"><img src={Logo} className='img-fluid' style={{height:'80px'}} alt=''/></span>
            </div>
            {/* /Logo */}
            <h4 className="mb-2">Welcome to ZBCI! 👋</h4>
            <p className="mb-4">Please sign-in to your account and start the adventure</p>
            <form id="formAuthentication" className="mb-3">
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email or Username</label>
                <input type="text" className="form-control" id="email" name="email-username" placeholder="Enter your email or username" autofocus />
              </div>
              <div className="mb-3 form-password-toggle">
                <div className="d-flex justify-content-between">
                  <label className="form-label" htmlFor="password">Password</label>
                  <a href="auth-forgot-password-basic.html">
                    <small>Forgot Password?</small>
                  </a>
                </div>
                <div className="input-group input-group-merge">
                  <input type="password" id="password" className="form-control" name="password" placeholder="············" aria-describedby="password" />
                  <span className="input-group-text cursor-pointer"><i className="bx bx-hide" /></span>
                </div>
              </div>
              <div className="mb-3">
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" id="remember-me" />
                  <label className="form-check-label" htmlFor="remember-me">
                    Remember Me
                  </label>
                </div>
              </div>
              <div className="mb-3">
                <button className="btn btn-primary d-grid w-100" type="submit">Sign in</button>
              </div>
            </form>
            <p className="text-center">
              <span>New on our platform?</span>
              <Link to={'/signup'}>
                <span>Create an account</span>
              </Link>
            </p>
          </div>
        </div>
        {/* /Register */}
      </div>
    </div>
  </div>
  {/* / Content */}
</div>

    </div>
  )
}

export default AuthLoginBasic