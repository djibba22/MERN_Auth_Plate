import React from 'react'
/*ToDo*/
/**
 * Let's get some styling in here
 */

/* This is a very simple component.. it probably doesn't need to be a smart component at this point but you never know what's goingto happen in the future */
class ProtectedRoute extends React.Component {
	render() {
		return (
			<h3>This is a Protected Route, You must log in to see this page.</h3>	
		)
	}
}

export default ProtectedRoute