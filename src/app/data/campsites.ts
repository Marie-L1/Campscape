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
      description: "Nestled amidst the breathtaking Rocky Mountains, Tunnel Mountain Campground offers a serene escape with stunning panoramic views, abundant wildlife, and convenient proximity to the vibrant town of Banff. Whether you're an avid hiker, a casual nature lover, or simply seeking tranquility, this site has something for everyone.",
      scenicImage: "tunnel-mountain-scenic.webp",
      campsiteImage: "tunnel-mountain-campsite.jpg",
      reviews: [
        {
          id: "review1",
          name: "Sarah Johnson",
          comment: "Stunning views! The mountains look absolutely magical during sunrise and sunset. A great place to unwind and truly connect with nature. Everything about this campground feels like a dream!",
          timestamp: "2022-06-14",
        },
        {
          id: "review2",
          name: "Mark Thompson",
          comment: "Great location with lots of nearby hiking trails. I particularly loved the trail to the summit, which offered a spectacular view of the valley below. Highly recommend it for anyone who enjoys the outdoors!",
          timestamp: "2023-03-21",
        },
        {
          id: "review3",
          name: "Jessica Miller",
          comment: "The sunset views here are absolutely breathtaking. Sitting by the campfire while the sky turned pink and orange was an experience I'll never forget. Will definitely come back!",
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
      description: "Jasper National Park Campground is a gateway to some of the most awe-inspiring landscapes in Canada. Surrounded by towering peaks, serene lakes, and lush forests, this campground offers visitors unparalleled opportunities for wildlife viewing, hiking, and simply soaking in nature's beauty.",
      scenicImage: "jasper-scenic.jpg",
      campsiteImage: "jasper-campground-campsite.webp",
      reviews: [
        {
          id: "review4",
          name: "Emily Davis",
          comment: "Amazing nature! The wildlife sightings were unforgettable. We spotted elk and even a black bear from a safe distance! A truly remarkable experience that brings you close to nature.",
          timestamp: "2023-10-05",
        },
        {
          id: "review5",
          name: "John Smith",
          comment: "Very quiet and peaceful. Perfect for a weekend getaway. The sound of the river flowing nearby was so relaxing, and the night sky was mesmerizingly clear.",
          timestamp: "2021-12-30",
        },
        {
          id: "review6",
          name: "Alice Brown",
          comment: "Stargazing at night was incredible! I've never seen so many stars, and the Milky Way was visible with the naked eye. This campground is a hidden gem for stargazers and nature lovers alike.",
          timestamp: "2023-08-15",
        },
        {
          id: "review7",
          name: "Robert Wilson",
          comment: "Lots of trails and beautiful scenery. The diversity of landscapes, from dense forests to open meadows, kept our hikes interesting. Can’t wait to return!",
          timestamp: "2022-11-27",
        },
      ],
    },
    {
      "id": "3",
      "key": "3",
      "name": "Lake Louise Campground",
      "location": "Lake Louise, Alberta",
      "elevation": "1,600 meters",
      "description": "Located next to the world-famous Lake Louise in Banff National Park, this campground offers a truly breathtaking experience for visitors. Surrounded by towering mountain peaks and lush alpine forests, the site is perfect for outdoor enthusiasts who love to hike, canoe, and immerse themselves in nature. The vibrant turquoise waters of Lake Louise and the abundant wildlife in the area create a picture-perfect setting for your adventure. The campground also includes amenities like clean washrooms, fire pits, and picnic areas, making it ideal for families or solo travelers alike.",
      "scenicImage": "lake-lousie-scenic.jpg",
      "campsiteImage": "lake-louise-campsite.jpg",
      "reviews": [
        {
          "id": "review8",
          "name": "Anna Lee",
          "comment": "Gorgeous lake! The shimmering turquoise waters combined with the majestic mountain views made it one of the most memorable places I've visited. If you're into photography or painting, this is heaven.",
          "timestamp": "2023-01-12"
        },
        {
          "id": "review9",
          "name": "Michael Brown",
          "comment": "Perfect for hiking. The trails around Lake Louise are some of the best I've ever explored, offering a mix of serene forest paths and panoramic viewpoints. Can't wait to come back during summer to try the canoe rentals.",
          "timestamp": "2023-05-18"
        },
        {
          "id": "review10",
          "name": "Laura King",
          "comment": "A bit crowded in peak season, but still worth it! Make sure to book early and arrive early in the day for parking. Even with the crowds, the experience is unforgettable.",
          "timestamp": "2023-09-02"
        }
      ]
    },
    {
      "id": "4",
      "key": "4",
      "name": "Kananaskis Country Campground",
      "location": "Kananaskis, Alberta",
      "elevation": "1,200 meters",
      "description": "Nestled in the heart of Alberta's Kananaskis Country, this campground offers a serene retreat for nature lovers and adventurers. Surrounded by dramatic mountain landscapes, lush meadows, and crystal-clear streams, it’s a haven for hiking, fishing, and stargazing. With an extensive network of trails, visitors can enjoy everything from leisurely strolls to challenging mountain hikes. The campground provides modern amenities such as hot showers, electricity hookups, and well-maintained fire pits, ensuring a comfortable stay while you explore this pristine wilderness. It's a favorite spot for families, solo campers, and anyone seeking tranquility away from the hustle and bustle.",
      "scenicImage": "kana-scenic.jpg",
      "campsiteImage": "kana-campsite.jpg",
      "reviews": [
        {
          "id": "review11",
          "name": "Karen Williams",
          "comment": "Great hiking trails. The scenery is breathtaking! The variety of trails means there’s something for every skill level, and the views from the top are absolutely rewarding. Perfect for a weekend escape.",
          "timestamp": "2023-02-26"
        },
        {
          "id": "review12",
          "name": "David Wilson",
          "comment": "Well-equipped facilities. The campground was clean and had everything we needed, from water stations to covered picnic areas. The nearby lakes and streams were perfect for fishing. Highly recommend!",
          "timestamp": "2022-10-11"
        },
        {
          "id": "review13",
          "name": "Chris Lee",
          "comment": "Loved the serenity of this campground. Perfect for families. Our kids enjoyed exploring the trails, and we even spotted deer and rabbits close to the campsite. It’s a great spot to disconnect and recharge.",
          "timestamp": "2023-04-08"
        }
      ]
    },
    {
      "id": "5",
      "key": "5",
      "name": "Cochrane Lake Campground",
      "location": "Cochrane, Alberta",
      "elevation": "1,300 meters",
      "description": "Cochrane Lake Campground is a peaceful retreat nestled beside the serene waters of Cochrane Lake, making it the perfect destination for anglers, nature lovers, and those seeking a tranquil escape. The campground features spacious sites surrounded by tall trees, offering a quiet and relaxing atmosphere. Enjoy the calm waters with fishing opportunities right at your doorstep or spend a day on the water with a canoe or kayak. With a variety of walking trails and picnic spots nearby, this campground is a great place to unwind and connect with nature. Whether you’re here for a weekend getaway or a longer stay, Cochrane Lake Campground offers a charming and relaxing setting for all ages.",
      "scenicImage": "cochrane-scenic.jpg",
      "campsiteImage": "cochrane-campsite.jpg",
      "reviews": [
        {
          "id": "review14",
          "name": "Steve Harris",
          "comment": "Perfect for a peaceful weekend getaway. The campsite was quiet, and the sound of the water lapping against the shore made it incredibly relaxing. Loved fishing here—the lake is stocked with plenty of fish. Highly recommend for anyone looking to escape the hustle and bustle.",
          "timestamp": "2021-09-19"
        },
        {
          "id": "review15",
          "name": "Nancy Walker",
          "comment": "Great spot for picnics and swimming. The water was clear, and the kids had a blast swimming and playing by the shore. We had a family picnic by the lake, and it was the perfect setting for a day of fun. Very family-friendly, and the campground had everything we needed to make our stay comfortable.",
          "timestamp": "2023-06-25"
        }
      ]
    },    
    {
      "id": "6",
      "key": "6",
      "name": "Fish Creek Provincial Park Campground",
      "location": "Calgary, Alberta",
      "elevation": "1,200 meters",
      "description": "Fish Creek Provincial Park Campground offers a perfect blend of accessibility and nature. Located just outside Calgary, it provides a peaceful escape with plenty of natural beauty to explore. The park features a variety of ecosystems, including wetlands, forests, and grasslands, and is home to diverse wildlife such as deer, birds, and rabbits. The campground itself is well-equipped with modern amenities, including picnic tables, fire pits, and hot showers. The nearby pathways make it easy to enjoy hiking, biking, or simply strolling through the park. With its convenient location and well-maintained facilities, Fish Creek Provincial Park Campground is ideal for both short visits and extended stays.",
      "scenicImage": "fish-creek-scenic.jpeg",
      "campsiteImage": "fish-creek-campsite.webp",
      "reviews": [
        {
          "id": "review16",
          "name": "Tim Roberts",
          "comment": "Very accessible from the city! It’s an easy drive from Calgary, making it perfect for a day trip. The trails are well-marked, and the park is clean and peaceful. It’s nice to have a nature escape so close to the city, and I’ll definitely be coming back.",
          "timestamp": "2022-07-07"
        },
        {
          "id": "review17",
          "name": "Sophie Martinez",
          "comment": "Well-maintained and clean. The facilities were modern and well-kept, and the park itself was beautiful. It’s a great spot for a quick camping trip with the family, especially if you want something close to the city. I would highly recommend it to others looking for a relaxing camping experience.",
          "timestamp": "2023-11-03"
        },
        {
          "id": "review18",
          "name": "Carlos Martinez",
          "comment": "Ideal for family outings. The kids loved it! We spent the day biking around the park and ended up having a lovely picnic by the creek. The trails are easy enough for kids to enjoy, and the whole family had a blast. It’s a great spot for families looking to enjoy nature without having to travel too far.",
          "timestamp": "2023-03-04"
        }
      ]
    },    
    {
      "id": "7",
      "key": "7",
      "name": "Wabamun Lake Provincial Park",
      "location": "Wabamun, Alberta",
      "elevation": "900 meters",
      "description": "Nestled along the serene shores of Wabamun Lake, this provincial park offers the perfect combination of relaxation and adventure. The campground is ideal for those looking to enjoy a variety of water-based activities, such as kayaking, paddleboarding, and fishing. The lake’s calm waters make it perfect for beginners and experienced water sports enthusiasts alike. With plenty of scenic spots for picnicking, hiking trails for exploration, and beautiful views of the surrounding forest, Wabamun Lake Provincial Park is a wonderful destination for both families and solo travelers. Whether you’re enjoying a peaceful day by the water or participating in one of the many recreational activities available, Wabamun Lake promises an unforgettable outdoor experience.",
      "scenicImage": "wabamun-scenic.jpg",
      "campsiteImage": "wabamun-campground.jpg",
      "reviews": [
        {
          "id": "review19",
          "name": "Angela Carter",
          "comment": "Loved the lake activities! Perfect for water sports. I had an amazing time kayaking around the lake, and the peaceful surroundings made it even better. The water is clear and calm, ideal for paddleboarding as well. If you enjoy water sports or just want to relax by the shore, this campground is an excellent choice.",
          "timestamp": "2022-08-21"
        },
        {
          "id": "review20",
          "name": "Patrick Young",
          "comment": "The scenery is stunning, and the facilities are great! The campground was clean, and the amenities were top-notch. The views of the lake surrounded by trees were breathtaking, and there were plenty of spots to enjoy a picnic or take in the beauty of the area. I will definitely return for another stay, and highly recommend it to anyone looking to get away from the city.",
          "timestamp": "2023-10-27"
        },
        {
          "id": "review21",
          "name": "Julia Bennett",
          "comment": "Fantastic place for camping with friends. We had an incredible weekend here, enjoying the activities and relaxing by the lake. The campground was well-maintained, and there were enough activities to keep everyone entertained. Whether you’re into hiking, fishing, or just hanging out by the water, this park offers something for everyone. Would visit again!",
          "timestamp": "2022-04-15"
        }
      ]
    },    
    {
      "id": "8",
      "key": "8",
      "name": "Red Deer Campground",
      "location": "Red Deer, Alberta",
      "elevation": "800 meters",
      "description": "Red Deer Campground is a family-friendly destination offering a variety of activities in a scenic riverside setting. With its proximity to the Red Deer River, the campground provides a peaceful retreat for families looking to explore nature or enjoy outdoor adventures. The campground features numerous amenities, including playgrounds for kids, picnic areas, and walking trails along the river. Fishing enthusiasts will enjoy the river's rich wildlife, while others can relax by the water or engage in family-friendly activities like biking and nature walks. Red Deer Campground is an ideal spot for families looking to spend quality time together surrounded by the beauty of nature.",
      "scenicImage": "red-deer-scenic.jpg",
      "campsiteImage": "red-deer-campsite.jpg",
      "reviews": [
        {
          "id": "review22",
          "name": "Hannah Adams",
          "comment": "Great amenities for families! The kids had a blast. There was so much to do here, from playing on the playground to exploring the trails by the river. The campground was well-kept and clean, and there was plenty of space for our family. We had a picnic by the river, and it was a perfect spot to relax. Highly recommend for families with young children.",
          "timestamp": "2023-07-30"
        },
        {
          "id": "review23",
          "name": "Owen Scott",
          "comment": "A little noisy at times, but overall a great experience. While there were some noisy moments with nearby traffic, the campground itself was lovely. The river is beautiful, and the area has plenty of nature to enjoy. I appreciated the facilities, and the kids had a great time. It’s a great place to camp, especially for families, but if you’re looking for total peace and quiet, it might not be the best fit.",
          "timestamp": "2023-09-14"
        }
      ]
    },    
    {
      "id": "9",
      "key": "9",
      "name": "Waterton Lakes National Park",
      "location": "Waterton, Alberta",
      "elevation": "1,200 meters",
      "description": "Located within the UNESCO World Heritage-listed Waterton Lakes National Park, this campground offers an immersive experience in one of the most scenic spots in Alberta. Surrounded by towering mountains, lush forests, and crystal-clear lakes, it’s the perfect destination for outdoor enthusiasts. Whether you enjoy hiking along the rugged trails, fishing in the pristine lakes, or simply taking in the breathtaking views, Waterton Lakes provides it all. This campground is a haven for wildlife, and visitors often spot deer, elk, and a variety of birds. The tranquil setting, combined with diverse landscapes, makes it an ideal getaway for nature lovers, photographers, and those looking to escape into the beauty of the wild.",
      "scenicImage": "waterton-scenic.jpg",
      "campsiteImage": "waterton-campsite.jpg",
      "reviews": [
        {
          "id": "review24",
          "name": "Megan Clark",
          "comment": "The views are out of this world! Perfect for nature lovers. The dramatic mountains, clear lakes, and stunning sunsets made this trip unforgettable. Whether you’re hiking or just sitting by the water, the beauty around you is simply unmatched. I highly recommend this park for anyone looking to immerse themselves in nature and experience the magnificence of the Canadian Rockies.",
          "timestamp": "2023-05-03"
        },
        {
          "id": "review25",
          "name": "Brian Hall",
          "comment": "A bit challenging to get to, but absolutely worth it! The drive up can be a little tricky, but once you arrive, the incredible landscapes make it all worthwhile. The campground is situated perfectly to take in the best views of the park, and the hiking trails offer varying levels of difficulty. It’s a hidden gem for those who are willing to make the trek!",
          "timestamp": "2023-12-01"
        },
        {
          "id": "review26",
          "name": "Lily Nguyen",
          "comment": "One of the best camping experiences I’ve ever had! The pristine beauty of Waterton is unmatched. The campground itself is quiet and well-maintained, and the amenities are great. We spent our days hiking, exploring the lake, and just relaxing by the shore. If you love nature and want to experience a place that feels untouched by time, Waterton is the perfect place.",
          "timestamp": "2022-02-10"
        }
      ]
    },    
    {
      "id": "10",
      "key": "10",
      "name": "Elk Island National Park Campground",
      "location": "Strathcona County, Alberta",
      "elevation": "600 meters",
      "description": "Elk Island National Park is a wildlife enthusiast’s paradise, home to the largest herd of free-roaming bison in Canada. This unique campground offers an authentic experience in the heart of nature, with opportunities to observe wildlife up close, including bison, elk, and a variety of bird species. The park features a network of hiking trails that wind through forested areas and alongside lakes, providing visitors with a chance to connect with nature. Whether you're exploring the park's natural beauty, learning about its conservation efforts, or simply relaxing in a peaceful setting, Elk Island National Park provides a memorable and educational experience for all.",
      "scenicImage": "elk-island-scenic.jpg",
      "campsiteImage": "elk-island-campsite.jpg",
      "reviews": [
        {
          "id": "review27",
          "name": "Zoe Adams",
          "comment": "A must-visit for wildlife enthusiasts! Saw so many bison. It was incredible to watch these majestic creatures roam freely in their natural habitat. The park offers excellent opportunities for wildlife photography, and the trails are beautiful. We also saw elk and many other animals. A unique and unforgettable experience for anyone who loves nature.",
          "timestamp": "2023-04-23"
        },
        {
          "id": "review28",
          "name": "Lucas White",
          "comment": "The trails are fantastic, and the staff were very friendly. The park offers a great selection of hiking trails with varying difficulty levels. We enjoyed exploring the park, and it was amazing to see the bison up close. The staff at the visitor center were very knowledgeable and provided great recommendations for hikes and other activities. Highly recommend visiting if you're in the area!",
          "timestamp": "2023-08-06"
        },
        {
          "id": "review29",
          "name": "Rachel Martin",
          "comment": "Great family-friendly activities available. We had a blast! The kids loved seeing the bison, and the visitor center had great educational exhibits. The trails were perfect for our family, and we spent a lot of time enjoying the scenery. It was a great way to spend quality time together while learning about the park’s wildlife and conservation efforts.",
          "timestamp": "2021-11-23"
        },
        {
          "id": "review30",
          "name": "Victor Anderson",
          "comment": "Such a unique experience! Will definitely return. The opportunity to see bison up close and learn about their conservation was incredible. The park is peaceful, and the hiking trails give you a real sense of adventure. I plan on returning for a longer visit to explore more of the park and enjoy its wildlife.",
          "timestamp": "2023-06-11"
        }
      ]
    },
    {
      id: "11",
      key: "11",
      name: "Miquelon Lake Provincial Park Campground",
      location: "Camrose County, Alberta",
      elevation: "750 meters",
      description: "Nestled near the serene shores of Miquelon Lake, this picturesque campground offers an oasis of tranquility for those seeking a peaceful retreat. Surrounded by lush wetlands and rolling hills, visitors can enjoy a variety of outdoor activities, including bird watching, hiking through scenic trails, and reconnecting with nature. The park’s ecosystem is home to over 200 bird species, making it a paradise for ornithologists and casual bird enthusiasts alike. With well-maintained facilities and a welcoming atmosphere, Miquelon Lake provides the perfect backdrop for a relaxing escape from the hustle and bustle of daily life.",
      scenicImage: "miquelon-scenic.jpg",
      campsiteImage: "miquelon-campsite.jpg",
      reviews: [
        {
          id: "review31",
          name: "Emma Thompson",
          comment: "A hidden gem for nature lovers! The hiking trails wind through such diverse scenery, and I spotted several rare bird species during my visit. The peaceful atmosphere made it a perfect weekend escape.",
          timestamp: "2023-08-15",
        },
        {
          id: "review32",
          name: "Jack Morgan",
          comment: "Perfect for a quiet getaway. The rolling hills and wetlands were absolutely beautiful, and the sunrise over the lake was breathtaking. Highly recommend for anyone needing a peaceful retreat.",
          timestamp: "2023-06-10",
        },
        {
          id: "review33",
          name: "Linda Roberts",
          comment: "The campground was incredibly well-maintained, and the staff were so friendly. My kids loved exploring the trails, and we had a lovely picnic by the lake.",
          timestamp: "2022-09-19",
        },
        {
          id: "review34",
          name: "Nathaniel Green",
          comment: "This is the perfect place to recharge. The sunsets over the wetlands are spectacular, and it’s a great spot for stargazing too. I can’t wait to visit again!",
          timestamp: "2023-07-04",
        },
      ],
    },
    {
      id: "12",
      key: "12",
      name: "Dinosaur Provincial Park Campground",
      location: "Patricia, Alberta",
      elevation: "700 meters",
      description: "Situated in the heart of Alberta's Badlands, Dinosaur Provincial Park Campground offers a truly unique camping experience. The area is renowned for its dramatic desert-like landscapes, featuring striking hoodoos, canyons, and fossil beds that tell the story of Earth’s ancient past. Visitors can enjoy guided fossil tours, hike through rugged terrain, or simply marvel at the surreal scenery. As a UNESCO World Heritage Site, the park combines history, geology, and natural beauty, making it an ideal destination for adventurers, families, and history enthusiasts alike. The campground is well-equipped with modern amenities, ensuring a comfortable yet immersive experience.",
      scenicImage: "dinosaur-scenic.jpg",
      campsiteImage: "dinosaur-campsite.jpg",
      reviews: [
        {
          id: "review33",
          name: "Sophia Lopez",
          comment: "An unforgettable experience! The guided fossil tours were incredibly informative, and the Badlands were unlike anything I’ve ever seen. Perfect for anyone interested in history or geology.",
          timestamp: "2022-09-05",
        },
        {
          id: "review34",
          name: "Ethan Brown",
          comment: "Camping here felt like stepping back in time. The unique rock formations and the stories behind them were fascinating. A must-visit for outdoor lovers and dinosaur fans!",
          timestamp: "2023-05-21",
        },
        {
          id: "review35",
          name: "Olivia Harris",
          comment: "The campground was clean and well-organized, and the views were absolutely stunning. The sunrise over the hoodoos is something I’ll never forget.",
          timestamp: "2023-06-14",
        },
        {
          id: "review36",
          name: "Daniel Cooper",
          comment: "I was amazed by how much there was to explore. The fossil exhibits and trails were incredible, and it was great to learn about the area’s prehistoric history.",
          timestamp: "2023-03-08",
        },
        {
          id: "review37",
          name: "Rachel Evans",
          comment: "This is hands down one of the best campgrounds I’ve ever visited. The landscapes are like something out of a movie. I highly recommend staying here for at least a few nights to soak it all in.",
          timestamp: "2023-09-29",
        },
      ],
    },
       
  ];
  