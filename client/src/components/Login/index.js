import React from 'react';
import { Redirect } from 'react-router-dom';
import LoginForm from "../LoginForm";
import Auth from "../../utils/Auth";

class Login extends React.Component {
	state = {
		redirectToReferrer: false
	}

	login = (data) => {
		console.log('Logging in ' + data.username);
		fetch('api/users/login', {
			method: 'POST',
			body: JSON.stringify(data),
			credentials: 'include',
			headers: {
				'Content-Type': 'application/json'
			},
		})
		.then((response) => {
			if (response.status === 200) {
				Auth.authenticate(() => {
					this.setState({ redirectToReferrer: true })
				});
			}
		})
		.catch((err) => {
			console.log('Error logging in.', err);
		});
	}

	render() {
		const { from } = this.props.location.state || { from: { pathname: '/' } }
		const { redirectToReferrer } = this.state
		
		if (redirectToReferrer) {
			return (
				<Redirect to={from}/>
			)
		}
		
		return (
			<div>
				<p>You must log in to view the page at {from.pathname}</p>
				<LoginForm onLogin={this.login} />
			</div>
		)
	}
}

export default Login;