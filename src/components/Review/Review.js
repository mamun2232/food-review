import React from 'react';
import { useReview } from '../../useReview/useReview';
import ReviewCard from '../ReviewCard/ReviewCard';
import './Review.css'

const Review = () => {
      const [reviews, setReview] = useReview()

      
      return (
            <div className="review-section">
                  <div className="container">
                        <div className="row">
                        <h3 className='text-center mt-4 mb-3'>What our Coustomers Say!</h3>
                        
                             <div className="reviews">
                                   
                             {
                                    reviews.map(review => <ReviewCard review={review} key={review._id}></ReviewCard>)
                              }
                             </div>

                        </div>
                  </div>
            </div>
      );
};

export default Review;