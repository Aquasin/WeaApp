import React from "react";

function forecastData({ info }) {
    // console.log(info);

    const { list } = info;

    // let time = info.city.timezone;

    // console.log(time / 3600);

    // console.log(list[0]);
    // console.log(list[0].weather[0]);
    // console.log(list[0]);

    return (
        <>
            <article>
                {list.map((eachWeather) => {
                    const { dt } = eachWeather;
                    const { main, description, icon } = eachWeather.weather[0];
                    const {
                        main: { temp, humidity },
                    } = eachWeather;
                    const { dt_txt } = eachWeather;
                    let url =
                        "http://openweathermap.org/img/wn/" + icon + "@2x.png";
                    return (
                        <article key={dt}>
                            <h2>{dt_txt} UTC</h2>
                            <img src={url} alt="" />
                            <p>
                                Weather - <span>{main}</span>
                            </p>
                            <p>
                                Description - <span>{description}</span>
                            </p>
                            <p>
                                Temp -{" "}
                                <span>
                                    {Math.round((temp - 273.15) * 100) / 100}
                                </span>{" "}
                                &deg;C
                            </p>
                            <p>
                                Humidity - <span>{humidity}</span> %
                            </p>
                        </article>
                    );
                })}
            </article>
        </>
    );
}

export default forecastData;
