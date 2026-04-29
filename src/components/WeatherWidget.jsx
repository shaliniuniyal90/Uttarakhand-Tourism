import { useState, useEffect } from 'react'

const API_KEY = "abddd6cfb5209fd486cf85851ab19aa9"

function WeatherWidget({ cityName }) {
  const [weather, setWeather] = useState(null)
  const [forecast, setForecast] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const weatherRes = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${cityName},India&appid=${API_KEY}&units=metric`
        )
        const weatherData = await weatherRes.json()

        const forecastRes = await fetch(
          `https://api.openweathermap.org/data/2.5/forecast?q=${cityName},India&appid=${API_KEY}&units=metric`
        )
        const forecastData = await forecastRes.json()

        setWeather(weatherData)
        setForecast(forecastData)
        setLoading(false)
      } catch (err) {
        setLoading(false)
      }
    }
    fetchWeather()
  }, [cityName])

  if (loading) return <p>Loading weather...</p>
  if (!weather || weather.cod !== 200) return <p>Weather unavailable</p>

  const getWeatherEmoji = (main) => {
    if (main === "Rain") return "🌧️"
    if (main === "Clouds") return "☁️"
    if (main === "Snow") return "❄️"
    if (main === "Thunderstorm") return "⛈️"
    return "☀️"
  }

  // 5 din ka data — har din ka pehla entry lo
  const dailyForecast = forecast?.list?.filter((_, index) => index % 8 === 0).slice(0, 5)

  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]

  return (
    <div style={{ margin: "15px 0" }}>
      {/* Current Weather */}
      <div style={{
        background: "linear-gradient(135deg, #1a5276, #2980b9)",
        color: "white",
        padding: "15px 20px",
        borderRadius: "12px 12px 0 0",
        display: "flex",
        alignItems: "center",
        gap: "15px"
      }}>
        <div style={{ fontSize: "40px" }}>
          {getWeatherEmoji(weather.weather[0].main)}
        </div>
        <div>
          <h3 style={{ margin: "0 0 5px" }}>🌤️ Current Weather in {cityName}</h3>
          <p style={{ margin: "0", fontSize: "22px", fontWeight: "bold" }}>
            {Math.round(weather.main.temp)}°C
          </p>
          <p style={{ margin: "0", fontSize: "14px", opacity: 0.8 }}>
            {weather.weather[0].description} | Humidity: {weather.main.humidity}%
          </p>
        </div>
      </div>

      {/* 5 Day Forecast */}
      {dailyForecast && (
        <div style={{
          background: "#1a3a4a",
          color: "white",
          padding: "12px 20px",
          borderRadius: "0 0 12px 12px",
          display: "flex",
          justifyContent: "space-around",
          flexWrap: "wrap",
          gap: "10px"
        }}>
          {dailyForecast.map((day, index) => {
            const date = new Date(day.dt * 1000)
            return (
              <div key={index} style={{ textAlign: "center" }}>
                <p style={{ margin: "0", fontSize: "12px", opacity: 0.8 }}>
                  {days[date.getDay()]}
                </p>
                <p style={{ margin: "4px 0", fontSize: "20px" }}>
                  {getWeatherEmoji(day.weather[0].main)}
                </p>
                <p style={{ margin: "0", fontSize: "14px", fontWeight: "bold" }}>
                  {Math.round(day.main.temp)}°C
                </p>
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}

export default WeatherWidget