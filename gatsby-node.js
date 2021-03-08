const path = require('path');

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions;

  const articleTemplate = path.resolve('src/templates/Article.js');

  return graphql(`{
    allMarkdownRemark {
      edges {
        node {
          html
          id
          frontmatter {
            slug
            title
          }
        }
      }
    }
  }`).then(res => {
    if(res.errors) {
      return Promise.reject(res.errors);
    }

    res.data.allMarkdownRemark.edges.forEach(({ node }) => {
      createPage({
        path: node.frontmatter.slug, 
        component: articleTemplate,
        context: {
          slug: node.frontmatter.slug
        }
      })
    })

  });
}