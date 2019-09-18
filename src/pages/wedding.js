import React from 'react';
import styled from 'styled-components';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Box from '../components/box';
import Text from '../components/text';
import {
  Category1,
  Category2,
  Category3,
  Category4,
} from '../components/images/category';

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
          <Category1 />
          <Text align="center">Lorem, ipsum.</Text>
        </WeedingContainer>
        <WeedingContainer>
          <Category2 />
          <Text align="center">Lorem, ipsum.</Text>
        </WeedingContainer>
        <WeedingContainer>
          <Category3 />
          <Text align="center">Lorem, ipsum.</Text>
        </WeedingContainer>
        <WeedingContainer>
          <Category4 />
          <Text align="center">Lorem, ipsum.</Text>
        </WeedingContainer>
      </Box>
    </Layout>
  );
};

export default wedding;
