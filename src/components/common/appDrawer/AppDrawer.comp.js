import React from 'react';

import {
  Background,
  Drawer,
} from 'src/components/common/appDrawer/AppDrawer.styles';

import AppNav from 'src/components/common/appHeader/AppNav.comp';

const AppDrawer = ({ status, close }) => (
  <div>
    <Drawer status={status}>
      <AppNav layout="vertical" closeDrawer={close} />
    </Drawer>
    <Background status={status} onClick={close}></Background>
  </div>
);

export default AppDrawer;
