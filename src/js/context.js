import config from './config';

class Context {
	static instance;
	constructor() {
		if(Context.instance) {
			return Context.instance;
		}

		Context.instance = this;
		return Context.instance;
	}

	servicesUrls = config.SERVICES_URLS;
	domainUrl = config.SERVICE_BASE_URL;
}

export default Context;

