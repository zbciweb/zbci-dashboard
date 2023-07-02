import React from 'react'
import { Logo } from '../Images/Index'
import { Link } from 'react-router-dom'

const AuthForgotPasswordBasic = () => {
  return (
    <div>
        <div>
  {/* =========================================================
* Sneat - Bootstrap 5 HTML Admin Template - Pro | v1.0.0
==============================================================

* Product Page: https://themeselection.com/products/sneat-bootstrap-html-admin-template/
* Created by: ThemeSelection
* License: You must have a valid license purchased in order to legally use the theme for your project.
* Copyright ThemeSelection (https://themeselection.com)

=========================================================
 */}
  {/* beautify ignore:start */}
  {/* Mirrored from demos.themeselection.com/sneat-bootstrap-html-admin-template-free/html/auth-forgot-password-basic.html by HTTrack Website Copier/3.x [XR&CO'2014], Wed, 30 Nov 2022 09:23:59 GMT */}
  <meta charSet="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no, minimum-scale=1.0, maximum-scale=1.0" />
  <title>Forgot Password Basic - Pages | Sneat - Bootstrap 5 HTML Admin Template - Pro</title>
  <meta name="description" content="Most Powerful & Comprehensive Bootstrap 5 HTML Admin Dashboard Template built for developers!" />
  <meta name="keywords" content="dashboard, bootstrap 5 dashboard, bootstrap 5 design, bootstrap 5" />
  {/* Canonical SEO */}
  <link rel="canonical" href="https://themeselection.com/products/sneat-bootstrap-html-admin-template/" />
  {/* Favicon */}
  <link rel="icon" type="image/x-icon" href="https://demos.themeselection.com/sneat-bootstrap-html-admin-template-free/assets/img/favicon/favicon.ico" />
  {/* Fonts */}
  <link rel="preconnect" href="https://fonts.googleapis.com/" />
  <link rel="preconnect" href="https://fonts.gstatic.com/" crossOrigin />
  <link href="https://fonts.googleapis.com/css2?family=Public+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&display=swap" rel="stylesheet" />
  {/* Icons. Uncomment required icon fonts */}
  <link rel="stylesheet" href="../assets/vendor/fonts/boxicons.css" />
  {/* Core CSS */}
  <link rel="stylesheet" href="../assets/vendor/css/core.css" className="template-customizer-core-css" />
  <link rel="stylesheet" href="../assets/vendor/css/theme-default.css" className="template-customizer-theme-css" />
  <link rel="stylesheet" href="../assets/css/demo.css" />
  {/* Vendors CSS */}
  <link rel="stylesheet" href="../assets/vendor/libs/perfect-scrollbar/perfect-scrollbar.css" />
  {/* Page CSS */}
  {/* Page */}
  <link rel="stylesheet" href="../assets/vendor/css/pages/page-auth.css" />
  {/* Helpers */}
  {/*! Template customizer & Theme config files MUST be included after core stylesheets and helpers.js in the <head> section */}
  {/*? Config:  Mandatory theme config file contain global vars & default theme options, Set your preferred theme option in this file.  */}
  {/* Global site tag (gtag.js) - Google Analytics */}
  {/* Custom notification for demo */}
  {/* beautify ignore:end */}
  {/* Content */}
  <div className="container-xxl">
    <div className="authentication-wrapper authentication-basic container-p-y">
      <div className="authentication-inner py-4">
        {/* Forgot Password */}
        <div className="card">
          <div className="card-body">
            {/* Logo */}
            <div className="app-brand justify-content-center">
              <span className="brand-name"><img src={Logo} className='img-fluid' style={{height:'80px'}} alt=''/></span>
            </div>
            {/* /Logo */}
            <h4 className="mb-2">Forgot Password? 🔒</h4>
            <p className="mb-4">Enter your email and we'll send you instructions to reset your password</p>
            <form id="formAuthentication" className="mb-3" action="https://demos.themeselection.com/sneat-bootstrap-html-admin-template-free/html/index.html" method="POST">
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email</label>
                <input type="text" className="form-control" id="email" name="email" placeholder="Enter your email" autofocus />
              </div>
              <button className="btn btn-primary d-grid w-100">Send Reset Link</button>
            </form>
            <div className="text-center">
              <Link to={'/login'} className="d-flex align-items-center justify-content-center">
                <i className="bx bx-chevron-left scaleX-n1-rtl bx-sm" />
                Back to login
              </Link>
            </div>
          </div>
        </div>
        {/* /Forgot Password */}
      </div>
    </div>
  </div>
  {/* / Content */}
</div>

    </div>
  )
}

export default AuthForgotPasswordBasic