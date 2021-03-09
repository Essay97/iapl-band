import { graphql } from 'gatsby';
import React from 'react';
import PageLayout from '../components/layouts/PageLayout';
import * as styles from './Article.module.css';

const Article = ({ data }) => {
  const { markdownRemark } = data;
  const { frontmatter, html } = markdownRemark;

  return (
    <PageLayout>
      <div className={styles.article}>
        <h2 className={styles.date}>{frontmatter.date}</h2>
        <h1 className={styles.title}>{frontmatter.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </div>
      
    </PageLayout>
  )
}

export const articleQuery = graphql`
  query ArticleById($id: String!) {
    markdownRemark(id: {eq: $id}) {
      html
      frontmatter {
        title
        date(formatString: "D MMMM YYYY")
      }
    }
  }

`

export default Article;
