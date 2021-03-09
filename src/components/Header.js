import * as React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import * as styles from "./Header.module.css";
import Menu from "../components/Menu";
import { motion } from "framer-motion";

const Header = () => {
  const [menuOpen, setMenuOpen] = React.useState(false);

  function handleMenuClick() {
    setMenuOpen(!menuOpen);
  }

  return (
    <>
    <nav className={styles.navbar}>
      <div className={styles.menu} >
        <Link to="/"><h1 className={styles.title}>IN A PREVIOUS LIFE</h1></Link>
        <div role="button" className={styles.hamburger} tabIndex={0}
        onClick={handleMenuClick} onKeyDown={() => {}}>
          <div className={ `${styles.hamburgerLine} ${menuOpen ? styles.rotate : ""}`  }></div>
        </div>
      </div>
      <div className={styles.social}>
        <a href="https://www.instagram.com/inapreviouslifeband/">
          <StaticImage src="../images/instagram.svg" alt="Instagram" />
        </a>
        <a href="https://open.spotify.com/artist/3dMWlH0JEoJ4JIs7FlueIk?si=1YQeenN6T8yeUypQM3TL8g">
          <StaticImage src="../images/spotify.svg" alt="Spotify" />
        </a>
        <a href="https://www.tiktok.com/@inapreviouslifeband?lang=en">
          <StaticImage src="../images/tiktok.svg" alt="Tiktok" />
        </a>
        <a href="https://www.facebook.com/inapreviouslife1">
          <StaticImage src="../images/facebook.svg" alt="Facebook" />
        </a>
        <a href="https://www.youtube.com/channel/UCqF9ys-cy5fYHbr1YZXBa4Q">
          <StaticImage src="../images/youtube.svg" alt="Youtube" />
        </a>
      </div>
      <motion.div 
        initial={{ scale: menuOpen ? 1 : 0 }}
        animate={{ scale: menuOpen ? 0 : 1}}
        transition={{ duration: .6 }} 
        className={styles.divider} /> 
    </nav>
    
    <Menu isOpen={menuOpen}/>
    </>
  );
}

export default Header;

