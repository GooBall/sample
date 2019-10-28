import styled from 'styled-components';

const BaseCard = styled.div`
  background: #fff;
  border-radius: 2px;
  box-shadow: inset 0 0 0 1px rgba(0,0,0,.03), 0 2px 2px rgba(39,44,49,.06), 0 4px 4px rgba(39,44,49,.06), 0 8px 8px rgba(39,44,49,.06), 0 16px 16px rgba(39,44,49,.06), 0 32px 32px rgba(39,44,49,.06), 0 64px 64px rgba(39,44,49,.06);
  display: flex;
  flex-direction: column;

  /* box-shadow: inset 0 0 0 1px rgba(0,0,0,.03), 8px 14px 38px rgba(39,44,49,.06), 1px 3px 8px rgba(39,44,49,.03); */
  /* transition: box-shadow .3s ease-out; */
`;

export default BaseCard;
