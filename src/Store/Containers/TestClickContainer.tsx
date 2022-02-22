import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TclipData from '../../Views/Assets/Components/ClipboardComp/TclipData';
import { RootState } from '../Modules';
import { copy } from '../Modules/TestClick';

function TestClickContainer() {
  const { copied } = useSelector((state: RootState) => state.ClipText);
  const dispatch = useDispatch();

  const onCopy = (value: string, result: boolean) => {
    dispatch(copy(value, result));
  };

  return (
    <div>
      <TclipData copied={copied} onCopy={onCopy} />
    </div>
  );
}

export default TestClickContainer;
