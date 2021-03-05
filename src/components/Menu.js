import * as React from "react";
/* import { Link } from "gatsby"; */
import * as styles from "./Menu.module.css";

const Menu = () => {
  return (
		<ul className={styles.menu}>
			<li className={styles.menuItem}>MEDIA</li>
			<li className={styles.menuItem}>ABOUT US</li>
			<li className={styles.menuItem}>MERCHANDISE</li>
			<li className={styles.menuItem}>CONTACT US</li>
		</ul>
	);
}

export default Menu;