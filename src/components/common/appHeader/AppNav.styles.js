import styled, { css } from 'styled-components';

import theme from 'src/utils/theme';

const horizontalNavContainerStyles = css`
  @media (max-width: 800px) {
    display: none;
  }
`;

const verticalNavContainerStyles = css`
  flex-direction: column;
  padding: 2em 1.5em;
`;

const verticalNavItemStyles = css`
  width: 100%;
  font-size: 1.2em;
  margin: 0.5em 0;
`;

export const AppNavContainer = styled.nav`
  display: flex;
  align-items: center;
  ${({ layout }) =>
    layout === 'horizontal'
      ? horizontalNavContainerStyles
      : verticalNavContainerStyles};
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
  ${({ layout }) => (layout === 'horizontal' ? null : verticalNavItemStyles)};
`;
