import React from 'react';
import {
      Routes,
      Route,
      Outlet,
      Link,
      useMatch,
      useResolvedPath,
    } from "react-router-dom";

const CoustomLink = ({ children, to, ...props }) => {
      let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: true });

      return (
            <div className='d-inline'>
            <Link
              style={{  color: match ? "#11c7d4" : "black" }}
              to={to}
              {...props}
            >
              {children}
            </Link>
            
          </div>
      );
};

export default CoustomLink;