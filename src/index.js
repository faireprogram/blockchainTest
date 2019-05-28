import React from 'react';
import ReactDom from 'react-dom';
import FormContainer from './js/components/connected/ConnectedFormContainer.jsx';
import { Provider } from 'react-redux';
import { Route, Switch, Redirect } from 'react-router';
import { ConnectedRouter } from 'connected-react-router';
import configureStore, { history } from './js/configureStore';
import Context from './js/context'; 

const store = configureStore({});

const globalContext = new Context();
globalContext.store = store;

ReactDom.render(
	<Provider store={store}>
		<ConnectedRouter history={history}>
			<Switch>
				<Route exact path="/" component={FormContainer} />
				<Route path="/address/:address" component={FormContainer} />
				<Route path="/notFound" render={()=>{return (<div>Not Found</div>);}} />
				<Redirect to="/notFound"/>
			</Switch>
		</ConnectedRouter>
	</Provider>,
	document.getElementById('create-address-search-form') //eslint-disable-line
);