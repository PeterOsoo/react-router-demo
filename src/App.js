import React from "react"
import "./App.css"
import { BrowserRouter as Router, Link, NavLink } from "react-router-dom"
import Route from "react-router-dom/Route"

const User = ({ match }) => {
	return <h1>Welcome User {match.params.username} </h1>
}

const App = () => {
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

				<Route path="/user/:username" exact strict component={User} />
			</div>
		</Router>
	)
}

export default App
