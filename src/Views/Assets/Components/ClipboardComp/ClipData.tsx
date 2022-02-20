import React from 'react';
import CopyToClipboard from 'react-copy-to-clipboard';

interface lClipboard {
  value: string;
  copied: boolean;
  copyText: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onCopy: (value: string, result: boolean) => void;
}

function ClipData({ value, copyText, onCopy, copied }: lClipboard) {
  return (
    <div>
      <input type="text" value={value} onChange={copyText} />
      <CopyToClipboard text={value} onCopy={onCopy}>
        <button>Copy to clipboard</button>
      </CopyToClipboard>
      <p>{copied ? <p>복사가 성공했습니다</p> : <p>실패!</p>}</p>
    </div>
  );
}

export default ClipData;
