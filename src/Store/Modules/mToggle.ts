import React from 'react';

const HANDLECHECK = 'toggle/HANDLECHECK' as const;

export const handleCheck = (e: React.ChangeEvent<HTMLInputElement>) => ({
  type: HANDLECHECK,
  payload: {
    value: e.currentTarget.checked,
  },
});

type ToggleAction = ReturnType<typeof handleCheck>;

type ToggleState = {
  isChecked: boolean;
  toggle: boolean;
};

const initialState: ToggleState = {
  isChecked: false,
  toggle: false,
};

function Toggle(state: ToggleState = initialState, action: ToggleAction) {
  switch (action.type) {
    case HANDLECHECK:
      return {
        ...state,
        isChecked: action.payload.value,
        toggle: action.payload.value,
      };
    default:
      return state;
  }
}

export default Toggle;
