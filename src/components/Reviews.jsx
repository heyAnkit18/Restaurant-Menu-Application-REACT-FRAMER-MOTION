import React from 'react';
import './Reviews.css'; 

// Import images from the assets folder
import user1 from '../assets/user1.jpg';
import user2 from '../assets/user2.jpg';
import user3 from '../assets/user3.jpg';

const Reviews = () => {
  const reviews = [
    {
      name: 'John Doe',
      review: 'The service was amazing, and the food was delicious. Highly recommend!',
      rating: 5,
      image: user1
    },
    {
      name: 'Jane Smith',
      review: 'Great atmosphere and friendly staff. I will definitely come back.',
      rating: 5,
      image: user2
    },
    {
      name: 'Samuel Green',
      review: 'The food was good, but the wait time was a bit long.',
      rating: 5,
      image: user3
    }
  ];

  return (
    <section className="reviews">
      <h2>Customer Reviews</h2>
      <div className="reviews-list">
        {reviews.map((review, index) => (
          <div key={index} className="review-card">
            <img src={review.image} alt={review.name} className="review-img" />
            <h3>{review.name}</h3>
            <p>{review.review}</p>
            <div className="rating">
              {Array.from({ length: review.rating }, (_, i) => (
                <span key={i}>&#9733;</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Reviews;