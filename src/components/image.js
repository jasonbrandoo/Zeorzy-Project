import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';
import PropTypes from 'prop-types';

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `useStaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `useStaticQuery`: https://www.gatsbyjs.org/docs/use-static-query/
 */

const StyledImg = styled(Img)`
  width: ${props => props.width || '100%'};
  height: ${props => props.height || '100vh'};
`;

const StyledImgText = styled.div`
  position: absolute;
  top: 50%;
  left: 30%;
  font-size: 2rem;
  font-weight: 100;
  font-style: italic;
  letter-spacing: 10px;
  color: white;

  @media screen and (max-width: 600px) {
    font-size: 1rem;
  }
`;

const Image = ({ children, width, height, margin }) => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "lake.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 2000, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);
  return (
    <>
      <StyledImg
        fluid={data.placeholderImage.childImageSharp.fluid}
        width={width}
        height={height}
        margin={margin}
      />
      <StyledImgText>{children}</StyledImgText>
    </>
  );
};

Image.defaultProps = {
  width: '',
  height: '',
  margin: '',
  children: '',
};

Image.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  margin: PropTypes.string,
  children: PropTypes.node,
};

export default Image;
