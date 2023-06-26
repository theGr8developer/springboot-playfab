
import axios from "axios";
import { useEffect, useState } from "react";


export default function Home() {

    var [weatherTrue, updateWeatherTrue] = useState(false);
    var [temperatureTrue, updateTemperatureTrue] = useState(false);
    var [developerTrue, updateDeveloperTrue] = useState(false);

    const [weather, changeWeather] = useState({});
    const [temperature, changeTemperature] = useState("");
    const [developer, changeDeveloper] = useState({});

    function handleWeather() {
        updateTemperatureTrue(false);
        updateDeveloperTrue(false);
        if ("geolocation" in navigator) {
            console.log(navigator);
            console.log("location is available");
            navigator.geolocation.getCurrentPosition(function (position) {
                console.log(position.coords.latitude);
                axios.post("http://localhost:8080/getweather", { latitude: position.coords.latitude, longitude: position.coords.longitude }).then((response) => {
                    // console.log(response.data);
                    changeWeather(response.data);
                    updateWeatherTrue(true);
                    console.log(weather);
                })
            });
        }
        else {
            console.log("location is not available");
        }
    }

    function handleTemperature() {
        updateWeatherTrue(false);
        updateTemperatureTrue(true);
        updateDeveloperTrue(false);
        axios.get("http://localhost:8080/temperature")
            .then((response) => {
                changeTemperature(response.data.Result.Objects.Temperature.DataObject.toString());
                console.log(response.data.Result.Objects.Temperature.DataObject.toString());
            })
            .catch((errors) => {
                console.log(errors);
            })

    }

    function handleDeveloperName() {
        updateWeatherTrue(false);
        updateTemperatureTrue(false);
        updateDeveloperTrue(true);
        axios.get("http://localhost:8080/getdeveloper")
            .then((response) => { 
                changeDeveloper(response.data);
                console.log(response);
             })
            .catch((errors) => { 
                console.log(errors) 
            });
    }

    useEffect(() => {

    }, [changeWeather]);


    return (
        <>


            {/* Showing weather */}
            <div className="container-fluid content-align-center mt-5" style={{ width: "400px", textAlign: "center", backgroundColor: "azure" }}>
                <div className="row text-align-center">
                    <div>
                        {(weatherTrue) ? <div>
                            <div className="fs-4">Weather Description of your city</div>
                            <div style={{ color: "red" }}>waeather_description: {weather.current.weather_descriptions[0]}</div>
                            <div style={{ color: "red" }}>temperature:  {weather.current.temperature}</div>
                            <div style={{ color: "red" }}>cloudcover:  {weather.current.cloudcover}</div>
                            <div style={{ color: "red" }}>humidity:  {weather.current.humidity}</div>
                            <div style={{ color: "red" }}>visibility:  {weather.current.visibility}</div>
                            <div style={{ color: "red" }}>weather_code:  {weather.current.weather_code}</div>
                        </div> : ""}
                    </div>
                </div>
            </div>

            <div className="container-fluid content-align-center mt-5" style={{ width: "400px", textAlign: "center", backgroundColor: "azure" }}>
                <div className="row text-align-center">
                    <div>
                        {(temperatureTrue) ? <div>
                            <div className="fs-4">List of Temperature you viewed</div>
                           <div>{temperature}</div> 
                        </div> : ""}
                    </div>
                </div>
            </div>
            {/* this for viewed temperature list till yet */}
            <div className="container-fluid content-align-center mt-5" style={{ width: "400px", textAlign: "center", backgroundColor: "azure" }}>
                <div className="row text-align-center">
                    <div>
                        {(developerTrue) ? <div>
                            <div className="fs-4"></div>
                            The developer name is Md Afroz Alam
                        </div> : ""}
                    </div>
                </div>
            </div>
            {/* Developer name who developed this */}
            <div className="container-fluid content-align-center mt-5" style={{ width: "400px", textAlign: "center", backgroundColor: "azure" }}>
                <div className="row text-align-center">
                    <div>
                        {(temperatureTrue) ? <div>
                            <div className="fs-4"></div>
                            
                        </div> : ""}
                    </div>
                </div>
            </div>

            <div className="container-fluid content-align-center mt-5" style={{ height: "400px", width: "600px", backgroundColor: "azure" }}>
                <div className="row text-align-center">
                    <div className="col-sm-6 offset-sm-3 fs-3 mb-5">
                        Welcome To Everyone
                    </div>
                    <button className="mb-3 rounded-pill" onClick={handleWeather} >Show Weather</button>
                    <button className="mb-3 rounded-pill" onClick={handleTemperature}>List all temperature viewed</button>
                    <button className="rounded-pill" onClick={handleDeveloperName}>Show Developer Name</button>

                </div>
            </div>
        </>

    );
}