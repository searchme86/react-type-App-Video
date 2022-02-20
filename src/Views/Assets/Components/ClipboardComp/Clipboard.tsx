import React, { useState } from 'react';
import ClipData from './ClipData';

function Clipboard() {
  const [value, setValue] = useState('');
  const [copied, setCopied] = useState(false);
  const copyText = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.value);
  };
  const onCopy = (value: string) => {
    setValue(value);
    setCopied(true);
  };
  return (
    <div>
      <ClipData value={value} copyText={copyText} onCopy={onCopy} />
    </div>
  );
}

export default Clipboard;
