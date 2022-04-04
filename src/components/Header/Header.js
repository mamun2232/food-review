import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import CoustomLink from '../CoustomLink/CoustomLink';
import './Header.css'
const color ={
      color: 'red'
}
const blue ={
      color: 'black'
}

const Header = () => {
      return (
            <div className="header p-4 bg-light ">
                  {/* <div className="shop-name my-3">
                        <h3 className='text-center'>Fruits Shop</h3>

                  </div> */}
                  <nav className='shop-nav mt-4'>
                        <CoustomLink  to='/'>HOME</CoustomLink>
                        <CoustomLink  to='/review'>REVIEW</CoustomLink>
                        <CoustomLink  to='/dashboard'>DASHBOARD</CoustomLink>
                        <CoustomLink  to='/blog'>BOLG</CoustomLink>
                        <CoustomLink  to='/about'>ABOUT</CoustomLink>

                  </nav>
            </div>
      );
};

export default Header;