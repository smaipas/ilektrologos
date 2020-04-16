import React from 'react';

import Layout from 'src/components/Layout.comp';
import SEO from 'src/components/seo';
import TobBanner from 'src/components/home/topBanner/TopBanner.comp';
import Services from 'src/components/home/services/Services.comp';
import EnergySaving from 'src/components/home/energySaving/EnergySaving.comp';

const IndexPage = () => (
  <Layout>
    <SEO title="Ηλεκτρολόγος Λευκωσία" />
    <TobBanner />
    <Services />
    <EnergySaving />
  </Layout>
);

export default IndexPage;
