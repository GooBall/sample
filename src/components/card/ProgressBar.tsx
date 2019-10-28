import * as React from 'react';
import styled from 'styled-components';
import Placeholder from '../utils/Placeholder';

export interface ColorProps {
  progress: number
  remainder: number;
}

const Bar = styled.div<ColorProps>`
  border: 1px solid rgb(${props => props.progress * 1.55}, ${props => props.remainder * 1.55}, 200);
  border-radius: 8px;
  margin: 4px 1px;
  max-width: 186px;
  width: 100%;
`;

const Progress = styled.div<ColorProps>`
  background-color: rgb(${props => props.progress * 1.55}, ${props => props.remainder * 1.55}, 200);
  border-radius: 5px;
  padding: 6px 0;
  width: ${props => props.progress}%;
`;

export interface ProgressBarProps {
  diskUsage?: string;
}

const ProgressBar = ({diskUsage}: ProgressBarProps) => {
  const output = diskUsage ? diskUsage.split(" ").map(parseFloat) : [];
  const percent = Math.floor((output[1] / output[4]) * 100);
  return (
    diskUsage
      ? (<Bar progress={percent} remainder={100 - percent}>
          <Progress progress={percent} remainder={100 - percent} />
        </Bar>)
      : <Placeholder />
  );
}

export default ProgressBar;
