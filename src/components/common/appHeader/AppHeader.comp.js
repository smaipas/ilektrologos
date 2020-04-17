import React, { useState } from 'react';
import PropTypes from 'prop-types';

import {
  AppHeaderContainer,
  LogoIcon,
  LogoText,
  LogoContainer,
  AppNavMobileButton,
} from 'src/components/common/appHeader/AppHeader.styles';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

import Logo from 'src/components/common/appHeader/Logo';
import AppNav from 'src/components/common/appHeader/AppNav.comp';
import AppDrawer from 'src/components/common/appDrawer/AppDrawer.comp';

const Header = ({ siteTitle }) => {
  const [drawerStatus, setDrawerStatus] = useState(false);

  return (
    <>
      <AppHeaderContainer>
        <LogoContainer>
          <LogoIcon>
            <Logo />
          </LogoIcon>
          <LogoText>{siteTitle}</LogoText>
        </LogoContainer>
        <AppNav layout="horizontal" />
        <AppNavMobileButton onClick={() => setDrawerStatus(true)}>
          <FontAwesomeIcon icon={faBars} />
        </AppNavMobileButton>
      </AppHeaderContainer>
      <AppDrawer status={drawerStatus} close={() => setDrawerStatus(false)} />
    </>
  );
};

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
