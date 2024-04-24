// import React from 'react';
// import Navbar from './Navbar';

// const Layout = ({ children }) => {
//     return (
//         <div>
//             <Navbar />
//             <div className="container mx-auto px-4">
//                 {children}
//             </div>
//             {/* Uncomment below if you want to add a footer */}
//             {/* <footer className="bg-gray-800 text-white p-4 text-center">
//                 © {new Date().getFullYear()} College Name. All rights reserved.
//             </footer> */}
//         </div>
//     );
// };

// export default Layout;


import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "../pages/Footer";
import React from 'react'

const Layout = () => {
  return (
    <section>
        <Navbar />
        <Outlet />
        <Footer />
    </section>
  )
}

export default Layout
