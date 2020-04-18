import React from 'react';
import { useIntl } from 'gatsby-plugin-intl';

import AppContainer from 'src/components/common/container/AppContainer.comp';
import SectionHeader from 'src/components/common/sectionHeader/SectionHeader.comp';
import {
  ServicesContainer,
  ServicesItemsContainer,
  ServiceItem,
  ServiceItemText,
} from 'src/components/home/services/Services.styles';

import Image from 'src/components/common/Image';

const ServicesComp = () => {
  const intl = useIntl();

  const items = [
    { label: intl.formatMessage({ id: 'home.services.service-1' }) },
    { label: intl.formatMessage({ id: 'home.services.service-2' }) },
    { label: intl.formatMessage({ id: 'home.services.service-3' }) },
    { label: intl.formatMessage({ id: 'home.services.service-4' }) },
    { label: intl.formatMessage({ id: 'home.services.service-5' }) },
    { label: intl.formatMessage({ id: 'home.services.service-6' }) },
  ];

  return (
    <ServicesContainer id="services">
      <AppContainer>
        <SectionHeader>
          {intl.formatMessage({ id: 'home.services.title' })}
        </SectionHeader>
        <ServicesItemsContainer>
          {items.map((item, i) => (
            <ServiceItem key={`service-item-${i}`}>
              <Image
                filename={`service-icons${i + 1}`}
                alt="Electrician services"
                style={{ height: '100%' }}
              />
              <ServiceItemText>{item.label}</ServiceItemText>
            </ServiceItem>
          ))}
        </ServicesItemsContainer>
      </AppContainer>
    </ServicesContainer>
  );
};

export default ServicesComp;
