import React from 'react';
import PropTypes from 'prop-types';

import {
  AppHeaderContainer,
  LogoIcon,
  LogoText,
  LogoContainer,
} from 'src/components/Header/AppHeader.styles';

import Logo from 'src/components/header/Logo';
import AppNav from 'src/components/header/AppNav.comp';

const Header = ({ siteTitle }) => (
  <AppHeaderContainer>
    <LogoContainer>
      <LogoIcon>
        <Logo />
      </LogoIcon>
      <LogoText>{siteTitle}</LogoText>
    </LogoContainer>
    <AppNav />
  </AppHeaderContainer>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
