import React from "react";

const Data = ({ info }) => {
	console.log(info);

	const { temp, humidity, pressure } = info.main;
	return (
		<article>
			<h2>Weather Data</h2>
			<p>
				Temperature is{" "}
				<span>{Math.round((temp - 273.15) * 100) / 100}</span> &deg;C
			</p>
			<p>
				Humidity is <span>{humidity}</span> %
			</p>
			<p>
				Pressure is{" "}
				<span>{Math.round((pressure * 10000) / 101325) / 100}</span> atm
			</p>
		</article>
	);
};

export default Data;
