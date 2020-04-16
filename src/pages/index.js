import React from 'react';

import Layout from 'src/components/Layout.comp';
import SEO from 'src/components/seo';
import TobBanner from 'src/components/home/topBanner/TopBanner.comp';
import Services from 'src/components/home/services/Services.comp';
import EnergySaving from 'src/components/home/energySaving/EnergySaving.comp';
import Brands from 'src/components/home/brands/Brands.comp';

const IndexPage = () => (
  <Layout>
    <SEO title="Ηλεκτρολόγος Λευκωσία" />
    <TobBanner />
    <Services />
    <EnergySaving />
    <Brands />
  </Layout>
);

export default IndexPage;
