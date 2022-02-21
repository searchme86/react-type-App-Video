const COPYTEXT = 'clipboard/COPYTEXT' as const;
const ONCOPY = 'clipboard/ONCOPY' as const;

export const copyText = (e: React.ChangeEvent<HTMLInputElement>) => ({
  type: COPYTEXT,
  payload: {
    value: e.currentTarget.value,
  },
});

export const copy = (value: string, status: boolean) => ({
  type: ONCOPY,
  payload: {
    value,
    status,
  },
});

type ClipboardAction = ReturnType<typeof copyText> | ReturnType<typeof copy>;

type ClipboardState = {
  value: string | null;
  copied: boolean;
};

const initialState: ClipboardState = {
  value: '',
  copied: false,
};

function Clipboard(
  state: ClipboardState = initialState,
  action: ClipboardAction
) {
  switch (action.type) {
    case COPYTEXT:
      return {
        ...state,
        value: action.payload.value,
      };
    case ONCOPY:
      return {
        ...state,
        value: action.payload.value,
        copied: true,
      };
    default:
      return state;
  }
}

export default Clipboard;
