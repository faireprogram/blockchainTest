import { createHashHistory } from 'history';
import { applyMiddleware, compose, createStore } from 'redux';
import { routerMiddleware } from 'connected-react-router';
import createRootReducer from './reducers';

export const history = createHashHistory();

export default function configureStore(preloadState) {
	const store = createStore(
		createRootReducer(history),
		preloadState,
		compose(
			applyMiddleware(
				routerMiddleware(history)
			)
		)
	);

	return store;
}