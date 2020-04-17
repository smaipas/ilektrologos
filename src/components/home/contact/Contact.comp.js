import React from 'react';
import { Form, Field } from 'react-final-form';

import {
  ContactContainer,
  ContactDetails,
  ContactForm,
  InputFieldsContainer,
  ButtonContainer,
} from 'src/components/home/contact/Contact.styles';
import AppContainer from 'src/components/common/container/AppContainer.comp';
import SectionHeader from 'src/components/common/sectionHeader/SectionHeader.comp';
import FormInput from 'src/components/home/contact/FormInput.comp';
import AppButton from 'src/components/common/appButton/AppButton.comp';
import theme from 'src/utils/theme';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPhoneAlt,
  faEnvelope,
  faMapMarkerAlt,
} from '@fortawesome/free-solid-svg-icons';

const contactDetailsItems = [
  { text: '95 16 88 70', icon: faPhoneAlt },
  { text: 'alexandrosmaipaselectrician@gmail.com', icon: faEnvelope },
  { text: 'Λευκωσία, Κύπρος', icon: faMapMarkerAlt },
];

const onSubmit = async (values) => {
  console.log('submit', values);
};

import {
  required,
  isNumber,
  isEmail,
  minLength,
  composeValidators,
} from 'src/utils/validations';

const Contact = () => (
  <ContactContainer>
    <div style={{ margin: '1em 0' }}>
      <AppContainer>
        <SectionHeader color="white" margin="0 0 1em 0">
          Επικοινωνια
        </SectionHeader>
        <ContactDetails>
          {contactDetailsItems.map((item, i) => (
            <div key={`cont-info-${i}`}>
              <FontAwesomeIcon
                icon={item.icon}
                color={theme.secondary}
                style={{ marginRight: '0.5em' }}
              />
              {item.text}
            </div>
          ))}
        </ContactDetails>
        <ContactForm>
          <Form
            onSubmit={onSubmit}
            render={({ handleSubmit, form, submitting, pristine, values }) => (
              <form onSubmit={handleSubmit}>
                <InputFieldsContainer>
                  <div>
                    <Field name="name" validate={required}>
                      {({ input, meta }) => (
                        <FormInput
                          fieldType="input"
                          {...input}
                          type="text"
                          placeholder="YOUR NAME *"
                          errorMsg={
                            meta.error && meta.touched ? meta.error : null
                          }
                        />
                      )}
                    </Field>
                    <Field
                      name="email"
                      validate={composeValidators(required, isEmail)}
                    >
                      {({ input, meta }) => (
                        <FormInput
                          fieldType="input"
                          {...input}
                          type="text"
                          placeholder="YOUR EMAIL *"
                          errorMsg={
                            meta.error && meta.touched ? meta.error : null
                          }
                        />
                      )}
                    </Field>
                    <Field
                      name="tel"
                      validate={composeValidators(
                        required,
                        isNumber,
                        minLength(8)
                      )}
                    >
                      {({ input, meta }) => (
                        <FormInput
                          fieldType="input"
                          {...input}
                          type="text"
                          placeholder="YOUR TELEPHONE *"
                          errorMsg={
                            meta.error && meta.touched ? meta.error : null
                          }
                        />
                      )}
                    </Field>
                  </div>
                  <div>
                    <Field
                      name="message"
                      validate={composeValidators(required, minLength(3))}
                    >
                      {({ input, meta }) => (
                        <FormInput
                          fieldType="textarea"
                          {...input}
                          type="text"
                          placeholder="YOUR MESSAGE *"
                          rows="5"
                          errorMsg={
                            meta.error && meta.touched ? meta.error : null
                          }
                          errorMargin="-0.5em 0 0 0"
                        />
                      )}
                    </Field>
                  </div>
                </InputFieldsContainer>
                <ButtonContainer>
                  <AppButton type="submit" size="lg" disabled={submitting}>
                    Send Message
                  </AppButton>
                </ButtonContainer>
              </form>
            )}
          />
        </ContactForm>
      </AppContainer>
    </div>
  </ContactContainer>
);

export default Contact;