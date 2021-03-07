import * as React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import * as styles from './about.module.css'

const AboutPage = () => {
  return (
		<Layout>
			<SEO title="About Us" />
      <div className={styles.container}>
        <h1 className={styles.title}>WHO WE ARE</h1>
      </div>
		</Layout>
	)
}

export default AboutPage;