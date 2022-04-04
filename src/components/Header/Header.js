import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Header.css'

const Header = () => {
      return (
            <div className="header p-4 ">
                  {/* <div className="shop-name my-3">
                        <h3 className='text-center'>Fruits Shop</h3>

                  </div> */}
                  <nav className='shop-nav mt-4'>
                        <NavLink to='/'>HOME</NavLink>
                        <NavLink to='/review'>REVIEW</NavLink>
                        <NavLink to='/dashboard'>DASHBOARD</NavLink>
                        <NavLink to='/blog'>BOLG</NavLink>
                        <NavLink to='/about'>ABOUT</NavLink>

                  </nav>
            </div>
      );
};

export default Header;