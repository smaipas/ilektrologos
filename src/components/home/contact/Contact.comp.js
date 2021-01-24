import React, { useState } from 'react';
import { Form, Field } from 'react-final-form';
import { useIntl } from 'gatsby-plugin-intl';

import { api } from 'src/utils/api';

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
import FormSubmittingOverlay from 'src/components/home/contact/FormSubmittingOverlay.comp';
import theme from 'src/utils/theme';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPhoneAlt,
  faEnvelope,
  faMapMarkerAlt,
} from '@fortawesome/free-solid-svg-icons';

import {
  required,
  isNumber,
  isEmail,
  minLength,
  composeValidators,
} from 'src/utils/validations';

const Contact = () => {
  const intl = useIntl();
  const [loading, setLoading] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formSubmittedSuccessfully, setFormSubmittedSuccessfully] = useState(
    undefined
  );

  const contactDetailsItems = [
    { text: '95 951232', icon: faPhoneAlt },
    { text: 'alexandrosmaipaselectrician@gmail.com', icon: faEnvelope },
    {
      text: intl.formatMessage({ id: 'home.contact.info-address' }),
      icon: faMapMarkerAlt,
    },
  ];

  const onSubmit = async (values) => {
    setLoading(true);
    try {
      const response = await api.post('/contact/submit-contact-form', values);
      if (response.data.statusCode !== 200) {
        throw new Error('Something went wrong...');
      }
      formSubmittedHandler(true);
    } catch (error) {
      formSubmittedHandler(false);
    }
    setLoading(false);
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
            {intl.formatMessage({ id: 'home.contact.title' })}
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
                              placeholder={intl.formatMessage({
                                id: 'home.contact.form.name',
                              })}
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
                              placeholder={intl.formatMessage({
                                id: 'home.contact.form.email',
                              })}
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
                              placeholder={intl.formatMessage({
                                id: 'home.contact.form.tel',
                              })}
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
                              placeholder={intl.formatMessage({
                                id: 'home.contact.form.message',
                              })}
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
                        {intl.formatMessage({ id: 'home.contact.form.submit' })}
                      </AppButton>
                    </ButtonContainer>
                  </form>
                )}
              />
            </ContactForm>
          ) : null}
        </AppContainer>
      </div>
      {formSubmitted || loading ? (
        <FormSubmittingOverlay
          status={loading}
          responseSucceed={formSubmittedSuccessfully}
          close={() => setFormSubmitted(false)}
        />
      ) : null}
    </ContactContainer>
  );
};

export default Contact;
