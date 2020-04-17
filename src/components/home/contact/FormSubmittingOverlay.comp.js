import React from 'react';

import {
  OverlayBg,
  OverlayContainer,
} from 'src/components/home/contact/FormSubmittingOverlay.styles';

import theme from 'src/utils/theme';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faTimes, faSpinner } from '@fortawesome/free-solid-svg-icons';

const FormSubmittingOverlay = ({ status, responseSucceed, close }) => (
  <OverlayBg status={status} onClick={close}>
    {status ? (
      <FontAwesomeIcon icon={faSpinner} size="4x" spin />
    ) : (
      <OverlayContainer>
        <FontAwesomeIcon
          icon={responseSucceed ? faCheck : faTimes}
          color={responseSucceed ? theme.success : theme.error}
          style={{ marginBottom: '0.5em' }}
          size="3x"
        />
        <div>
          {responseSucceed
            ? 'Your message has been sent!'
            : 'An error occurred. Please contact us via phone.'}
        </div>
      </OverlayContainer>
    )}
  </OverlayBg>
);

export default FormSubmittingOverlay;
