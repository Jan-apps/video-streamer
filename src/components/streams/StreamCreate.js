import React from 'react';
import {connect} from 'react-redux';
import {createStream} from '../../actions';
import StreamForm from './StreamForm';

class StreamCreate extends React.Component {

	

	
	/*returns object with entered values from submiting the form and calls action creator CreateStream
	which makes request to API Server and create new stream*/
	onSubmit = (formValues)=>{
		this.props.createStream(formValues);
	}

	render(){ 
	
	return(
			<div>
				<h3>Create a stream</h3>
				<StreamForm onSubmit={this.onSubmit} />
			</div>

		);
	}
}   


export default connect(null, {createStream})(StreamCreate); //map, actionCreator (redux form)