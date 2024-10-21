export type Campsite = {
    id: string
    name: string
    description: string
    location: string
    elevation: string
    image: string
    reviews: string[]
};

export const campsites: Campsite[] = [
    {
        id: "1",
        name: "Tunnel Mountain Campground",
        location: "Banff, Alberta",
        elevation: "1,540 meters",
        description: "A scenic campground located near the town of Banff, offering stunning views of the surrounding mountains and easy access to hiking trails.",
        image: "tunnel-mountain.jpg",
        reviews: ["Stunning views!", "Great location", "Well-maintained"],
      },
      {
        id: "2",
        name: "Jasper National Park Campground",
        location: "Jasper, Alberta",
        elevation: "1,070 meters",
        description: "Nestled in the heart of Jasper National Park, this campground provides access to breathtaking landscapes, wildlife viewing, and outdoor activities.",
        image: "jasper-national-park.jpg",
        reviews: ["Amazing nature!", "Very quiet", "Beautiful scenery"],
      },
      {
        id: "3",
        name: "Lake Louise Campground",
        location: "Lake Louise, Alberta",
        elevation: "1,600 meters",
        description: "Located next to the famous Lake Louise, this campground offers a picturesque setting with plenty of hiking opportunities and stunning lake views.",
        image: "lake-louise.jpg",
        reviews: ["Gorgeous lake!", "Perfect for hiking", "Family-friendly"],
      },
      {
        id: "4",
        name: "Kananaskis Country Campground",
        location: "Kananaskis, Alberta",
        elevation: "1,200 meters",
        description: "A beautiful campground set in the Kananaskis region, known for its picturesque mountains and abundant recreational activities.",
        image: "kananaskis.jpg",
        reviews: ["Great hiking trails", "Beautiful scenery", "Well-equipped"],
      },
      {
        id: "5",
        name: "Bow Valley Campground",
        location: "Canmore, Alberta",
        elevation: "1,400 meters",
        description: "Located in the Bow Valley, this campground is ideal for those looking to explore Canmore and its nearby hiking trails and ski areas.",
        image: "bow-valley.jpg",
        reviews: ["Awesome location", "Friendly staff", "Great amenities"],
      },
      {
        id: "6",
        name: "Peter Lougheed Provincial Park Campground",
        location: "Kananaskis, Alberta",
        elevation: "1,400 meters",
        description: "A stunning campground in Peter Lougheed Provincial Park, offering a variety of campsites and access to beautiful hiking trails and lakes.",
        image: "peter-lougheed.jpg",
        reviews: ["Beautiful lakes", "Great hiking", "Peaceful atmosphere"],
      },
      {
        id: "7",
        name: "Icefields Parkway Campground",
        location: "Near Jasper, Alberta",
        elevation: "1,600 meters",
        description: "Situated along the iconic Icefields Parkway, this campground provides breathtaking views and access to nearby glaciers and hiking trails.",
        image: "icefields-parkway.jpg",
        reviews: ["Spectacular views", "Great spot for photography", "Quiet and peaceful"],
      },
      {
        id: "8",
        name: "Wabasso Campground",
        location: "Jasper National Park, Alberta",
        elevation: "1,100 meters",
        description: "A peaceful campground located in Jasper National Park, surrounded by forest and wildlife, making it a great spot for nature lovers.",
        image: "wabasso.jpg",
        reviews: ["Very relaxing", "Good wildlife viewing", "Nice facilities"],
      },
      {
        id: "9",
        name: "Maligne Canyon Campground",
        location: "Jasper, Alberta",
        elevation: "1,250 meters",
        description: "Located near the stunning Maligne Canyon, this campground offers beautiful surroundings and access to hiking trails and scenic viewpoints.",
        image: "maligne-canyon.jpg",
        reviews: ["Beautiful area", "Great hiking nearby", "Nice campgrounds"],
      },
      {
        id: "10",
        name: "Sundance Canyon Campground",
        location: "Banff, Alberta",
        elevation: "1,500 meters",
        description: "A scenic campground near Banff, known for its stunning views and access to Sundance Canyon hiking trails.",
        image: "sundance-canyon.jpg",
        reviews: ["Wonderful hiking", "Stunning scenery", "Friendly atmosphere"],
      },
]