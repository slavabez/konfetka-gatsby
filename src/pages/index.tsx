import React from 'react';

import AssortmentSection from '../components/Assortment';
import Banner from '../components/Banner';
import { Layout } from '../components/Layout';

export default function IndexPage(): JSX.Element {
  return (
    <Layout>
      <Banner />
      <AssortmentSection />
    </Layout>
  );
}
