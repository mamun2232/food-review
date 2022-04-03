import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Header.css'

const Header = () => {
      return (
            <div className="header bg-light p-4">
                  <div className="shop-name my-3">
                        <h3 className='text-center'>Fruits Shop</h3>

                  </div>
                  <nav className='shop-nav text-center mt-4'>
                        <NavLink to='/'>Home</NavLink>
                        <NavLink to='/review'>Review</NavLink>
                        <NavLink to='/dashboard'>DashBoard</NavLink>
                        <NavLink to='/blog'>Blog</NavLink>
                        <NavLink to='/about'>About</NavLink>

                  </nav>
            </div>
      );
};

export default Header;