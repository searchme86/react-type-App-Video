import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../Modules';
import { decrease, increase, increaseBy } from '../Modules/Counter';
import CounterComp from '../SComponents/CounterComp';

function CounterContainers() {
  const count = useSelector((state: RootState) => state.Counter.count);
  const dispatch = useDispatch();

  const onIncrease = () => {
    dispatch(increase());
  };

  const onDecrease = () => {
    dispatch(decrease());
  };

  const onIncreaseBy = (diff: number) => {
    dispatch(increaseBy(diff));
  };

  return (
    <div>
      <CounterComp
        count={count}
        onIncrease={onIncrease}
        onDecreade={onDecrease}
        onIncreaseBy={onIncreaseBy}
      />
    </div>
  );
}

export default CounterContainers;
