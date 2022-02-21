import { combineReducers } from 'redux';
import Counter from './Counter';
import Clipboard from './mClipboard';

const rootReducrer = combineReducers({
  Counter: Counter,
  Clipboard: Clipboard,
});

export default rootReducrer;
export type RootState = ReturnType<typeof rootReducrer>;
