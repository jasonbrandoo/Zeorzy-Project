import React from 'react';
import Text from '../components/text';
import Image from '../components/image';
import Layout from '../components/layout';
import SEO from '../components/seo';

const SecondPage = () => (
  <Layout>
    <SEO title="About" />
    <h3>Lorem, ipsum.</h3>
    <Text align="center">
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit, quos.
    </Text>
    <Text align="center">
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet quia esse
      corrupti aspernatur quidem quos, accusantium sit! Ex, optio quidem
      corrupti accusamus animi labore ratione possimus laudantium architecto
      ipsum aspernatur ipsam doloremque illum atque cum. Sit sequi quasi soluta,
      culpa vel sunt id rem laudantium? Vel repudiandae possimus excepturi
      veniam!
    </Text>
    <Image />
    <Text align="center" mt="1rem">
      Lorem ipsum dolor sit amet.
    </Text>
  </Layout>
);

export default SecondPage;
