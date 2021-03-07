import * as React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import ArticleItem from '../components/ArticleItem';
import { graphql, useStaticQuery } from 'gatsby';
import * as styles from './media.module.css';
import Slideshow from '../components/Slideshow';

const MediaPage = () => {
  const query = useStaticQuery(graphql`
  {
    articles: file(relativePath: {eq: "studio-recording.jpg"}) {
      childImageSharp {
        gatsbyImageData(aspectRatio: 2)
      }
    }
    slideshow: allFile(filter: {relativePath: {regex: "/slideshow/"}}) {
      edges {
        node {
          childImageSharp {
            gatsbyImageData(aspectRatio: 1)
          }
        }
      }
    }
  }
  `
  );

  const articleImage = query.articles.childImageSharp.gatsbyImageData;
  const slideshowImages = query.slideshow.edges.map(elem => elem.node.childImageSharp.gatsbyImageData);

  return (
		<Layout>
			<SEO title="Media" />
      <div className={styles.container}>
        <Slideshow imageArray={slideshowImages} positionClass={styles.slideshow}/>
        <ArticleItem title="WATCH OUR LATEST VIDEOCLIP" image={articleImage} />
        <ArticleItem title="LISTEN TO OUR LATEST SINGLE" image={articleImage} />
      </div>
		</Layout>
	)
}

export default MediaPage;
