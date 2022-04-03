import React from 'react';
import './ReviewCard.css'
import { BsFillStarFill } from 'react-icons/bs';
import { AiTwotoneLike } from 'react-icons/ai';


const ReviewCard = (props) => {
     const {name, img, ratings, comment, ratingsCount} = props.review
      return (
            <div>
                  <div className="card h-100 shadow p-3 rounded ">
                       <div className="review">
                       <div className="review-card-image">
                              <img src={img} alt="" />
                        </div>
                        <div className="review-card-info">
                              <h4>{name}</h4>
                              <p>{ratings} <span><BsFillStarFill className='star' /> <BsFillStarFill className='star'/> <BsFillStarFill className='star'/> <BsFillStarFill className='star'/> <BsFillStarFill className='star'/></span> <small className='ms-1 text-dark'>{ratingsCount}</small></p>
                              <p className='text-muted'>{comment}</p>
                              <p><AiTwotoneLike></AiTwotoneLike> <span className=''>Like</span></p>
                        </div>
                       </div>
                  </div>
            </div>
      );
};

export default ReviewCard;