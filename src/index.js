import FormContainer from './js/components/container/FormContainer.jsx';
import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router';
import { ConnectedRouter } from 'connected-react-router';
import configureStore, { history } from './js/configureStore';

const store = configureStore({});

ReactDom.render(
	<Provider store={store}>
		<ConnectedRouter history={history}>
			<Switch>
				<Route exact path="/search1" render={FormContainer} />
				<Route exact path="/search2" render={() => (return <div>Search2</div>)} />
				<Route render={() => (return <div>default</div>)}

			</Switch>
		</ConnectedRouter>
	</Provider>,
	document.getElementById('create-article-form')
);