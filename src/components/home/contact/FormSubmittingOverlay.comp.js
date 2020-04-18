import React from 'react';
import { useIntl } from 'gatsby-plugin-intl';

import {
  OverlayBg,
  OverlayContainer,
} from 'src/components/home/contact/FormSubmittingOverlay.styles';

import theme from 'src/utils/theme';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faTimes, faSpinner } from '@fortawesome/free-solid-svg-icons';

const FormSubmittingOverlay = ({ status, responseSucceed, close }) => {
  const intl = useIntl();

  return (
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
              ? intl.formatMessage({ id: 'home.contact.overlay.success' })
              : intl.formatMessage({ id: 'home.contact.overlay.failed' })}
          </div>
        </OverlayContainer>
      )}
    </OverlayBg>
  );
};

export default FormSubmittingOverlay;
