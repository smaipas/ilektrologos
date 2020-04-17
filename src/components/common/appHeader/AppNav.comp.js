import React from 'react';
import scrollTo from 'gatsby-plugin-smoothscroll';

import {
  AppNavContainer,
  AppNavItem,
} from 'src/components/common/appHeader/AppNav.styles';

const navItems = [
  { label: 'Αρχική', path: '#pageTop' },
  { label: 'Υπηρεσίες', path: '#services' },
  { label: 'Επικοινωνία', path: '#contact' },
];

const AppNav = ({ layout, closeDrawer }) => {
  const selectHandler = (i) => {
    scrollTo(navItems[i].path);
    if (layout === 'vertical') {
      closeDrawer();
    }
  };
  return (
    <AppNavContainer layout={layout}>
      {navItems.map((item, i) => (
        <AppNavItem key={item.label} onClick={() => selectHandler(i)}>
          {item.label}
        </AppNavItem>
      ))}
    </AppNavContainer>
  );
};

export default AppNav;
