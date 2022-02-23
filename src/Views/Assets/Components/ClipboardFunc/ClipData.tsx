import React from 'react';
import CopyToClipboard from 'react-copy-to-clipboard';
import { ClipboardWrapper } from './Clipboard.style';

interface lClipboard {
  value: string;
  copied: boolean;
  copyText: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onCopy: (value: string, result: boolean) => void;
}

function ClipData({ value, copyText, onCopy, copied }: lClipboard) {
  return (
    <ClipboardWrapper>
      <input type="text" value={value} onChange={copyText} />
      <CopyToClipboard text={value} onCopy={onCopy}>
        <button>Copy to clipboard</button>
      </CopyToClipboard>
      {copied ? <p>copied!!</p> : <p>복사가 입력전 입니다</p>}
    </ClipboardWrapper>
  );
}

export default ClipData;
