class Util {
	static fetchService = () => {
		// return 
	}

	static findElementById = () => {
		// return document.get
	}

	static bind = (func, scope) => {
		return ((thisScope) => {
			return (...data) => {
				return func.apply(thisScope, data);
			};
		})(scope);
	}

	static satoshiToBIT = 0.00000001;

	static satoshiToUSD = (bitCoinPrice, numberOfSantoshi) => {
		return (bitCoinPrice * Util.satoshiToBIT * numberOfSantoshi).toFixed(2);
	}
}
export default Util;