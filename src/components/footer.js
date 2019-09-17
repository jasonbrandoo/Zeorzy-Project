import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import Text from './text';

const StyledFooter = styled.footer`
  background: rgb(27, 27, 27);
  width: 100%;
`;

const StyledOuter = styled.div`
  padding: 2rem;
`;

const StyledInner = styled.div`
  display: flex;
  justify-content: space-between;
`;

const StyledInfo = styled.div`
  color: dimgrey;
`;

const StyledMap = styled.div`
  display: flex;
`;

const StyledLink = styled(Link)`
  padding: 1rem;
  text-decoration: none;
  color: #ffffff;
  font-size: 16px;

  @media screen and (max-width: 812px) {
    display: block;
  }
`;

const footer = () => {
  return (
    <StyledFooter>
      <StyledOuter>
        <StyledInner>
          <StyledInfo>
            <Text mb="0" mt="0">
              Copyright © {new Date().getFullYear()} Zeorzy
            </Text>
            <Text mb="0" mt="0">
              Built with <a href="https://www.gatsbyjs.org">Gatsby</a>
            </Text>
          </StyledInfo>
          <StyledMap>
            <StyledLink to="/about">ABOUT</StyledLink>
            <StyledLink to="/wedding">WEDDING</StyledLink>
            <StyledLink to="/prewedding">PREWEDDING</StyledLink>
            <StyledLink to="/pricelist">PRICELIST</StyledLink>
            <StyledLink to="/contact">CONTACT</StyledLink>
          </StyledMap>
        </StyledInner>
      </StyledOuter>
    </StyledFooter>
  );
};

export default footer;
