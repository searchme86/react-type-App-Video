import React from 'react';
import {
  ToggleInput,
  ToggleBox,
  ToggleLabel,
  ToggleTitle,
  ToggleStatus,
  ToggleItem,
} from './Toggle.style';

interface lToggleInfo {
  label: string;
  labelFor: string;
  optionsLabels: string[];
}

interface lToggle {
  onchange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  toggleInfo: lToggleInfo;
}

function ToggleSlider({ onchange, toggleInfo }: lToggle) {
  return (
    <>
      <ToggleBox>
        <ToggleTitle htmlFor={toggleInfo.labelFor}>
          {toggleInfo.label}
        </ToggleTitle>
        <ToggleItem>
          <ToggleInput
            type="checkbox"
            id={toggleInfo.labelFor}
            onChange={onchange}
          />
          <ToggleLabel htmlFor={toggleInfo.labelFor}>
            <ToggleStatus
              data-yes={toggleInfo.optionsLabels[0]}
              data-no={toggleInfo.optionsLabels[1]}
            />
          </ToggleLabel>
        </ToggleItem>
      </ToggleBox>
    </>
  );
}

export default ToggleSlider;
