/*Authentication*/
/**
 * I decide to move everything out here to clean up the environment
 */

const Auth = {
	isAuthenticated: false,
	authenticate(cb) {
		// req.user on backend will contain user info if
		// this person has credentials that are valid
		fetch('api/users/user', {
			credentials: 'include'
		})
		.then((res) => {
			this.isAuthenticated = true
			if (typeof cb === 'function') {
				cb(res.json().user);
			}
		})
		.catch((err) => {
			console.log('Error fetching authorized user.');
		});
	},
	signout(cb) {
		fetch('api/users/logout', {
			method: 'POST',
			credentials: 'include'
		})
		.then((res) => {
			this.isAuthenticated = false; 
			if (typeof cb === 'function') {
				// user was logged out
				cb(true);
			}
		})
		.catch((err) => {
			console.log('Error logging out user.');
			if (typeof cb === 'function') {
				// user was not logged out
				cb(false);
			}
		});
	}
}

export default Auth;