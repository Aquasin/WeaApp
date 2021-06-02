import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from "./Nav";
import Home from "./home";
import Weather from "./weather";
import Forecast from "./forecast";
import Toast from "./Toast";
import "./index.css";

function App() {
	useEffect(() => {
		Toast("Welcome to the Weather App");
	}, []);

	return (
		<Router>
			<div className="App">
				<Nav></Nav>
				<Switch>
					<Route path="/" exact component={Home}></Route>
					<Route path="/weather" exact component={Weather}></Route>
					<Route path="/forecast" exact component={Forecast}></Route>
				</Switch>
				<div id="hidden"></div>
			</div>
		</Router>
	);
}

export default App;
