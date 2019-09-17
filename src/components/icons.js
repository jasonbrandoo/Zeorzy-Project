import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

library.add(fab);

const FontAwesome = ({ icon, size, color, className }) => (
  <FontAwesomeIcon
    icon={icon}
    size={size}
    color={color}
    className={className}
  />
);

const StyledFontAwesome = styled(FontAwesome)`
  margin: 0 1rem;
`;

const icons = () => {
  return (
    <>
      <a href="https://wa.me/15551234567?text=I'm%20interested%20in%20your%20car%20for%20sale">
        <StyledFontAwesome icon={['fab', 'whatsapp']} size="3x" color="green" />
      </a>
      <a href="https://instagram.com/zeorzy">
        <StyledFontAwesome
          icon={['fab', 'instagram']}
          size="3x"
          color="purple"
        />
      </a>
      <a href="mailto:jasonbrandoo@gmail.com?subject=booking&body=Hello World">
        <StyledFontAwesome icon={['fab', 'google']} size="3x" color="blue" />
      </a>
    </>
  );
};

FontAwesome.defaultProps = {
  color: '',
};

FontAwesome.propTypes = {
  icon: PropTypes.arrayOf(PropTypes.string).isRequired,
  size: PropTypes.string.isRequired,
  color: PropTypes.string,
  className: PropTypes.string.isRequired,
};

export default icons;
