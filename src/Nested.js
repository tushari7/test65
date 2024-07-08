// import React from 'react';
// import { Route, Routes } from 'react-router-dom';
// import Login from './component/Login'; 
// import Add from './component/Add';
// import Show from './component/Show';
// import ProtectedRoutes from './PrivateRoute'; 


// export default function RoutesComponent() {
//     return (
//         <Routes>
//             <Route path="/" element={<Login />} />  
//             <Route path="/" element={<ProtectedRoutes />}>
//                 <Route path="Add" element={<Add />} />  
//                 <Route path="Show" element={<Show />} /> 
               
//             </Route>
        
//         </Routes>
//     );
// }


// import { createBrowserRouter } from 'react-router-dom';
// import ProtectedRoutes from './PrivateRoute';
// import Login from './component/Login';
// import Add from './component/Add'; 

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <ProtectedRoutes />,
//     children: [
//       { path: '/Add', element: <Add /> }, 
//     ]
//   },
//   {
//     path: '/', 
//     element: <Login />,
//   },
// ]);

// export default router;


import { createBrowserRouter } from 'react-router-dom';
import ProtectedRoutes from './PrivateRoute';
import Login from './component/Login';
import Add from './component/Add';  
import Show from './component/Show';  
import Error from './component/Error';
import Showdata from './component/Showdata';

const router = createBrowserRouter([
   {
    path: '/', 
    element: <Login />,
  },
  {
    path: 'Showdata', element: <Showdata />
  },
  {
    path: 'Show', element: <Show />
  },
  {
    path: 'Error', element: <Error />
  },
   {
    path: '/',
    element: <ProtectedRoutes />,
    children: [
      { path: 'Add', element: <Add /> } 
      // { path: 'Showsdata', element: <Showdata /> } 
      // {path: 'Show', element: <Show />}
    ]
  },
]);

export default router;