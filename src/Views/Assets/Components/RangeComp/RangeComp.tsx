import React, { useState } from 'react';
import { Range } from 'react-range';

function RangeComp() {
  const [values, setValues] = useState([50]);
  const handleRange = () => {
    setValues(values);
  };
  return (
    <div>
      <Range
        step={0.1}
        min={0}
        max={100}
        values={values}
        onChange={handleRange}
        renderTrack={({ props, children }) => (
          <div
            {...props}
            style={{
              ...props.style,
              height: '6px',
              width: '100%',
              backgroundColor: '#ccc',
            }}
          >
            {children}
          </div>
        )}
        renderThumb={({ props }) => (
          <div
            {...props}
            style={{
              ...props.style,
              height: '42px',
              width: '42px',
              backgroundColor: '#999',
            }}
          />
        )}
      />
    </div>
  );
}

export default RangeComp;
