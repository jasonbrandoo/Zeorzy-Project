import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledMain = styled.main`
  flex: 1 1 auto;
`;

const main = ({ children }) => {
  return <StyledMain>{children}</StyledMain>;
};

main.propTypes = {
  children: PropTypes.node.isRequired,
};

export default main;
