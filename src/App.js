import { useState } from "react";
import axios from "axios";

function Weather()
{

  const [city, setcity] = useState("")

  const [Weather, setWeather] = useState("")

  const [Temp, setTemp] = useState("")

  const [desc,setdesc] = useState("")

  function handleCity(evt)
  {
    setcity(evt.target.value)

  }

  function getweather()
  {
    var weatherData = axios(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=a2ec24a2cc0dd65d0cbbe2bc9080f854`)

    weatherData.then(function(success)
  {
    console.log(success.data)
    setWeather(success.data.weather[0].main)
    setdesc(success.data.weather[0].description)
    setTemp(success.data.main.temp)
  })
  }
    return(
        <div className=" p-20">
            <div className="bg-green-400 p-10 rounded-md">
                <h1 className="text-6xl font-medium ">WEATHER REPORT</h1><br></br>
                <p className="text-3xl font-medium ">I can give you a weather report about your city !</p><br></br>
                <input onChange={handleCity} type="text" className="mt-2 border border-black rounded-md text-xl font-medium " placeholder="Enter Your City Name"></input> <br></br><br></br>
                <button onClick={getweather} className="bg-black text-white p-3 rounded-md mt-3 text-xl font-medium ">GET REPORT</button>

                <div className="mt-7">
                  <h1 className="text-2xl font-medium "><b>Weather : </b>{Weather}</h1><br></br>
                  <p className="text-2xl font-medium "><b>Temperature : </b>{Temp}</p><br></br>
                  <p className="text-2xl font-medium "><b>Description : </b>{desc}</p>
                </div>
            </div>
        </div>
    )
}
export default Weather;
