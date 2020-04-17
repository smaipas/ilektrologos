import styled from 'styled-components';

import theme from 'src/utils/theme';

export const OverlayBg = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 50;
  background-color: rgba(255, 255, 255, 0.96);
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${theme.primary};
`;

export const OverlayContainer = styled.div`
  text-align: center;
`;
