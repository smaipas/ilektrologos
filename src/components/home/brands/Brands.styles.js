import styled from 'styled-components';

export const BrandsContainer = styled.section`
  padding: 1em 0;
`;

export const ImagesContainer = styled.div`
  display: grid;
  grid-gap: 1em;
  grid-template-columns: repeat(auto-fit, minmax(8em, 1fr));
`;

export const ImageContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  & > * {
    width: 8em;
  }
`;
