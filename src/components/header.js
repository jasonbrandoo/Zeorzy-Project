import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

const StyledHeader = styled.header`
  background: #3b5998;
  max-width: 960px;
  margin: 2rem auto;
  border-radius: 5px;
`;

const StyledInner = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 1rem;
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
`;

const Header = ({ siteTitle }) => (
  <StyledHeader>
    <StyledInner>
      <StyledLink to="/">Home</StyledLink>
      <StyledLink to="/about">About Us</StyledLink>
      <StyledLink to="/wedding">Wedding</StyledLink>
      <StyledLink to="/pre-wedding">Pre Wedding</StyledLink>
      <StyledLink to="/price-list">Price List</StyledLink>
      <StyledLink to="/contact">Contact Us</StyledLink>
    </StyledInner>
  </StyledHeader>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: '',
};

export default Header;
