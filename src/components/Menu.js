import * as React from "react";
import { Link } from "gatsby";
import * as styles from "./Menu.module.css";
import { motion, AnimatePresence } from "framer-motion";

const Menu = ({ isOpen }) => {

  return (
		<AnimatePresence>
		{ isOpen && (
			<motion.div 
				initial={{ opacity: 0, scaleY: 0 }}
				animate={{ opacity: 1, scaleY: 1 }}
				exit={{ opacity: 0, scaleY: 0 }}
				transition={{ duration: .6 }}>
				<ul className={styles.menu}>
					<Link to="/media"><li className={styles.menuItem}>MEDIA</li></Link>
					<Link to="/about"><li className={styles.menuItem}>ABOUT US</li></Link>
					<Link to="/merch"><li className={styles.menuItem}>MERCHANDISE</li></Link>
					<Link to="/contact"><li className={styles.menuItem}>CONTACT US</li></Link>
				</ul>
			</motion.div>
			) }
		</AnimatePresence>
	);
}

export default Menu; 