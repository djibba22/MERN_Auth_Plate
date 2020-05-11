import React from 'react';
import RegisterForm from "../RegisterForm";
import { useHistory } from "react-router";
//The component for doing the actual signup of the User

function Register() {

	let history = useHistory();

	const register = (data) => {
		fetch('api/users/register', {
			method: 'POST',
			body: JSON.stringify(data),
			headers: {
				'Content-Type': 'application/json'
			},
			credentials: 'include'
		})
			.then((response) => {
				if (response.status === 200) {
					console.log('Succesfully registered user!');
					//relocate to the login page
					history.push("/login")
				}
			})
			.catch((err) => {
				console.log('Error registering user.', err);
			});
	}

	return (
		<div>
			<RegisterForm onRegister={register} />
		</div>
	)

}

export default Register;