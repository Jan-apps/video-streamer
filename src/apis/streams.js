import axios from 'axios';

export default axios.create({
	baseURL: 'https://jan-json-server.herokuapp.com'
	// baseURL: 'http://localhost:3001'
});
