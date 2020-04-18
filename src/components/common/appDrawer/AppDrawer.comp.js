import React from 'react';

import {
  Background,
  Drawer,
} from 'src/components/common/appDrawer/AppDrawer.styles';

import AppNav from 'src/components/common/appHeader/AppNav.comp';
import AppLangSelector from 'src/components/common/appLangSelector/AppLangSelector.comp';

const AppDrawer = ({ status, close }) => (
  <div>
    <Drawer status={status}>
      <AppLangSelector />
      <AppNav layout="vertical" closeDrawer={close} />
    </Drawer>
    <Background status={status} onClick={close}></Background>
  </div>
);

export default AppDrawer;
