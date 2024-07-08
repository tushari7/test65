import React, { useEffect } from 'react';
import { Outlet, useNavigate} from 'react-router-dom';
import Nav from './component/Nav';
    

export default function ProtectedRoutes() {
  const navigate = useNavigate(); 

 
  useEffect(() => {
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    if (!isLoggedIn) {
       navigate('/')
        
    }
  }, []); 

  return (
    <div>
      <Nav></Nav>
      <Outlet />
    </div>
  );
}
