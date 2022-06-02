import React, { useEffect, useState } from 'react';
import './ReviewCard.css'
import { BsFillStarFill } from 'react-icons/bs';
import { AiTwotoneLike } from 'react-icons/ai';
import { MdDeleteForever } from 'react-icons/md';

import { Link } from 'react-router-dom';
import { useReview } from '../../useReview/useReview';


const ReviewCard = (props) => {
      // const [reviews , setReview] = useReview()
      const [reviews , setReview] = useState({})
      useEffect(()=>{
            fetch('http://localhost:5000/review')
            .then(res => res.json())
            .then(data => setReview(data))
      },[])
      console.log(reviews);
      
      
     const {_id ,name, img, ratings, comment, day} = props.review
    

//      delete review
  const deletReview = (id) =>{
        const prosid = window.confirm('are your sure delete comment?')
        console.log(id);
       if(prosid){
            const url = `http://localhost:5000/review/${id}`
            fetch(url , {
                  method: "DELETE"
            })
            .then(res => res.json())
            .then(data =>{
                  console.log(data);
                  if(data.deletedCount > 0){
                        const remings = reviews.filter(review => review._id !== id)
                        console.log(remings);
                        setReview(remings)
                  }
    
            })
       }
  }


      return (
            <div>
                  <div className="review-card card h-100 shadow  rounded  ">
                       <div className="review p-3 h-100">
                       <div className="review-card-image mt-2">
                              <img src={img} alt="" />
                        </div>
                        <div className="review-card-info">
                              <div className='card-name'>
                              <h5>{name}</h5> <span onClick={()=> deletReview(_id)} className='delet'><MdDeleteForever></MdDeleteForever></span>
                              </div>
                              <p> {ratings} <span><BsFillStarFill className='star' /> <BsFillStarFill className='star'/> <BsFillStarFill className='star'/> <BsFillStarFill className='star'/> <BsFillStarFill className='star'/></span> <small className='ms-4 text-muted'>{day}</small></p>
                              <p className='my-2'>{comment}</p>
                              <p><AiTwotoneLike className='text-primary'></AiTwotoneLike> <span className=''>Like</span></p>
                        </div>
                       </div>
                    
                  </div>
                  
            </div>
            
      );
};

export default ReviewCard;