import React from 'react';
import PropTypes from 'prop-types';

import {
  AppHeaderContainer,
  LogoText,
} from 'src/components/Header/AppHeader.styles';

import AppNav from 'src/components/header/AppNav.comp';

const Header = ({ siteTitle }) => (
  <AppHeaderContainer>
    <LogoText>{siteTitle}</LogoText>
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
