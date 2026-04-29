import { Link } from 'react-router-dom'

function Navbar({ favouriteCount }) {
  return (
    <nav style={{
      background: "#1a5276",
      padding: "15px 30px",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      boxShadow: "0 2px 10px rgba(0,0,0,0.2)"
    }}>
      <Link to="/" onClick={() => window.location.href = '/'} style={{ color: "white", fontSize: "22px", fontWeight: "bold", textDecoration: "none" }}>
        🏔️ Uttarakhand Tourism
      </Link>
      <div style={{ display: "flex", gap: "25px", alignItems: "center" }}>
        <Link to="/" onClick={() => window.location.href = '/'} style={{ color: "white", textDecoration: "none", fontSize: "16px", opacity: 0.9 }}>Home</Link>
        <Link to="/places" style={{ color: "white", textDecoration: "none", fontSize: "16px", opacity: 0.9 }}>Places</Link>
        <Link to="/about" style={{ color: "white", textDecoration: "none", fontSize: "16px", opacity: 0.9 }}>About</Link>
        <Link to="/favourites" style={{
          color: "white",
          textDecoration: "none",
          fontSize: "14px",
          display: "flex",
          alignItems: "center",
          gap: "6px",
          background: "rgba(255,255,255,0.15)",
          padding: "7px 16px",
          borderRadius: "25px",
          border: "1px solid rgba(255,255,255,0.3)",
          backdropFilter: "blur(4px)"
        }}>
          <span style={{ fontSize: "16px" }}>♡</span>
          <span>Saved</span>
          {favouriteCount > 0 && (
            <span style={{
              background: "white",
              color: "#1a5276",
              borderRadius: "50%",
              width: "20px",
              height: "20px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "12px",
              fontWeight: "bold"
            }}>
              {favouriteCount}
            </span>
          )}
        </Link>
      </div>
    </nav>
  )
}

export default Navbar