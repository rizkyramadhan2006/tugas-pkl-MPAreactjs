// src/pages/Home.js
import React from 'react';
import './Home.css';
import profileImage from '../assets/profile.jpg'; // Import gambar

const Home = () => {
  return (
    <div className="home">
      <h1>Home Page</h1>
      <img src={profileImage} alt="Profile" className="profile-image" />
      <p>Hai nama saya M Rizky Ramadhan</p>
      <p>Alamat Saya Di Cisarua</p>
      <p>Sekolah Saya Di SMKN 1 Cisarua</p>
     
    </div>
  );
};

export default Home;
