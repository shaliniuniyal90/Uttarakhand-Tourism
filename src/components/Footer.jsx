function Footer() {
  return (
    <footer style={{
      background: "#1a5276",
      color: "white",
      textAlign: "center",
      padding: "30px 20px",
      marginTop: "40px"
    }}>
      <p style={{ fontSize: "20px", marginBottom: "10px" }}>🏔️ Uttarakhand Tourism</p>
      <p style={{ opacity: 0.8, fontSize: "14px", marginBottom: "10px" }}>
        Explore the beauty of Dev Bhoomi — Land of Gods
      </p>
      <div style={{ display: "flex", justifyContent: "center", gap: "20px", marginBottom: "15px" }}>
        <span>⛰️ Mountains</span>
        <span>🛕 Temples</span>
        <span>🎯 Adventure</span>
        <span>🐯 Wildlife</span>
      </div>
      <hr style={{ opacity: 0.3, margin: "15px 0" }} />
      <p style={{ opacity: 0.7, fontSize: "13px" }}>
        Built with ❤️ by <strong>Shalini Uniyal</strong> | React.js + OpenWeather API
      </p>
      <p style={{ opacity: 0.5, fontSize: "12px", marginTop: "5px" }}>
        © 2026 Uttarakhand Tourism. All rights reserved.
      </p>
    </footer>
  )
}

export default Footer