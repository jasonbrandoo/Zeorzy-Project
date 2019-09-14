import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import styled from 'styled-components';

const StyledHeader = styled.header`
  background: #3b5998;
  max-width: 960px;
  margin: 2rem auto;
  transition: height 3s linear;
`;

const StyledInner = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 1rem;
  @media screen and (max-width: 600px) {
    transition: height 3s linear;
    display: ${props => (props.open ? 'block' : 'none')};
  }
`;

const StyledLink = styled(Link)`
  padding: 1rem;
  text-decoration: none;
  color: #ffffff;
  height: 100%;
  font-size: 12px;

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
    display: block;
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
        <StyledLink to="/">Home</StyledLink>
        <StyledLink to="/about">About Us</StyledLink>
        <StyledLink to="/wedding">Wedding</StyledLink>
        <StyledLink to="/pre-wedding">Pre Wedding</StyledLink>
        <StyledLink to="/price-list">Price List</StyledLink>
        <StyledLink to="/contact">Contact Us</StyledLink>
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
