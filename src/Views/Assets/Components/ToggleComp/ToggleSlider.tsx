import React from 'react';
import {
  ToggleInput,
  ToggleBox,
  ToggleLabel,
  ToggleTitle,
} from './Toggle.style';

interface lToggleInfo {
  label: string;
  labelFor: string;
}

interface lToggle {
  onchange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  toggleInfo: lToggleInfo;
}

function ToggleSlider({ onchange, toggleInfo }: lToggle) {
  return (
    <ToggleBox>
      <ToggleInput
        type="checkbox"
        id={toggleInfo.labelFor}
        onChange={onchange}
      />
      <ToggleLabel htmlFor={toggleInfo.labelFor}>
        <ToggleTitle>{toggleInfo.label}</ToggleTitle>
      </ToggleLabel>
    </ToggleBox>
  );
}

export default ToggleSlider;
