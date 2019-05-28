import AbstractServices from './AbstractServices';

class ToolsServices extends AbstractServices {

	async addressToHash(address) {
		try {
			const url = this.getBlockChainUrl(this.context.servicesUrls.ADDRESS_TO_HASH),
			hashResponse = await this.requestGet(url, {
				address: address
			}),
			hashText = await hashResponse.text();

			return hashText;
		} catch(err) {
			return '';
		}
	}

	async get24HRPrice() {
		try {
			const url = this.getBlockChainUrl(this.context.servicesUrls.BIT_COIN_PRICE),
			hashResponse = await this.requestGet(url),
			hashText = await hashResponse.text();

			return hashText;
		} catch(err) {
			return '';
		}
	}
}

export default new ToolsServices();