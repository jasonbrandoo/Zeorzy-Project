import { graphql } from 'gatsby';
import React from 'react';
import Img from 'gatsby-image';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Layout from './layout';
import SEO from './seo';
import Box from './box';

const StyledImg = styled(Img)`
  width: 100%;
  margin: 1rem 0;
`;

const imageTemplate = ({ data, location }) => {
  console.log(location);
  return (
    <Layout>
      <SEO title="category" />
      <Box>
        <h3>{location.state.category}</h3>
        {data.allFile.edges.map(({ node }) => (
          <StyledImg key={node.id} fluid={node.childImageSharp.fluid} />
        ))}
      </Box>
    </Layout>
  );
};

imageTemplate.propTypes = {
  data: PropTypes.objectOf(PropTypes.object).isRequired,
  location: PropTypes.object.isRequired,
};

export default imageTemplate;

export const query = graphql`
  query($category: String!) {
    allFile(filter: { sourceInstanceName: { eq: $category } }) {
      edges {
        node {
          id
          childImageSharp {
            fluid(maxWidth: 2000, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;
