import { createStore, applyMiddleware, compose } from 'redux';
import promise from 'redux-promise';
import thunk from 'redux-thunk';
import rootReducer from './utils/redux/index';

export const configureStore = (initialState) => {
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const store = createStore(
    rootReducer,
    initialState,
    composeEnhancers(
      applyMiddleware(thunk, promise)
    )
  );

  if (module.hot) {
    // Enable Webpack hot module replacement for redux
    module.hot.accept('./utils/redux', () => {
      const nextRootReducer = require('./utils/redux/index').default;
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
};

