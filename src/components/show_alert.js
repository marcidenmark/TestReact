import React, { Component } from 'react';

class ShowAlert extends Component {
	showAlert() {
		alert("I am an alert");
	}

	render () {
		return <button onClick={this.showAlert}> Show Alert </button>
	}
}

export default ShowAlert;
