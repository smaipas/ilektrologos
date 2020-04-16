import React from 'react';

import {
  BrandsContainer,
  ImagesContainer,
  ImageContainer,
} from 'src/components/home/brands/Brands.styles';
import AppContainer from 'src/components/common/container/AppContainer.comp';
import Image from 'src/components/common/Image';

const images = [
  { alt: 'Siemens' },
  { alt: 'ABB' },
  { alt: 'Schneider Electric' },
  { alt: 'Legrand' },
  { alt: 'Hager' },
  { alt: 'Philips' },
];

const Brands = () => (
  <BrandsContainer>
    <AppContainer>
      <ImagesContainer>
        {images.map((item, i) => (
          <ImageContainer key={`brands-${i}`}>
            <Image filename={`ilektrologos-brands${i + 1}`} alt={item.alt} />
          </ImageContainer>
        ))}
      </ImagesContainer>
    </AppContainer>
  </BrandsContainer>
);

export default Brands;
