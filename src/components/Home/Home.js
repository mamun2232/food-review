import React from 'react';
import food from '../../components/Images/food-banner.jpg'
import './Home.css'

const Home = () => {
      return (
            <div className='container'>
                  <div className="row">
                        <div className="col-lg-6">
                              <div className="shop-title">
                                   <div className="shop-name">
                                   <h2>Welcome to Our Fruits Shop</h2>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus corrupti delectus porro iure ipsum temporibus ex exercitationem omnis, quibusdam accusamus?</p>
                                    <button className='btn btn-primary'>Shop Now</button>
                                   </div>
                                  

                              </div>
                            
                        </div>
                        <div className="col-lg-6">
                              <div className="food-image">
                                    <img className='img-fluid' src={food} alt="" />
                             
                              
                             
                             
                                  
                              </div>
                        </div>
                  </div>
            </div>
      );
};

export default Home;