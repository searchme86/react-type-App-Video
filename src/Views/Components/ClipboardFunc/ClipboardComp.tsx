import React from 'react';
import CopyToClipboard from 'react-copy-to-clipboard';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AiOutlineCopy } from 'react-icons/ai';
import { ClipboardBtn, ClipboardWrapper, CopiedText } from './Clipboard.style';
import { IconContext } from 'react-icons/lib';
import './ClipboardStyle.css';

interface lTclip {
  copied: boolean;
  onCopy: (value: string, result: boolean) => void;
}

function ClipboardComp({ copied, onCopy }: lTclip) {
  const Text = 'https://youtube.dsd.dd!@##13';
  const notify = () => {
    toast.info('우후! 링크복사 완료!', {
      icon: '🦁',
      position: 'top-right',
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: false,
    });
  };

  return (
    <>
      <ClipboardWrapper>
        <CopiedText>{Text}</CopiedText>
        <ClipboardBtn>
          <CopyToClipboard text={Text} onCopy={onCopy}>
            <button className="button">
              <span className="textHidden">텍스트 복사버튼</span>
              <IconContext.Provider value={{ size: '35px' }}>
                <AiOutlineCopy onClick={notify} />
              </IconContext.Provider>
            </button>
          </CopyToClipboard>
        </ClipboardBtn>
        {copied ? (
          <span>링크 복사완료</span>
        ) : (
          <p>
            링크복사를 원할 경우,
            <br />
            복사버튼을 눌러주세요
          </p>
        )}
      </ClipboardWrapper>
      <ToastContainer
        style={{ width: '230px' }}
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable={false}
        pauseOnHover={false}
        limit={1}
      />
    </>
  );
}

export default ClipboardComp;
