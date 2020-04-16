import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1600px;
  padding: 0 1em;
  margin: 0 auto;
  @media (max-width: 1930px) {
    max-width: 1200px;
  }
  @media (max-width: 1300px) {
    max-width: 900px;
  }
`;
