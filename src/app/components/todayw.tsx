import { FC, useEffect, useState } from "react"
import { currentWeatherStyles } from "../styles/styles"
import { weatherCodes } from "@/functions/weatherCodes"

const TodayW:FC = () => {

    interface WeatherResponse {
        "current" : {
            "apparent_temperature": number,
            "cloud_cover": number,
            "interval": number,
            "is_day": number,
            "precipitation": number,
            "rain": number,
            "showers": number,
            "temperature_2m": number,
            "weather_code": number,
            "wind_direction_10m": number,
            "wind_speed_10m": number 
        }
    }

    const [currentWeather, setCurrentWeather] = useState<WeatherResponse | undefined>();

    useEffect(() => {
        const getCurrentWeather = async () => {
            let response = await fetch('https://api.open-meteo.com/v1/forecast?latitude=34.2694&longitude=-118.7815&current=temperature_2m,apparent_temperature,is_day,precipitation,rain,showers,weather_code,cloud_cover,wind_speed_10m,wind_direction_10m&temperature_unit=fahrenheit&wind_speed_unit=mph&precipitation_unit=inch&timezone=America%2FLos_Angeles')
            let json = await response.json()
            setCurrentWeather(json)
        }

        getCurrentWeather()
    }, [])

    return (
        <div style={currentWeatherStyles.weatherContainer as React.CSSProperties}>
            <div style={{marginRight: 15, display: 'flex', alignItems: 'center'}}>
                {
                    currentWeather ? 
                    weatherCodes[currentWeather.current.weather_code as keyof typeof weatherCodes]
                    : ''
                }
            </div>
            <div style={{fontSize: 18, display: 'flex', alignItems: 'center', marginRight: 15}}>
                Currently: {currentWeather ? currentWeather.current.temperature_2m : ''}°F <br />
                Apparent: {currentWeather ? currentWeather.current.apparent_temperature: ''}°F
            </div>
            <div style={{fontSize: 18, marginRight: 15}}>
                Wind Speed: {currentWeather ? currentWeather.current.wind_speed_10m: ''} mph <br />
                Wind Direction: {currentWeather ? currentWeather.current.wind_direction_10m: ''}°
            </div>
            <div style={{fontSize: 18}}>
                Precipitation: {currentWeather ? currentWeather.current.precipitation: ''}&quot;
            </div>
        </div>
    )
}

export default TodayW