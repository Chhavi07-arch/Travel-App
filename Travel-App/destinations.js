const destinations = [
    {
        name: "Bali, Indonesia",
        climate: "tropical",
        budget: "medium",
        activityTypes: ["adventure", "relaxation", "cultural"],
        funFacts: [
            "Home to over 10,000 temples",
            "Has a unique calendar with 210 days",
            "Home to the world's most expensive coffee"
        ],
        imageUrl: "https://images.pexels.com/photos/1078983/pexels-photo-1078983.jpeg?auto=compress&cs=tinysrgb&w=1260"
    },
    {
        name: "Santorini, Greece",
        climate: "mediterranean",
        budget: "luxury",
        activityTypes: ["relaxation", "cultural"],
        funFacts: [
            "The whole island is actually a giant volcano",
            "Houses are painted white to reflect the sun",
            "Ancient ruins date back to 1600 BC"
        ],
        imageUrl: "https://images.pexels.com/photos/1010657/pexels-photo-1010657.jpeg?auto=compress&cs=tinysrgb&w=1260"
    },
    // {
    //     name: "Queenstown, New Zealand",
    //     climate: "temperate",
    //     budget: "medium",
    //     activityTypes: ["adventure", "nature"],
    //     funFacts: [
    //         "Birthplace of commercial bungee jumping",
    //         "Has over 75 wineries in the region",
    //         "Named after Queen Victoria"
    //     ],
    //     imageUrl: "https://images.pexels.com/photos/724963/pexels-photo-724963.jpeg?auto=compress&cs=tinysrgb&w=1260"
    // },
    {
        name: "Banff, Canada",
        climate: "cold",
        budget: "luxury",
        activityTypes: ["adventure", "nature"],
        funFacts: [
            "Canada's oldest national park",
            "Home to natural hot springs",
            "Has the highest town elevation in Canada"
        ],
        imageUrl: "https://images.pexels.com/photos/1761279/pexels-photo-1761279.jpeg?auto=compress&cs=tinysrgb&w=1260"
    },
    {
        name: "Chiang Mai, Thailand",
        climate: "tropical",
        budget: "budget",
        activityTypes: ["cultural", "nature"],
        funFacts: [
            "Has over 300 temples",
            "Known as the 'Rose of the North'",
            "Founded in 1296"
        ],
        imageUrl: "https://images.pexels.com/photos/1031485/pexels-photo-1031485.jpeg?auto=compress&cs=tinysrgb&w=1260"
    },
    {
        name: "Porto, Portugal",
        climate: "mediterranean",
        budget: "budget",
        activityTypes: ["cultural", "relaxation"],
        funFacts: [
            "Birthplace of Port wine",
            "Has a bookstore that inspired Harry Potter",
            "Known for its stunning blue tiles"
        ],
        imageUrl: "https://images.pexels.com/photos/1534560/pexels-photo-1534560.jpeg?auto=compress&cs=tinysrgb&w=1260"
    },
    // Tropical + Medium Budget Options (Multiple for swiping)
    {
        name: "Phuket, Thailand",
        climate: "tropical",
        budget: "medium",
        activityTypes: ["relaxation", "adventure", "cultural"],
        funFacts: [
            "Largest island in Thailand",
            "Famous for the Big Buddha statue",
            "Home to the most colorful festival - Vegetarian Festival"
        ],
        imageUrl: "https://images.pexels.com/photos/1174732/pexels-photo-1174732.jpeg?auto=compress&cs=tinysrgb&w=1260"
    },
    {
        name: "Mauritius",
        climate: "tropical",
        budget: "medium",
        activityTypes: ["relaxation", "adventure", "nature"],
        funFacts: [
            "Home to the extinct Dodo bird",
            "Has a underwater waterfall illusion",
            "Known for seven-colored earth phenomenon"
        ],
        imageUrl: "https://images.pexels.com/photos/1450353/pexels-photo-1450353.jpeg?auto=compress&cs=tinysrgb&w=1260"
    },
    {
        name: "Cebu, Philippines",
        climate: "tropical",
        budget: "medium",
        activityTypes: ["adventure", "relaxation", "cultural"],
        funFacts: [
            "Home to the smallest primate - Tarsier",
            "Site of Magellan's Cross",
            "Famous for whale shark encounters"
        ],
        imageUrl: "https://images.pexels.com/photos/2475386/pexels-photo-2475386.jpeg?auto=compress&cs=tinysrgb&w=1260"
    },

    // Tropical + Luxury Options
    {
        name: "Maldives",
        climate: "tropical",
        budget: "luxury",
        activityTypes: ["relaxation", "adventure"],
        funFacts: [
            "World's lowest-lying country",
            "Consists of 1,192 coral islands",
            "Has underwater restaurants"
        ],
        imageUrl: "https://images.pexels.com/photos/1287460/pexels-photo-1287460.jpeg?auto=compress&cs=tinysrgb&w=1260"
    },
    {
        name: "Seychelles",
        climate: "tropical",
        budget: "luxury",
        activityTypes: ["relaxation", "nature"],
        funFacts: [
            "Home to the largest seed in the world - Coco de Mer",
            "Has the smallest frog species",
            "Only place where giant tortoises roam freely"
        ],
        imageUrl: "https://images.pexels.com/photos/1483053/pexels-photo-1483053.jpeg?auto=compress&cs=tinysrgb&w=1260"
    },
    {
        name: "Bora Bora",
        climate: "tropical",
        budget: "luxury",
        activityTypes: ["relaxation", "adventure"],
        funFacts: [
            "Called 'Pearl of the Pacific'",
            "Lagoon contains 29 species of sharks",
            "No building can be taller than a coconut tree"
        ],
        imageUrl: "https://images.pexels.com/photos/753626/pexels-photo-753626.jpeg?auto=compress&cs=tinysrgb&w=1260"
    },

    // Tropical + Budget Options
    {
        name: "Goa, India",
        climate: "tropical",
        budget: "budget",
        activityTypes: ["relaxation", "cultural", "adventure"],
        funFacts: [
            "Former Portuguese colony",
            "Known for its 51 unique beaches",
            "Has Asia's largest naval aviation museum"
        ],
        imageUrl: "https://images.pexels.com/photos/1001682/pexels-photo-1001682.jpeg?auto=compress&cs=tinysrgb&w=1260"

    },
    
    {
        name: "Koh Rong, Cambodia",
        climate: "tropical",
        budget: "budget",
        activityTypes: ["relaxation", "adventure", "nature"],
        funFacts: [
            "Famous for bioluminescent plankton",
            "No cars on the island",
            "28 pristine beaches"
        ],
        imageUrl: "https://images.pexels.com/photos/1710795/pexels-photo-1710795.jpeg?auto=compress&cs=tinysrgb&w=1260"
    },

    // Mediterranean + Luxury Options
    
    {
        name: "Amalfi Coast, Italy",
        climate: "mediterranean",
        budget: "luxury",
        activityTypes: ["cultural", "relaxation", "nature"],
        funFacts: [
            "UNESCO World Heritage site",
            "Famous for limoncello production",
            "Has 13 distinct towns along the coast"
        ],
        imageUrl: "https://images.pexels.com/photos/2972704/pexels-photo-2972704.jpeg?auto=compress&cs=tinysrgb&w=1260"
    },
    {
        name: "Côte d'Azur, France",
        climate: "mediterranean",
        budget: "luxury",
        activityTypes: ["relaxation", "cultural"],
        funFacts: [
            "Hosted the first modern resort",
            "Inspiration for countless artists",
            "Home to Monaco's famous casino"
        ],
        imageUrl: "https://images.pexels.com/photos/4353609/pexels-photo-4353609.jpeg?auto=compress&cs=tinysrgb&w=1260"
    },

    // Mediterranean + Medium Budget Options
    {
        name: "Split, Croatia",
        climate: "mediterranean",
        budget: "medium",
        activityTypes: ["cultural", "adventure", "relaxation"],
        funFacts: [
            "Built around a Roman palace",
            "Game of Thrones filming location",
            "Has the world's oldest cathedral building"
        ],
        imageUrl: "https://images.pexels.com/photos/2365457/pexels-photo-2365457.jpeg?auto=compress&cs=tinysrgb&w=1260"
    },
    {
        name: "Valencia, Spain",
        climate: "mediterranean",
        budget: "medium",
        activityTypes: ["cultural", "relaxation", "adventure"],
        funFacts: [
            "Birthplace of paella",
            "Has the largest aquarium in Europe",
            "Hosts the famous La Tomatina festival"
        ],
        imageUrl: "https://images.pexels.com/photos/3254729/pexels-photo-3254729.jpeg?auto=compress&cs=tinysrgb&w=1260"
    },
    {
        name: "Rhodes, Greece",
        climate: "mediterranean",
        budget: "medium",
        activityTypes: ["cultural", "relaxation", "adventure"],
        funFacts: [
            "Once home to Colossus of Rhodes",
            "Oldest inhabited medieval town in Europe",
            "Known as the Island of Knights"
        ],
        imageUrl: "https://images.pexels.com/photos/1974927/pexels-photo-1974927.jpeg?auto=compress&cs=tinysrgb&w=1260"
    },
    {
        name: "Banff, Canada",
        climate: "cold",
        budget: "luxury",
        activityTypes: ["adventure", "nature"],
        funFacts: [
            "Canada's oldest national park",
            "Home to natural hot springs",
            "Has the highest town elevation in Canada"
        ],
        imageUrl: "https://images.pexels.com/photos/1761279/pexels-photo-1761279.jpeg?auto=compress&cs=tinysrgb&w=1260"
    },
    {
        name: "Reykjavik, Iceland",
        climate: "cold",
        budget: "luxury",
        activityTypes: ["adventure", "nature", "cultural"],
        funFacts: [
            "World's northernmost capital",
            "Powered entirely by renewable energy",
            "Experiences midnight sun in summer"
        ],
        imageUrl: "https://images.pexels.com/photos/3617500/pexels-photo-3617500.jpeg?auto=compress&cs=tinysrgb&w=1260"
    },
    {
        name: "Zermatt, Switzerland",
        climate: "cold",
        budget: "luxury",
        activityTypes: ["adventure", "nature", "relaxation"],
        funFacts: [
            "Car-free village",
            "Best views of the Matterhorn",
            "Highest skiing resort in Europe"
        ],
        imageUrl: "https://images.pexels.com/photos/869258/pexels-photo-869258.jpeg?auto=compress&cs=tinysrgb&w=1260"
    },
    // Cold Climate + Medium Budget Options
    {
        name: "Tromsø, Norway",
        climate: "cold",
        budget: "medium",
        activityTypes: ["nature", "adventure", "cultural"],
        funFacts: [
            "Best place to see Northern Lights",
            "Sun doesn't set for 2 months in summer",
            "World's northernmost university"
        ],
        imageUrl: "https://images.pexels.com/photos/1933239/pexels-photo-1933239.jpeg?auto=compress&cs=tinysrgb&w=1260"
    },
    {
        name: "Queenstown, New Zealand",
        climate: "cold",
        budget: "medium",
        activityTypes: ["adventure", "nature", "relaxation"],
        funFacts: [
            "Adventure capital of the world",
            "Surrounded by the Southern Alps",
            "Home to world's first commercial bungy jump"
        ],
        imageUrl: "https://images.pexels.com/photos/724963/pexels-photo-724963.jpeg?auto=compress&cs=tinysrgb&w=1260"
    },
    {
        name: "Hokkaido, Japan",
        climate: "cold",
        budget: "medium",
        activityTypes: ["nature", "cultural", "adventure"],
        funFacts: [
            "Famous for Sapporo Snow Festival",
            "Known for natural hot springs",
            "Home to unique red-crowned cranes"
        ],
        imageUrl: "https://images.pexels.com/photos/3800117/pexels-photo-3800117.jpeg?auto=compress&cs=tinysrgb&w=1260"
    },
    {
        name: "Zakopane, Poland",
        climate: "cold",
        budget: "budget",
        activityTypes: ["adventure", "nature", "cultural"],
        funFacts: [
            "Poland's winter capital",
            "Unique wooden architecture",
            "Gateway to the Tatra Mountains"
        ],
        imageUrl: "https://images.pexels.com/photos/2760289/pexels-photo-2760289.jpeg?auto=compress&cs=tinysrgb&w=1260"
    },
    {
        name: "Sofia, Bulgaria",
        climate: "cold",
        budget: "budget",
        activityTypes: ["cultural", "adventure", "nature"],
        funFacts: [
            "One of Europe's oldest cities",
            "Surrounded by Vitosha Mountain",
            "Has natural mineral springs throughout the city"
        ],
        imageUrl: "https://images.pexels.com/photos/15691184/pexels-photo-15691184.jpeg?auto=compress&cs=tinysrgb&w=1260"
    },
    {
        name: "Brasov, Romania",
        climate: "cold",
        budget: "budget",
        activityTypes: ["cultural", "nature", "adventure"],
        funFacts: [
            "Home to Bran Castle (Dracula's Castle)",
            "Medieval city walls still intact",
            "Gateway to the Carpathian Mountains"
        ],
        imageUrl: "https://images.pexels.com/photos/3010067/pexels-photo-3010067.jpeg?auto=compress&cs=tinysrgb&w=1260"
    },
    {
        name: "Kyoto, Japan",
        climate: "temperate",
        budget: "luxury",
        activityTypes: ["cultural", "nature", "relaxation"],
        funFacts: [
            "Has over 1,600 Buddhist temples",
            "Former imperial capital of Japan",
            "Home to 17 UNESCO World Heritage sites"
        ],
        imageUrl: "https://images.pexels.com/photos/402028/pexels-photo-402028.jpeg?auto=compress&cs=tinysrgb&w=1260"
    },
    {
        name: "Vancouver, Canada",
        climate: "temperate",
        budget: "luxury",
        activityTypes: ["nature", "adventure", "cultural"],
        funFacts: [
            "Consistently ranked most livable city",
            "Can ski and surf in the same day",
            "World's longest uninterrupted waterfront path"
        ],
        imageUrl: "https://images.pexels.com/photos/63332/science-world-false-creek-vancouver-british-columbia-63332.jpeg?auto=compress&cs=tinysrgb&w=1260"
    },
    {
        name: "Melbourne, Australia",
        climate: "temperate",
        budget: "luxury",
        activityTypes: ["cultural", "adventure", "relaxation"],
        funFacts: [
            "World's most liveable city multiple times",
            "Tram network is the largest outside Europe",
            "Four seasons in one day weather"
        ],
        imageUrl: "https://images.pexels.com/photos/1123567/pexels-photo-1123567.jpeg?auto=compress&cs=tinysrgb&w=1260"
    },
    {
        name: "Edinburgh, Scotland",
        climate: "temperate",
        budget: "medium",
        activityTypes: ["cultural", "nature", "adventure"],
        funFacts: [
            "Built on seven hills like Rome",
            "Has more than 500 ghost sightings annually",
            "First city to have its own fire brigade"
        ],
        imageUrl: "https://images.pexels.com/photos/441379/pexels-photo-441379.jpeg?auto=compress&cs=tinysrgb&w=1260"
    },

   
     

    {
        name: "Portland, USA",
        climate: "temperate",
        budget: "medium",
        activityTypes: ["nature", "cultural", "adventure"],
        funFacts: [
            "Most breweries per capita in the world",
            "Largest urban forest in the USA",
            "Known for its food truck culture"
        ],
        imageUrl: "https://images.pexels.com/photos/2287310/pexels-photo-2287310.jpeg"
    
    },
    {
        name: "Wellington, New Zealand",
        climate: "temperate",
        budget: "medium",
        activityTypes: ["cultural", "nature", "adventure"],
        funFacts: [
            "Windiest city in the world",
            "More cafes per capita than New York",
            "Home to Weta Workshop of Lord of the Rings fame"
        ],
        imageUrl: "https://images.pexels.com/photos/5342974/pexels-photo-5342974.jpeg"
    },

    // Temperate Climate + Budget Options
    {
        name: "Budapest, Hungary",
        climate: "temperate",
        budget: "budget",
        activityTypes: ["cultural", "relaxation"],
        funFacts: [
            "Has the world's largest thermal water cave system",
            "First underground railway in continental Europe",
            "Called the 'Paris of the East'"
        ],
        imageUrl: "https://images.pexels.com/photos/1115804/pexels-photo-1115804.jpeg"
    },
    {
        name: "Porto, Portugal",
        climate: "temperate",
        budget: "budget",
        activityTypes: ["cultural", "relaxation", "nature"],
        funFacts: [
            "Home to port wine cellars",
            "Has six bridges over Douro River",
            "Inspiration for Harry Potter's Hogwarts"
        ],
        imageUrl: "https://images.pexels.com/photos/2549018/pexels-photo-2549018.jpeg"
    },
    {
        name: "Ljubljana, Slovenia",
        climate: "temperate",
        budget: "budget",
        activityTypes: ["cultural", "nature", "adventure"],
        funFacts: [
            "One of the greenest capitals in Europe",
            "Has a castle overlooking the city",
            "Name means 'beloved' in Slovenian"
        ],
        imageUrl: "https://images.pexels.com/photos/2868242/pexels-photo-2868242.jpeg"
    }

];