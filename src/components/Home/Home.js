import React from 'react';
import { Link } from 'react-router-dom';
import food from '../../components/Images/foodss.jpg'
import { useReview } from '../../useReview/useReview';
import ReviewCard from '../ReviewCard/ReviewCard';

import { FaArrowRight } from 'react-icons/fa'
import './Home.css'

const Home = () => {

      const [reviews , setReview] = useReview()
      console.log(reviews);
      const showThreeReview = reviews.slice(0,3)
      return (
            <div className='container'>
                  <div className="row">
                        <div className="col-lg-6">
                              <div className="shop-title">
                                   <div className="shop-name">
                                   <h1 className='title'>Welcome To Our <span>Fruits Shop</span></h1>
                                    <p>Good food is good for health. Eating good food gives energy to our body. And you get any food in the world from us.
</p>
                                    <button className='shop-btn'>Shop Now <FaArrowRight></FaArrowRight></button>
                                   </div>
                                  

                              </div>
                            
                        </div>
                        <div className="col-lg-6">
                              <div className="food-image">
                                    <img className='img-fluid' src={food} alt="" />
                             
                                
                              </div>
                        </div>
                  </div>

                  <div className="review-section mt-5">
                        <h2 className='text-center mb-4'>Our Food Review</h2>
                        <div className="review-card">
                        {
                              showThreeReview.map(review => <ReviewCard review={review} key={review._id}></ReviewCard> )
                        }
                        </div>
                       <div className="review-button text-center mt-4">
                       <Link className='shop-btns' to='/review'>See All Reviews <FaArrowRight></FaArrowRight></Link>
                       </div>
                  </div>
            </div>

      


      );
};

export default Home;