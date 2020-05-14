import { Stack, Text } from '@chakra-ui/core';
import React from 'react';

import Banner from '../components/Banner';
import { Layout } from '../components/Layout';

export default function IndexPage(): JSX.Element {
  return (
    <Layout>
      <Banner />
    </Layout>
  );
}
