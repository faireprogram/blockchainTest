import { connect } from 'react-redux';
import RealtimeTransactions from '../contentContainer/RealtimeTransactions.jsx';

const mapStateToProps = (state) => {
	return {
		websocketRequest: state.websocketRequest,
		maxToSee: 10
	};
};

export default connect(mapStateToProps, null)(RealtimeTransactions);