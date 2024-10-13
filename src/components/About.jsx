import React from 'react';
import './About.css'; // Create About.css for styles
import image2 from '../assets/image2.jpg';

const About = () => {
  return (
    <section id="about" className="about">
      <h2>About Us</h2>
      <img src={image2} alt="Restaurant" />
      <p>
  Our restaurant offers the finest dining experience with a variety of delicious dishes made from fresh ingredients. 
  Whether you're craving traditional favorites or contemporary culinary creations, our diverse menu caters to every palate. 
  Enjoy a cozy ambiance that combines elegance and comfort, perfect for family gatherings, romantic dinners, or business meetings. 
  Our dedicated chefs use locally sourced produce to craft each dish with care, ensuring quality and flavor in every bite. 
  Complement your meal with a selection from our curated wine list or indulge in one of our signature cocktails. 
  At our restaurant, we believe in creating unforgettable experiences, where every visit feels special and satisfying.
</p>

    </section>
  );
};

export default About;