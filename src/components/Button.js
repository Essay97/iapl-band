import * as React from "react";
import * as styles from "./Button.module.css";

const Button = ({ text, extraClass, secondary }) => {
  return (
    <button 
			className={`${styles.btn} ${secondary ? styles.white : styles.black} ${extraClass ? extraClass : ""}`}>
      {text}
    </button>
  );
}

export default Button;
