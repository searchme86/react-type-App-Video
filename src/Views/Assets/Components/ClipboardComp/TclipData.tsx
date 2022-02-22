import CopyToClipboard from 'react-copy-to-clipboard';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface lTclip {
  copied: boolean;
  onCopy: (value: string, result: boolean) => void;
}

function TclipData({ copied, onCopy }: lTclip) {
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
    <div>
      <div>
        <span>{Text}</span>
        <CopyToClipboard text={Text} onCopy={onCopy}>
          <button onClick={notify}>Copy to clipboard</button>
        </CopyToClipboard>
      </div>
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

      <div>{copied ? <p>Text ddd</p> : <p>복사가 입력전 입니다</p>}</div>
    </div>
  );
}

export default TclipData;
