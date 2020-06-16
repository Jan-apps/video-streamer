import React from 'react';
import { Field, reduxForm } from 'redux-form';
// import {connect} from 'react-redux';
// import {createStream} from '../../actions';

class StreamForm extends React.Component {
	renderError = ({ touched, error }) => {
		if (touched && error) {
			return (
				<div className="ui error message">
					<div className="Header">{error}</div>
				</div>
			);
		}
	};

	renderInput = ({ input, label, meta }) => {
		const className = `field ${meta.error && meta.touched ? 'error' : ''}`;
		return (
			<div className={className}>
				<label>{label}</label>
				<input {...input} />
				{this.renderError(meta)}
			</div>
		);
	};

	/* above renderInput function is a distructured version that include all props
	renderInput(formProps){
		return (
		<input 
		onChange={formProps.input.onChange} 
		value={formProps.input.value}
		/> 
		);     
	}; 
	*/

	/*returns object with entered values from submiting the form and calls action creator CreateStream
	which makes request to API Server and create new stream*/
	onSubmit = (formValues) => {
		//this.props.createStream(formValues);
		this.props.onSubmit(formValues);
	};

	render() {
		return (
			<form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form error">
				<Field name="title" component={this.renderInput} label="Enter title" />
				<Field name="description" component={this.renderInput} label="Descripton" />
				<button className="ui button primary">Submit</button>
			</form>
		);
	}
}

const validate = (formValues) => {
	const errors = {};
	if (!formValues.title) {
		errors.title = 'You must enter a title';
	}
	if (!formValues.description) {
		errors.description = 'You must enter a description';
	}

	return errors;
};

export default reduxForm({
	form: 'streamForm',
	validate: validate
})(StreamForm);

//export default connect(null, {createStream})(formWrapped); //map, actionCreator (redux form)
