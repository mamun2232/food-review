import React from 'react';
import { useForm } from "react-hook-form";

const AddReview = (id) => {
      const { register, handleSubmit } = useForm();
      const onSubmit = data => {
            console.log(data);
            const url = 'http://localhost:5000/review'
            fetch(url , {
                  method: "POST",
                  headers: {
                        'content-type': 'application/json'
                  },
                  body: JSON.stringify(data)
            })
            .then(res => res.json())
            .then(data => {
                  alert("added Successful")
                  console.log(data);
            })



      }
      return (
            <div className="add-review my-3">
                  <div className="container">
                        <h3 className='text-center'>Hey customer please add a review!
                        </h3>
                        <div className='w-50 mx-auto bg-light p-5'>
                        <form onSubmit={handleSubmit(onSubmit)}>
                              <input placeholder='Name' className='form-control' {...register("name", { required: true, maxLength: 20 })} />
                              <br />
                              <textarea placeholder='Comment' className='form-control' {...register("comment")} />
                              <br />
                              <input placeholder='Ratings' className='form-control' type="number" {...register("ratings" )} />
                              <br />
                              <input placeholder='Comment date' className='form-control' type="text" {...register("day" )} />
                              <br />
                              <input placeholder='Enter Photo Url' className='form-control' type="text" {...register("img" )} />
                              <br />
                              <input className='form-control' type="submit" />
                        </form>
                        </div>
                  </div>
            </div>
      );
};

export default AddReview;