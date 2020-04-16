import styled from 'styled-components';

export const TopBannerContainer = styled.section`
  height: 70vh;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ImageContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 0;
`;

export const TextContainer = styled.div`
  color: #fff;
  text-align: center;
  z-index: 1;
`;

export const BannerHeader = styled.h1`
  font-size: 3em;
  text-shadow: 1px 1px 4px #000000;
  @media (max-width: 800px) {
    font-size: 2.5em;
  }
  @media (max-width: 550px) {
    font-size: 2em;
  }
`;
export const BannerSubheader = styled.p`
  font-size: 1.3em;
  font-style: italic;
  text-shadow: 1px 1px 3px #000000;
  @media (max-width: 800px) {
    font-size: 1.2em;
  }
  @media (max-width: 550px) {
    font-size: 1.1em;
  }
`;
