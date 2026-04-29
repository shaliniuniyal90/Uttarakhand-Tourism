import { useState } from 'react'
import places from '../data/places'
import PlaceCard from '../components/PlaceCard'
import SearchBar from '../components/SearchBar'
import FilterButtons from '../components/FilterButtons'
import PlaceDetail from '../components/PlaceDetail'

function Places({ toggleFavourite, favourites }) {
  const [searchTerm, setSearchTerm] = useState("")
  const [activeFilter, setActiveFilter] = useState("All")
  const [selectedPlace, setSelectedPlace] = useState(null)

  const filteredPlaces = places.filter((place) => {
    const matchesSearch = place.name.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesFilter = activeFilter === "All" || place.type === activeFilter
    return matchesSearch && matchesFilter
  })

  return (
    <div>
      {selectedPlace ? (
        <PlaceDetail place={selectedPlace} onBack={() => setSelectedPlace(null)} />
      ) : (
        <div>
          {/* Hero */}
          <div style={{
            background: "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1600')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "280px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            color: "white",
            textAlign: "center",
            padding: "20px"
          }}>
            <h1 style={{ fontSize: "40px", margin: "0 0 10px", fontWeight: "600" }}>
              Explore Uttarakhand
            </h1>
            <p style={{ fontSize: "16px", opacity: 0.85, maxWidth: "500px", margin: "0" }}>
              Discover mountains, temples, adventure spots and wildlife sanctuaries
            </p>
          </div>

          {/* Search + Filter */}
          <div style={{
            background: "white",
            padding: "25px 20px",
            boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
            position: "sticky",
            top: "0",
            zIndex: 10
          }}>
            <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
            <FilterButtons activeFilter={activeFilter} setActiveFilter={setActiveFilter} />
          </div>

          {/* Results Count */}
          <div style={{ maxWidth: "1100px", margin: "25px auto 0", padding: "0 20px" }}>
            <p style={{ color: "#888", fontSize: "14px" }}>
              Showing <strong style={{ color: "#1a5276" }}>{filteredPlaces.length}</strong> destinations
            </p>
          </div>

          {/* Places Grid */}
          <div style={{
            maxWidth: "1100px",
            margin: "15px auto 40px",
            padding: "0 20px",
            display: "flex",
            flexWrap: "wrap",
            gap: "25px",
            justifyContent: "center"
          }}>
            {filteredPlaces.length > 0 ? (
              filteredPlaces.map((place) => (
                <PlaceCard
                  key={place.id}
                  place={place}
                  onSelect={setSelectedPlace}
                  toggleFavourite={toggleFavourite}
                  favourites={favourites}
                />
              ))
            ) : (
              <div style={{ textAlign: "center", padding: "60px 20px" }}>
                <p style={{ fontSize: "40px", marginBottom: "15px" }}>🔍</p>
                <h2 style={{ color: "#1a5276", marginBottom: "10px" }}>No places found</h2>
                <p style={{ color: "#888", fontSize: "15px" }}>
                  Try a different search term or filter
                </p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  )
}

export default Places