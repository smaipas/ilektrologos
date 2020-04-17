import React from 'react';

import {
  InputContainer,
  InputField,
  TextAreaField,
  InputError,
} from 'src/components/home/contact/Form.styles';

const FormInput = (props) => (
  <InputContainer>
    {props.fieldType === 'input' ? <InputField {...props} /> : null}
    {props.fieldType === 'textarea' ? <TextAreaField {...props} /> : null}
    <InputError margin={props.errorMargin ? props.errorMargin : null}>
      {props.errorMsg ? props.errorMsg : null}
    </InputError>
  </InputContainer>
);

export default FormInput;
