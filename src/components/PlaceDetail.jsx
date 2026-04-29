import { useState } from 'react'
import WeatherWidget from './WeatherWidget'

function PlaceDetail({ place, onBack }) {
  const [activeImage, setActiveImage] = useState(0)

  return (
    <div style={{ maxWidth: "800px", margin: "30px auto", padding: "20px" }}>
      <button
        onClick={onBack}
        style={{
          background: "#1a5276",
          color: "white",
          border: "none",
          padding: "10px 20px",
          borderRadius: "20px",
          cursor: "pointer",
          fontSize: "14px",
          marginBottom: "20px"
        }}
      >
        ← Back to Places
      </button>

      {/* Main Image */}
      <img
        src={place.images[activeImage]}
        alt={place.name}
        style={{ width: "100%", height: "400px", objectFit: "cover", borderRadius: "15px" }}
      />

      {/* Thumbnails */}
      <div style={{ display: "flex", gap: "10px", marginTop: "10px" }}>
        {place.images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`${place.name} ${index + 1}`}
            onClick={() => setActiveImage(index)}
            style={{
              width: "100px",
              height: "70px",
              objectFit: "cover",
              borderRadius: "8px",
              cursor: "pointer",
              border: activeImage === index ? "3px solid #1a5276" : "3px solid transparent",
              opacity: activeImage === index ? 1 : 0.7
            }}
          />
        ))}
      </div>

      <h1 style={{ color: "#1a5276", marginTop: "20px" }}>{place.name}</h1>

      <WeatherWidget cityName={place.name} />

      <p style={{ color: "#666", fontSize: "16px" }}>{place.description}</p>

      {/* Details */}
      <div style={{ background: "#f0f8ff", padding: "15px", borderRadius: "10px", margin: "20px 0" }}>
        <h3 style={{ color: "#1a5276" }}>📍 Details</h3>
        <p>🗺️ Region: {place.region}</p>
        <p>🕐 Best Time to Visit: {place.bestTime}</p>
        <p>🏷️ Type: {place.type}</p>
        <p>📍 Distance: {place.distance}</p>
      </div>

      {/* Highlights */}
      <div style={{ marginBottom: "25px" }}>
        <h3 style={{ color: "#1a5276" }}>⭐ Highlights</h3>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
          {place.highlights.map((item, index) => (
            <span key={index} style={{
              background: "#e8f5e9",
              color: "#2e7d32",
              padding: "8px 16px",
              borderRadius: "20px",
              fontSize: "14px",
              fontWeight: "bold"
            }}>
              ✓ {item}
            </span>
          ))}
        </div>
      </div>

      {/* Hotels */}
      <div style={{ marginBottom: "25px" }}>
        <h3 style={{ color: "#1a5276" }}>🏨 Where to Stay</h3>
        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          {place.hotels.map((hotel, index) => (
            <div key={index} style={{
              background: "#fff8e1",
              padding: "12px 16px",
              borderRadius: "10px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center"
            }}>
              <div>
                <strong>{hotel.name}</strong>
                <p style={{ margin: "2px 0", color: "#666", fontSize: "13px" }}>{hotel.type} • {hotel.rating}</p>
              </div>
              <span style={{ color: "#1a5276", fontWeight: "bold" }}>{hotel.price}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Restaurants */}
      <div style={{ marginBottom: "25px" }}>
        <h3 style={{ color: "#1a5276" }}>🍽️ Where to Eat</h3>
        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          {place.restaurants.map((rest, index) => (
            <div key={index} style={{
              background: "#fce4ec",
              padding: "12px 16px",
              borderRadius: "10px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center"
            }}>
              <div>
                <strong>{rest.name}</strong>
                <p style={{ margin: "2px 0", color: "#666", fontSize: "13px" }}>{rest.type} • {rest.cuisine}</p>
              </div>
              <span style={{ color: "#c62828", fontWeight: "bold" }}>{rest.price}</span>
            </div>
          ))}
        </div>
      </div>

    </div>
  )
}

export default PlaceDetail