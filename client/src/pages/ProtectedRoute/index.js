import React from 'react'



class ProtectedRoute extends React.Component {
	render() {
		return (
			<h3>This is a Protected Route, You must log in to see this page.</h3>	
		)
	}
}

export default ProtectedRoute