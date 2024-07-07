import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./../assets/css/login.css";
import lockimg from "./../assets/images/icons8-lock.svg";

const login = () => {
  return (
    <div className="contact-body">
      <div className="contact-form-body" >
        <div className="contact-form" data-aos="fade-up" data-aos-duration="1500">
          <img src={lockimg}></img>
          <h2>Log In</h2>
          <input type="text" placeholder="Id"></input>
          <input type="password" placeholder="Password"></input>
          <button>LOGIN</button>
          <Link  className='signup' to="/signup">Create a new Account</Link>
        </div>
      </div>
    </div>
  );
};

export default login;
