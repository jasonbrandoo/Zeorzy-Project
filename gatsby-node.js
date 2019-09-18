/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require('path');

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions;
  const template = path.resolve(`src/components/imageTemplate.js`);

  return graphql(`
    {
      allFile {
        edges {
          node {
            id
            name
            sourceInstanceName
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors);
    }

    return result.data.allFile.edges.forEach(({ node }) => {
      console.log(node);
      const category = node.sourceInstanceName;
      createPage({
        path: `/wedding/${node.sourceInstanceName}`,
        component: template,
        context: {
          category,
        },
      });
      createPage({
        path: `/prewedding/${node.sourceInstanceName}`,
        component: template,
        context: {
          category,
        },
      });
    });
  });
};
