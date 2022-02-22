const ONCOPY = 'clipboard/ONCOPY' as const;

export const copy = (value: string, status: boolean) => ({
  type: ONCOPY,
  payload: {
    value,
    status,
  },
});

type ClickClipboardAction = ReturnType<typeof copy>;

type ClipboardState = {
  value: string | null;
  copied: boolean;
};

const initialState: ClipboardState = {
  value: '',
  copied: false,
};

function ClipText(
  state: ClipboardState = initialState,
  action: ClickClipboardAction
) {
  switch (action.type) {
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

export default ClipText;
