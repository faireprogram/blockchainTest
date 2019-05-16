import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Input from '../presentation/Input.jsx';

class FormContainer extends Component {
	constructor() {
		super();

		this.state = {
			title: ''
		};

		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(event) {
		this.setState({[event.target.id]: event.target.value});
	}

	render() {
		const { seo_title } = this.state;
		return (
			<form id='article-form'>
				Current VALUE {seo_title}
				<Input
					text='Seo tilte1'
					label='seo_title'
					type='text'
					id='seo_title'
					value={seo_title}
					handleChange={this.handleChange}
				/>
			</form>
		);
	}
}

// const wrapper = document.getElementById('create-article-form');
// wrapper ? ReactDOM.render(<FormContainer />, wrapper) : false;	

export default FormContainer;