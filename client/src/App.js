import React from 'react'
import {
	BrowserRouter as Router,
	Route,
	Link,
  Redirect,
  Switch,
	withRouter
} from 'react-router-dom';
import Auth from "./utils/Auth";
import Nav from "./components/Nav";
import Login from "./components/Login";
import Register from "./components/Register";
//import Home from "./pages/Home";
import NoMatch from "./pages/NoMatch";

const AuthExample = () => (
	<Router>
		<div>
      <Nav />
			<AuthButton/>
			<ul>
				<li><Link to="/public">Public Page</Link></li>
				<li><Link to="/protected">Protected Page</Link></li>
				<li><Link to="/register">Register a New User</Link></li>
			</ul>
      <Switch>
        <Route path="/public" component={Public}/>
        <Route path="/login" component={Login}/>
        <Route path="/register" component={Register}/>
        <PrivateRoute path="/protected" component={Protected}/>
        <Route component={NoMatch} />
      </Switch>
		</div>
	</Router>
)


//Authbutton component / withRouter is imported from react-router
const AuthButton = withRouter(({ history }) => (
	Auth.isAuthenticated ? (
		<p>
			Welcome! <button onClick={() => {
				Auth.signout(() => history.push('/'))
			}}>Sign out</button>
		</p>
	) : (
		<p>You are not logged in.</p>
	)
))

const PrivateRoute = ({ component: Component, ...rest }) => (
	<Route {...rest} render={props => (
		Auth.isAuthenticated ? (
			<Component {...props}/>
		) : (
			<Redirect to={{
				pathname: '/login',
				state: { from: props.location }
			}}/>
		)
	)}/>
)

const Public = () => <h3>Public</h3>
const Protected = () => <h3>Protected</h3>






export default AuthExample

