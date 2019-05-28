import React from 'react';
import PropTypes from 'prop-types';

const Input = ({label, text, type, id, value, handleChange, handleKeyUp}) => (
	<div className='form-group'>
		<label htmlFor={label}>{text}</label>
		<input
			type={type}
			className='form-control'
			id={id}
			value={value}
			onChange={handleChange}
			onKeyUp={handleKeyUp}
			required
		/>
	</div>
);

Input.propTypes = {
	label: PropTypes.string,
	text: PropTypes.string,
	type: PropTypes.string,
	id: PropTypes.string,
	value: PropTypes.string,
	handleChange: PropTypes.func,
	handleKeyUp: PropTypes.func
};

export default Input;