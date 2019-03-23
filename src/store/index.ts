import { combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import { galleryReducer } from './gallery/reducer';

const rootReducer = combineReducers({
  gallery: galleryReducer
});

export type AppState = ReturnType<typeof rootReducer>;

export default function configureStore() {
  return createStore(rootReducer, composeWithDevTools());
}
