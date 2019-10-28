import * as React from "react";
import styled from "styled-components";

const random = () => {
  return Math.random() * (40 - 70) + 70;
};

export interface BlankBoxProps {
  height?: number;
}

const BlankBox = styled.div<BlankBoxProps>`
  height: ${props => (props.height ? `${props.height}px` : "15px")};
  width: ${random()}%;
  margin: 3px 0 4px;
  border-radius: 6px;
  background: linear-gradient(
    to right,
    #fafafa 0%,
    #eee 40%,
    #eee 50%,
    #eee 60%,
    #fafafa 100%
  );
  background-size: 200% 200%;

  animation: AnimationName 2s ease infinite;

  @keyframes AnimationName {
    0% {
      background-position: 50% 50%;
    }
    100% {
      background-position: -150% -150%;
    }
  }
`;

const Placeholder = ({ height }: BlankBoxProps) => {
  return <BlankBox height={height} />;
};

export default Placeholder;
