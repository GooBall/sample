import * as React from 'react';
import styled from 'styled-components';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowAltCircleUp,
  faExternalLinkSquareAlt,
  faExclamationTriangle
} from '@fortawesome/free-solid-svg-icons';
import randomString from '../utils/randomString';

const Footer = styled.footer`
  display: flex;
`;

const Button = styled.a<{ disabled: boolean }>`
  width: 33.33%;
  text-align: center;
  color: ${props => (props.disabled ? '#eee' : '#2362a7')};
  cursor: ${props => (props.disabled ? 'not-allowed' : 'pointer')};
  text-decoration: none;
  padding: 1rem 0;
  border-top: 2px solid #eee;
  border-left: 1px solid #eee;
  border-right: 1px solid #eee;
  transition: background-color 0.2s ease-out;
  font-size: 1.5em;

  :hover {
    background-color: #eee;
  }
`;

const Text = styled.div`
  font-size: 0.6em;
  margin-top: 0.2em;
`;

export interface CardFooterProps {
  instanceBranch: string;
  instanceIds: [];
  stackTitle: string;
  stackUrl: string;
  stackZone: string;
}

const CardFooter = ({
  instanceBranch,
  instanceIds,
  stackTitle,
  stackUrl,
  stackZone
}: CardFooterProps) => {
  const [awsUpdateUrl, setAwsUpdateUrl] = React.useState('');

  const logsUrl = `REDACTED`;

  const setUrl = () => {
    const urlHost = `REDACTED`;
    const urlRegion = `?region=${stackZone}`;
    const urlInstances = `#InstanceId=${instanceIds}`;
    const urlRandom = `&randomString=${randomString()}${randomString()}--${stackTitle}--${randomString()}${randomString()}`;
    const urlBranch = `&releaseBranch=${instanceBranch}`;
    const urlOptions = `&runMigrations=true&updateEnv=true&updateConfs=true`;

    const url = `${urlHost}${urlRegion}${urlInstances}${urlRandom}${urlBranch}${urlOptions}`;
    setAwsUpdateUrl(url);
  };

  React.useEffect(() => {
    setUrl();
  }, [stackUrl]);

  return (
    <Footer>
      <Button
        title="View Logs"
        target="_blank"
        rel="noreferrer noopener"
        disabled={!stackZone || !stackTitle}
        href={logsUrl}
      >
        <FontAwesomeIcon icon={faExclamationTriangle} />
        <Text>Logs</Text>
      </Button>
      <Button
        title="View Site"
        target="_blank"
        rel="noreferrer noopener"
        disabled={!stackUrl}
        href={stackUrl}
      >
        <FontAwesomeIcon icon={faExternalLinkSquareAlt} />
        <Text>Open</Text>
      </Button>
      <Button
        title="Update Stack"
        target="_blank"
        rel="noreferrer noopener"
        disabled={!instanceIds || !stackZone || !instanceBranch}
        onClick={setUrl}
        href={awsUpdateUrl}
      >
        <FontAwesomeIcon icon={faArrowAltCircleUp} />
        <Text>Update</Text>
      </Button>
    </Footer>
  );
};

export default CardFooter;
