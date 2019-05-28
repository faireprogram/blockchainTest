import React from 'react';
import PropTypes from 'prop-types';

const Link = ({label, id, href, handleClick}) => {

	const _handleClick = (event) => {
		event.preventDefault();

		if(handleClick) {
			handleClick({
				label,
				id,
				href
			});
		}
	};

	return (
		<a
			className='form-lik'
			id={id + '-link'}
			onClick={_handleClick}
			href={href}
		>
			{label}
		</a>
	);
};

Link.propTypes = {
	label: PropTypes.string,
	id: PropTypes.string,
	href: PropTypes.string,
	handleClick: PropTypes.func
};

export default Link;