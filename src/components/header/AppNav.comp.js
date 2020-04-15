import React from 'react';

import {
  AppNavContainer,
  AppNavItem,
} from 'src/components/header/AppNav.styles';

const navItems = [
  { label: 'Αρχική', path: '' },
  { label: 'Υπηρεσίες', path: '' },
  { label: 'Επικοινωνία', path: '' },
];

const AppNav = () => (
  <AppNavContainer>
    {navItems.map((item) => (
      <AppNavItem>{item.label}</AppNavItem>
    ))}
  </AppNavContainer>
);

export default AppNav;
