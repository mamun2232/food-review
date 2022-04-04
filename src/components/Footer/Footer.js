import React from 'react';
import { FaFacebookF } from 'react-icons/fa';
import { AiOutlineTwitter } from 'react-icons/ai';
import { AiFillGithub } from 'react-icons/ai';
import { FaInstagramSquare } from 'react-icons/fa';
import './Footer.css'

const Footer = () => {
      return (
            <div className="footer bg-light py-5 mt-3">
                 <div className="container">
                       <div className="row">
                       <div className="footer-icons text-center">
                              <span className='icon'><FaFacebookF></FaFacebookF></span>
                              <span className='icon'><AiOutlineTwitter></AiOutlineTwitter></span>
                              <span className='icon'><AiFillGithub></AiFillGithub></span>
                              <span className='icon'><FaInstagramSquare></FaInstagramSquare></span>
                        </div>
                        <div className="footer-caption text-center mt-3">
                              <h6>All Rights Reserved By © Fruits Shop | 2022-2026</h6>

                        </div>
                       </div>
                 </div>
            </div>
      );
};

export default Footer;