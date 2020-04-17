import React from 'react';

import { ButtonContainer } from 'src/components/common/appButton/AppButton.styles';

const AppButton = (props) => (
  <ButtonContainer {...props}>{props.children}</ButtonContainer>
);

export default AppButton;
