import React from 'react';
import scrollTo from 'gatsby-plugin-smoothscroll';
import { useIntl } from 'gatsby-plugin-intl';

import {
  AppNavContainer,
  AppNavItem,
} from 'src/components/common/appHeader/AppNav.styles';

const AppNav = ({ layout, closeDrawer }) => {
  const intl = useIntl();

  const navItems = [
    { label: intl.formatMessage({ id: 'nav.home' }), path: '#pageTop' },
    { label: intl.formatMessage({ id: 'nav.services' }), path: '#services' },
    { label: intl.formatMessage({ id: 'nav.contact' }), path: '#contact' },
  ];

  const selectHandler = (i) => {
    scrollTo(navItems[i].path);
    if (layout === 'vertical') {
      closeDrawer();
    }
  };
  return (
    <AppNavContainer layout={layout}>
      {navItems.map((item, i) => (
        <AppNavItem
          layout={layout}
          key={item.label}
          onClick={() => selectHandler(i)}
        >
          {item.label}
        </AppNavItem>
      ))}
    </AppNavContainer>
  );
};

export default AppNav;
