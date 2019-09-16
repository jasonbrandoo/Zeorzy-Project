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
  @media screen and (max-width: 600px) {
    display: ${props => (props.open ? 'block' : 'none')};
  }
`;

const StyledLink = styled(Link)`
  padding: 1rem;
  text-decoration: none;
  color: #ffffff;
  font-size: 16px;

  &:first-of-type {
    font-size: 18px;
    font-weight: bold;
    margin-right: auto;
  }

  :hover {
    color: #dfe3ee;
  }

  @media screen and (max-width: 600px) {
    display: block;
  }
`;

const StyledLabel = styled.label`
  display: none;

  @media screen and (max-width: 600px) {
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
        <StyledLink to="/">ZEORZY PROJECT</StyledLink>
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
