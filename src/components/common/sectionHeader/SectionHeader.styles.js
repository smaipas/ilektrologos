import styled from 'styled-components';

import theme from 'src/utils/theme';

export const SectionH1 = styled.h1`
  font-size: 2em;
  font-weight: 600;
  text-transform: uppercase;
  margin: ${(props) => (props.margin ? props.margin : '0.5em 0 2em 0')};
  text-align: center;
  color: ${(props) => (props.color ? props.color : theme.textColor)};
  @media (max-width: 1200px) {
    font-size: 2em;
  }
  @media (max-width: 700px) {
    font-size: 2em;
  }
`;
