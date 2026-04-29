import PlaceCard from '../components/PlaceCard'

function Favourites({ favourites, toggleFavourite }) {
  return (
    <div>
      {/* Hero */}
      <div style={{
        background: "linear-gradient(rgba(26,82,118,0.9), rgba(26,82,118,0.7)), url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1600')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "220px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        color: "white",
        textAlign: "center"
      }}>
        <h1 style={{ fontSize: "36px", margin: "0 0 10px", fontWeight: "600" }}>
          Saved Places
        </h1>
        <p style={{ fontSize: "16px", opacity: 0.85, margin: "0" }}>
          {favourites.length === 0
            ? "You have not saved any places yet"
            : `You have saved ${favourites.length} ${favourites.length === 1 ? 'place' : 'places'}`}
        </p>
      </div>

      {/* Content */}
      <div style={{ padding: "40px 20px", maxWidth: "1100px", margin: "0 auto" }}>
        {favourites.length === 0 ? (
          <div style={{ textAlign: "center", padding: "60px 20px" }}>
            <p style={{ fontSize: "48px", marginBottom: "15px" }}>♡</p>
            <h2 style={{ color: "#1a5276", marginBottom: "10px" }}>No saved places yet</h2>
            <p style={{ color: "#888", fontSize: "15px" }}>
              Browse places and click the heart icon to save them here.
            </p>
          </div>
        ) : (
          <div style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "20px",
            justifyContent: "center"
          }}>
            {favourites.map((place) => (
              <PlaceCard
                key={place.id}
                place={place}
                onSelect={() => {}}
                toggleFavourite={toggleFavourite}
                favourites={favourites}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default Favourites