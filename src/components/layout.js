import * as React from "react";
import Header from "./Header";
import "@fontsource/roboto";
import "./layout.module.css";

const Layout = ({ children }) => {

  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  )
}

export default Layout;
