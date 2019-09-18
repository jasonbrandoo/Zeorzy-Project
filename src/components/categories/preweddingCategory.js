import { graphql, useStaticQuery, Link } from 'gatsby';
import React from 'react';
import Img from 'gatsby-image';
import styled from 'styled-components';

const StyledContainer = styled.div`
  width: 100%;
  margin: 0 0 1rem 0;
  border: 2px solid black;
  box-shadow: 10px 10px 5px rgba(0, 0, 0, 0.2);

  :hover {
    border: 2px solid rgba(0, 0, 0, 0.5);
  }
`;

const StyledImg = styled(Img)`
  width: 100%;
  height: 35em;

  @media screen and (max-width: 812px) {
    font-size: 1rem;
    height: 225px;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const StyledImgText = styled.div`
  background: rgb(0, 0, 0);
  padding: 1rem;
  text-align: center;
  margin: 0 auto;
  font-size: 2rem;
  font-weight: 100;
  font-style: italic;
  letter-spacing: 12px;
  color: white;

  @media screen and (max-width: 812px) {
    font-size: 1rem;
    padding: 0.5rem;
  }
`;

const preweddingCategory = () => {
  const data = useStaticQuery(graphql`
    fragment fileImg on File {
      childImageSharp {
        fluid(maxWidth: 2000, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
      sourceInstanceName
    }

    query {
      images1: file(relativePath: { eq: "pearljam.jpg" }) {
        ...fileImg
      }
      images2: file(relativePath: { eq: "mpw.jpg" }) {
        ...fileImg
      }
      images3: file(relativePath: { eq: "ironmaiden.jpg" }) {
        ...fileImg
      }
      images4: file(relativePath: { eq: "pinkfloyd.jpg" }) {
        ...fileImg
      }
    }
  `);
  return (
    <>
      <StyledContainer>
        <StyledLink
          to={`/prewedding/${data.images1.sourceInstanceName}`}
          state={{ category: data.images1.sourceInstanceName }}
        >
          <StyledImg fluid={data.images1.childImageSharp.fluid} />
          <StyledImgText>{data.images1.sourceInstanceName}</StyledImgText>
        </StyledLink>
      </StyledContainer>
      <StyledContainer>
        <StyledLink
          to={`/prewedding/${data.images2.sourceInstanceName}`}
          state={{ category: data.images2.sourceInstanceName }}
        >
          <StyledImg fluid={data.images2.childImageSharp.fluid} />
          <StyledImgText>{data.images2.sourceInstanceName}</StyledImgText>
        </StyledLink>
      </StyledContainer>
      <StyledContainer>
        <StyledLink
          to={`/prewedding/${data.images3.sourceInstanceName}`}
          state={{ category: data.images3.sourceInstanceName }}
        >
          <StyledImg fluid={data.images3.childImageSharp.fluid} />
          <StyledImgText>{data.images3.sourceInstanceName}</StyledImgText>
        </StyledLink>
      </StyledContainer>
      <StyledContainer>
        <StyledLink
          to={`/prewedding/${data.images4.sourceInstanceName}`}
          state={{ category: data.images4.sourceInstanceName }}
        >
          <StyledImg fluid={data.images4.childImageSharp.fluid} />
          <StyledImgText>{data.images4.sourceInstanceName}</StyledImgText>
        </StyledLink>
      </StyledContainer>
    </>
  );
};

export default preweddingCategory;
