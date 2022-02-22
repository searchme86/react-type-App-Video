import { combineReducers } from 'redux';
import Counter from './Counter';
import Clipboard from './mClipboard';
import ClipText from './TestClick';

const rootReducrer = combineReducers({
  Counter: Counter,
  Clipboard: Clipboard,
  ClipText: ClipText,
});

export default rootReducrer;
export type RootState = ReturnType<typeof rootReducrer>;
