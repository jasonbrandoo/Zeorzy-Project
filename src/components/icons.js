import React from 'react';
import styled from 'styled-components';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

library.add(fab);

const StyledFontAwesome = styled(FontAwesomeIcon)`
  margin: 0 1rem;
`;

const StyledButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
`;

const icons = () => {
  const handleClick = url => {
    window.open(url);
  };

  return (
    <>
      <StyledButton
        type="button"
        onClick={() =>
          handleClick(
            "https://wa.me/15551234567?text=I'm%20interested%20in%20your%20car%20for%20sale"
          )
        }
      >
        <StyledFontAwesome icon={['fab', 'whatsapp']} size="3x" color="green" />
      </StyledButton>
      <StyledButton
        type="button"
        onClick={() => handleClick('https://instagram.com')}
      >
        <StyledFontAwesome
          icon={['fab', 'instagram']}
          size="3x"
          color="purple"
        />
      </StyledButton>
      <StyledButton
        type="button"
        onClick={() =>
          handleClick(
            'mailto:jasonbrandoo@gmail.com?subject=booking&body=Hello World'
          )
        }
      >
        <StyledFontAwesome icon={['fab', 'google']} size="3x" color="blue" />
      </StyledButton>
    </>
  );
};

export default icons;
