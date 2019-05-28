import AbstractServices from './AbstractServices';
import WebSocketsActions from '../actions/WebSocketsActions';
class WebsocketsServices extends AbstractServices {
	static instance;

	constructor() {
		super();

		if(WebsocketsServices.instance) {
			return WebsocketsServices.instance;
		}

		WebsocketsServices.instance = this;
		return WebsocketsServices.instance;
	}

	onOpen() {
		this.isOpen = true;
		this.openPromiseResolve();
	}

	onClose() {
		this.isOpen = false;
	}

	onError() {
		this.isOpen = false;
	}

	onMessage(message) {
		console.log('[message]', message);
		this.context.store.dispatch(WebSocketsActions.createLastedTransactionsInfoRequestActions(JSON.parse(message.data)));
	}

	openConnection() {
		this.ws = new WebSocket(this.context.servicesUrls.WEB_SOCKETS_URL);
		this.ws.onopen = this.onOpen.bind(this);
		this.ws.onclose = this.onClose.bind(this);
		this.ws.onerror = this.onError.bind(this);
		this.ws.onmessage = this.onMessage.bind(this);

		this.openPromise = new Promise((resolve) => {
			this.openPromiseResolve = resolve;
		});
	}

	closeConnection() {
		this.ws.close();
	}

	sendMessage(cmd) {
		this.openPromise.then(() => {
			this.ws.send(JSON.stringify(cmd));
		});
	}
}

export default new WebsocketsServices();