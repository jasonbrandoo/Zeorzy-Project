import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledBox = styled.div`
  margin: ${props => props.mt || '5rem'} auto ${props => props.mb || '5rem'}
    auto;
  width: 80%;
  display: flex;
  flex-direction: ${props => props.direction || 'column'};
  flex-wrap: wrap;
  justify-content: ${props => props.content || 'center'};
  align-items: center;
`;

const box = ({ children, mt, mb, direction, content }) => {
  return (
    <StyledBox mt={mt} mb={mb} direction={direction} content={content}>
      {children}
    </StyledBox>
  );
};

box.defaultProps = {
  mt: '',
  mb: '',
  direction: '',
  content: '',
};

box.propTypes = {
  children: PropTypes.node.isRequired,
  mt: PropTypes.string,
  mb: PropTypes.string,
  direction: PropTypes.string,
  content: PropTypes.string,
};

export default box;
