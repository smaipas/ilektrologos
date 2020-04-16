import React from 'react';
import Image from 'src/components/home/topBanner/image';

import {
  TopBannerContainer,
  ImageContainer,
  TextContainer,
  BannerHeader,
  BannerSubheader,
} from 'src/components/home/topBanner/TopBanner.styles';

const TopBanner = () => (
  <TopBannerContainer>
    <ImageContainer>
      <Image />
    </ImageContainer>
    <TextContainer>
      <BannerHeader>Ηλεκτρολογική Βλάβη;</BannerHeader>
      <BannerSubheader>
        Αναλαμβάνουμε πάσης φύσεως ηλετρολογικές βλάβες και επιδιορθώσεις
      </BannerSubheader>
    </TextContainer>
  </TopBannerContainer>
);

export default TopBanner;
