import React from 'react'
import {
	withRouter
} from 'react-router-dom';
import Auth from "../../utils/Auth";
import { Link } from "react-router-dom";






const AuthButton = withRouter(({ history }) => (
	Auth.isAuthenticated ? (
		<div className="container">
			<button className="btn btn-danger" 
				onClick={() => {
					Auth.signout(() => history.push('/'))
				}}>
				Sign out
			</button>
		</div>
	) : (
    <Link  
        className="btn btn-success"
        to="/login"
         >Login
      </Link>
	)
))

export default AuthButton;