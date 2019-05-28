import AbstractServices from './AbstractServices';

class TransactionsServices extends AbstractServices {

	async _geRawAddressInfo(address) {
		try {
			const url = this.getBlockChainUrl(this.context.servicesUrls.RAW_ADDRESS_INFO),
			hashResponse = await this.requestGet(url, {
				address: address
			}),
			json = await hashResponse.json();

			return json;
		} catch(err) {
			return null;
		}
	}

	geRawAddressInfo(address) {
		return this.executeService(this._geRawAddressInfo, address);
	}
}

export default new TransactionsServices();