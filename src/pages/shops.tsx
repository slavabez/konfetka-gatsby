import React from 'react';

import { Layout } from '../components/Layout';
import ShopList from '../components/ShopList';

export default function IndexPage(): JSX.Element {
  return (
    <Layout>
      <ShopList />
      <br />
    </Layout>
  );
}
