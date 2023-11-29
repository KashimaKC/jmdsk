import { FC, useCallback, useEffect, useState } from "react"
import { header, weatherPage } from "../../styles/styles"
import colors from '../../styles/colors.json'
import { weatherCodes } from "@/functions/weatherCodes"

interface WeatherResponse {
    "daily": {
        "time": Array<String>,
        "weather_code": Array<Number>,
        "temperature_2m_max": Array<Number>,
        "temperature_2m_min": Array<Number>,
        "sunrise": Array<String>,
        "sunset": Array<String>,
        "precipitation_sum": Array<Number>,
        "wind_speed_10m_max": Array<Number>
    }
}

const Weather:FC = () => {

    const [forecast, setForecast] = useState<WeatherResponse | undefined>()

    useEffect(() => {
        const getForecast = async () => {
            let response = await fetch('https://api.open-meteo.com/v1/forecast?latitude=34.2694&longitude=-118.7815&daily=weather_code,temperature_2m_max,temperature_2m_min,sunrise,sunset,precipitation_sum,wind_speed_10m_max&temperature_unit=fahrenheit&wind_speed_unit=mph&precipitation_unit=inch&timezone=America%2FLos_Angeles')
            let json = await response.json()
            console.log("forecast called.")
            setForecast(json)
        }

        getForecast()
    }, [])

    return (
        <div style={weatherPage.weatherPageContainer as React.CSSProperties}>
            <table style={{border: '1px solid black', borderCollapse: 'collapse'}}>
                <tbody>
                    <tr>
                        <td style={header.weatherCell as React.CSSProperties}>Type</td>
                        {
                            forecast !== undefined ?
                            forecast.daily.weather_code.map((item: Number, i: any) => (
                            <td key={i} style={header.weatherCell as React.CSSProperties}>
                                {weatherCodes[item as keyof typeof weatherCodes]}
                            </td>
                            ))
                            : <></>
                        }
                    </tr>
                    <tr style={{backgroundColor: colors.penn_blue}}>
                        <td style={header.weatherCell as React.CSSProperties}>Max</td>
                        {
                            forecast !== undefined ?
                            forecast.daily.temperature_2m_max.map((item: any, i: any) => (
                            <td key={i} style={header.weatherCell as React.CSSProperties}>
                                {item}°F
                            </td>
                            ))
                            : <></>
                        }
                    </tr>
                    <tr>
                        <td style={header.weatherCell as React.CSSProperties}>Min</td>
                        {
                            forecast !== undefined ?
                            forecast.daily.temperature_2m_min.map((item: any, i: any) => (
                            <td key={i} style={header.weatherCell as React.CSSProperties}>
                                {item}°F
                            </td>
                            ))
                            : <></>
                        }
                    </tr>
                    <tr style={{backgroundColor: colors.penn_blue}}>
                        <td style={header.weatherCell as React.CSSProperties}>Wind</td>
                        {
                            forecast !== undefined ?
                            forecast.daily.wind_speed_10m_max.map((item: any, i: any) => (
                            <td key={i} style={header.weatherCell as React.CSSProperties}>
                                {item} mph
                            </td>
                            ))
                            : <></>
                        }
                    </tr>
                    <tr>
                        <td style={header.weatherCell as React.CSSProperties}>Precip</td>
                        {
                            forecast !== undefined ?
                            forecast.daily.precipitation_sum.map((item: any, i: any) => (
                            <td key={i} style={header.weatherCell as React.CSSProperties}>
                                {item}&quot;
                            </td>
                            ))
                            : <></>
                        }
                    </tr>
                    <tr style={{backgroundColor: colors.penn_blue}}>
                        <td style={header.weatherCell as React.CSSProperties}>Day</td>
                        {
                            forecast !== undefined ?
                            forecast.daily.time.map((item: any, i: any) => (
                            <td key={i} style={header.weatherCell as React.CSSProperties}>
                                {item.substring(item.length - 5)}
                            </td>
                            ))
                            : <></>
                        }
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Weather



