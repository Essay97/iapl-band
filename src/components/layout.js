import * as React from "react";
import Header from "./Header";
import Footer from "./Footer"
import "@fontsource/roboto/300.css";
import "./layout.module.css";

const Layout = ({ children }) => {



  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout;
