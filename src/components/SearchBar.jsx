function SearchBar({ searchTerm, setSearchTerm }) {
  return (
    <div style={{ textAlign: "center", margin: "20px 0" }}>
      <input
        type="text"
        placeholder="🔍 Search places..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{
          padding: "12px 20px",
          width: "400px",
          borderRadius: "25px",
          border: "2px solid #1a5276",
          fontSize: "16px",
          outline: "none"
        }}
      />
    </div>
  )
}

export default SearchBar