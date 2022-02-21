import React from 'react';

type CounterProp = {
  count: number;
  onIncrease: () => void;
  onDecreade: () => void;
  onIncreaseBy: (result: number) => void;
};

function CounterComp({
  count,
  onIncrease,
  onDecreade,
  onIncreaseBy,
}: CounterProp) {
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={onIncrease}>+1</button>
      <button onClick={onDecreade}>-1</button>
      <button onClick={() => onIncreaseBy(5)}>+5</button>
    </div>
  );
}

export default CounterComp;
