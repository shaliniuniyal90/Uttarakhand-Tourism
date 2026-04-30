const places = [
  {
    id: 1,
    name: "Rishikesh",
    region: "Garhwal",
    type: "adventure",
    description: "Yoga capital of the world. Famous for river rafting, bungee jumping, and peaceful ghats.",
    bestTime: "September to November",
    distance: "43 km from Dehradun",
    image: "/Uttarakhand-Tourism/images/rishikesh.jpg",
    images: [
      "/Uttarakhand-Tourism/images/rishikesh1.jpg",
      "/Uttarakhand-Tourism/images/rishikesh2.jpg",
      "/Uttarakhand-Tourism/images/rishikesh3.jpg"
    ],
    highlights: ["Laxman Jhula", "River Rafting", "Beatles Ashram"],
    hotels: [
      { name: "Rishikesh Retreat", type: "Hotel", price: "₹2000/night", rating: "⭐⭐⭐⭐" },
      { name: "Ganga View Guest House", type: "Guest House", price: "₹800/night", rating: "⭐⭐⭐" },
      { name: "The Glasshouse", type: "Resort", price: "₹5000/night", rating: "⭐⭐⭐⭐⭐" }
    ],
    restaurants: [
      { name: "Chotiwala Restaurant", type: "Veg", cuisine: "North Indian", price: "₹200-400" },
      { name: "Tip Top Restaurant", type: "Veg/Non-Veg", cuisine: "Multi Cuisine", price: "₹300-600" },
      { name: "Little Buddha Cafe", type: "Cafe", cuisine: "Continental", price: "₹400-800" }
    ]
  },
  {
    id: 2,
    name: "Mussoorie",
    region: "Garhwal",
    type: "hills",
    description: "Queen of Hills. Beautiful viewpoints, colonial charm, and cool weather.",
    bestTime: "March to June",
    distance: "35 km from Dehradun",
    image: "/Uttarakhand-Tourism/images/Mussoorie.jpg",
    images: [
      "/Uttarakhand-Tourism/images/Mussoorie1.jpg",
      "/Uttarakhand-Tourism/images/Mussoorie2.jpg",
      "/Uttarakhand-Tourism/images/Mussoorie3.jpg"
    ],
    highlights: ["Kempty Falls", "Gun Hill", "Mall Road"],
    hotels: [
      { name: "Savoy Hotel", type: "Heritage Hotel", price: "₹4000/night", rating: "⭐⭐⭐⭐⭐" },
      { name: "Hotel Padmini Nivas", type: "Hotel", price: "₹1500/night", rating: "⭐⭐⭐" },
      { name: "The Clouds End Villa", type: "Villa", price: "₹6000/night", rating: "⭐⭐⭐⭐⭐" }
    ],
    restaurants: [
      { name: "Cafe Coffee Day", type: "Cafe", cuisine: "Continental", price: "₹200-400" },
      { name: "Tavern Restaurant", type: "Veg/Non-Veg", cuisine: "Multi Cuisine", price: "₹300-600" },
      { name: "Hangout Restaurant", type: "Veg", cuisine: "North Indian", price: "₹200-500" }
    ]
  },
  {
    id: 3,
    name: "Kedarnath",
    region: "Garhwal",
    type: "temple",
    description: "One of the 12 Jyotirlingas. Sacred temple surrounded by snow-capped peaks.",
    bestTime: "May to June",
    distance: "247 km from Dehradun",
    image: "/Uttarakhand-Tourism/images/kedarnath1.jpg",
    images: [
      "/Uttarakhand-Tourism/images/kedarnath.jpg",
      "/Uttarakhand-Tourism/images/keadrnath2.jpg",
      "/Uttarakhand-Tourism/images/kedarnath3.jpg"
    ],
    highlights: ["Kedarnath Temple", "Vasuki Tal", "Chorabari Lake"],
    hotels: [
      { name: "GMVN Guest House", type: "Guest House", price: "₹1000/night", rating: "⭐⭐⭐" },
      { name: "Kedarnath Camps", type: "Camp", price: "₹800/night", rating: "⭐⭐⭐" },
      { name: "Hotel Shiva", type: "Hotel", price: "₹1500/night", rating: "⭐⭐⭐" }
    ],
    restaurants: [
      { name: "Kedarnath Dhaba", type: "Veg", cuisine: "North Indian", price: "₹100-200" },
      { name: "Prasad Stall", type: "Veg", cuisine: "Simple Food", price: "₹50-150" },
      { name: "Mountain Cafe", type: "Cafe", cuisine: "Simple Food", price: "₹100-300" }
    ]
  },
  {
    id: 4,
    name: "Nainital",
    region: "Kumaon",
    type: "hills",
    description: "City of lakes. Famous for Naini Lake, boating, and scenic viewpoints.",
    bestTime: "March to June",
    distance: "277 km from Dehradun",
    image: "/Uttarakhand-Tourism/images/nainital.jpeg",
    images: [
      "/Uttarakhand-Tourism/images/nainital1.jpg",
      "/Uttarakhand-Tourism/images/nainital2.jpg",
      "/Uttarakhand-Tourism/images/nainital3.jpg"
    ],
    highlights: ["Naini Lake", "Snow View Point", "Naina Devi Temple"],
    hotels: [
      { name: "Manu Maharani Hotel", type: "Heritage Hotel", price: "₹5000/night", rating: "⭐⭐⭐⭐⭐" },
      { name: "Hotel Alka", type: "Hotel", price: "₹1200/night", rating: "⭐⭐⭐" },
      { name: "Sterling Nainital", type: "Resort", price: "₹4000/night", rating: "⭐⭐⭐⭐" }
    ],
    restaurants: [
      { name: "Sakley's Restaurant", type: "Veg/Non-Veg", cuisine: "Continental", price: "₹400-800" },
      { name: "Nainital Boat House", type: "Veg", cuisine: "North Indian", price: "₹300-600" },
      { name: "Embassy Restaurant", type: "Veg/Non-Veg", cuisine: "Multi Cuisine", price: "₹300-700" }
    ]
  },
  {
    id: 5,
    name: "Haridwar",
    region: "Garhwal",
    type: "temple",
    description: "Gateway to God. Famous for Ganga Aarti, ghats, and spiritual energy.",
    bestTime: "October to February",
    distance: "54 km from Dehradun",
    image: "/Uttarakhand-Tourism/images/haridwar1.jpg",
    images: [
      "/Uttarakhand-Tourism/images/haridwar.jpg",
      "/Uttarakhand-Tourism/images/haridwar2.jpg",
      "/Uttarakhand-Tourism/images/haridwar3.jpg"
    ],
    highlights: ["Har Ki Pauri", "Ganga Aarti", "Mansa Devi Temple"],
    hotels: [
      { name: "Haveli Hari Ganga", type: "Heritage Hotel", price: "₹4000/night", rating: "⭐⭐⭐⭐⭐" },
      { name: "Hotel Ganga Lahari", type: "Hotel", price: "₹1500/night", rating: "⭐⭐⭐" },
      { name: "GMVN Tourist Rest House", type: "Guest House", price: "₹800/night", rating: "⭐⭐⭐" }
    ],
    restaurants: [
      { name: "Big Ben Restaurant", type: "Veg", cuisine: "North Indian", price: "₹200-400" },
      { name: "Mohan Ji Puri Wale", type: "Veg", cuisine: "Street Food", price: "₹50-100" },
      { name: "Hoshiyar Puri", type: "Veg", cuisine: "North Indian", price: "₹150-300" }
    ]
  },
  {
    id: 6,
    name: "Auli",
    region: "Garhwal",
    type: "adventure",
    description: "India's best ski resort. Stunning views of Nanda Devi and snow covered slopes.",
    bestTime: "December to February",
    distance: "298 km from Dehradun",
    image: "/Uttarakhand-Tourism/images/Auli.jpg",
    images: [
      "/Uttarakhand-Tourism/images/Auli1.jpg",
      "/Uttarakhand-Tourism/images/Auli2.jpg",
      "/Uttarakhand-Tourism/images/Auli3.jpg"
    ],
    highlights: ["Skiing", "Gorson Bugyal", "Auli Ropeway"],
    hotels: [
      { name: "GMVN Ski Resort", type: "Resort", price: "₹3000/night", rating: "⭐⭐⭐⭐" },
      { name: "Hotel Clifftop Club", type: "Hotel", price: "₹5000/night", rating: "⭐⭐⭐⭐⭐" },
      { name: "Auli Camp", type: "Camp", price: "₹1500/night", rating: "⭐⭐⭐" }
    ],
    restaurants: [
      { name: "GMVN Cafeteria", type: "Veg/Non-Veg", cuisine: "Multi Cuisine", price: "₹200-400" },
      { name: "Ski Lodge Cafe", type: "Cafe", cuisine: "Continental", price: "₹300-600" },
      { name: "Mountain View Dhaba", type: "Veg", cuisine: "North Indian", price: "₹150-300" }
    ]
  },
  {
    id: 7,
    name: "Jim Corbett",
    region: "Kumaon",
    type: "wildlife",
    description: "India's oldest national park. Home to Bengal tigers, elephants, and rich wildlife.",
    bestTime: "November to June",
    distance: "185 km from Dehradun",
    image: "/Uttarakhand-Tourism/images/Jim _Corbett.jpg",
    images: [
      "/Uttarakhand-Tourism/images/Jim_Corbett1.jpg",
      "/Uttarakhand-Tourism/images/Jim_Corbett2.jpg",
      "/Uttarakhand-Tourism/images/Jim_Corbett3.jpg"
    ],
    highlights: ["Tiger Safari", "Dhikala Zone", "Corbett Museum"],
    hotels: [
      { name: "Jim's Jungle Retreat", type: "Resort", price: "₹8000/night", rating: "⭐⭐⭐⭐⭐" },
      { name: "Corbett Hideaway", type: "Resort", price: "₹6000/night", rating: "⭐⭐⭐⭐" },
      { name: "KMVN Tourist Rest House", type: "Guest House", price: "₹1000/night", rating: "⭐⭐⭐" }
    ],
    restaurants: [
      { name: "Corbett Cafe", type: "Veg/Non-Veg", cuisine: "Multi Cuisine", price: "₹300-600" },
      { name: "Jungle View Restaurant", type: "Veg/Non-Veg", cuisine: "North Indian", price: "₹200-500" },
      { name: "Nature's Nest Cafe", type: "Cafe", cuisine: "Continental", price: "₹400-700" }
    ]
  },
  {
    id: 8,
    name: "Dehradun",
    region: "Garhwal",
    type: "hills",
    description: "Capital of Uttarakhand. Gateway to many hill stations with pleasant weather year round.",
    bestTime: "October to June",
    distance: "0 km — You are here!",
    image: "/Uttarakhand-Tourism/images/Dehradun.jpg",
    images: [
      "/Uttarakhand-Tourism/images/Dehradun1.jpg",
      "/Uttarakhand-Tourism/images/Dehradun2.jpg",
      "/Uttarakhand-Tourism/images/Dehradun3.jpg"
    ],
    highlights: ["Robber's Cave", "Sahastradhara", "Mindrolling Monastery"],
    hotels: [
      { name: "Moustache Hostel", type: "Hostel", price: "₹600/night", rating: "⭐⭐⭐⭐" },
      { name: "Hotel Madhuban", type: "Hotel", price: "₹2000/night", rating: "⭐⭐⭐⭐" },
      { name: "Lemon Tree Hotel", type: "Hotel", price: "₹4000/night", rating: "⭐⭐⭐⭐⭐" }
    ],
    restaurants: [
      { name: "Kumar's Restaurant", type: "Veg/Non-Veg", cuisine: "North Indian", price: "₹200-400" },
      { name: "Osho's Bistro", type: "Veg", cuisine: "Continental", price: "₹300-600" },
      { name: "Ellbow Room", type: "Cafe", cuisine: "Multi Cuisine", price: "₹400-800" }
    ]
  },
  {
    id: 9,
    name: "Almora",
    region: "Kumaon",
    type: "hills",
    description: "A charming hill town known for its rich cultural heritage, scenic Himalayan views, and ancient temples.",
    bestTime: "March to June",
    distance: "322 km from Dehradun",
    image: "/Uttarakhand-Tourism/images/Almora.jpg",
    images: [
      "/Uttarakhand-Tourism/images/Almora1.jpg",
      "/Uttarakhand-Tourism/images/Almora2.jpg",
      "/Uttarakhand-Tourism/images/Almora3.jpg"
    ],
    highlights: ["Bright End Corner", "Chitai Temple", "Zero Point"],
    hotels: [
      { name: "Kalimath Hotel", type: "Hotel", price: "₹1200/night", rating: "⭐⭐⭐" },
      { name: "Almora Retreat", type: "Resort", price: "₹3000/night", rating: "⭐⭐⭐⭐" },
      { name: "KMVN Rest House", type: "Guest House", price: "₹800/night", rating: "⭐⭐⭐" }
    ],
    restaurants: [
      { name: "Glory Restaurant", type: "Veg", cuisine: "North Indian", price: "₹150-300" },
      { name: "Madhuban Restaurant", type: "Veg/Non-Veg", cuisine: "Multi Cuisine", price: "₹200-400" },
      { name: "Cafe Dalhousie", type: "Cafe", cuisine: "Continental", price: "₹300-500" }
    ]
  },
  {
    id: 10,
    name: "Badrinath",
    region: "Garhwal",
    type: "temple",
    description: "One of the Char Dham pilgrimage sites. Sacred temple dedicated to Lord Vishnu amidst the Himalayas.",
    bestTime: "May to June",
    distance: "317 km from Dehradun",
    image: "/Uttarakhand-Tourism/images/Badrinath.jpg",
    images: [
      "/Uttarakhand-Tourism/images/Badrinath1.jpg",
      "/Uttarakhand-Tourism/images/Badrinath3.jpg",
      "/Uttarakhand-Tourism/images/Badrinath4.jpg"
    ],
    highlights: ["Badrinath Temple", "Tapt Kund", "Neelkanth Peak"],
    hotels: [
      { name: "GMVN Tourist Rest House", type: "Guest House", price: "₹1000/night", rating: "⭐⭐⭐" },
      { name: "Hotel Devlok", type: "Hotel", price: "₹1500/night", rating: "⭐⭐⭐" },
      { name: "Sarovar Portico", type: "Hotel", price: "₹3000/night", rating: "⭐⭐⭐⭐" }
    ],
    restaurants: [
      { name: "Alaknanda Restaurant", type: "Veg", cuisine: "North Indian", price: "₹100-250" },
      { name: "Narayan Bhoj", type: "Veg", cuisine: "Simple Food", price: "₹80-200" },
      { name: "Pilgrim Cafe", type: "Cafe", cuisine: "Simple Food", price: "₹100-300" }
    ]
  },
  {
    id: 11,
    name: "Chakrata",
    region: "Garhwal",
    type: "hills",
    description: "A serene hill station near Dehradun, known for dense forests, waterfalls, and offbeat trekking trails.",
    bestTime: "April to June",
    distance: "88 km from Dehradun",
    image: "/Uttarakhand-Tourism/images/Chakrata.jpg",
    images: [
      "/Uttarakhand-Tourism/images/Chakrata1.jpg",
      "/Uttarakhand-Tourism/images/Chakrata2.jpg",
      "/Uttarakhand-Tourism/images/Chakrata3.jpg"
    ],
    highlights: ["Tiger Falls", "Deoban Forest", "Chilmiri Neck"],
    hotels: [
      { name: "Forest Rest House", type: "Guest House", price: "₹800/night", rating: "⭐⭐⭐" },
      { name: "Chakrata Camps", type: "Camp", price: "₹1200/night", rating: "⭐⭐⭐" },
      { name: "Hotel Himalayan View", type: "Hotel", price: "₹1500/night", rating: "⭐⭐⭐" }
    ],
    restaurants: [
      { name: "Local Dhaba", type: "Veg", cuisine: "North Indian", price: "₹100-200" },
      { name: "Chakrata Cafe", type: "Cafe", cuisine: "Simple Food", price: "₹150-300" },
      { name: "Mountain Bites", type: "Veg/Non-Veg", cuisine: "Multi Cuisine", price: "₹200-400" }
    ]
  },
  {
    id: 12,
    name: "Chopta",
    region: "Garhwal",
    type: "adventure",
    description: "Mini Switzerland of India. Base camp for Tungnath and Chandrashila trek with stunning meadows.",
    bestTime: "April to November",
    distance: "220 km from Dehradun",
    image: "/Uttarakhand-Tourism/images/Chopta.jpg",
    images: [
      "/Uttarakhand-Tourism/images/Chopta1.jpg",
      "/Uttarakhand-Tourism/images/Chopta2.jpg",
      "/Uttarakhand-Tourism/images/Chopta3.jpg"
    ],
    highlights: ["Tungnath Temple", "Chandrashila Trek", "Deoria Tal"],
    hotels: [
      { name: "Chopta Camps", type: "Camp", price: "₹1000/night", rating: "⭐⭐⭐" },
      { name: "GMVN Rest House", type: "Guest House", price: "₹800/night", rating: "⭐⭐⭐" },
      { name: "Forest Eco Camp", type: "Camp", price: "₹1500/night", rating: "⭐⭐⭐⭐" }
    ],
    restaurants: [
      { name: "Tungnath Dhaba", type: "Veg", cuisine: "Simple Food", price: "₹100-200" },
      { name: "Chopta Cafe", type: "Cafe", cuisine: "Simple Food", price: "₹150-300" },
      { name: "Himalayan Kitchen", type: "Veg", cuisine: "North Indian", price: "₹200-350" }
    ]
  },
  {
    id: 13,
    name: "Dhanaulti",
    region: "Garhwal",
    type: "hills",
    description: "A quiet hill retreat near Mussoorie with dense forests, eco parks, and stunning Himalayan views.",
    bestTime: "March to June",
    distance: "62 km from Dehradun",
    image: "/Uttarakhand-Tourism/images/Dhanaulti.jpg",
    images: [
      "/Uttarakhand-Tourism/images/Dhanaulti1.jpg",
      "/Uttarakhand-Tourism/images/Dhanaulti2.jpg",
      "/Uttarakhand-Tourism/images/Dhanaulti3.jpg"
    ],
    highlights: ["Eco Park", "Surkanda Devi Temple", "Snow Activities"],
    hotels: [
      { name: "Hotel Apple Valley", type: "Hotel", price: "₹2000/night", rating: "⭐⭐⭐⭐" },
      { name: "Dhanaulti Eco Camp", type: "Camp", price: "₹1200/night", rating: "⭐⭐⭐" },
      { name: "GMVN Tourist House", type: "Guest House", price: "₹900/night", rating: "⭐⭐⭐" }
    ],
    restaurants: [
      { name: "Cafe Dhanaulti", type: "Cafe", cuisine: "Continental", price: "₹200-400" },
      { name: "Pine View Restaurant", type: "Veg", cuisine: "North Indian", price: "₹150-300" },
      { name: "Mountain Dhaba", type: "Veg/Non-Veg", cuisine: "Multi Cuisine", price: "₹200-400" }
    ]
  },
  {
    id: 14,
    name: "Gangotri",
    region: "Garhwal",
    type: "temple",
    description: "Origin of the holy river Ganga. A sacred Char Dham site with stunning glacial landscapes.",
    bestTime: "May to June",
    distance: "245 km from Dehradun",
    image: "/Uttarakhand-Tourism/images/Gangotri.jpg",
    images: [
      "/Uttarakhand-Tourism/images/Gangotri1.jpg",
      "/Uttarakhand-Tourism/images/Gangotri2.jpg",
      "/Uttarakhand-Tourism/images/Gangotri3.jpg"
    ],
    highlights: ["Gangotri Temple", "Gaumukh Glacier", "Bhagirathi River"],
    hotels: [
      { name: "GMVN Tourist Bungalow", type: "Guest House", price: "₹900/night", rating: "⭐⭐⭐" },
      { name: "Hotel Gangotri", type: "Hotel", price: "₹1200/night", rating: "⭐⭐⭐" },
      { name: "Pilgrim Rest House", type: "Guest House", price: "₹600/night", rating: "⭐⭐" }
    ],
    restaurants: [
      { name: "Ganga Bhoj", type: "Veg", cuisine: "Simple Food", price: "₹80-200" },
      { name: "Devbhoomi Dhaba", type: "Veg", cuisine: "North Indian", price: "₹100-250" },
      { name: "Glacier Cafe", type: "Cafe", cuisine: "Simple Food", price: "₹150-300" }
    ]
  },
  {
    id: 15,
    name: "Kausani",
    region: "Kumaon",
    type: "hills",
    description: "Switzerland of India. Panoramic views of Himalayan peaks including Nanda Devi and Trishul.",
    bestTime: "March to June",
    distance: "360 km from Dehradun",
    image: "/Uttarakhand-Tourism/images/Kausani.jpg",
    images: [
      "/Uttarakhand-Tourism/images/Kausani1.jpg",
      "/Uttarakhand-Tourism/images/Kausani2.jpg",
      "/Uttarakhand-Tourism/images/Kausani3.jpg"
    ],
    highlights: ["Anasakti Ashram", "Rudradhari Falls", "Sunset Point"],
    hotels: [
      { name: "Hotel Uttarakhand", type: "Hotel", price: "₹1500/night", rating: "⭐⭐⭐" },
      { name: "Kausani Tea Estate Resort", type: "Resort", price: "₹4000/night", rating: "⭐⭐⭐⭐⭐" },
      { name: "KMVN Rest House", type: "Guest House", price: "₹800/night", rating: "⭐⭐⭐" }
    ],
    restaurants: [
      { name: "Uttarakhand Restaurant", type: "Veg", cuisine: "North Indian", price: "₹150-300" },
      { name: "Himalayan Cafe", type: "Cafe", cuisine: "Continental", price: "₹250-450" },
      { name: "Local Dhaba", type: "Veg/Non-Veg", cuisine: "Multi Cuisine", price: "₹100-250" }
    ]
  },
  {
    id: 16,
    name: "Mukteshwar",
    region: "Kumaon",
    type: "hills",
    description: "A peaceful hill station with apple orchards, old Shiva temple, and breathtaking Himalayan views.",
    bestTime: "March to June",
    distance: "298 km from Dehradun",
    image: "/Uttarakhand-Tourism/images/Mukteshwar.jpg",
    images: [
      "/Uttarakhand-Tourism/images/Mukteshwar1.jpg",
      "/Uttarakhand-Tourism/images/Mukteshwar2.jpg",
      "/Uttarakhand-Tourism/images/Mukteshwar3.jpg"
    ],
    highlights: ["Mukteshwar Temple", "Chauli Ki Jali", "Bhalu Gaad Waterfall"],
    hotels: [
      { name: "The Farmhouse", type: "Resort", price: "₹3500/night", rating: "⭐⭐⭐⭐" },
      { name: "Hotel Hilltop", type: "Hotel", price: "₹1500/night", rating: "⭐⭐⭐" },
      { name: "KMVN Rest House", type: "Guest House", price: "₹900/night", rating: "⭐⭐⭐" }
    ],
    restaurants: [
      { name: "Mukteshwar Cafe", type: "Cafe", cuisine: "Continental", price: "₹250-450" },
      { name: "Apple Garden Restaurant", type: "Veg", cuisine: "North Indian", price: "₹200-400" },
      { name: "Mountain View Dhaba", type: "Veg/Non-Veg", cuisine: "Multi Cuisine", price: "₹150-300" }
    ]
  },
  {
    id: 17,
    name: "Uttarkashi",
    region: "Garhwal",
    type: "adventure",
    description: "Gateway to Gangotri and Yamunotri. A trekker's paradise with the Nehru Institute of Mountaineering.",
    bestTime: "April to June",
    distance: "173 km from Dehradun",
    image: "/Uttarakhand-Tourism/images/Uttarkashi.jpg",
    images: [
      "/Uttarakhand-Tourism/images/Uttarkashi1.jpg",
      "/Uttarakhand-Tourism/images/Uttarkashi2.jpg",
      "/Uttarakhand-Tourism/images/Uttarkashi3.jpg"
    ],
    highlights: ["Nehru Institute of Mountaineering", "Vishwanath Temple", "Dodital Lake"],
    hotels: [
      { name: "Hotel Uttarkashi", type: "Hotel", price: "₹1200/night", rating: "⭐⭐⭐" },
      { name: "GMVN Tourist Rest House", type: "Guest House", price: "₹800/night", rating: "⭐⭐⭐" },
      { name: "River Camp Uttarkashi", type: "Camp", price: "₹1500/night", rating: "⭐⭐⭐⭐" }
    ],
    restaurants: [
      { name: "Bhagirathi Restaurant", type: "Veg/Non-Veg", cuisine: "North Indian", price: "₹150-300" },
      { name: "Trekker's Cafe", type: "Cafe", cuisine: "Simple Food", price: "₹100-250" },
      { name: "Himalayan Dhaba", type: "Veg", cuisine: "North Indian", price: "₹100-200" }
    ]
  },
  {
    id: 18,
    name: "Yamunotri",
    region: "Garhwal",
    type: "temple",
    description: "Source of the Yamuna river and one of the Char Dham sites. Sacred pilgrimage surrounded by glaciers.",
    bestTime: "May to June",
    distance: "175 km from Dehradun",
    image: "/Uttarakhand-Tourism/images/Yamunotri.jpg",
    images: [
      "/Uttarakhand-Tourism/images/Yamunotri1.jpg",
      "/Uttarakhand-Tourism/images/Yamunotri2.jpg",
      "/Uttarakhand-Tourism/images/Yamunotri3.jpg"
    ],
    highlights: ["Yamunotri Temple", "Surya Kund", "Divya Shila"],
    hotels: [
      { name: "GMVN Tourist Bungalow", type: "Guest House", price: "₹900/night", rating: "⭐⭐⭐" },
      { name: "Hotel Yamunotri", type: "Hotel", price: "₹1200/night", rating: "⭐⭐⭐" },
      { name: "Pilgrim Camp", type: "Camp", price: "₹700/night", rating: "⭐⭐" }
    ],
    restaurants: [
      { name: "Yamuna Bhoj", type: "Veg", cuisine: "Simple Food", price: "₹80-200" },
      { name: "Char Dham Dhaba", type: "Veg", cuisine: "North Indian", price: "₹100-250" },
      { name: "Pilgrim Kitchen", type: "Veg", cuisine: "Simple Food", price: "₹80-150" }
    ]
  },
  {
    id: 19,
    name: "Tehri",
    region: "Garhwal",
    type: "adventure",
    description: "Home to Asia's largest dam. Famous for water sports, bungee jumping, and stunning lake views.",
    bestTime: "October to June",
    distance: "100 km from Dehradun",
    image: "/Uttarakhand-Tourism/images/Tehri.jpg",
    images: [
      "/Uttarakhand-Tourism/images/Tehri1.jpg",
      "/Uttarakhand-Tourism/images/Tehri2.jpg",
      "/Uttarakhand-Tourism/images/Tehri3.jpg"
    ],
    highlights: ["Tehri Dam", "Water Sports", "Bungee Jumping"],
    hotels: [
      { name: "Tehri Lake Resort", type: "Resort", price: "₹4000/night", rating: "⭐⭐⭐⭐⭐" },
      { name: "Hotel Lake View", type: "Hotel", price: "₹1500/night", rating: "⭐⭐⭐" },
      { name: "GMVN Rest House", type: "Guest House", price: "₹900/night", rating: "⭐⭐⭐" }
    ],
    restaurants: [
      { name: "Lakeside Cafe", type: "Cafe", cuisine: "Continental", price: "₹300-600" },
      { name: "Tehri Dhaba", type: "Veg/Non-Veg", cuisine: "North Indian", price: "₹150-300" },
      { name: "Dam View Restaurant", type: "Veg", cuisine: "Multi Cuisine", price: "₹200-400" }
    ]
  },
  {
    id: 20,
    name: "Lansdowne",
    region: "Garhwal",
    type: "hills",
    description: "A peaceful cantonment hill town with colonial charm, dense oak forests, and stunning views of the Himalayas.",
    bestTime: "October to June",
    distance: "145 km from Dehradun",
    image: "/Uttarakhand-Tourism/images/lansdowne.jpg",
    images: [
      "/Uttarakhand-Tourism/images/lansdowne1.jpg",
      "/Uttarakhand-Tourism/images/lansdowne2.jpg",
      "/Uttarakhand-Tourism/images/lansdowne3.jpg"
    ],
    highlights: ["Tip N Top Point", "Bhim Pakora", "War Memorial"],
    hotels: [
      { name: "Hotel Meghna", type: "Hotel", price: "₹1200/night", rating: "⭐⭐⭐" },
      { name: "Trishul Hotel", type: "Hotel", price: "₹1800/night", rating: "⭐⭐⭐⭐" },
      { name: "GMVN Rest House", type: "Guest House", price: "₹800/night", rating: "⭐⭐⭐" }
    ],
    restaurants: [
      { name: "Cafe Lansdowne", type: "Cafe", cuisine: "Continental", price: "₹200-400" },
      { name: "Garhwal Dhaba", type: "Veg", cuisine: "North Indian", price: "₹100-250" },
      { name: "Green Valley Restaurant", type: "Veg/Non-Veg", cuisine: "Multi Cuisine", price: "₹200-400" }
    ]
  },
  {
    id: 21,
    name: "Ranikhet",
    region: "Kumaon",
    type: "hills",
    description: "Queen's Field — a serene cantonment town with apple orchards, golf course, and panoramic Himalayan views.",
    bestTime: "March to June",
    distance: "330 km from Dehradun",
    image: "/Uttarakhand-Tourism/images/Ranikhet.jpg",
    images: [
      "/Uttarakhand-Tourism/images/Ranikhet1.jpg",
      "/Uttarakhand-Tourism/images/Ranikhet2.jpg",
      "/Uttarakhand-Tourism/images/Ranikhet3.jpg"
    ],
    highlights: ["Chaubatia Gardens", "Golf Course", "Jhula Devi Temple"],
    hotels: [
      { name: "Hotel Moon", type: "Hotel", price: "₹1500/night", rating: "⭐⭐⭐" },
      { name: "Ranikhet Retreat", type: "Resort", price: "₹3500/night", rating: "⭐⭐⭐⭐" },
      { name: "KMVN Rest House", type: "Guest House", price: "₹900/night", rating: "⭐⭐⭐" }
    ],
    restaurants: [
      { name: "Chaubatia Cafe", type: "Cafe", cuisine: "Continental", price: "₹250-450" },
      { name: "Kumaon Kitchen", type: "Veg", cuisine: "North Indian", price: "₹150-300" },
      { name: "Apple Garden Restaurant", type: "Veg/Non-Veg", cuisine: "Multi Cuisine", price: "₹200-400" }
    ]
  }
  
]

export default places