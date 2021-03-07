import React, { useState } from 'react';
import * as styles from './Slideshow.module.css';
import { GatsbyImage } from 'gatsby-plugin-image';

const Slideshow = ({ imageArray, positionClass }) => {
  const [index, setIndex] = useState(0);

  function clickLeftArrow() {
    //negative number modulo
    setIndex((((index + 1) % imageArray.length) + imageArray.length) % imageArray.length);
  }

  function clickRightArrow() {
    setIndex((index + 1) % imageArray.length); 
  }

  return (
    <div className={`${styles.slider} ${positionClass ? positionClass : ""}`}>
      <div className={styles.leftArrow} onClick={clickLeftArrow} onKeyDown={() => {}} 
        role="button" tabIndex={0} aria-label="previous photo"/>
      <div className={styles.rightArrow} onClick={clickRightArrow} onKeyDown={() => {}} 
        role="button" tabIndex={0} aria-label="next photo"/>
      {<GatsbyImage image={imageArray[index]} alt="test" />}
    </div>
  )
}

export default Slideshow;
