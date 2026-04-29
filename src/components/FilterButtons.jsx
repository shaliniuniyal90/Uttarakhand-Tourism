function FilterButtons({ activeFilter, setActiveFilter }) {
  const filters = ["All", "hills", "temple", "adventure", "wildlife"]

  return (
    <div style={{ textAlign: "center", margin: "15px 0" }}>
      {filters.map((filter) => (
        <button
          key={filter}
          onClick={() => setActiveFilter(filter)}
          style={{
            margin: "5px",
            padding: "8px 20px",
            borderRadius: "20px",
            border: "2px solid #1a5276",
            background: activeFilter === filter ? "#1a5276" : "white",
            color: activeFilter === filter ? "white" : "#1a5276",
            cursor: "pointer",
            fontSize: "14px",
            fontWeight: "bold"
          }}
        >
          {filter === "All" ? "🌐 All" : 
           filter === "hills" ? "⛰️ Hills" :
           filter === "temple" ? "🛕 Temple" :
           filter === "adventure" ? "🎯 Adventure" : "🐯 Wildlife"}
        </button>
      ))}
    </div>
  )
}

export default FilterButtons

