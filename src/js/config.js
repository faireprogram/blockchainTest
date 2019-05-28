export default {
	SERVICE_BASE_URL: 'https://blockchain.info',
	SERVICES_URLS: {
		//Tools
		ADDRESS_TO_HASH: 'q/addresstohash/:address',
		HASH_TO_ADDRESS: 'q/hashtoaddress/:hash',

		BIT_COIN_PRICE: 'q/24hrprice',
		
		//Transaction
		TXFREE: 'q/txfee/:hash',
		TXRESULT: 'q/txfee/:TxHash/:address',

		RAW_ADDRESS_INFO: 'rawaddr/:address',

		WEB_SOCKETS_URL: 'wss://ws.blockchain.info/inv'
	}
};