import React from 'react';
import { useIntl } from 'gatsby-plugin-intl';

import BackgroundImage from 'src/components/home/energySaving/BackgroundImage';
import SectionHeader from 'src/components/common/sectionHeader/SectionHeader.comp';
import {
  EnergyContainer,
  EnergyParagraph,
} from 'src/components/home/energySaving/EnergySaving.styles';
import AppContainer from 'src/components/common/container/AppContainer.comp';

const EnergySaving = () => {
  const intl = useIntl();
  return (
    <BackgroundImage>
      <EnergyContainer>
        <AppContainer>
          <SectionHeader margin="0 0 0.3em 0" color="#fff">
            {intl.formatMessage({ id: 'home.energy-saving.title' })}
          </SectionHeader>
          <EnergyParagraph>
            {intl.formatMessage({ id: 'home.energy-saving.text' })}
          </EnergyParagraph>
        </AppContainer>
      </EnergyContainer>
    </BackgroundImage>
  );
};

export default EnergySaving;
