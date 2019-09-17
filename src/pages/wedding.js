import React from 'react';
import styled from 'styled-components';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Box from '../components/box';
import Text from '../components/text';
import Image from '../components/image';

const WeedingContainer = styled.div`
  width: 100%;
`;

const wedding = () => {
  return (
    <Layout>
      <SEO title="wedding" />
      <Box>
        <h3>Lorem</h3>
        <Text align="center">Lorem ipsum dolor sit amet.</Text>
        <WeedingContainer>
          <Image height="50%" />
          <Text align="center">Lorem, ipsum.</Text>
        </WeedingContainer>
        <WeedingContainer>
          <Image height="50%" />
          <Text align="center">Lorem, ipsum.</Text>
        </WeedingContainer>
        <WeedingContainer>
          <Image height="50%" />
          <Text align="center">Lorem, ipsum.</Text>
        </WeedingContainer>
        <WeedingContainer>
          <Image height="50%" />
          <Text align="center">Lorem, ipsum.</Text>
        </WeedingContainer>
      </Box>
    </Layout>
  );
};

export default wedding;
