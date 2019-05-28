import React, { Component } from 'react';
import PropTypes from 'prop-types';
import websocketServices from '../../services/websocketServices';

class RealtimeTransactions extends Component {
	state = {
		currentTxs: [],
		currentStoredHash: '',
		isPause: false
	}

	componentWillMount() {
		websocketServices.openConnection();
		websocketServices.sendMessage({'op': 'unconfirmed_sub'});
	}

	componentWillUnmount() {
		websocketServices.closeConnection();
	}

	componentWillReceiveProps(nextProps) {
		if(nextProps.websocketRequest.x.hash !== this.state.currentStoredHash) {
			this.setTheTransactionsList(nextProps.websocketRequest);
		}
	}

	setTheTransactionsList(transaction) {
		let currentTxs = this.state.currentTxs;
		this.setState({
			currentTxs: currentTxs.length >= this.props.maxToSee ? [...currentTxs.slice(1), transaction] : [...currentTxs, transaction],
			currentStoredHash: transaction.x.hash
		});
	}

	pause = () => {
		this.setState({
			isPause: true
		});

		websocketServices.sendMessage({'op': 'unconfirmed_unsub'});
	}

	goHead = () => {
		this.setState({
			isPause: false
		});
		websocketServices.sendMessage({'op': 'unconfirmed_sub'});
	}

	getRealtimeButton = () => {
		if(this.state.isPause) {
			return (
				<button onClick={this.goHead}>Continue</button>
			);
		} else {
			return (
				<button onClick={this.pause}>Pause</button>
			);
		}
	}

	render() {
		return (
			<div>
				<div>
					<div>RealTime Transactions</div>
					<div>
						{this.getRealtimeButton()}
					</div>
				</div>
				<div>
					{
						this.state.currentTxs.map((tx) => {
							return (
								<div key={tx.x.hash}>
									<div>{tx.x.hash}</div>
									<div></div>
								</div>
							);
						})
					}
				</div>
			</div>

		);
	}
}

RealtimeTransactions.propTypes = {
	websocketRequest: PropTypes.object,
	maxToSee: PropTypes.number
};

export default RealtimeTransactions;