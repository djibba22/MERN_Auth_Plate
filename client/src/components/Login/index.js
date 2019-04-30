import React from 'react';
import { Redirect } from 'react-router-dom';
import LoginForm from "../LoginForm";
import Auth from "../../utils/Auth";
//Uses the Auth methods to actually login with the LoginForm Component.
class Login extends React.Component {
    //Initial boolean to check for authenticated user
	state = {
		redirectToReferrer: false
	}
    /* We need to POST to the API the users info,
        This will get passed down as a prop to the LoginForm */
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
			if (response.status === 200) { //All good
				Auth.authenticate(() => { //Update the boolean and take off the cuffs
					this.setState({ redirectToReferrer: true })
				});
			}
		})
		.catch((err) => {// No beuno, kick them
			console.log('Error logging in.', err);
		});
	}

	render() {
		const { from } = this.props.location.state || { from: { pathname: '/protected' } }
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