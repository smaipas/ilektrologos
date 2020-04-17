import React, { useState } from 'react';
import { Form, Field } from 'react-final-form';

import {
  ContactContainer,
  ContactDetails,
  ContactForm,
  InputFieldsContainer,
  ButtonContainer,
  FormSubmittedContainer,
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
  faCheck,
  faTimes,
} from '@fortawesome/free-solid-svg-icons';

const contactDetailsItems = [
  { text: '95 16 88 70', icon: faPhoneAlt },
  { text: 'alexandrosmaipaselectrician@gmail.com', icon: faEnvelope },
  { text: 'Λευκωσία, Κύπρος', icon: faMapMarkerAlt },
];

import {
  required,
  isNumber,
  isEmail,
  minLength,
  composeValidators,
} from 'src/utils/validations';

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formSubmittedSuccessfully, setFormSubmittedSuccessfully] = useState(
    undefined
  );

  const onSubmit = async (values) => {
    setLoading(true);
    console.log('submit', values);
    formSubmittedHandler(true);
  };

  const formSubmittedHandler = (status) => {
    setFormSubmittedSuccessfully(status);
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormSubmittedSuccessfully(undefined);
    }, 10000);
  };

  return (
    <ContactContainer id="contact">
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
          {!formSubmitted ? (
            <ContactForm>
              <Form
                onSubmit={onSubmit}
                render={({
                  handleSubmit,
                  form,
                  submitting,
                  pristine,
                  values,
                }) => (
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
                              disabled={submitting || loading}
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
                              disabled={submitting || loading}
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
                              disabled={submitting || loading}
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
                              disabled={submitting || loading}
                            />
                          )}
                        </Field>
                      </div>
                    </InputFieldsContainer>
                    <ButtonContainer>
                      <AppButton
                        type="submit"
                        size="lg"
                        statusLoading={loading}
                        disabled={submitting || loading}
                      >
                        Send Message
                      </AppButton>
                    </ButtonContainer>
                  </form>
                )}
              />
            </ContactForm>
          ) : (
            <FormSubmittedContainer>
              <FontAwesomeIcon
                icon={formSubmittedSuccessfully ? faCheck : faTimes}
                color={formSubmittedSuccessfully ? theme.success : theme.error}
                style={{ marginBottom: '0.5em' }}
                size="2x"
              />
              <div>
                {formSubmittedSuccessfully
                  ? 'Your message has been sent!'
                  : 'An error occurred. Please contact us via phone.'}
              </div>
            </FormSubmittedContainer>
          )}
        </AppContainer>
      </div>
    </ContactContainer>
  );
};

export default Contact;
