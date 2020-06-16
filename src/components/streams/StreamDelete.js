import React from 'react';
import Modal from '../Modal';
import {Link} from 'react-router-dom'
import {connect} from 'react-redux';
import {fetchStream, deleteStream} from '../../actions';
import history from '../../history';

class StreamDelete extends React.Component {


	componentDidMount(){
		//console.log(this.props);
		this.props.fetchStream(this.props.match.params.id);  
	}

	renderActions() {
		const id = this.props.match.params.id;
		return (
			<div>
				<button onClick={()=>this.props.deleteStream(id)}  className="ui button negative">Delete</button>
				<Link to="/" className="ui button">Cancel</Link> 
			</div> 
		);
	}
	
	renderContent(){
		if(!this.props.stream) {
			return 'Loading...'
		}
		return `Are you sure you want to delete stream with title: ${this.props.stream.title}`
	}


	render(){ 
		return(
				<div>
					<Modal 
					title ="Delete Stream" 
					content={this.renderContent()}
					actions={this.renderActions()}
					onDismiss={()=>history.push('/')}
					 />
				</div>

			);
		}
}

const mapStateToProps=(state, ownProps)=>{
  	return {stream: state.streams[ownProps.match.params.id]};
};

export default connect(mapStateToProps, {fetchStream, deleteStream})(StreamDelete);