import styled from 'styled-components';
import theme from 'src/utils/theme';

export const AppHeaderContainer = styled.header`
  background-color: ${theme.primary};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5em;
`;

export const LogoIcon = styled.img`
  width: 1em;
`;
export const LogoText = styled.h1`
  color: white;
  font-size: 1.2em;
  margin: 0;
`;
