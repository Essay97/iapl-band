import React from 'react';
import * as styles from './ArticleItem.module.css';
import { GatsbyImage } from 'gatsby-plugin-image';

const ArticleItem = ({ textFirst, title, image }) => {
  return (
    <div className={styles.card}>
      { textFirst && (
        <h4 className={styles.title}>{title}</h4>
      ) }
      <GatsbyImage image={image} alt={`${title} - thumbnail`} />
      { !textFirst && (
        <h4 className={styles.title}>{title}</h4>
      ) }
    </div>
  )
}

export default ArticleItem;
