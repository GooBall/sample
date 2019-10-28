import * as React from 'react';
import styled from 'styled-components';
import Placeholder from '../utils/Placeholder';

export interface StackLogoProps {
  readonly name: string;
  readonly fade?: boolean;
}

const StackLogo = styled.div<StackLogoProps>`
  background: url('./${props => props.name}-logo.svg') center center no-repeat;
  background-size: contain;
  padding: 30px 40px;
  ${props => (props.fade ? 'filter: grayscale(0.8)' : undefined)};
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
`;

const StackName = styled.h2`
  font-size: 2.4em;
  font-weight: 500;
  margin: 0;
  overflow: hidden;
  padding: 0 1rem 0 0;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 100%;
`;

const getStackImage = (name: string) => {
  if (!name || name.includes('undefined')) return 'undefined';
  if (name.includes('REDACTED')) return 'REDACTED';
  if (name.includes('REDACTED')) return 'REDACTED';
  if (name.includes('REDACTED')) return 'REDACTED';
  if (name.includes('REDACTED')) return 'REDACTED';
  if (name.includes('REDACTED')) return 'REDACTED';
  if (name.includes('REDACTED')) return 'REDACTED';
  else return 'REDACTED';
};

const checkIfStaging = (name: string) => {
  if (
    name.includes('staging') ||
    name.includes('dev') ||
    name.includes('REDACTED')
  ) {
    return true;
  }
  return false;
};

export interface StackHeaderProps {
  title?: React.ReactNode | React.ReactNode[] | string;
}

const CardHeader = ({ title }: StackHeaderProps) => {
  return (
    <Header>
      <StackName>{title ? title : <Placeholder height={56} />}</StackName>
      {typeof title == 'string' && (
        <StackLogo name={getStackImage(title)} fade={checkIfStaging(title)} />
      )}
    </Header>
  );
};

export default CardHeader;
