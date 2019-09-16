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

const prewedding = () => {
  return (
    <Layout>
      <SEO title="prewedding" />
      <Box>
        <h3>Lorem, ipsum.</h3>
        <Text>Lorem ipsum dolor sit amet.</Text>
      </Box>
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
