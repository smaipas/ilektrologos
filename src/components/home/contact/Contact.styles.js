import styled from 'styled-components';
import bgImage from 'src/images/home/contact/tweed.png';

export const ContactContainer = styled.div`
  padding: 2em 1em;
  color: white;
  background-image: url(${bgImage});
`;

export const ContactDetails = styled.div`
  text-align: center;
  font-size: 0.95em;
  & > * {
    margin: 0.3em 0;
  }
`;

export const ContactForm = styled.div`
  margin: 2em 0;
`;

export const InputFieldsContainer = styled.div`
  display: grid;
  grid-gap: 2em;
  grid-template-columns: repeat(auto-fit, minmax(20em, 1fr));
`;

export const ButtonContainer = styled.div`
  margin-top: 0.5em;
  text-align: center;
`;

export const FormSubmittedContainer = styled.div`
  text-align: center;
  padding: 5em 1em;
  font-size: 1.1em;
`;
