import React, { Component } from 'react';
import PropTypes from 'prop-types';
import util from '../../util/util';
import Link from '../presentation/Link.jsx';

class TransactionInfo extends Component {

	handleLinkClick = (linkProps) => {
		this.props.updateUrl('/address/' + linkProps.href);
	}

	render() {
		return (
			<div className="transactionInfo-container">
				<div className="transactionInfo-from">
					<div>
						from
					</div>
					<div>
						{
							this.props.tx.inputs.map((inputAddress, index) => {
								return (
									<div className="transactionInfo-details" key={inputAddress.prev_out.addr}>
										<Link label={inputAddress.prev_out.addr} id={'from-link' + index} href={inputAddress.prev_out.addr} handleClick={this.handleLinkClick}/>
										<span className="moneyBox">{'$' + util.satoshiToUSD(this.props.bitCoinPrice, inputAddress.prev_out.value)}</span>
									</div>
								);
							})
						}
					</div>
				</div>

				<div className ="transactionInfo-connect">
					<div className="transactionInfo-arrow"></div>
				</div>

				<div className="transactionInfo-to">
					<div>
						to
					</div>
					<div>
						{
							this.props.tx.out.map((outputAddressi, index) => {
								return (
									<div className="transactionInfo-details" key={outputAddressi.addr}>
										<Link label={outputAddressi.addr} id={'to-link' + index} href={outputAddressi.addr} handleClick={this.handleLinkClick}/>
										<span className="moneyBox">{'$' + util.satoshiToUSD(this.props.bitCoinPrice, outputAddressi.value)}</span>
									</div>
								);
							})
						}
					</div>
				</div>
			</div>
		);
	}
}

TransactionInfo.propTypes = {
	tx: PropTypes.object,
	updateUrl: PropTypes.func,
	bitCoinPrice: PropTypes.string
};

export default TransactionInfo;