import * as React from "react";
import * as styles from "./Button.module.css";

const Button = ({ children, positionClass, secondary }) => {
  return (
    <button 
			className={`${styles.btn} ${secondary ? styles.white : styles.black} ${positionClass ? positionClass : ""}`}>
      {children}
    </button>
  );
}

export default Button;
