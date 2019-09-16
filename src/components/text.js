import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledText = styled.p`
  text-align: ${props => props.align};
  font-size: ${props => props.size || '12px'};
  margin-top: ${props => props.mt};
  margin-right: ${props => props.mr};
  margin-bottom: ${props => props.mb};
  margin-left: ${props => props.ml};
`;

const text = ({ children, size, align, mt, mr, mb, ml }) => (
  <StyledText size={size} align={align} mt={mt} mr={mr} mb={mb} ml={ml}>
    {children}
  </StyledText>
);

text.defaultProps = {
  size: '',
  align: '',
  mt: '',
  mr: '',
  mb: '',
  ml: '',
};

text.propTypes = {
  children: PropTypes.node.isRequired,
  size: PropTypes.string,
  align: PropTypes.string,
  mt: PropTypes.string,
  mr: PropTypes.string,
  mb: PropTypes.string,
  ml: PropTypes.string,
};

export default text;
