import * as React from 'react';
import styled from 'styled-components';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGithub,
  faUbuntu,
  faWindows
} from '@fortawesome/free-brands-svg-icons';

import CopyButton from '../utils/CopyButton';
import ListItem from './ListItem';
import ProgressBar from './ProgressBar';
import Placeholder from '../utils/Placeholder';
import Date from '../utils/Date';

const InstanceName = styled.h3`
  border-top: 2px solid rgba(11, 31, 53, 0.1);
  font-weight: 500;
  height: 50px;
  margin: 1em 0 0.6em;
  padding-top: 1em;
  width: 100%;
`;

const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

const Link = styled.a`
  color: #2362a7;
  padding: 0 4px;
`;

const Build = styled.span`
  color: #0b1f359e;
`;

export interface StackInstanceProps {
  instance: any;
}

const StackInstance = ({ instance }: StackInstanceProps) => {
  const tagUrl = 'REDACTED';
  const branchUrl = 'REDACTED';

  const isTag = instance.branch !== '' ? false : true;
  const branch = isTag ? instance.tag : instance.branch;

  return (
    <>
      <InstanceName>
        {instance.ec2TagNameLower ? (
          <CopyButton value={instance.ec2InstanceID}>
            {instance.ec2TagNameLower}:
          </CopyButton>
        ) : (
          <Placeholder height={18} />
        )}
      </InstanceName>
      <List>
        <ListItem
          item="IP:"
          value={instance.ec2PublicIP}
          actions={
            <>
              <CopyButton
                value={`ssh ubuntu@${instance.ec2PublicIP} -i Downloads/${instance.ec2KeyName}.pem`}
              >
                <FontAwesomeIcon icon={faWindows} color="#0b1f359e" />
              </CopyButton>
              <CopyButton
                value={`ssh ubuntu@${instance.ec2PublicIP} -i ~/.ssh/${instance.ec2KeyName}.pem`}
              >
                <FontAwesomeIcon icon={faUbuntu} color="#0b1f359e" />
              </CopyButton>
            </>
          }
        />
        <ListItem
          item={isTag ? 'Tag:' : 'Branch:'}
          valueTitle={branch}
          value={
            branch && (
              <>
                {branch} <Build>(build: {instance.build})</Build>
              </>
            )
          }
          actions={
            <Link
              href={isTag ? tagUrl + branch : branchUrl + branch}
              target="_blank"
              rel="noreferrer noopener"
            >
              <FontAwesomeIcon icon={faGithub} />
            </Link>
          }
        />
        <ListItem
          item="Deployed:"
          valueTitle={instance.lastUpdatedAt}
          value={<Date date={instance.lastUpdatedAt} />}
        />
        <ListItem
          item="Disk:"
          valueTitle={`${instance.ec2DiskUsageInfo} | ${instance.ec2InstanceType}`}
          value={<ProgressBar diskUsage={instance.ec2DiskUsageInfo} />}
          noLink
        />
        {/* <ListItem item="EC2 Zone:" value={instance.ec2AZ} /> */}
        {/* <ListItem item="EC2 ID:" value={instance.ec2InstanceID} /> */}
        {/* <ListItem item="EC2 Type:" value={instance.ec2InstanceType} /> */}
      </List>
    </>
  );
};

export default StackInstance;
