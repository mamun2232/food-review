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
            <div className="header py-4 bg-light ">
                 <nav className='shop-nav'>
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