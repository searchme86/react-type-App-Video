import React, { useState } from 'react';
import ToggleSlider from './ToggleSlider';

function Toggle() {
  const [toggle, setToggle] = useState(false);
  const handleToggle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setToggle(e.currentTarget.checked);
  };
  const toggleInfo = {
    label: '라벨',
    labelFor: 'label-autoPlay',
    optionsLabels: ['Yes', 'No'],
  };

  return (
    <div>
      <ToggleSlider onchange={handleToggle} toggleInfo={toggleInfo} />
      <p>The Switch is {toggle ? 'on' : 'off'}</p>
    </div>
  );
}

export default Toggle;
