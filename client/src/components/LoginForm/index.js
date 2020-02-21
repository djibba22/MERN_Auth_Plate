import React from 'react'
import Card from "../Card"

class LoginForm extends React.Component {
	// refs
	form: null;
	usernameElem: null;
	passwordElem: null;

	render() {
		const { onLogin } = this.props;
		return (
			<Card title="Login with your Username and Password">
				<form
					ref={(elem) => this.form = elem}
					onSubmit={(e) => {
						e.preventDefault();
						return onLogin({
							username: this.usernameElem.value,
							password: this.passwordElem.value
						});
					}}
				>
					<div className="form-group">
						<input className="form-control" ref={(input) => this.usernameElem = input} type='text' name="username" placeholder='Enter Username' /><br/>
						<input className="form-control" ref={(input) => this.passwordElem = input} type='password' name="password" placeholder='Password' /><br/>
						<button className="btn btn-success" type='submit'>
							Submit
						</button>
					</div>
				</form>
			</Card>	
		)
	}
}

export default LoginForm