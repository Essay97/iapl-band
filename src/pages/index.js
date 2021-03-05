import * as React from "react";
import "./index.module.css";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { StaticImage } from "gatsby-plugin-image";
import * as styles from "./index.module.css";
import HomeChunk from "../components/HomeChunk";
import About from "../images/about.png";
import Media from "../images/media.png";
import Contact from "../images/contact.png";
import Merch from "../images/merch.png";


const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className={`${styles.firstChunk} ${styles.chunk}`}>
      <StaticImage className={styles.logoImg} src="../images/iapl-logo.png" alt="IN A PREVIOUS LIFE"
      width={220}/>
      <p className={styles.par}>Lorem ipsum dolor sit amet, consectetur adipisci elit, sed do eiusmod </p>

      <h3 className={styles.claim}>JOIN US</h3>

      <p className={styles.par}>Lorem ipsum dolor sit amet, consectetur adipisci elit, sed do eiusmod
       tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum 
       exercitationem ullamco laboriosam, </p>

      <button className={styles.subBtn}>SUBSCRIBE</button>
    </div>

    <HomeChunk image={Media} btnText="Media"/>
    <HomeChunk image={About} btnText="About Us" 
    customStyle={{backgroundPosition: "0% 60%"}}/>
    <HomeChunk image={Merch} btnText="Merchandise"/>
    <HomeChunk image={Contact} btnText="Contact Us"/>

    
  </Layout>
)

export default IndexPage;
