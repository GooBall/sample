import * as React from 'react';
import styled from 'styled-components';
import CopyButton from '../utils/CopyButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWindows, faUbuntu } from '@fortawesome/free-brands-svg-icons';

const Actions = styled.div`
  margin: 2rem auto 0;
  color: #aaa;
`;

const PageFooter = () => {
  return (
    <Actions>
      <Actions>
        <CopyButton value={`REDACTED`}>
          <FontAwesomeIcon icon={faWindows} />
        </CopyButton>
        <CopyButton value={`REDACTED`}>
          <FontAwesomeIcon icon={faUbuntu} />
        </CopyButton>
      </Actions>
    </Actions>
  );
};

export default PageFooter;
