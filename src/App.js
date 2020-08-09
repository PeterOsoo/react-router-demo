import React from "react"
import "./App.css"
import { BrowserRouter as Router } from "react-router-dom"
import Route from "react-router-dom/Route"

const User = ({ match }) => {
	return <h1>Welcome User {match.params.username} </h1>
}

const App = () => {
	return (
		<Router>
			<div className="App">
				<Route
					path="/"
					exact
					strict
					render={() => {
						return <h1> Welcome home</h1>
					}}
				/>

				<Route
					path="/about/"
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
