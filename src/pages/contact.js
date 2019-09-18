import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Box from '../components/box';
import Text from '../components/text';
import Icons from '../components/icons';

const contact = () => {
  return (
    <Layout>
      <SEO title="Contact" />
      <Box>
        <h3>Contact Us!</h3>
        <Text>
          Hi There! kindly find our detail contact below and we can't wait to
          meet you soon
        </Text>
        <Text size="1rem">Phone Number</Text>
        <Text>Zeorzy: xxxx-xxxx-xxxx</Text>
        <div style={{ border: '1px solid black', width: '100%' }} />
      </Box>
      <Text mt="1rem" align="center">
        Feel free to reach us on this platform
      </Text>
      <Box direction="row" mt="0">
        <Icons />
      </Box>
    </Layout>
  );
};

export default contact;
