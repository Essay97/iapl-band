import * as React from "react";
import * as styles from "./Footer.module.css";

const Footer = () => {
	return (
		<div className={styles.footer}>
			<div className={styles.divider}/>
			<p className={styles.par}>&#169;In A Previous Life</p>
		</div>
	)
}

export default Footer;