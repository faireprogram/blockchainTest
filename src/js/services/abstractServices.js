import Context from '../context';
import ServiceRequestActions from '../actions/ServiceRequestActions';
class AbstractServices{
	static METHOD = {
		GET: 'GET',
		POST: 'POST'
	} 

	request(url, params, options) {
		//map object to restful style:
		if(params) {
			url = Object.keys(params).reduce((currentUrl, key) => {
				return currentUrl.replace(':' + key, params[key]);
			}, url);
		}

		return fetch(url + '?cors=true', options); //eslint-disable-line
	}

	requestGet(url, params, options) {
		return this.request(url, params, {...options, ...{ method: AbstractServices.METHOD.GET }});
	}

	requestPost(url, params, options) {
		return this.request(url, params, {...options, ...{ method: AbstractServices.METHOD.POST }});
	}

	async executeService(serviceFn, ...params) {
		this.context.store.dispatch(ServiceRequestActions.createStartServiceRequestActions({
			request: params,
			response: null
		}));

		const serviceResult = serviceFn.apply(this, params),
			result = await serviceResult;

		this.context.store.dispatch(ServiceRequestActions.createCompleteServiceRequestActions({
			request: params,
			response: {...result}
		}));
		return result;
	}

	getBlockChainUrl(url) {
		return this.context.domainUrl + '/' + url;
	}

	get context() {
		return new Context();
	}
}
export default AbstractServices;