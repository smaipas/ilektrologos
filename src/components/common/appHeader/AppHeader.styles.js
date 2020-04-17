import styled from 'styled-components';

import theme from 'src/utils/theme';

import AppButton from 'src/components/common/appButton/AppButton.comp';

export const AppHeaderContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: ${theme.primary};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5em;
  z-index: 2;
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const LogoIcon = styled.div`
  width: 1.8em;
`;

export const LogoText = styled.h1`
  color: white;
  font-size: 1.3em;
  margin: 0;
  font-weight: 100;
  text-transform: uppercase;
`;

export const AppNavMobileButton = styled(AppButton)`
  padding: 0.3em 1.3em;
  @media (min-width: 801px) {
    display: none;
  }
`;
