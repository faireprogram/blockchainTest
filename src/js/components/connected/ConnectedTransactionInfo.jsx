import { connect } from 'react-redux';
import TransactionInfo from '../contentContainer/TransactionInfo.jsx';
import { push } from 'connected-react-router';

const mapDispatchToProps = () => {
	return (dispatch) => {
		return {
			updateUrl: (url) => {
				dispatch(push(url));
			}
		};
	};
};

export default connect(null, mapDispatchToProps)(TransactionInfo);