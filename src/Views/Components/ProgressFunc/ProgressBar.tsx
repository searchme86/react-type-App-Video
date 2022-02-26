import React from 'react';
import { ProgressContainer, StatusBar, LabelStyle } from './Progress.style';

interface lProgressBar {
  bgColor: string;
  value: number;
}

const ProgrBar = ({ bgColor, value }: lProgressBar) => {
  return (
    <ProgressContainer>
      <StatusBar bgColor={bgColor} completed={value}>
        <LabelStyle>{value}</LabelStyle>
      </StatusBar>
    </ProgressContainer>
  );
};

export default ProgrBar;
