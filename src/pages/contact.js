import * as React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import * as styles from "./contact.module.css";

const ContactPage = () => {
  return (
		<Layout>
			<SEO title="Contact Us" />
			<div className={styles.container}>
				<h1 className={styles.title}>DROP US A LINE</h1>
				<form>
					{/* <input className={styles.txtInput} type="text" /> */}
				</form>
			</div>
		</Layout>
	)
}

export default ContactPage;