import React from 'react';
import { connect } from 'react-redux';
import { fetchStream, editStream } from '../../actions';
import StreamForm from './StreamForm';
import _ from 'lodash';

class StreamEdit extends React.Component {
	componentDidMount() {
		this.props.fetchStream(this.props.match.params.id);
	}

	onSubmit = (formValues) => {
		this.props.editStream(this.props.match.params.id, formValues);
	};
	render() {
		if (!this.props.stream) {
			return <div>Loading</div>;
		}
		//{{title: this.props.stream}} first braces to write javascript expressions in jsx, second pair to create object
		return (
			<div>
				<h3>Edit a Stream</h3>

				<StreamForm
					initialValues={_.pick(this.props.stream, 'title', 'description')}
					onSubmit={this.onSubmit}
				/>
			</div>
		);
	}
}

//mapStateToProps has 2 arguments, state and ownProps which is passed from StreamEdit props
const mapStateToProps = (state, ownProps) => {
	return {
		stream: state.streams[ownProps.match.params.id]
	};
};
export default connect(mapStateToProps, { fetchStream, editStream })(StreamEdit);
