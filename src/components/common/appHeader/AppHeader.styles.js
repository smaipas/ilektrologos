import styled from 'styled-components';
import theme from 'src/utils/theme';

export const AppHeaderContainer = styled.header`
  background-color: ${theme.primary};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5em;
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
