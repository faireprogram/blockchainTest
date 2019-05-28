import { connect } from 'react-redux';
import FormContainer from '../contentContainer/FormContainer.jsx';
import summaryActions from '../../actions/SummaryActions';
import addressActions from '../../actions/addressActions';
import { push } from 'connected-react-router';

const mapDispatchToProps = () => {
	return (dispatch) => {
		return {
			getAddressInfo: (address) => {
				dispatch(addressActions.createGetAddressInfoActions(address));
			},
			getBitCoinPrice: () => {
				dispatch(summaryActions.createGetBitCoinPriceActions());
			},
			updateUrl: (url) => {
				dispatch(push(url));
			}
		};
	};
};

const mapStateToProps = (state) => {
	return {
		addressInfo: state.addressInfo,
		summary: state.summary,
		router:  state.router,
		serviceRequest: state.serviceRequest
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(FormContainer);