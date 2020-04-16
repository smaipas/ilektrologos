import styled from 'styled-components';

import theme from 'src/utils/theme';

export const SectionH1 = styled.h1`
  font-size: 2em;
  font-weight: 600;
  text-transform: uppercase;
  margin-bottom: 2em;
  text-align: center;
  color: ${(props) => (props.disabled ? theme.textColor : props.color)};
  @media (max-width: 1200px) {
    font-size: 2em;
  }
  @media (max-width: 700px) {
    font-size: 2em;
  }
`;
