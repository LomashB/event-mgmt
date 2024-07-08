// src/components/AdminHeader.js

import React from 'react';
import { Link } from 'react-router-dom';

import './../assets/css/adminheader.css'; // Importing the specific CSS for styling
import profileImg from './../assets/images/pfp.png';
import logo from './../assets/images/favicon.png';
 

const AdminHeader = () => {
  return (
    <header className="admin-header">
      <div className="admin-header-content">
        <Link to="/admin"><h1><img src={logo}></img>Event Management Admin</h1></Link>
        <div className="admin-header-content-div">
            <img src={profileImg}></img>
            <div className="admin-header-content-div-div">
            <h3>Event Management</h3>
            <p>Admin</p>
            </div>
        </div>
      </div>
    </header>
  );
};

export default AdminHeader;
