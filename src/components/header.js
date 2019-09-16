import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import styled from 'styled-components';

const StyledHeader = styled.header`
  background: rgb(27, 27, 27);
  width: 100%;
  position: fixed;
  z-index: 1;
`;

const StyledInner = styled.div`
  display: flex;
  align-items: center;
  margin: 0 auto;
  @media screen and (max-width: 812px) {
    transition: opacity 3s linear;
    opacity: 0;
    visibility: hidden;
    height: 0;
    ${props =>
      props.open &&
      `opacity: 1; visibility: visible; display: block; height: auto`};
  }
`;

const StyledBrand = styled(Link)`
  padding: 1rem;
  font-size: 16px;
  font-weight: bold;
  text-decoration: none;
  color: #ffffff;
  margin-right: auto;

  @media screen and (max-width: 812px) {
    display: block;
  }
`;

const StyledLink = styled(Link)`
  padding: 1rem;
  text-decoration: none;
  color: #ffffff;
  font-size: 16px;

  :hover {
    background: rgba(20, 20, 20);
  }

  @media screen and (max-width: 812px) {
    display: block;
    border-top: 1px solid white;
  }
`;

const StyledLabel = styled.label`
  display: none;

  @media screen and (max-width: 812px) {
    display: inline-block;
    padding: 1rem;
  }
`;

const Trigger = styled.input`
  display: none;
`;

const Header = ({ siteTitle }) => {
  const [open, setOpen] = useState(false);
  return (
    <StyledHeader>
      <StyledLabel htmlFor="hamburger">
        &#9776;
        <Trigger
          type="checkbox"
          id="hamburger"
          onClick={() => setOpen(!open)}
        />
      </StyledLabel>
      <StyledInner open={open}>
        <StyledBrand to="/">ZEORZY PROJECT</StyledBrand>
        <StyledLink to="/about">ABOUT</StyledLink>
        <StyledLink to="/wedding">WEDDING</StyledLink>
        <StyledLink to="/prewedding">PREWEDDING</StyledLink>
        <StyledLink to="/pricelist">PRICELIST</StyledLink>
        <StyledLink to="/contact">CONTACT</StyledLink>
      </StyledInner>
    </StyledHeader>
  );
};

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: '',
};

export default Header;
