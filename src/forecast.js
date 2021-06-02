import React, { useState } from "react";
import axios from "axios";
import { API_KEY } from "./base";
import ForecastData from "./forecastData";
import Toast from "./Toast";

function Forecast() {
	const [isData, setIsData] = useState(false);
	const [info, setInfo] = useState({});

	const getData = (url) => {
		axios
			.get(url)
			.then((res) => {
				const resInfo = res.data;
				setInfo(resInfo);
				setIsData(true);
				Toast("Data Found");
			})
			.catch((err) => {
				console.log(err);
				setIsData(false);
				Toast("Wrong City Name Entered");
			});
	};

	const handleSubmit = (e) => {
		let city = document.getElementById("cityName").value;
		e.preventDefault();
		if (city) {
			const url =
				"https://api.openweathermap.org/data/2.5/forecast?q=" +
				city +
				"&cnt=8&appid=" +
				API_KEY;
			city = "";
			getData(url);
		}
	};

	return (
		<>
			<div className="container">
				<h1>WeaApp</h1>
				<form onSubmit={handleSubmit}>
					<label htmlFor="cityName">
						Enter the name of the city :{" "}
						<input type="text" id="cityName" name="cityName" />
					</label>
					<button type="submit">Search</button>
				</form>
				{isData && <ForecastData info={info}></ForecastData>}
				<div id="hidden"></div>
			</div>
		</>
	);
}

export default Forecast;
