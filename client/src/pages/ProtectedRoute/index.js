import React from 'react'
import Auth from "../../utils/Auth";
import Card from "../../components/Card"
/*ToDo*/
/**
 * Let's get some styling in here
 */

/* This is a very simple component.. it probably doesn't need to be a smart component at this point but you never know what's goingto happen in the future */
class ProtectedRoute extends React.Component {

	render() {
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
}

export default ProtectedRoute