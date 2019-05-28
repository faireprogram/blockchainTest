import addressServices from '../services/addressServices';
import AbstractActions from './AbstractActions';

class AddressActions extends AbstractActions{
	static ACTIONS_TYPES = {
		RAW_ADDRESS_INFO: 'RAW_ADDRESS_INFO',
		RAW_ADDRESS_INFO_FAILURE: 'RAW_ADDRESS_INFO_FAILURE'
	}

	static createGetAddressInfoActions(address) {
		return async (dispatch) => {
			const json = await addressServices.geRawAddressInfo(address);
			if(json) {
				dispatch({
					type: AddressActions.ACTIONS_TYPES.RAW_ADDRESS_INFO,
					payload: {
						...json
					}
				});
			} else {
				dispatch({
					type: AddressActions.ACTIONS_TYPES.RAW_ADDRESS_INFO_FAILURE
				});
			}
		};
	}
}

export default AddressActions;