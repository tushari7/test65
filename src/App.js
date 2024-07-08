
// import React from 'react';
// // import { RouterProvider } from 'react-router-dom';
// import './App.css';

// import { BrowserRouter, RouterProvider } from 'react-router-dom';
// import router from './Nested'; 
// function App() {
//   return (
//     <BrowserRouter>
//        {/* <Routes />   */}
//           <RouterProvider router={router} />
//         {/* {router} */}
//      </BrowserRouter>
//   );
// } 

// export default App;


import React from 'react';
import { RouterProvider } from 'react-router-dom';
import './App.css';
import router from './Nested';

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;