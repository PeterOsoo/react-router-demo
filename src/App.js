import React, { useState } from "react"
import "./App.css"
import {
	BrowserRouter as Router,
	Link,
	NavLink,
	Redirect,
} from "react-router-dom"
import Route from "react-router-dom/Route"

const User = ({ params }) => {
	return <h1>Welcome User {params.username} </h1>
}

const App = () => {
	const [loggedIn, setLoggedIn] = useState(false)
	return (
		<Router>
			<div className="App">
				<ul>
					<li>
						<NavLink to="/" exact activeStyle={{ color: "green" }}>
							{" "}
							Home
						</NavLink>
					</li>
					<li>
						<NavLink to="/about" exact activeStyle={{ color: "green" }}>
							{" "}
							About
						</NavLink>
					</li>
					<li>
						<NavLink to="/user/peter" exact activeStyle={{ color: "green" }}>
							{" "}
							User Peter
						</NavLink>
					</li>
					<li>
						<NavLink to="/user/john" exact activeStyle={{ color: "green" }}>
							{" "}
							User John
						</NavLink>
					</li>
				</ul>

				{/* button  */}
				<input
					type="button"
					value={loggedIn ? "logout" : "login"}
					onClick={() => setLoggedIn(!false)}
				/>

				<Route
					path="/"
					exact
					strict
					render={() => {
						return <h1> Welcome home</h1>
					}}
				/>

				<Route
					path="/about"
					exact
					strict
					render={() => {
						return <h1> About blog</h1>
					}}
				/>

				<Route
					path="/user/:username"
					exact
					strict
					render={({ match }) =>
						loggedIn ? (
							<User username={match.params.username} />
						) : (
							<Redirect to="/" />
						)
					}
				/>
			</div>
		</Router>
	)
}

export default App
