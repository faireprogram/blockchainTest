import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { createMatchSelector } from 'connected-react-router';
import util from '../../util/util';
// import ReactDOM from 'react-dom';
import Input from '../presentation/Input.jsx';
import Spinner from '../presentation/Spinner.jsx';
import TransactionInfo from '../connected/ConnectedTransactionInfo.jsx';
import RealtimeTransactions from '../connected/ConnectedRealtimeTransactions.jsx';

class FormContainer extends Component {
	state = {
		address: '',
		addressServiceCall: ''
	}

	handleChange = (event) => {
		this.setState({address: event.target.value});
	}

	handleKeyUp = (event) => {
		if(event.keyCode === 13) {
			this.loadAddressTransaction(this.state.address);
			this.props.updateUrl('/address/' + this.state.address);
		}
	}

	handleSearchClick = () => {
		// change the url
		this.loadAddressTransaction(this.state.address);
		this.props.updateUrl('/address/' + this.state.address);
	}

	loadAddressTransaction = (address) => {
		this.props.getAddressInfo(address);
	}

	componentDidMount = () => {
		this.props.getBitCoinPrice();

		this.updateAddressFromUrl(this.props);
	}

	componentWillReceiveProps = (nextProps) => {
		if(nextProps.router.location.pathname !== this.props.location.pathname) {
			this.updateAddressFromUrl(nextProps);
		}
	}

	updateAddressFromUrl = (state) => {
		const matchSelector = createMatchSelector('/address/:address'),
			match = matchSelector(state);

		if(match) {
			let address = match.params.address,
				currentAddress = this.state.address;

			if(address !== currentAddress) {
				this.setState({address: address});
				this.loadAddressTransaction(address);
			}
		}
	}


	render() {
		const {isServiceFailure} = this.props.addressInfo;

		const renderResult = () => {
			return (
				<div>
					<div className="summary-header">
						<div className="summary-bitcoin-section">
							Bit Coin Price: <span className="moneyBox">{'$' + this.props.summary.bitCoinPrice}</span>
						</div>

						<div className="summary-market-section">
							<table>
								<tbody>
									<tr>
										<th colSpan="2">Summary</th>
									</tr>
									<tr>
										<td>Address</td>
										<td>{this.props.addressInfo.address}</td>
									</tr>
									<tr>
										<td>hash160</td>
										<td>{this.props.addressInfo.hash160}</td>
									</tr>
									<tr>
										<th colSpan="2">Transactions</th>
									</tr>
									<tr>
										<td>NO. Transactions</td>
										<td>{this.props.addressInfo.n_tx}</td>
									</tr>
									<tr>
										<td>Total Received</td>
										<td><span className="moneyBox">{'$' + util.satoshiToUSD(this.props.summary.bitCoinPrice, this.props.addressInfo.total_received)}</span></td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>

					<div className="transactionInfo-sections">
						{
							this.props.addressInfo.txs.map((tx, index) => {
								return (
									<div key={tx.hash} className="transactionInfo-section">
										<div className="transactionInfo-section-header">transactions index {'#' + index}</div>
										<TransactionInfo tx={tx} bitCoinPrice={this.props.summary.bitCoinPrice}/>
									</div>
								);
							})
						}
					</div>	
				</div>
			);	
		},
		renderError = () => {
			return <div>no found!</div>;
		},
		renderSpinner = () => {
			return (
				<div className="spinner-container-overlay">
					<Spinner isShow={this.props.serviceRequest.isServiceStart} />
				</div>
			);
		};

		return (
			<div id='bitcoin-single-address-search-form'>
				<RealtimeTransactions />

				<Input
					text='Address'
					label='Address'
					type='text'
					id='address-input'
					value={this.state.address}
					handleChange={this.handleChange}
					handleKeyUp={this.handleKeyUp}
				/>
				<button onClick={this.handleSearchClick}>
					Search
				</button>

				{!isServiceFailure ? renderResult() : renderError()}

				{renderSpinner()}
			</div>
		);
	}
}

FormContainer.propTypes = {
	getAddressInfo: PropTypes.func.isRequired,
	getBitCoinPrice: PropTypes.func.isRequired,
	updateUrl: PropTypes.func.isRequired,
	addressInfo: PropTypes.object,
	summary: PropTypes.object,
	router: PropTypes.object,
	serviceRequest: PropTypes.object
};

export default FormContainer;