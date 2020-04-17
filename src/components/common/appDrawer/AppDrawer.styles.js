import styled from 'styled-components';

import theme from 'src/utils/theme';

export const Background = styled.div`
  display: ${(props) => (props.status ? null : 'none')};
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 10;
`;

export const Drawer = styled.div`
  display: block;
  box-sizing: border-box;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  width: 20em;
  transform: ${(props) => (!props.status ? 'translateX(-100%)' : null)};
  background-color: ${theme.primary};
  z-index: 11;
  overflow: hidden;
  transition: transform 0.2s ease-out;
  box-shadow: -10px 0px 10px rgba(0, 0, 0, 0.19);
`;
