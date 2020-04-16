import React from 'react';

import { FooterContainer } from 'src/components/common/appFooter/AppFooter.styles';

const AppFooter = () => (
  <FooterContainer>
    Copyright ilektrologos.online © {new Date().getFullYear()}. All rights
    reserved.
  </FooterContainer>
);

export default AppFooter;
