function PlaceCard({ place, onSelect, toggleFavourite, favourites }) {
  const isFavourite = favourites?.find(p => p.id === place.id)

  return (
    <div style={{
      border: "1px solid #ddd",
      borderRadius: "10px",
      overflow: "hidden",
      width: "300px",
      boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
      cursor: "pointer",
      position: "relative"
    }}>
      {/* Favourite Button */}
      <button
        onClick={(e) => {
          e.stopPropagation()
          toggleFavourite(place)
        }}
        style={{
          position: "absolute",
          top: "10px",
          right: "10px",
          background: "white",
          border: "none",
          borderRadius: "50%",
          width: "35px",
          height: "35px",
          fontSize: "18px",
          cursor: "pointer",
          boxShadow: "0 2px 5px rgba(0,0,0,0.2)",
          zIndex: 1
        }}
      >
        {isFavourite ? "❤️" : "🤍"}
      </button>

      <div onClick={() => onSelect(place)}>
        <img
          src={place.image}
          alt={place.name}
          style={{ width: "100%", height: "200px", objectFit: "cover" }}
        />
        <div style={{ padding: "15px" }}>
          <h2 style={{ margin: "0 0 8px" }}>{place.name}</h2>
          <p style={{ color: "#666", fontSize: "14px" }}>{place.description}</p>
          <p style={{ color: "#888", fontSize: "13px" }}>
            🕐 Best Time: {place.bestTime}
          </p>
          <p style={{ color: "#888", fontSize: "13px" }}>
            📍 {place.distance}
          </p>
          <div>
            {place.highlights.map((item, index) => (
              <span key={index} style={{
                background: "#e8f5e9",
                color: "#2e7d32",
                padding: "3px 8px",
                borderRadius: "20px",
                fontSize: "12px",
                marginRight: "5px"
              }}>
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default PlaceCard