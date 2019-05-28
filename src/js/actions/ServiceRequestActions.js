import AbstractActions from './AbstractActions';

class AddressActions extends AbstractActions{
	static ACTIONS_TYPES = {
		START_FETCHING_DATA: 'START_FETCHING_DATA',
		COMPLETE_FETCHING_DATA: 'COMPLETE_FETCHING_DATA'
	}

	static createStartServiceRequestActions(payload) {
		return {
			type: AddressActions.ACTIONS_TYPES.START_FETCHING_DATA,
			payload: payload
		};
	}

	static createCompleteServiceRequestActions(payload) {
		return {
			type: AddressActions.ACTIONS_TYPES.COMPLETE_FETCHING_DATA,
			payload: payload
		};
	}
}

export default AddressActions;