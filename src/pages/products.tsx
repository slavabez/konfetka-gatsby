import React from 'react';

import CatalogueSection from '../components/FullCatalogue';
import { Layout } from '../components/Layout';

export default function IndexPage(): JSX.Element {
  return (
    <Layout>
      <CatalogueSection />
      <br />
    </Layout>
  );
}
