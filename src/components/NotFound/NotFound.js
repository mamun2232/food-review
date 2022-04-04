import React from 'react';
import notFound from '../Images/pagenotFound.jpg'
import './NotFound.css'

const NotFound = () => {
      return (
            <div>
                  <div className="container">
                        <img className='notFound img-fluid' src={notFound} alt="" />
                  </div>
            </div>
      );
};

export default NotFound;