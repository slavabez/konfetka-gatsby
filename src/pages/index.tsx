import React from 'react';

import AssortmentSection from '../components/Assortment';
import Banner from '../components/Banner';
import { Layout } from '../components/Layout';
import ShopList from '../components/ShopList';

export default function IndexPage(): JSX.Element {
  return (
    <Layout>
      <Banner />
      <br/>
      <AssortmentSection />
      <br/>
      <ShopList />
      <br/>
    </Layout>
  );
}
