import { graphql, useStaticQuery, Link } from 'gatsby';
import React from 'react';
import Img from 'gatsby-image';
import styled from 'styled-components';

const StyledImg = styled(Img)`
  width: 100%;
  margin: 0 auto;
`;

const Category1 = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "mpw.jpg" }) {
        id
        childImageSharp {
          fluid(maxWidth: 2000, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
        sourceInstanceName
      }
    }
  `);
  return (
    <Link to={data.placeholderImage.sourceInstanceName}>
      <StyledImg fluid={data.placeholderImage.childImageSharp.fluid} />
    </Link>
  );
};

const Category2 = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "pearljam.jpg" }) {
        id
        childImageSharp {
          fluid(maxWidth: 2000, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
        sourceInstanceName
      }
    }
  `);
  return (
    <Link to={data.placeholderImage.sourceInstanceName}>
      <StyledImg fluid={data.placeholderImage.childImageSharp.fluid} />
    </Link>
  );
};

const Category3 = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "ironmaiden.jpg" }) {
        id
        childImageSharp {
          fluid(maxWidth: 2000, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
        sourceInstanceName
      }
    }
  `);
  return (
    <Link to={data.placeholderImage.sourceInstanceName}>
      <StyledImg fluid={data.placeholderImage.childImageSharp.fluid} />
    </Link>
  );
};

const Category4 = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "pinkfloyd.jpg" }) {
        id
        childImageSharp {
          fluid(maxWidth: 2000, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
        sourceInstanceName
      }
    }
  `);
  return (
    <Link to={data.placeholderImage.sourceInstanceName}>
      <StyledImg fluid={data.placeholderImage.childImageSharp.fluid} />
    </Link>
  );
};

export { Category1, Category2, Category3, Category4 };
