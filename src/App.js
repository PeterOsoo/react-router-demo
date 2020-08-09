import React from "react"
import "./App.css"
import { BrowserRouter as Router, Link } from "react-router-dom"
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
						<Link to="/"> Home</Link>
					</li>
					<li>
						<Link to="/about"> About</Link>
					</li>
					<li>
						<Link to="/user/peter"> User Peter</Link>
					</li>
					<li>
						<Link to="/user/john"> User John</Link>
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
