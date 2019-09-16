import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledBox = styled.div`
  margin: ${props => props.mt || '5rem'} auto 0 auto;
  width: 80%;
  display: flex;
  flex-direction: ${props => props.direction || 'column'};
  flex-wrap: wrap;
  justify-content: ${props => props.content || 'center'};
  align-items: center;
`;

const box = ({ children, mt, direction, content }) => {
  return (
    <StyledBox mt={mt} direction={direction} content={content}>
      {children}
    </StyledBox>
  );
};

box.defaultProps = {
  mt: '',
  direction: '',
  content: '',
};

box.propTypes = {
  children: PropTypes.node.isRequired,
  mt: PropTypes.string,
  direction: PropTypes.string,
  content: PropTypes.string,
};

export default box;
