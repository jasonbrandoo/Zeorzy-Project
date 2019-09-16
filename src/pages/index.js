import React from 'react';

import Layout from '../components/layout';
import Image from '../components/image';
import SEO from '../components/seo';
import Text from '../components/text';
import Box from '../components/box';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Image text>ZEORZYPROJECT</Image>
    <Box mt="1rem">
      <h1>Lorem, ipsum.</h1>
      <Text align="center">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
        perferendis et, consectetur ipsa facilis nostrum ducimus placeat ullam
        ea doloremque ab sint voluptatibus! Accusantium cupiditate eveniet est
        cumque molestias alias ab earum quae consequuntur autem, minus ea
        deserunt nemo quaerat voluptate ullam illo facere unde modi asperiores
        magnam commodi. Labore?
      </Text>
    </Box>
  </Layout>
);

export default IndexPage;
