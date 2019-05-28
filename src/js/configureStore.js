import { createHashHistory } from 'history';
import { applyMiddleware, compose, createStore } from 'redux';
import { routerMiddleware } from 'connected-react-router';
import thunk from 'redux-thunk';
import createRootReducer from './reducers';

export const history = createHashHistory();

export default function configureStore(preloadState) {
	const store = createStore(
		createRootReducer(history),
		preloadState,
		compose(
			applyMiddleware(
				routerMiddleware(history)
			),
			applyMiddleware(thunk),
			window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() //eslint-disable-line
		)
	);

	return store;
}