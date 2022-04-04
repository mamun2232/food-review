import React from 'react';
import { Link } from 'react-router-dom';
import food from '../../components/Images/food-banner.jpg'
import { useReview } from '../../useReview/useReview';
import ReviewCard from '../ReviewCard/ReviewCard';
import './Home.css'

const Home = () => {

      const [reviews , setReview] = useReview()
      const showThreeReview = reviews.slice(0,3)
      return (
            <div className='container'>
                  <div className="row">
                        <div className="col-lg-6">
                              <div className="shop-title">
                                   <div className="shop-name">
                                   <h1 className='title'>Welcome To Our <span>Fruits Shop</span></h1>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus corrupti delectus porro iure ipsum temporibus ex exercitationem omnis, quibusdam accusamus?</p>
                                    <button className='shop-btn'>Shop Now</button>
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
                              showThreeReview.map(review => <ReviewCard review={review} key={review.id}></ReviewCard> )
                        }
                        </div>
                       <div className="review-button text-center mt-4">
                       <Link className='shop-btns' to='/review'>See All Reviews</Link>
                       </div>
                  </div>
            </div>

      


      );
};

export default Home;