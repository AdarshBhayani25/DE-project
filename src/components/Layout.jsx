import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
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
