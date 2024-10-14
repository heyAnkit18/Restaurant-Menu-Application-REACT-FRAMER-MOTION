import React from 'react';
import './About.css'; 
import image1 from '../assets/image1.jpg';
import image2 from '../assets/image2.jpg';
import image3 from '../assets/image3.jpg';
import image4 from '../assets/image4.jpg';
import image5 from '../assets/image5.jpg';
import image6 from '../assets/image6.jpg';
import image7 from '../assets/image7.jpg';
import image8 from '../assets/image8.jpg';

const About = () => {
  return (
    <section id="about" className="about">
      <h2>About Us</h2>
      <div className="about-content">
        <p>
          Our restaurant offers the finest dining experience with a variety of delicious dishes made from fresh ingredients.
          Whether you're craving traditional favorites or contemporary culinary creations, our diverse menu caters to every palate.
          Enjoy a cozy ambiance that combines elegance and comfort, perfect for family gatherings, romantic dinners, or business meetings.
          Our dedicated chefs use locally sourced produce to craft each dish with care, ensuring quality and flavor in every bite.
          Complement your meal with a selection from our curated wine list or indulge in one of our signature cocktails.
          At our restaurant, we believe in creating unforgettable experiences, where every visit feels special and satisfying.
        </p>

        {/* Image grid */}
        <div className="image-grid">
          <img src={image1} alt="Dish 1" />
          <img src={image2} alt="Dish 2" />
          <img src={image3} alt="Dish 3" />
          <img src={image4} alt="Dish 4" />
          <img src={image5} alt="Dish 5" />
          <img src={image6} alt="Dish 6" />
          <img src={image7} alt="Dish 7" />
          <img src={image8} alt="Dish 8" />
        </div>
      </div>
    </section>
  );
};

export default About;
