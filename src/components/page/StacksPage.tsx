import * as React from 'react';
import styled from 'styled-components';

import StackCard from '../card/StackCard';
import PageFooter from './PageFooter';
import { useStateValue } from '../state/StateProvider';

const Page = styled.main`
  max-width: 1400px;
  margin: 0 auto;
  padding: 20px;
  display: grid;
  grid-column-gap: 30px;
  grid-row-gap: 30px;
  grid-template-columns: repeat(3, minmax(400px, 3fr));
  grid-template-rows: auto;

  @media (max-width: 1360px) {
    grid-template-columns: repeat(2, 2fr);
    max-width: 940px;
  }
  @media (max-width: 870px) {
    grid-template-columns: repeat(1, 1fr);
    max-width: 500px;
  }
`;

const StacksPage = () => {
  const [{ stacks }, dispatch] = useStateValue();

  const fetchData = async () => {
    const res = await fetch('api/v1/stacks/');
    const resData = await res.json();
    if (resData) {
      dispatch({
        type: 'changeStacks',
        newStacks: resData
      });
    }
  };

  React.useEffect(() => {
    fetchData();
  }, []);

  return (
    <Page>
      {stacks.map((stack: any, i: number) => (
        <StackCard
          key={i}
          stackTitle={stack.name}
          instances={stack.instances}
        />
      ))}
      <PageFooter />
    </Page>
  );
};

export default StacksPage;
