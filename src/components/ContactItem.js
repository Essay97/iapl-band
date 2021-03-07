import React from 'react';
import * as styles from './ContactItem.module.css';
import { GatsbyImage } from 'gatsby-plugin-image'; 

const ContactItem = ({ image, contact, value }) => {

  return (
    <div className={styles.container}>
      <GatsbyImage image={image} alt={contact} /> 
      <p className={styles.contact}>
        {contact + ":"}<br/>
        {value}
      </p>
      
    </div>
  )
}

export default ContactItem;
