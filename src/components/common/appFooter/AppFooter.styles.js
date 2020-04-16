import styled from 'styled-components';

import theme from 'src/utils/theme';

export const FooterContainer = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.5em 1em;
  background-color: ${theme.primary};
  color: white;
  font-size: 0.8em;
`;
