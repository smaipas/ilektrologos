import styled from 'styled-components';
import brickwallImage from 'src/images/home/services/brickwall.png';
export const ServicesContainer = styled.section`
  padding: 5em 0;
  background-image: url(${brickwallImage});
`;

export const ServicesItemsContainer = styled.div`
  display: grid;
  grid-gap: 2em;
  grid-template-columns: repeat(3, 1fr);
  @media (max-width: 800px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const ServiceItem = styled.figure`
  background-color: white;
  -webkit-box-shadow: 1px 1px 4px 1px rgba(0, 0, 0, 0.2);
  box-shadow: 1px 1px 4px 1px rgba(0, 0, 0, 0.2);
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const ServiceItemText = styled.figcaption`
  padding: 0.5em;
  font-size: 0.9em;
  font-weight: 600;
  text-align: center;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;
