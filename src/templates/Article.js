import { graphql } from 'gatsby';
import React from 'react'

const Article = ({ data }) => {
  const { markdownRemark } = data;
  const { frontmatter, html } = markdownRemark;

  return (
    <div>
      <h1>{frontmatter.title}</h1>
      <h2>{frontmatter.date}</h2>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </div>
  )
}

export const articleQuery = graphql`
  query ArticleById($id: String!) {
    markdownRemark(id: {eq: $id}) {
      html
      frontmatter {
        title
        date
      }
    }
  }

`

export default Article;
