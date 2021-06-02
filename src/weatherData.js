import React from "react";

const weatherData = ({ info }) => {
	// console.log(info);

	const { temp, humidity, pressure } = info.main;
	const {
		sys: { country },
		name,
	} = info;
	const { main, description, icon } = info.weather[0];
	// console.log(main, description, icon);
	// console.log(country, name);
	let url = "http://openweathermap.org/img/wn/" + icon + "@2x.png";
	return (
		<>
			<article>
				<h2>Country Code</h2>
				<p>
					Country Code is <span>{country}</span>
				</p>
				<p>
					Name Entered is <span>{name}</span>
				</p>
			</article>
			<article>
				<h2>Weather Details</h2>
				<img src={url} alt="" />
				<p>
					Weather - <span>{main}</span>
				</p>
				<p>
					Description - <span>{description}</span>
				</p>
				<p>
					Temperature is{" "}
					<span>{Math.round((temp - 273.15) * 100) / 100}</span>{" "}
					&deg;C
				</p>
				<p>
					Humidity is <span>{humidity}</span> %
				</p>
				<p>
					Pressure is{" "}
					<span>{Math.round((pressure * 10000) / 101325) / 100}</span>{" "}
					atm
				</p>
			</article>
		</>
	);
};

export default weatherData;
