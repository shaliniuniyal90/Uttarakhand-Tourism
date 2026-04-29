import { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import places from '../data/places'
import PlaceCard from '../components/PlaceCard'
import PlaceDetail from '../components/PlaceDetail'

function Home({ toggleFavourite, favourites }) {
  const navigate = useNavigate()
  const location = useLocation()
  const [selectedPlace, setSelectedPlace] = useState(null)

  useState(() => {
    setSelectedPlace(null)
  }, [location])

  if (selectedPlace) {
    return <PlaceDetail place={selectedPlace} onBack={() => setSelectedPlace(null)} />
  }

  return (
    <div>
      {/* Hero Banner */}
      <div style={{
        background: "linear-gradient(rgba(0,0,0,0.45), rgba(0,0,0,0.45)), url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1600')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        color: "white",
        textAlign: "center",
        padding: "20px"
      }}>
        <p style={{ fontSize: "13px", letterSpacing: "4px", opacity: 0.8, marginBottom: "15px", textTransform: "uppercase" }}>
          Welcome to Dev Bhoomi
        </p>
        <h1 style={{ fontSize: "60px", margin: "0 0 15px", fontWeight: "700", lineHeight: "1.2" }}>
          Uttarakhand
        </h1>
        <p style={{ fontSize: "20px", margin: "0 0 10px", opacity: 0.9, fontWeight: "300" }}>
          Land of Gods — Heart of the Himalayas
        </p>
        <p style={{ fontSize: "15px", margin: "0 0 45px", opacity: 0.75, maxWidth: "550px", lineHeight: "1.7" }}>
          From sacred temples to snow-clad peaks, from roaring rivers to dense forests — discover the soul of India's most beautiful state.
        </p>
        <div style={{ display: "flex", gap: "15px", flexWrap: "wrap", justifyContent: "center" }}>
          <button
            onClick={() => navigate('/places')}
            style={{
              background: "white",
              color: "#1a5276",
              padding: "14px 35px",
              borderRadius: "30px",
              border: "none",
              fontSize: "16px",
              fontWeight: "600",
              cursor: "pointer",
              letterSpacing: "0.5px"
            }}
          >
            Explore Places
          </button>
          <button
            onClick={() => navigate('/about')}
            style={{
              background: "transparent",
              color: "white",
              padding: "14px 35px",
              borderRadius: "30px",
              border: "1.5px solid rgba(255,255,255,0.7)",
              fontSize: "16px",
              fontWeight: "400",
              cursor: "pointer"
            }}
          >
            Learn More
          </button>
        </div>

        {/* Stats */}
        <div style={{
          display: "flex",
          gap: "50px",
          marginTop: "70px",
          flexWrap: "wrap",
          justifyContent: "center",
          borderTop: "1px solid rgba(255,255,255,0.2)",
          paddingTop: "30px"
        }}>
          {[
            { num: "20+", label: "Destinations" },
            { num: "4", label: "Categories" },
            { num: "∞", label: "Memories" }
          ].map((stat, i) => (
            <div key={i} style={{ textAlign: "center" }}>
              <div style={{ fontSize: "32px", fontWeight: "700" }}>{stat.num}</div>
              <div style={{ fontSize: "12px", opacity: 0.7, letterSpacing: "2px", textTransform: "uppercase", marginTop: "4px" }}>{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Why Visit */}
      <div style={{ padding: "80px 20px", textAlign: "center", background: "#fafafa" }}>
        <p style={{ fontSize: "12px", letterSpacing: "3px", color: "#1a5276", textTransform: "uppercase", marginBottom: "10px" }}>Why Uttarakhand</p>
        <h2 style={{ color: "#1a3a4a", fontSize: "34px", fontWeight: "600", margin: "0 0 10px" }}>
          Something for Every Traveler
        </h2>
        <p style={{ color: "#888", fontSize: "15px", marginBottom: "45px" }}>
          Experience the diversity of Dev Bhoomi
        </p>
        <div style={{ display: "flex", justifyContent: "center", gap: "20px", flexWrap: "wrap", maxWidth: "900px", margin: "0 auto" }}>
          {[
            { icon: "⛰️", title: "Mountains", desc: "Snow-capped peaks, valleys, and scenic trekking routes across the Himalayas" },
            { icon: "🛕", title: "Spirituality", desc: "Ancient temples, sacred ghats, and the divine Ganga Aarti of Haridwar" },
            { icon: "🎯", title: "Adventure", desc: "River rafting, bungee jumping, skiing, and camping in the wild" },
            { icon: "🐯", title: "Wildlife", desc: "Bengal tigers, elephants, and rare species in Jim Corbett National Park" }
          ].map((item, index) => (
            <div key={index} style={{
              background: "white",
              padding: "35px 25px",
              borderRadius: "12px",
              width: "190px",
              boxShadow: "0 4px 15px rgba(0,0,0,0.06)",
              borderTop: "3px solid #1a5276"
            }}>
              <div style={{ fontSize: "36px", marginBottom: "12px" }}>{item.icon}</div>
              <h3 style={{ color: "#1a3a4a", fontSize: "17px", margin: "0 0 10px", fontWeight: "600" }}>{item.title}</h3>
              <p style={{ color: "#888", fontSize: "13px", lineHeight: "1.7", margin: "0" }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Featured Places */}
      <div style={{ padding: "80px 20px", textAlign: "center", background: "white" }}>
        <p style={{ fontSize: "12px", letterSpacing: "3px", color: "#1a5276", textTransform: "uppercase", marginBottom: "10px" }}>Top Picks</p>
        <h2 style={{ color: "#1a3a4a", fontSize: "34px", fontWeight: "600", margin: "0 0 10px" }}>
          Featured Destinations
        </h2>
        <p style={{ color: "#888", fontSize: "15px", marginBottom: "45px" }}>
          Most loved places in Uttarakhand
        </p>
        <div style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "25px",
          justifyContent: "center",
          maxWidth: "1100px",
          margin: "0 auto"
        }}>
          {places.slice(0, 4).map((place) => (
            <PlaceCard
              key={place.id}
              place={place}
              onSelect={setSelectedPlace}
              toggleFavourite={toggleFavourite}
              favourites={favourites}
            />
          ))}
        </div>
        <button
          onClick={() => navigate('/places')}
          style={{
            background: "#1a5276",
            color: "white",
            padding: "14px 35px",
            borderRadius: "30px",
            border: "none",
            fontSize: "15px",
            cursor: "pointer",
            marginTop: "40px",
            fontWeight: "500",
            letterSpacing: "0.5px"
          }}
        >
          View All Destinations
        </button>
      </div>

      {/* CTA Section */}
      <div style={{
        background: "linear-gradient(rgba(26,82,118,0.92), rgba(26,82,118,0.92)), url('https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=1600')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        padding: "80px 20px",
        textAlign: "center",
        color: "white"
      }}>
        <h2 style={{ fontSize: "36px", margin: "0 0 15px", fontWeight: "600" }}>
          Ready to Explore?
        </h2>
        <p style={{ fontSize: "16px", opacity: 0.85, margin: "0 0 35px", maxWidth: "500px", marginLeft: "auto", marginRight: "auto" }}>
          Plan your perfect Uttarakhand trip today. Discover destinations, check weather, and save your favourites.
        </p>
        <button
          onClick={() => navigate('/places')}
          style={{
            background: "white",
            color: "#1a5276",
            padding: "14px 40px",
            borderRadius: "30px",
            border: "none",
            fontSize: "16px",
            fontWeight: "600",
            cursor: "pointer"
          }}
        >
          Start Exploring
        </button>
      </div>
    </div>
  )
}

export default Home