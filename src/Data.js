import React from "react";

const Data = ({ info }) => {
	console.log(info);

	const { temp, humidity, pressure } = info.main;
	return (
		<article>
			<h2>Weather Data</h2>
			<p>
				Temperature is <span>{temp}</span> K
			</p>
			<p>
				Humidity is <span>{humidity}</span> %
			</p>
			<p>
				Pressure is <span>{pressure}</span> hPa
			</p>
		</article>
	);
};

export default Data;
