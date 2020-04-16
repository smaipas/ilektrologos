import styled from 'styled-components';
import theme from 'src/utils/theme';

export const AppNavContainer = styled.nav`
  display: flex;
  align-items: center;
`;

export const AppNavItem = styled.div`
  padding: 0.5em 1em;
  color: white;
  cursor: pointer;
  transition: color ease-in-out 0.2s;
  font-size: 0.9em;
  &:hover {
    color: ${theme.secondary};
  }
`;
