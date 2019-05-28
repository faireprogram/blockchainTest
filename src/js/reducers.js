import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import SummaryActions from './actions/SummaryActions';
import AddressActions from './actions/AddressActions';
import ServiceRequestActions from './actions/ServiceRequestActions';
import WebSocketsActions from './actions/WebSocketsActions';

const summaryReducers = (state = {}, action) => {
	var actionHanlders = {
		[SummaryActions.ACTIONS_TYPES.UPDATE_ADDRESS_TO_HASH]: (action) => {
			return {...state, addressToHash: action.payload.value};
		},
		[SummaryActions.ACTIONS_TYPES.GET_24_HR_PRICE]: (action) => {
			return {...state, bitCoinPrice: action.payload.value};
		},
		defaults: () => {
			return state;
		}
	},
	type = action && action.type;
	return actionHanlders[type] ? actionHanlders[type](action) : actionHanlders.defaults();
};

const addressReducers = (state = {txs: []}, action) => {
	var actionHanlders = {
		[AddressActions.ACTIONS_TYPES.RAW_ADDRESS_INFO]: (action) => {
			return {...state, ...action.payload, isServiceFailure: false};
		},
		[AddressActions.ACTIONS_TYPES.RAW_ADDRESS_INFO_FAILURE]: () => {
			return {...state, isServiceFailure: true};
		},	
		defaults: () => {
			return state;
		}
	},
	type = action && action.type;
	return actionHanlders[type] ? actionHanlders[type](action) : actionHanlders.defaults();
};

const serviceRequestReducers = (state = {}, action) => {
	var actionHanlders = {
		[ServiceRequestActions.ACTIONS_TYPES.START_FETCHING_DATA]: (action) => {
			return {...state, ...action.payload, isServiceStart: true};
		},
		[ServiceRequestActions.ACTIONS_TYPES.COMPLETE_FETCHING_DATA]: () => {
			return {...state, ...action.payload, isServiceStart: false};
		},	
		defaults: () => {
			return state;
		}
	},
	type = action && action.type;
	return actionHanlders[type] ? actionHanlders[type](action) : actionHanlders.defaults();
};

const websocketRequestReducers = (state = {}, action) => {
	var actionHanlders = {
		[WebSocketsActions.ACTIONS_TYPES.UPDATE_TRANSACTIONS_LIST]: (action) => {
			return {...state, ...action.payload};
		},	
		defaults: () => {
			return state;
		}
	},
	type = action && action.type;
	return actionHanlders[type] ? actionHanlders[type](action) : actionHanlders.defaults();
};

export default (history) => combineReducers({
	router: connectRouter(history),
	addressInfo: addressReducers,
	summary: summaryReducers,
	serviceRequest: serviceRequestReducers,
	websocketRequest: websocketRequestReducers
});