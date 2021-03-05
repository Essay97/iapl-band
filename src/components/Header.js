import * as React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import * as styles from "./Header.module.css";

const Header = ({ onMenuClick }) => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.menu} >
        <Link to="/"><h1 className={styles.title}>IN A PREVIOUS LIFE</h1></Link>
        <div role="button" className={styles.hamburger} tabIndex={0}
        onClick={onMenuClick} onKeyDown={() => {}}>
          <div className={styles.hamburgerLine}></div>
        </div>
      </div>
      <div className={styles.social}>
        <StaticImage src="../images/instagram.png" alt="Instagram" />
        <StaticImage src="../images/spotify.png" alt="Spotify" />
        <StaticImage src="../images/tiktok.png" alt="Tiktok" />
        <StaticImage src="../images/facebook.png" alt="Facebook" />
        <StaticImage src="../images/youtube.png" alt="Youtube" />
      </div>
      <div className={styles.divider} />
    </nav>
  );
}

export default Header;

