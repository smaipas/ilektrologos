import styled from 'styled-components';

import theme from 'src/utils/theme';

export const ButtonContainer = styled.button`
  color: #424242;
  background-color: ${theme.secondary};
  border-color: #c38a0e;
  border-radius: 0.1em;
  font-size: ${({ size }) => (size === 'lg' ? '1.05em' : '0.95em')};
  padding: ${({ size }) => (size === 'lg' ? '1.2em 1.8em' : '0.5em')};
  font-weight: 600;
  text-transform: uppercase;
  transition: background-color 0.5s ease, color 0.5s ease;
  display: inline-block;
  margin: 0;
  line-height: 1.42857143;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  -ms-touch-action: manipulation;
  touch-action: manipulation;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  background-image: none;
  border: 1px solid transparent;
  &:hover {
    background-color: ${theme.secondaryLight};
  }
  &:active {
    border-color: 1px solid ${theme.secondaryDark};
  }
`;
