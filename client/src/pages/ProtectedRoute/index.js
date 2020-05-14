import React, { useEffect, useContext } from 'react'
import Card from "../../components/Card"
import { UserContext } from "../../utils/UserContext";

/* This is a very simple component.. it probably doesn't need to be a smart component at this point but you never know what's goingto happen in the future */

function ProtectedRoute() {

	const [user, dispatch] = useContext(UserContext)
	console.log(user)

	useEffect(() => {
		fetch('api/users/user', {
			credentials: 'include'
		})
			.then((res) => {
				console.log(`response to authenticate ${res}`);
				return res.json(res)

			})
			.then(data => {
				console.log(data);
				dispatch({
					type: "GET_USER",
					payload: data
				})

			})
			.catch((err) => {
				console.log('Error fetching authorized user.');
			});

	}, []);

	return (
		<div className="container">
			<div className="alert alert-success" role="alert">
				Success, You are logged in
				</div>
			<Card title="Welcome.">
				<p>You are logged in.</p>
			</Card>
		</div>
	)

}

export default ProtectedRoute