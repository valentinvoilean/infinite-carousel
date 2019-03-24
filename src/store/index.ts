import { combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import { carouselReducer } from './carousel/reducer';

const rootReducer = combineReducers({
  carousel: carouselReducer
});

export type AppState = ReturnType<typeof rootReducer>;

export default function configureStore() {
  return createStore(rootReducer, composeWithDevTools());
}
