import * as React from "react";
import Header from "./Header";
import Footer from "./Footer"
import "@fontsource/roboto";
import "./layout.module.css";
import Menu from "../components/Menu";

const Layout = ({ children }) => {
  const [menuOpen, setMenuOpen] = React.useState(false);

  function handleMenuClick() {
    setMenuOpen(!menuOpen);
  }

  return (
    <>
      <Header onMenuClick={handleMenuClick} />
      { menuOpen &&  <Menu /> }
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout;
