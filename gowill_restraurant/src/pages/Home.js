import { Button } from '@mui/material'
import React from "react";
import { Link } from "react-router-dom";
import BannerImage from "../assets/Africa_Spagh.jpg";
import '../styles/Home.css';

function Home() {
  return (
    <div className='home'style={{ backgroundImage: `url(${BannerImage})`}}>
      <div className='headerContainer'>
        <h1>Little Lemon</h1>
        <p>SPAGHETTI FOR THE FAMILY</p>
        <Link to="/menu">
          <Button> ORDER NOW! </Button>
        </Link>
      </div>
    </div>
  );
}

export default Home;