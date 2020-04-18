import React from 'react';
import { changeLocale } from 'gatsby-plugin-intl';

import {
  LanguagesContainer,
  LanguageItem,
} from 'src/components/common/appLangSelector/AppLangSelector.styles';

const AppLangSelector = () => {
  return (
    <LanguagesContainer>
      <LanguageItem onClick={() => changeLocale('en')}>EN</LanguageItem>
      <LanguageItem onClick={() => changeLocale('el')}>GR</LanguageItem>
    </LanguagesContainer>
  );
};

export default AppLangSelector;
