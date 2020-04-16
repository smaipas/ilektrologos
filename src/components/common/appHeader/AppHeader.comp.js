import React from 'react';
import PropTypes from 'prop-types';

import {
  AppHeaderContainer,
  LogoIcon,
  LogoText,
  LogoContainer,
} from 'src/components/common/appHeader/AppHeader.styles';

import Logo from 'src/components/common/appHeader/Logo';
import AppNav from 'src/components/common/appHeader/AppNav.comp';

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
