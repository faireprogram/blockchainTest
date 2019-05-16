import React from 'react';
import ReactDom from 'react-dom';
import FormContainer from './js/components/container/FormContainer.jsx';
import { Provider } from 'react-redux';
import { Route, Switch, Redirect } from 'react-router';
import { ConnectedRouter } from 'connected-react-router';
import configureStore, { history } from './js/configureStore';

const store = configureStore({});

ReactDom.render(
	<Provider store={store}>
		<ConnectedRouter history={history}>
			<Switch>
				<Route exact path="/" component={FormContainer} />
				<Route exact path="/search1" component={FormContainer} />
				<Route exact path="/search2" render={()=>{return (<div>search2</div>);}} />
				<Route path="/notFound" render={()=>{return (<div>Not Found</div>);}} />
				<Redirect to="/notFound"/>
			</Switch>
		</ConnectedRouter>
	</Provider>,
	document.getElementById('create-article-form')
);