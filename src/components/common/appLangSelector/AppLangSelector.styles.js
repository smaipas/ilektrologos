import styled from 'styled-components';

import theme from 'src/utils/theme';

export const LanguagesContainer = styled.div`
  display: flex;
`;

export const LanguageItem = styled.div`
  margin: 0 0.7em;
  color: white;
  cursor: pointer;
  font-size: 0.9em;
  transition: color ease-in-out 0.2s;
  &:hover {
    color: ${theme.secondary};
  }
`;
