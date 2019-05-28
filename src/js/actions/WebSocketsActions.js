import AbstractActions from './AbstractActions';

class WebSocketsActions extends AbstractActions{
	static ACTIONS_TYPES = {
		UPDATE_TRANSACTIONS_LIST: 'UPDATE_TRANSACTIONS_LIST'
	}

	static createLastedTransactionsInfoRequestActions(payload) {
		return {
			type: WebSocketsActions.ACTIONS_TYPES.UPDATE_TRANSACTIONS_LIST,
			payload: payload
		};
	}
}

export default WebSocketsActions;