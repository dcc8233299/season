import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
	//javascript method to initialize state
	//always initialize super method
	constructor(props) {
		super(props);

		//this is the only exception we do direct assignment to this state
		//initially define state
		this.state = { lat: null, errorMessage: '' };

		window.navigator.geolocation.getCurrentPosition(
			position => {
				//always use setState to update state
				this.setState({ lat: position.coords.latitude });
			},
			err => {
				this.setState({ errorMessage: err.message });
			}
		);
	};

	//react method -> must have
	render() {
		if (this.state.errorMessage && !this.state.lat) {
			return <div>Error: {this.state.errorMessage}</div>;
		}

		if (!this.state.errorMessage && this.state.lat) {
			return <div>Latitude: {this.state.lat}</div>
		}

		return <div>Loading...</div>;
	}
}

ReactDOM.render(
	<App />,
	document.querySelector('#root')
);
