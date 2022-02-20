import React from 'react';
import CopyToClipboard from 'react-copy-to-clipboard';

interface lClipboard {
  value: string;
  copyText: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onCopy: (value: string, result: boolean) => void;
}

function ClipData({ value, copyText, onCopy }: lClipboard) {
  return (
    <div>
      <input type="text" value={value} onChange={copyText} />
      <CopyToClipboard text={value} onCopy={onCopy}>
        <button>Copy to clipboard</button>
      </CopyToClipboard>
    </div>
  );
}

export default ClipData;
