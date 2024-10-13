import React from 'react';
import './Home.css'; // Create Home.css for styles
import video from '../assets/video.mp4';

const Home = () => {
  return (
    <section id="home" className="home">
      <h1>Welcome to Punjabi Tadka</h1>
      <video className="home-video" src={video} autoPlay loop muted />
    </section>
  );
};

export default Home;



