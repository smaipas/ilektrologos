import React from 'react';

import { ButtonContainer } from 'src/components/common/appButton/AppButton.styles';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

const AppButton = (props) => (
  <ButtonContainer {...props}>
    {props.statusLoading ? (
      <FontAwesomeIcon icon={faSpinner} spin />
    ) : (
      props.children
    )}
  </ButtonContainer>
);

export default AppButton;
