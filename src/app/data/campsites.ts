// app/data/campsites.ts

export type Review = {
    id: string;
    name: string;
    comment: string;
    timestamp: string;
  };
  
  export type Campsite = {
    id: string;
    key: string;
    name: string;
    location: string;
    elevation: string;
    description: string;
    scenicImage: string; 
    campsiteImage: string;
    reviews: Review[]; 
  };
  
  export const campsites: Campsite[] = [
    {
      id: "1",
      key: "1",
      name: "Tunnel Mountain Campground",
      location: "Banff, Alberta",
      elevation: "1,540 meters",
      description: "A scenic campground located near the town of Banff, offering stunning views of the surrounding mountains and easy access to hiking trails.",
      scenicImage: "tunnel-mountain-scenic.webp",
      campsiteImage: "tunnel-mountain-campsite.jpg",
      reviews: [
        {
          id: "review1",
          name: "Sarah Johnson",
          comment: "Stunning views! A great place to unwind and connect with nature.",
          timestamp: "2022-06-14",
        },
        {
          id: "review2",
          name: "Mark Thompson",
          comment: "Great location with lots of nearby hiking trails. Highly recommend!",
          timestamp: "2023-03-21",
        },
        {
          id: "review3",
          name: "Jessica Miller",
          comment: "The sunset views are breathtaking! Will definitely come back.",
          timestamp: "2023-07-09",
        },
      ],
    },
    {
      id: "2",
      key: "2",
      name: "Jasper National Park Campground",
      location: "Jasper, Alberta",
      elevation: "1,070 meters",
      description: "Nestled in the heart of Jasper National Park, this campground provides access to breathtaking landscapes, wildlife viewing, and outdoor activities.",
      scenicImage: "jasper-scenic.jpg",
      campsiteImage: "jasper-campground-campsite.webp",
      reviews: [
        {
          id: "review4",
          name: "Emily Davis",
          comment: "Amazing nature! The wildlife sightings were unforgettable.",
          timestamp: "2023-10-05",
        },
        {
          id: "review5",
          name: "John Smith",
          comment: "Very quiet and peaceful. Perfect for a weekend getaway.",
          timestamp: "2021-12-30",
        },
        {
          id: "review6",
          name: "Alice Brown",
          comment: "Stargazing at night was incredible! A hidden gem.",
          timestamp: "2023-08-15",
        },
        {
          id: "review7",
          name: "Robert Wilson",
          comment: "Lots of trails and beautiful scenery. Can’t wait to return!",
          timestamp: "2022-11-27",
        },
      ],
    },
    {
      id: "3",
      key: "3",
      name: "Lake Louise Campground",
      location: "Lake Louise, Alberta",
      elevation: "1,600 meters",
      description: "Located next to the famous Lake Louise, this campground offers a picturesque setting with plenty of hiking opportunities and stunning lake views.",
      scenicImage: "lake-lousie-scenic.jpg",
      campsiteImage: "lake-louise-campsite.jpg",
      reviews: [
        {
          id: "review8",
          name: "Anna Lee",
          comment: "Gorgeous lake! A must-visit destination for any camper.",
          timestamp: "2023-01-12",
        },
        {
          id: "review9",
          name: "Michael Brown",
          comment: "Perfect for hiking. Can't wait to come back in the summer!",
          timestamp: "2023-05-18",
        },
        {
          id: "review10",
          name: "Laura King",
          comment: "A bit crowded in peak season, but still worth it!",
          timestamp: "2023-09-02",
        },
      ],
    },
    {
      id: "4",
      key: "4",
      name: "Kananaskis Country Campground",
      location: "Kananaskis, Alberta",
      elevation: "1,200 meters",
      description: "A beautiful campground set in the Kananaskis region, known for its picturesque mountains and abundant recreational activities.",
      scenicImage: "kana-scenic.jpg",
      campsiteImage: "kana-campsite.jpg",
      reviews: [
        {
          id: "review11",
          name: "Karen Williams",
          comment: "Great hiking trails. The scenery is breathtaking!",
          timestamp: "2023-02-26",
        },
        {
          id: "review12",
          name: "David Wilson",
          comment: "Well-equipped facilities. Had a great time camping here.",
          timestamp: "2022-10-11",
        },
        {
          id: "review13",
          name: "Chris Lee",
          comment: "Loved the serenity of this campground. Perfect for families.",
          timestamp: "2023-04-08",
        },
      ],
    },
    {
      id: "5",
      key: "5",
      name: "Cochrane Lake Campground",
      location: "Cochrane, Alberta",
      elevation: "1,300 meters",
      description: "A tranquil campground by the lake, ideal for fishing and relaxing by the water.",
      scenicImage: "cochrane-scenic.jpg",
      campsiteImage: "cochrane-campsite.jpg",
      reviews: [
        {
          id: "review14",
          name: "Steve Harris",
          comment: "Perfect for a peaceful weekend getaway. Loved fishing!",
          timestamp: "2021-09-19",
        },
        {
          id: "review15",
          name: "Nancy Walker",
          comment: "Great spot for picnics and swimming. Very family-friendly!",
          timestamp: "2023-06-25",
        },
      ],
    },
    {
      id: "6",
      key: "6",
      name: "Fish Creek Provincial Park Campground",
      location: "Calgary, Alberta",
      elevation: "1,200 meters",
      description: "A convenient campground located near Calgary, surrounded by nature with excellent amenities.",
      scenicImage: "fish-creek-scenic.jpeg",
      campsiteImage: "fish-creek-campsite.webp",
      reviews: [
        {
          id: "review16",
          name: "Tim Roberts",
          comment: "Very accessible from the city! A nice escape for a day.",
          timestamp: "2022-07-07",
        },
        {
          id: "review17",
          name: "Sophie Martinez",
          comment: "Well-maintained and clean. Would recommend to others.",
          timestamp: "2023-11-03",
        },
        {
          id: "review18",
          name: "Carlos Martinez",
          comment: "Ideal for family outings. The kids loved it!",
          timestamp: "2023-03-04",
        },
      ],
    },
    {
      id: "7",
      key: "7",
      name: "Wabamun Lake Provincial Park",
      location: "Wabamun, Alberta",
      elevation: "900 meters",
      description: "Located by Wabamun Lake, this campground is perfect for water activities and relaxation.",
      scenicImage: "wabamun-scenic.jpg",
      campsiteImage: "wabamun-campsite.jpg",
      reviews: [
        {
          id: "review19",
          name: "Angela Carter",
          comment: "Loved the lake activities! Perfect for water sports.",
          timestamp: "2022-08-21",
        },
        {
          id: "review20",
          name: "Patrick Young",
          comment: "The scenery is stunning, and the facilities are great!",
          timestamp: "2023-10-27",
        },
        {
          id: "review21",
          name: "Julia Bennett",
          comment: "Fantastic place for camping with friends. Would visit again!",
          timestamp: "2022-04-15",
        },
      ],
    },
    {
      id: "8",
      key: "8",
      name: "Red Deer Campground",
      location: "Red Deer, Alberta",
      elevation: "800 meters",
      description: "A family-friendly campground with lots of activities and a beautiful river nearby.",
      scenicImage: "red-deer-scenic.jpg",
      campsiteImage: "red-deer-campsite.jpg",
      reviews: [
        {
          id: "review22",
          name: "Hannah Adams",
          comment: "Great amenities for families! Kids had a blast.",
          timestamp: "2023-07-30",
        },
        {
          id: "review23",
          name: "Owen Scott",
          comment: "A little noisy at times, but overall a great experience.",
          timestamp: "2023-09-14",
        },
      ],
    },
    {
      id: "9",
      key: "9",
      name: "Waterton Lakes National Park",
      location: "Waterton, Alberta",
      elevation: "1,200 meters",
      description: "A stunning campground located within Waterton Lakes National Park, surrounded by breathtaking views.",
      scenicImage: "waterton-scenic.jpg",
      campsiteImage: "waterton-campsite.jpg",
      reviews: [
        {
          id: "review24",
          name: "Megan Clark",
          comment: "The views are out of this world! Perfect for nature lovers.",
          timestamp: "2023-05-03",
        },
        {
          id: "review25",
          name: "Brian Hall",
          comment: "A bit challenging to get to, but absolutely worth it!",
          timestamp: "2023-12-01",
        },
        {
          id: "review26",
          name: "Lily Nguyen",
          comment: "One of the best camping experiences I’ve ever had!",
          timestamp: "2022-02-10",
        },
      ],
    },
    {
      id: "10",
      key: "10",
      name: "Elk Island National Park Campground",
      location: "Strathcona County, Alberta",
      elevation: "600 meters",
      description: "Known for its bison herds, this campground offers a unique experience in a national park setting.",
      scenicImage: "elk-island-scenic.jpg",
      campsiteImage: "elk-island-campsite.jpg",
      reviews: [
        {
          id: "review27",
          name: "Zoe Adams",
          comment: "A must-visit for wildlife enthusiasts! Saw so many bison.",
          timestamp: "2023-04-23",
        },
        {
          id: "review28",
          name: "Lucas White",
          comment: "The trails are fantastic, and the staff were very friendly.",
          timestamp: "2023-08-06",
        },
        {
          id: "review29",
          name: "Rachel Martin",
          comment: "Great family-friendly activities available. We had a blast!",
          timestamp: "2021-11-23",
        },
        {
          id: "review30",
          name: "Victor Anderson",
          comment: "Such a unique experience! Will definitely return.",
          timestamp: "2023-06-11",
        },
      ],
    },
  ];
  