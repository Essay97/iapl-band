import * as React from "react";
import PageLayout from "../../components/layouts/PageLayout";
import SEO from "../../components/seo";
import * as styles from './about.module.css'
import ArticleItem from '../../components/ArticleItem';
import { graphql, useStaticQuery } from 'gatsby';

const AboutPage = () => {
  const query = useStaticQuery(graphql`
  {
    file(relativePath: {eq: "interview.jpg"}) {
      childImageSharp {
        gatsbyImageData(aspectRatio: 2)
      }
    }
  }
  `
  );

  const image = query.file.childImageSharp.gatsbyImageData;

  return (
		<PageLayout>
			<SEO title="About Us" />
      <h1 className={styles.title}>WHO WE ARE</h1>
      <iframe className={styles.video} src="https://www.youtube.com/embed/WqwH7m68X5U" frameBorder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowFullScreen title="Without Hate"></iframe>
      <ArticleItem textFirst title="Our interview with Elon Musk" image={image} />
      <ArticleItem textFirst title="Our interview for Rolling Stone" image={image} />
		</PageLayout>
	)
}

export default AboutPage;