import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Box from '../components/box';
import Text from '../components/text';
import Category from '../components/categories/preweddingCategory';

const prewedding = () => {
  return (
    <Layout>
      <SEO title="wedding" />
      <Box>
        <h3>Lorem</h3>
        <Text align="center">Lorem ipsum dolor sit amet.</Text>
        <Category />
      </Box>
    </Layout>
  );
};

export default prewedding;
