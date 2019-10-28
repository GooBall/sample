import * as React from 'react';
import styled from 'styled-components';
import CopyButton from '../utils/CopyButton';
import Placeholder from '../utils/Placeholder';

const Item = styled.li`
  display: flex;
  margin: 0.4em 0;
`;

const Key = styled.div`
  color: #0b1f359e;
  display: flex;
  font-weight: 500;
  justify-content: flex-end;
  padding-right: 6px;
  width: 100px;
  flex-shrink: 0;
`;

const Value = styled.div`
  display: flex;
  width: 100%;
`;

const Actions = styled.div`
  margin-left: auto;
`;

export interface ListItemProps {
  actions?: React.ReactNode | React.ReactNode[];
  item: React.ReactNode | React.ReactNode[] | string;
  noLink?: boolean;
  valueTitle?: string;
  value: React.ReactNode | React.ReactNode[] | string;
}

const ListItem = ({
  actions,
  item,
  noLink,
  valueTitle,
  value,
}: ListItemProps) => {
  const actionsDisplay = actions ? <Actions>{actions}</Actions> : undefined;
  const copyValue = typeof value == 'string' ? value : '';

  return (
    <Item>
      <Key>{item}</Key>
      {noLink
        ? <Value title={valueTitle} >{value ? <>{value}{actionsDisplay}</> : <Placeholder />}</Value>
        : value
          ? (
            <Value>
              <CopyButton
                value={valueTitle ? valueTitle : copyValue}
              >
                {value}
              </CopyButton>
              {actionsDisplay}
            </Value>
          )
          : <Placeholder />
      }
    </Item>
  );
}

export default ListItem;
