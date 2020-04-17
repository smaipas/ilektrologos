import styled, { css } from 'styled-components';

import theme from 'src/utils/theme';

const inputFieldStyles = css`
  width: 100%;
  background-color: #fff;
  background-image: none;
  border-radius: 0.2em;
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  padding: 0.8em 1em;
`;

const inputPlaceholderStyles = css`
  font-weight: 600;
  font-size: 0.9em;
  color: ${theme.primaryLight};
`;

export const InputContainer = styled.div`
  margin: ${({ margin }) => (margin ? margin : '0 0 0.8em 0')};
`;

export const InputField = styled.input`
  ${inputFieldStyles}
  border: 1px solid ${({ errorMsg }) => (errorMsg ? theme.error : '#ccc')};
  &::placeholder {
    ${inputPlaceholderStyles}
  }
`;

export const TextAreaField = styled.textarea`
  ${inputFieldStyles}
  height: 12.4em;
  border: 1px solid ${({ errorMsg }) => (errorMsg ? theme.error : '#ccc')};
  &::placeholder {
    ${inputPlaceholderStyles}
  }
`;

export const InputError = styled.div`
  color: #e74c3c;
  margin: ${({ margin }) => (margin ? margin : '0')};
  font-size: 0.85em;
  height: 0.8em;
`;
