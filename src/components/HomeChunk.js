import * as React from "react";
import * as styles from "./HomeChunk.module.css";

const HomeChunk = ({ image, btnText, customStyle }) => {
	const [imgUrl] = React.useState({ background: `url("${image}")`});
  return (
		<section className={styles.container} style={{...imgUrl, ...customStyle}}>
			<button className={styles.btn}>{btnText}</button>
		</section>
	);
}

export default HomeChunk;