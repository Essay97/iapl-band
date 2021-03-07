import * as React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import * as styles from "./contact.module.css";
import Button from "../components/Button";
import Form from '../components/Form';
import ContactItem from '../components/ContactItem';
import { graphql, useStaticQuery } from 'gatsby';


const ContactPage = () => {
  const data = useStaticQuery(graphql`
  {
    email: file(relativePath: {eq: "email.png"}) {
      childImageSharp {
        gatsbyImageData(width: 150, aspectRatio: 1, layout: FIXED)
      }
    }
    phone: file(relativePath: {eq: "phone.png"}) {
      childImageSharp {
        gatsbyImageData(width: 150, aspectRatio: 1, layout: FIXED)
      }
    }
  }
   
  ` );

  const emailImage = data.email.childImageSharp.gatsbyImageData;
  const phoneImage = data.phone.childImageSharp.gatsbyImageData;
 
  return (
		<Layout>
			<SEO title="Contact Us" />
			<div className={styles.container}>
				<h1 className={styles.title}>DROP US A LINE</h1>
				<Form>
          <label htmlFor="name">YOUR NAME:</label>
          <input id="name" type="text"/>
          <label htmlFor="name">YOUR EMAIL:</label>
          <input id="email" type="text"/>
          <label htmlFor="name">YOUR MESSAGE:</label>
          <textarea />
          <Button positionClass={styles.btnPosition}>SUBMIT</Button>
          <Button positionClass={styles.btnPosition} secondary>DELETE</Button>
        </Form>
        <div className={styles.divider}/>

        <h3 className={styles.title2}>Let's keep in touch</h3>
        <ContactItem image={emailImage} contact="Email" value="inapreviouslifeband@gmail.com" />
        <ContactItem image={phoneImage} contact="Phone" value="0123456789" />

			</div>
		</Layout>
	)
}

export default ContactPage;