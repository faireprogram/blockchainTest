import React from 'react';
import PropTypes from 'prop-types';

const Spinner = ({isShow}) => {
	if(isShow) {
		return (
			<div className="loader">
				<span className="a"></span>
				<span className="b spin">
					<span className="c"></span>
				</span>
			</div>
		);
	}
	return '';
};

Spinner.propTypes = {
	isShow: PropTypes.bool
};

export default Spinner;