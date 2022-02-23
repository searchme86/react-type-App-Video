import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../Modules';
import { copyText, copy } from '../Modules/mClipboard';
import ClipData from '../../Views/Assets/Components/ClipboardFunc/ClipData';

function ClipoardContainers() {
  const { value, copied } = useSelector((state: RootState) => state.Clipboard);
  const dispatch = useDispatch();

  const onCopyText = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(copyText(e));
  };

  const onCopy = (value: string, result: boolean) => {
    dispatch(copy(value, result));
  };

  console.log('value', value);
  console.log('copied', copied);

  return (
    <div>
      <ClipData
        value={value}
        copied={copied}
        copyText={onCopyText}
        onCopy={onCopy}
      />
    </div>
  );
}

export default ClipoardContainers;
