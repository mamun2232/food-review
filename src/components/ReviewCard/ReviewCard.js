import React from 'react';
import './ReviewCard.css'
import { BsFillStarFill } from 'react-icons/bs';
import { AiTwotoneLike } from 'react-icons/ai';
import { Link } from 'react-router-dom';


const ReviewCard = (props) => {
      
      
     const {name, img, ratings, comment, ratingsCount} = props.review
      return (
            <div>
                  <div className="review-card card h-100 shadow  rounded  ">
                       <div className="review p-3 h-100">
                       <div className="review-card-image">
                              <img src={img} alt="" />
                        </div>
                        <div className="review-card-info">
                              <h4>{name}</h4>
                              <p>{ratings} <span><BsFillStarFill className='star' /> <BsFillStarFill className='star'/> <BsFillStarFill className='star'/> <BsFillStarFill className='star'/> <BsFillStarFill className='star'/></span> <small className='ms-1 text-dark'>{ratingsCount}</small></p>
                              <p className='text-muted'>{comment}</p>
                              <p><AiTwotoneLike className='text-primary'></AiTwotoneLike> <span className=''>Like</span></p>
                        </div>
                       </div>
                    
                  </div>
                  
            </div>
            
      );
};

export default ReviewCard;