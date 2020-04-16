import React from 'react';

import BackgroundImage from 'src/components/home/energySaving/BackgroundImage';
import SectionHeader from 'src/components/common/sectionHeader/SectionHeader.comp';
import {
  EnergyContainer,
  EnergyParagraph,
} from 'src/components/home/energySaving/EnergySaving.styles';
import AppContainer from 'src/components/common/container/AppContainer.comp';

const EnergySaving = () => (
  <BackgroundImage>
    <EnergyContainer>
      <AppContainer>
        <SectionHeader margin={`0 0 0.3em 0`} color={'#fff'}>
          Εξοικονομηση Ενεργειας
        </SectionHeader>
        <EnergyParagraph>
          Συμβουλευτείτε μας προκειμένου να χαμηλώσετε την κατανάλωση ηλεκτρικής
          ενέργειας στο σπίτι ή την επιχείρηση σας
        </EnergyParagraph>
      </AppContainer>
    </EnergyContainer>
  </BackgroundImage>
);

export default EnergySaving;
