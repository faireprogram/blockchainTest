import Context from '../context';

class AbstractActions {
	get context() {
		return new Context();
	}
}

export default AbstractActions;