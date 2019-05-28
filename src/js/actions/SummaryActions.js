import toolsServices from '../services/toolsServices';
import AbstractActions from './AbstractActions';

class SummaryActions extends AbstractActions{
	static ACTIONS_TYPES = {
		UPDATE_ADDRESS_TO_HASH: 'UPDATE_ADDRESS_TO_HASH',
		GET_24_HR_PRICE: 'GET_24_HR_PRICE'
	}

	static createAddressToHashActions(address) {
		return async (dispatch) => {
			const hash = await toolsServices.addressToHash(address);
			dispatch({
				type: SummaryActions.ACTIONS_TYPES.UPDATE_ADDRESS_TO_HASH,
				payload: {
					value: hash
				}
			});
		};
	}

	static createGetBitCoinPriceActions() {
		return async (dispatch) => {
			const price = await toolsServices.get24HRPrice();
			dispatch({
				type: SummaryActions.ACTIONS_TYPES.GET_24_HR_PRICE,
				payload: {
					value: price
				}
			});
		};
	}
}

export default SummaryActions;