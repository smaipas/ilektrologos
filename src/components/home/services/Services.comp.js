import React from 'react';

import AppContainer from 'src/components/common/container/AppContainer.comp';
import SectionHeader from 'src/components/common/sectionHeader/SectionHeader.comp';
import {
  ServicesContainer,
  ServicesItemsContainer,
  ServiceItem,
  ServiceItemText,
} from 'src/components/home/services/Services.styles';

import Image from 'src/components/common/Image';

const items = [
  { label: 'Ηλεκτρολογικές Εγκαταστάσεις' },
  { label: 'Κάμερες Παρακολούθησης' },
  { label: 'Ανακαινίσεις' },
  { label: 'Συναγερμοί' },
  { label: 'Αυτοματισμοί' },
  { label: 'Φωτοβολταϊκά' },
];

const ServicesComp = () => (
  <ServicesContainer id="services">
    <AppContainer>
      <SectionHeader>Ηλεκτρολογικες Υπηρεσιες</SectionHeader>
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

export default ServicesComp;
