import * as React from 'react';
import styled from 'styled-components';

import Card from './Card';
import CardFooter from './CardFooter';
import CardHeader from './CardHeader';
import StackInstance from './StackInstance';

const CardPadding = styled.div`
  margin-bottom: auto;
  padding: 1rem 1.6rem;
`;

const instanceIds = (instances?: any) => {
  const ids = instances.map((inst: any) => inst.ec2InstanceID);
  return ids[0] ? ids : undefined;
};

const stackUrl = (instances?: any) => {
  const urls = instances.map((inst: any) => inst.appUrl);
  return urls[0] ? urls[0] : undefined;
};

const stackZone = (instances?: any) => {
  const zones = instances.map((inst: any) => inst.ec2AZ);
  return zones[0] ? zones[0].slice(0, -1) : undefined;
};

const instanceBranch = (instances?: any) => {
  const branch = instances.map((inst: any) =>
    inst.branch !== '' ? inst.branch : inst.tag
  );
  return branch[0] ? branch[0] : undefined;
};

export interface StackCardProps {
  stackTitle: string;
  instances: [];
}

const StackCard = ({ stackTitle, instances }: StackCardProps) => {
  return (
    <Card id={stackTitle}>
      <CardPadding>
        <CardHeader title={stackTitle} />
        {instances.map((instance: any, i) => (
          <StackInstance key={i} instance={instance} />
        ))}
      </CardPadding>
      <CardFooter
        instanceIds={instanceIds(instances)}
        stackTitle={stackTitle}
        stackUrl={stackUrl(instances)}
        stackZone={stackZone(instances)}
        instanceBranch={instanceBranch(instances)}
      />
    </Card>
  );
};

export default StackCard;
