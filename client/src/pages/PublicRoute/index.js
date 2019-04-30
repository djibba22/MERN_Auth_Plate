import React from 'react'
/*ToDo*/
/**
 * Let's get some styling in here
 */

/* This is a very simple component.. it probably doesn't need to be a smart component at this point but you never know what's goingto happen in the future */
class PublicRoute extends React.Component {
	render() {
		return (
            <div>
                <h3>This is a Public Page Here</h3>
                <p>Anyone can see this content</p>
            </div>	
		)
	}
}

export default PublicRoute