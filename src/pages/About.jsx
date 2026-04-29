function About() {
  return (
    <div>
      {/* Hero */}
      <div style={{
        background: "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1600')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "350px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        color: "white",
        textAlign: "center"
      }}>
        <h1 style={{ fontSize: "42px", margin: "0 0 10px" }}>About Uttarakhand Tourism</h1>
        <p style={{ fontSize: "18px", opacity: 0.9, maxWidth: "600px" }}>
          Your complete guide to exploring Dev Bhoomi
        </p>
      </div>

      {/* Content */}
      <div style={{ maxWidth: "900px", margin: "50px auto", padding: "0 20px" }}>

        {/* About Uttarakhand */}
        <div style={{ marginBottom: "40px" }}>
          <h2 style={{ color: "#1a5276", fontSize: "28px", borderBottom: "2px solid #1a5276", paddingBottom: "10px" }}>
            About Uttarakhand
          </h2>
          <p style={{ color: "#555", fontSize: "16px", lineHeight: "1.9", marginTop: "15px" }}>
            Uttarakhand, known as <strong>Dev Bhoomi (Land of Gods)</strong>, is a state in northern India 
            nestled in the majestic Himalayas. It is renowned for its breathtaking natural landscapes, 
            ancient temples, rich biodiversity, and thrilling adventure sports. From the spiritual ghats 
            of Haridwar to the snow-clad slopes of Auli, Uttarakhand offers an unmatched experience 
            for every kind of traveler.
          </p>
        </div>

        {/* Quick Facts */}
        <div style={{ marginBottom: "40px" }}>
          <h2 style={{ color: "#1a5276", fontSize: "28px", borderBottom: "2px solid #1a5276", paddingBottom: "10px" }}>
            Quick Facts
          </h2>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "15px",
            marginTop: "20px"
          }}>
            {[
              { label: "Location", value: "Northern India, Himalayan Region" },
              { label: "Capital", value: "Dehradun" },
              { label: "Language", value: "Hindi, Garhwali, Kumaoni" },
              { label: "Climate", value: "Varies from tropical to alpine" },
              { label: "Nearest Airport", value: "Jolly Grant Airport, Dehradun" },
              { label: "Famous For", value: "Char Dham, Jim Corbett, River Rafting" }
            ].map((fact, index) => (
              <div key={index} style={{
                background: "#f0f8ff",
                padding: "15px 20px",
                borderRadius: "10px",
                borderLeft: "4px solid #1a5276"
              }}>
                <p style={{ color: "#888", fontSize: "13px", margin: "0 0 5px" }}>{fact.label}</p>
                <p style={{ color: "#1a5276", fontSize: "15px", fontWeight: "bold", margin: "0" }}>{fact.value}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Best Time to Visit */}
        <div style={{ marginBottom: "40px" }}>
          <h2 style={{ color: "#1a5276", fontSize: "28px", borderBottom: "2px solid #1a5276", paddingBottom: "10px" }}>
            Best Time to Visit
          </h2>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "15px",
            marginTop: "20px"
          }}>
            {[
              { season: "Summer", months: "March to June", desc: "Pleasant weather, ideal for hill stations and trekking" },
              { season: "Monsoon", months: "July to September", desc: "Lush greenery, avoid landslide prone areas" },
              { season: "Autumn", months: "October to November", desc: "Clear skies, best for wildlife and photography" },
              { season: "Winter", months: "December to February", desc: "Snow activities, skiing in Auli" }
            ].map((item, index) => (
              <div key={index} style={{
                background: "white",
                padding: "20px",
                borderRadius: "10px",
                boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
                borderTop: "3px solid #1a5276"
              }}>
                <h3 style={{ color: "#1a5276", margin: "0 0 5px" }}>{item.season}</h3>
                <p style={{ color: "#888", fontSize: "13px", margin: "0 0 8px" }}>{item.months}</p>
                <p style={{ color: "#555", fontSize: "14px", margin: "0" }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* About Website */}
        <div style={{ marginBottom: "40px" }}>
          <h2 style={{ color: "#1a5276", fontSize: "28px", borderBottom: "2px solid #1a5276", paddingBottom: "10px" }}>
            About This Website
          </h2>
          <p style={{ color: "#555", fontSize: "16px", lineHeight: "1.9", marginTop: "15px" }}>
            This tourism guide was developed to help travelers explore the best destinations in Uttarakhand. 
            It features real-time weather updates, curated place information, hotel and restaurant suggestions, 
            and an easy-to-use interface to plan your perfect trip.
          </p>
          <div style={{
            background: "#f0f8ff",
            padding: "20px",
            borderRadius: "10px",
            marginTop: "20px",
            borderLeft: "4px solid #1a5276"
          }}>
            <p style={{ margin: "0 0 8px", color: "#555" }}>Technology: <strong>React.js, OpenWeather API, React Router</strong></p>
            <p style={{ margin: "0", color: "#555" }}>Purpose: <strong>Portfolio Project — Uttarakhand Travel Guide</strong></p>
          </div>
        </div>

      </div>
    </div>
  )
}

export default About