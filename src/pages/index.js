import React from 'react';

import Layout from '../components/layout';
import Image from '../components/image';
import SEO from '../components/seo';
import Text from '../components/text';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h3>Lorem, ipsum.</h3>
    <Text align="center">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere temporibus
      provident, cumque deserunt harum quod quibusdam quae! Aperiam, ipsam
      error?
    </Text>
    <Image />
    <Text align="center" mt="1rem">
      Lorem ipsum dolor sit amet.
    </Text>
  </Layout>
);

export default IndexPage;
