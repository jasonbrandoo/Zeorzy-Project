import React from 'react';
import styled from 'styled-components';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Box from '../components/box';
import Text from '../components/text';
import Image from '../components/image';

const WeedingContainer = styled.div`
  width: 100%;
  margin 5px;
`;

const prewedding = () => {
  return (
    <Layout>
      <SEO title="wedding" />
      <Text align="center" mt="5rem">
        Lorem, ipsum.
      </Text>
      <Box direction="row" mt="0">
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

export default prewedding;
