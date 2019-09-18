import { graphql } from 'gatsby';
import React, { useEffect, useState } from 'react';
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
  const [category, setCategory] = useState(null);
  useEffect(() => {
    let mount = false;
    if (!mount) {
      if (location.state === null) {
        setCategory('sadsd');
      } else {
        setCategory(location.state.category);
      }
    }
    return () => {
      mount = false;
    };
  }, [location.state]);
  return (
    <Layout>
      <SEO title="category" />
      <Box>
        <h3>{category}</h3>
        {data.allFile.edges.map(({ node }) => (
          <StyledImg key={node.id} fluid={node.childImageSharp.fluid} />
        ))}
      </Box>
    </Layout>
  );
};

imageTemplate.defaultProps = {
  location: {},
};

imageTemplate.propTypes = {
  data: PropTypes.objectOf(PropTypes.object).isRequired,
  location: PropTypes.object,
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
