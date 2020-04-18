import React from 'react';
import Image from 'src/components/home/topBanner/image';
import { useIntl } from 'gatsby-plugin-intl';

import {
  TopBannerContainer,
  ImageContainer,
  TextContainer,
  BannerHeader,
  BannerSubheader,
} from 'src/components/home/topBanner/TopBanner.styles';

const TopBanner = () => {
  const intl = useIntl();

  return (
    <TopBannerContainer id="pageTop">
      <ImageContainer>
        <Image />
      </ImageContainer>
      <TextContainer>
        <BannerHeader>
          {intl.formatMessage({ id: 'home.top-banner.title' })}
        </BannerHeader>
        <BannerSubheader>
          {intl.formatMessage({ id: 'home.top-banner.subtitle' })}
        </BannerSubheader>
      </TextContainer>
    </TopBannerContainer>
  );
};

export default TopBanner;
