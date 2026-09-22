import { Activity, Destination, Hotel, Restaurant, TravelTip } from '../types';

export const destinations: Destination[] = [
  {
    id: 'boracay',
    name: 'Boracay',
    location: 'Western Visayas',
    region: 'Visayas',
    category: 'Beach',
    description: 'Famous for powdery white sand beaches, sunset strolls, and vibrant island nightlife wrapped in a stunning tropical setting.',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1527631746610-bca00a040d60?auto=format&fit=crop&w=1200&q=80'
    ],
    budget: '₱3,500–₱8,000/day',
    rating: 4.8,
    bestTime: 'November to April',
    days: 3,
    weather: 'Warm and sunny with sea breezes. Ideal for beach days most of the year.',
    difficulty: 'Easy',
    activities: [
      { id: 'boracay-activity-1', name: 'Island Hopping', destination: 'Boracay', image: 'https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=800&q=80', description: 'Explore hidden coves and swim in clear blue waters around the island.', cost: 1800, duration: '3–4 hours', difficulty: 'Easy', category: 'Water' },
      { id: 'boracay-activity-2', name: 'Sunset Sailing', destination: 'Boracay', image: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=800&q=80', description: 'Enjoy a scenic sunset cruise with golden hour views and refreshing drinks.', cost: 2200, duration: '2 hours', difficulty: 'Easy', category: 'Water' }
    ],
    stays: [
      { id: 'boracay-stay-1', name: 'The Lind Boracay', location: 'Station 1', image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80', pricePerNight: 5200, rating: 4.9, type: 'Resort' },
      { id: 'boracay-stay-2', name: 'Frendz Resort', location: 'Station 2', image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=800&q=80', pricePerNight: 3600, rating: 4.6, type: 'Boutique' }
    ],
    restaurants: [
      { id: 'boracay-food-1', name: 'D’Mall Food Hall', cuisine: 'Filipino & International', priceRange: '₱300–₱700', rating: 4.7, recommendedFood: 'Inihaw na Isda and halo-halo' },
      { id: 'boracay-food-2', name: 'Aria Cucina Italiana', cuisine: 'Italian', priceRange: '₱800–₱1,500', rating: 4.8, recommendedFood: 'Truffle pasta and tiramisu' }
    ],
    travelTips: ['Bring reef-safe sunscreen.', 'Book beachfront stays early during December.', 'Use e-trikes for short hops around the island.'],
    estimatedCost: { accommodation: 15000, food: 4000, transportation: 2500, activities: 4500, miscellaneous: 2000 }
  },
  {
    id: 'palawan',
    name: 'Palawan',
    location: 'MIMAROPA',
    region: 'Luzon',
    category: 'Nature',
    description: 'A tropical paradise of limestone cliffs, hidden lagoons, and some of the most breathtaking island views in the country.',
    image: 'https://images.unsplash.com/photo-1573843981267-be1999ff37cd?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1573843981267-be1999ff37cd?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1527631746610-bca00a040d60?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80'
    ],
    budget: '₱4,500–₱12,000/day',
    rating: 4.9,
    bestTime: 'November to May',
    days: 5,
    weather: 'Sunny and tropical with dry conditions perfect for island hopping and diving.',
    difficulty: 'Easy',
    activities: [
      { id: 'palawan-activity-1', name: 'El Nido Island Hopping', destination: 'Palawan', image: 'https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=800&q=80', description: 'Cruise past dramatic cliffs, lagoons, and stunning beaches.', cost: 2500, duration: '6 hours', difficulty: 'Easy', category: 'Adventure' },
      { id: 'palawan-activity-2', name: 'Underground River Tour', destination: 'Palawan', image: 'https://images.unsplash.com/photo-1527631746610-bca00a040d60?auto=format&fit=crop&w=800&q=80', description: 'See one of the Philippines’ most admired natural wonders by boat and cave.', cost: 1600, duration: '2–3 hours', difficulty: 'Easy', category: 'Nature' }
    ],
    stays: [
      { id: 'palawan-stay-1', name: 'Amanpulo', location: 'Pangulasian Island', image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=800&q=80', pricePerNight: 18000, rating: 5.0, type: 'Luxury Resort' },
      { id: 'palawan-stay-2', name: 'Atlas Hotel', location: 'Puerto Princesa', image: 'https://images.unsplash.com/photo-1445019980597-93fa8acb246c?auto=format&fit=crop&w=800&q=80', pricePerNight: 4200, rating: 4.7, type: 'City Hotel' }
    ],
    restaurants: [
      { id: 'palawan-food-1', name: 'Kalui', cuisine: 'Filipino', priceRange: '₱800–₱1,800', rating: 4.8, recommendedFood: 'Coconut crab and seafood platter' },
      { id: 'palawan-food-2', name: 'Bistro Remedios', cuisine: 'Fusion', priceRange: '₱500–₱1,200', rating: 4.6, recommendedFood: 'Fresh grilled seafood' }
    ],
    travelTips: ['Reserve boat trips early in peak season.', 'Carry cash for island transfers and local shops.', 'Bring a dry bag for lagoon excursions.'],
    estimatedCost: { accommodation: 20000, food: 6000, transportation: 3500, activities: 7000, miscellaneous: 2500 }
  },
  {
    id: 'siargao',
    name: 'Siargao',
    location: 'Caraga',
    region: 'Mindanao',
    category: 'Adventure',
    description: 'The surf capital of the Philippines, with cloud-kissed islands, hidden lagoons, and unforgettable beach days.',
    image: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1493558103817-58b2924bce98?auto=format&fit=crop&w=1200&q=80'
    ],
    budget: '₱3,000–₱9,500/day',
    rating: 4.7,
    bestTime: 'March to October',
    days: 4,
    weather: 'Warm tropical weather with occasional rain showers, especially in the monsoon months.',
    difficulty: 'Moderate',
    activities: [
      { id: 'siargao-activity-1', name: 'Surfing at Cloud 9', destination: 'Siargao', image: 'https://images.unsplash.com/photo-1527631746610-bca00a040d60?auto=format&fit=crop&w=800&q=80', description: 'Catch some of the best waves in the country with beginner and intermediate lessons.', cost: 1200, duration: '2 hours', difficulty: 'Moderate', category: 'Adventure' },
      { id: 'siargao-activity-2', name: 'Sugba Lagoon', destination: 'Siargao', image: 'https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=800&q=80', description: 'Kayak, swim, and relax in a mesmerizing turquoise lagoon.', cost: 1000, duration: '3 hours', difficulty: 'Easy', category: 'Water' }
    ],
    stays: [
      { id: 'siargao-stay-1', name: 'Huntress Hotel', location: 'General Luna', image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=800&q=80', pricePerNight: 4300, rating: 4.8, type: 'Boutique Hotel' },
      { id: 'siargao-stay-2', name: 'Siargao Inn', location: 'Cloud 9', image: 'https://images.unsplash.com/photo-1445019980597-93fa8acb246c?auto=format&fit=crop&w=800&q=80', pricePerNight: 2500, rating: 4.5, type: 'Budget Stay' }
    ],
    restaurants: [
      { id: 'siargao-food-1', name: 'Kermit Surf School Café', cuisine: 'Filipino & Western', priceRange: '₱250–₱800', rating: 4.8, recommendedFood: 'Ceviche and grilled burger' },
      { id: 'siargao-food-2', name: 'Shaka Siargao', cuisine: 'Seafood', priceRange: '₱600–₱1,200', rating: 4.7, recommendedFood: 'Grilled squid and rice bowls' }
    ],
    travelTips: ['Bring cash as some areas have spotty card payment.', 'Rent a scooter only if you are comfortable driving on rough roads.', 'Pack a rash guard and reef-safe sunscreen.'],
    estimatedCost: { accommodation: 12000, food: 4500, transportation: 2500, activities: 3500, miscellaneous: 1800 }
  },
  {
    id: 'cebu',
    name: 'Cebu',
    location: 'Central Visayas',
    region: 'Visayas',
    category: 'City',
    description: 'A perfect blend of heritage, island vibes, and modern city energy with easy access to beaches and diving spots.',
    image: 'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1527631746610-bca00a040d60?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1493558103817-58b2924bce98?auto=format&fit=crop&w=1200&q=80'
    ],
    budget: '₱2,800–₱7,500/day',
    rating: 4.6,
    bestTime: 'January to June',
    days: 4,
    weather: 'Warm and tropical with lighter rains in the shoulder months.',
    difficulty: 'Easy',
    activities: [
      { id: 'cebu-activity-1', name: 'Oslob Whale Shark Encounter', destination: 'Cebu', image: 'https://images.unsplash.com/photo-1527631746610-bca00a040d60?auto=format&fit=crop&w=800&q=80', description: 'Swim alongside gentle whale sharks in one of the world’s most unique marine experiences.', cost: 2500, duration: '2 hours', difficulty: 'Easy', category: 'Wildlife' },
      { id: 'cebu-activity-2', name: 'Kawasan Falls', destination: 'Cebu', image: 'https://images.unsplash.com/photo-1493558103817-58b2924bce98?auto=format&fit=crop&w=800&q=80', description: 'Cool off at a natural waterfall with turquoise pools and jungle scenery.', cost: 500, duration: '4 hours', difficulty: 'Moderate', category: 'Nature' }
    ],
    stays: [
      { id: 'cebu-stay-1', name: 'Marco Polo Plaza', location: 'Cebu City', image: 'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=800&q=80', pricePerNight: 7800, rating: 4.8, type: 'Luxury Hotel' },
      { id: 'cebu-stay-2', name: 'Hotel Elizabeth', location: 'Downtown Cebu', image: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&w=800&q=80', pricePerNight: 3200, rating: 4.5, type: 'City Hotel' }
    ],
    restaurants: [
      { id: 'cebu-food-1', name: 'Lutong Bahay', cuisine: 'Filipino', priceRange: '₱200–₱600', rating: 4.7, recommendedFood: 'Lechon belly and puso' },
      { id: 'cebu-food-2', name: 'La Vie Parisienne', cuisine: 'French', priceRange: '₱600–₱1,400', rating: 4.9, recommendedFood: 'Croissant sandwich and cafe latte' }
    ],
    travelTips: ['Use ride-hailing apps for easier city movement.', 'Try a beach day trip to Moalboal if you have extra time.', 'Bring a light rain jacket for afternoon showers.'],
    estimatedCost: { accommodation: 12000, food: 4500, transportation: 3000, activities: 5000, miscellaneous: 2000 }
  },
  {
    id: 'bohol',
    name: 'Bohol',
    location: 'Central Visayas',
    region: 'Visayas',
    category: 'Historical',
    description: 'Home to iconic chocolate hills, heritage towns, and a laid-back island rhythm that pairs adventure with culture.',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1527631746610-bca00a040d60?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format&fit=crop&w=1200&q=80'
    ],
    budget: '₱3,000–₱8,500/day',
    rating: 4.7,
    bestTime: 'November to April',
    days: 3,
    weather: 'Mostly sunny and dry in the peak season; warm even during off-peak months.',
    difficulty: 'Easy',
    activities: [
      { id: 'bohol-activity-1', name: 'Chocolate Hills Adventure', destination: 'Bohol', image: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=800&q=80', description: 'Visit one of the country’s most iconic geological landmarks and take in panoramic views.', cost: 700, duration: '2 hours', difficulty: 'Easy', category: 'Sightseeing' },
      { id: 'bohol-activity-2', name: 'Loboc River Cruise', destination: 'Bohol', image: 'https://images.unsplash.com/photo-1573843981267-be1999ff37cd?auto=format&fit=crop&w=800&q=80', description: 'Enjoy a mellow river cruise with music, food, and scenic landscapes.', cost: 1200, duration: '2 hours', difficulty: 'Easy', category: 'Cultural' }
    ],
    stays: [
      { id: 'bohol-stay-1', name: 'Bohol Beach Club', location: 'Alona Beach', image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=800&q=80', pricePerNight: 5000, rating: 4.7, type: 'Beach Resort' },
      { id: 'bohol-stay-2', name: 'Mithi Resort', location: 'Tagbilaran', image: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&w=800&q=80', pricePerNight: 2800, rating: 4.5, type: 'Eco Stay' }
    ],
    restaurants: [
      { id: 'bohol-food-1', name: 'Bohol Bee Farm', cuisine: 'Healthy & Filipino', priceRange: '₱300–₱900', rating: 4.8, recommendedFood: 'Organic pizza and coffee' },
      { id: 'bohol-food-2', name: 'Alona Beach Restaurants', cuisine: 'Seafood', priceRange: '₱500–₱1,200', rating: 4.6, recommendedFood: 'Grilled tuna and calamay' }
    ],
    travelTips: ['Pair Bohol with a day trip to Panglao for beaches and island hopping.', 'Bring cash for local tricycles.', 'Book a countryside tour to see heritage houses and rice terraces.'],
    estimatedCost: { accommodation: 12000, food: 4500, transportation: 2200, activities: 3000, miscellaneous: 1800 }
  },
  {
    id: 'baguio',
    name: 'Baguio',
    location: 'Cordillera Administrative Region',
    region: 'Luzon',
    category: 'Mountain',
    description: 'The cool mountain capital known for pine trees, market culture, and refreshing weather all year round.',
    image: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1200&q=80'
    ],
    budget: '₱2,200–₱6,000/day',
    rating: 4.5,
    bestTime: 'October to March',
    days: 2,
    weather: 'Cool and crisp with occasional chilly nights, especially in the evening.',
    difficulty: 'Easy',
    activities: [
      { id: 'baguio-activity-1', name: 'Burnham Park Walk', destination: 'Baguio', image: 'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=800&q=80', description: 'Stroll around the city’s iconic park and enjoy a relaxing day amid pine trees.', cost: 300, duration: '2 hours', difficulty: 'Easy', category: 'City' },
      { id: 'baguio-activity-2', name: 'Mines View Park', destination: 'Baguio', image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=800&q=80', description: 'Take in a panoramic mountain view and shop for local souvenirs.', cost: 200, duration: '1–2 hours', difficulty: 'Easy', category: 'Sightseeing' }
    ],
    stays: [
      { id: 'baguio-stay-1', name: 'The Forest Lodge', location: 'Camp John Hay', image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=800&q=80', pricePerNight: 5200, rating: 4.8, type: 'Mountain Resort' },
      { id: 'baguio-stay-2', name: 'Hotel Nook', location: 'City Proper', image: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&w=800&q=80', pricePerNight: 2600, rating: 4.4, type: 'Boutique Hotel' }
    ],
    restaurants: [
      { id: 'baguio-food-1', name: 'Cafe by the Ruins', cuisine: 'Fusion', priceRange: '₱250–₱700', rating: 4.6, recommendedFood: 'Mushroom soup and shawarma' },
      { id: 'baguio-food-2', name: 'Good Taste', cuisine: 'Filipino', priceRange: '₱150–₱500', rating: 4.5, recommendedFood: 'Pancit and chicken afritada' }
    ],
    travelTips: ['Bring a jacket because nights can get chilly.', 'Avoid heavy traffic by heading out early morning.', 'Visit the local market for fresh strawberry treats.'],
    estimatedCost: { accommodation: 6000, food: 3000, transportation: 1500, activities: 1500, miscellaneous: 1200 }
  },
  {
    id: 'banaue',
    name: 'Banaue',
    location: 'Cordillera',
    region: 'Luzon',
    category: 'Nature',
    description: 'A breathtaking agricultural landscape recognized for its ancient rice terraces and stunning mountain surroundings.',
    image: 'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1200&q=80'
    ],
    budget: '₱2,000–₱5,500/day',
    rating: 4.6,
    bestTime: 'November to February',
    days: 2,
    weather: 'Cool mountain climate with misty mornings and a refreshing breeze.',
    difficulty: 'Moderate',
    activities: [
      { id: 'banaue-activity-1', name: 'Rice Terrace Trek', destination: 'Banaue', image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=800&q=80', description: 'Walk through ancient terraces and enjoy a close-up look at local heritage.', cost: 600, duration: '3 hours', difficulty: 'Moderate', category: 'Nature' },
      { id: 'banaue-activity-2', name: 'Ifugao Village Visit', destination: 'Banaue', image: 'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=800&q=80', description: 'Learn from indigenous communities and explore their carved landscape traditions.', cost: 400, duration: '2 hours', difficulty: 'Easy', category: 'Culture' }
    ],
    stays: [
      { id: 'banaue-stay-1', name: 'Banaue Hotel', location: 'Town Proper', image: 'https://images.unsplash.com/photo-1445019980597-93fa8acb246c?auto=format&fit=crop&w=800&q=80', pricePerNight: 2600, rating: 4.5, type: 'Mountain Hotel' },
      { id: 'banaue-stay-2', name: 'Viewpoint Homestay', location: 'Banaue View Deck', image: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&w=800&q=80', pricePerNight: 2000, rating: 4.6, type: 'Homestay' }
    ],
    restaurants: [
      { id: 'banaue-food-1', name: 'Banaue Local Eatery', cuisine: 'Filipino', priceRange: '₱200–₱500', rating: 4.4, recommendedFood: 'Pinikpikan and fresh vegetables' },
      { id: 'banaue-food-2', name: 'Mountain Café', cuisine: 'Coffee & Snacks', priceRange: '₱150–₱400', rating: 4.6, recommendedFood: 'Local coffee and rice cake' }
    ],
    travelTips: ['Wear sturdy shoes for uneven paths.', 'Hire a local guide for deeper trekking access.', 'Bring a warm layer for early morning views.'],
    estimatedCost: { accommodation: 5000, food: 2500, transportation: 1800, activities: 1200, miscellaneous: 1000 }
  },
  {
    id: 'vigan',
    name: 'Vigan',
    location: 'Ilocos Sur',
    region: 'Luzon',
    category: 'Historical',
    description: 'A UNESCO-listed heritage town famous for cobblestone streets, ancestral houses, and centuries-old traditions.',
    image: 'https://images.unsplash.com/photo-1527631746610-bca00a040d60?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1527631746610-bca00a040d60?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=1200&q=80'
    ],
    budget: '₱2,200–₱6,000/day',
    rating: 4.6,
    bestTime: 'December to February',
    days: 2,
    weather: 'Mild and sunny with cooler evenings, especially during the dry season.',
    difficulty: 'Easy',
    activities: [
      { id: 'vigan-activity-1', name: 'Heritage Tour', destination: 'Vigan', image: 'https://images.unsplash.com/photo-1527631746610-bca00a040d60?auto=format&fit=crop&w=800&q=80', description: 'Explore the historic district and walk through ancestral house corridors.', cost: 300, duration: '2 hours', difficulty: 'Easy', category: 'Culture' },
      { id: 'vigan-activity-2', name: 'Caldera Experience', destination: 'Vigan', image: 'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=800&q=80', description: 'Discover local crafts and heritage food around the picturesque plaza.', cost: 400, duration: '2 hours', difficulty: 'Easy', category: 'Food' }
    ],
    stays: [
      { id: 'vigan-stay-1', name: 'Hotel Luna', location: 'Vigan Heritage District', image: 'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=800&q=80', pricePerNight: 4300, rating: 4.7, type: 'Heritage Hotel' },
      { id: 'vigan-stay-2', name: 'Casa de Vigan', location: 'Centro Sur', image: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&w=800&q=80', pricePerNight: 2200, rating: 4.4, type: 'Historic Inn' }
    ],
    restaurants: [
      { id: 'vigan-food-1', name: 'Café Leona', cuisine: 'Filipino & Cafe', priceRange: '₱250–₱600', rating: 4.7, recommendedFood: 'Empanada and café mochas' },
      { id: 'vigan-food-2', name: 'Bahay na Bato', cuisine: 'Local Cuisine', priceRange: '₱300–₱700', rating: 4.5, recommendedFood: 'Longganisa and bagnet' }
    ],
    travelTips: ['Keep extra cash for local souvenirs.', 'Visit early to avoid crowds in the plaza.', 'Take a calesa ride to enjoy the old town atmosphere.'],
    estimatedCost: { accommodation: 6000, food: 3000, transportation: 1200, activities: 1500, miscellaneous: 1000 }
  },
  {
    id: 'tagaytay',
    name: 'Tagaytay',
    location: 'Cavite',
    region: 'Luzon',
    category: 'Adventure',
    description: 'A scenic upland escape boasting cool weather, striking views of Taal Volcano, and many cozy weekend stops.',
    image: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=1200&q=80'
    ],
    budget: '₱2,100–₱6,400/day',
    rating: 4.5,
    bestTime: 'Any time of year',
    days: 2,
    weather: 'Cool with breezy evenings and a comfortable climate compared to the city.',
    difficulty: 'Easy',
    activities: [
      { id: 'tagaytay-activity-1', name: 'Sky Ranch Adventure', destination: 'Tagaytay', image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=800&q=80', description: 'Ride the Ferris wheel and enjoy a classic family-friendly highland day.', cost: 500, duration: '2 hours', difficulty: 'Easy', category: 'Adventure' },
      { id: 'tagaytay-activity-2', name: 'Taal Lake Viewpoint', destination: 'Tagaytay', image: 'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=800&q=80', description: 'Take in the world-famous view of the crater lake and volcanic island.', cost: 300, duration: '1 hour', difficulty: 'Easy', category: 'Sightseeing' }
    ],
    stays: [
      { id: 'tagaytay-stay-1', name: 'The Lake Hotel', location: 'Calamba Road', image: 'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=800&q=80', pricePerNight: 4600, rating: 4.7, type: 'Boutique Hotel' },
      { id: 'tagaytay-stay-2', name: 'Taal Vista Hotel', location: 'Viewpoint', image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=800&q=80', pricePerNight: 6200, rating: 4.8, type: 'Resort' }
    ],
    restaurants: [
      { id: 'tagaytay-food-1', name: 'Leslie’s', cuisine: 'Filipino', priceRange: '₱300–₱900', rating: 4.7, recommendedFood: 'Bulalo and crispy tawilis' },
      { id: 'tagaytay-food-2', name: 'Bag of Beans', cuisine: 'Cafe & Bakery', priceRange: '₱250–₱700', rating: 4.8, recommendedFood: 'Strawberry shortcake and coffee' }
    ],
    travelTips: ['Visit on weekdays for a quieter vibe.', 'Bring light layers for cooler evenings.', 'Check weather conditions before planning mountain drives.'],
    estimatedCost: { accommodation: 7000, food: 3000, transportation: 1300, activities: 1800, miscellaneous: 1000 }
  },
  {
    id: 'manila',
    name: 'Manila',
    location: 'Metro Manila',
    region: 'Luzon',
    category: 'City',
    description: 'A dynamic urban destination where history, food culture, and modern nightlife all unfold within one bustling metropolis.',
    image: 'https://images.unsplash.com/photo-1526481280695-3c4691d4d0a5?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1526481280695-3c4691d4d0a5?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1200&q=80'
    ],
    budget: '₱2,800–₱8,000/day',
    rating: 4.4,
    bestTime: 'November to April',
    days: 3,
    weather: 'Warm with occasional rain; best to schedule outdoor plans around the early morning or evening.',
    difficulty: 'Easy',
    activities: [
      { id: 'manila-activity-1', name: 'Intramuros Heritage Walk', destination: 'Manila', image: 'https://images.unsplash.com/photo-1514565131-fce0801e5785?auto=format&fit=crop&w=800&q=80', description: 'Explore the city’s historic core, churches, and fortress walls.', cost: 600, duration: '3 hours', difficulty: 'Easy', category: 'History' },
      { id: 'manila-activity-2', name: 'Binondo Food Crawl', destination: 'Manila', image: 'https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=800&q=80', description: 'Taste iconic Chinese-Filipino dishes while exploring the city’s oldest Chinatown.', cost: 900, duration: '2 hours', difficulty: 'Easy', category: 'Food' }
    ],
    stays: [
      { id: 'manila-stay-1', name: 'The Peninsula Manila', location: 'Makati', image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80', pricePerNight: 12000, rating: 4.9, type: 'Luxury Hotel' },
      { id: 'manila-stay-2', name: 'B Hotel', location: 'Quezon City', image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=800&q=80', pricePerNight: 3800, rating: 4.6, type: 'Modern Hotel' }
    ],
    restaurants: [
      { id: 'manila-food-1', name: 'Cafe Ilang-Ilang', cuisine: 'Filipino & International', priceRange: '₱600–₱1,400', rating: 4.8, recommendedFood: 'Chicken inasal and brunch favorites' },
      { id: 'manila-food-2', name: 'Dampa Seafood Grill', cuisine: 'Seafood', priceRange: '₱500–₱1,200', rating: 4.5, recommendedFood: 'Fresh shellfish and seafood platters' }
    ],
    travelTips: ['Use a transport app for efficient routes across the metro.', 'Carry bottled water and small cash for local vendors.', 'Start city sightseeing earlier to avoid traffic and heat.'],
    estimatedCost: { accommodation: 10000, food: 4500, transportation: 2600, activities: 2500, miscellaneous: 1800 }
  },
  {
    id: 'iloilo',
    name: 'Iloilo',
    location: 'Western Visayas',
    region: 'Visayas',
    category: 'City',
    description: 'A refined city with heritage architecture, modern dining, and a welcoming atmosphere for a relaxed island getaway.',
    image: 'https://images.unsplash.com/photo-1526481280695-3c4691d4d0a5?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1526481280695-3c4691d4d0a5?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=1200&q=80'
    ],
    budget: '₱2,500–₱6,500/day',
    rating: 4.4,
    bestTime: 'November to April',
    days: 2,
    weather: 'Warm and comfortable, with minimal rainfall in the dry season.',
    difficulty: 'Easy',
    activities: [
      { id: 'iloilo-activity-1', name: 'Molo Church Walk', destination: 'Iloilo', image: 'https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=800&q=80', description: 'Explore one of the city’s most iconic churches and historical districts.', cost: 200, duration: '1 hour', difficulty: 'Easy', category: 'History' },
      { id: 'iloilo-activity-2', name: 'La Paz Market Tour', destination: 'Iloilo', image: 'https://images.unsplash.com/photo-1514565131-fce0801e5785?auto=format&fit=crop&w=800&q=80', description: 'Sample local delicacies and discover Iloilo’s bustling culinary scene.', cost: 500, duration: '2 hours', difficulty: 'Easy', category: 'Food' }
    ],
    stays: [
      { id: 'iloilo-stay-1', name: 'Richmonde Hotel Iloilo', location: 'Mandalagan', image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=800&q=80', pricePerNight: 5600, rating: 4.7, type: 'City Hotel' },
      { id: 'iloilo-stay-2', name: 'The Avenue Hotel', location: 'City Center', image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=800&q=80', pricePerNight: 3100, rating: 4.5, type: 'Boutique Stay' }
    ],
    restaurants: [
      { id: 'iloilo-food-1', name: 'Bahay Kubo', cuisine: 'Filipino', priceRange: '₱300–₱700', rating: 4.6, recommendedFood: 'Batchoy and chorizo' },
      { id: 'iloilo-food-2', name: 'The Pig & Palm', cuisine: 'Modern Filipino', priceRange: '₱500–₱1,200', rating: 4.8, recommendedFood: 'Ilonggo-inspired tapas and sourdough' }
    ],
    travelTips: ['Explore the city by jeepney for a local experience.', 'Try a heritage food crawl in the morning.', 'Add a day trip to Guimaras for a more island-style getaway.'],
    estimatedCost: { accommodation: 9000, food: 3500, transportation: 1800, activities: 1800, miscellaneous: 1000 }
  },
  {
    id: 'dumaguete',
    name: 'Dumaguete',
    location: 'Negros Oriental',
    region: 'Visayas',
    category: 'Beach',
    description: 'A laid-back university city near some of the best beach and diving spots in the Visayas.',
    image: 'https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1493558103817-58b2924bce98?auto=format&fit=crop&w=1200&q=80'
    ],
    budget: '₱2,400–₱7,000/day',
    rating: 4.5,
    bestTime: 'April to June',
    days: 3,
    weather: 'Warm and tropical with gentle sea breezes.',
    difficulty: 'Easy',
    activities: [
      { id: 'dumaguete-activity-1', name: 'Apo Island Snorkel', destination: 'Dumaguete', image: 'https://images.unsplash.com/photo-1493558103817-58b2924bce98?auto=format&fit=crop&w=800&q=80', description: 'Snorkel among clear reefs and vibrant marine life in a protected area.', cost: 1800, duration: '4 hours', difficulty: 'Easy', category: 'Water' },
      { id: 'dumaguete-activity-2', name: 'Casaroro Falls', destination: 'Dumaguete', image: 'https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=800&q=80', description: 'Visit a jungle waterfall and cool off in a refreshing freshwater pool.', cost: 400, duration: '3 hours', difficulty: 'Moderate', category: 'Nature' }
    ],
    stays: [
      { id: 'dumaguete-stay-1', name: 'Harolds Hotel', location: 'Dumaguete City', image: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&w=800&q=80', pricePerNight: 3500, rating: 4.7, type: 'Boutique Hotel' },
      { id: 'dumaguete-stay-2', name: 'Silliman University Inn', location: 'City Proper', image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=800&q=80', pricePerNight: 2200, rating: 4.4, type: 'Budget Stay' }
    ],
    restaurants: [
      { id: 'dumaguete-food-1', name: 'Sans Rival', cuisine: 'Filipino & Dessert', priceRange: '₱250–₱600', rating: 4.8, recommendedFood: 'Sans Rival and local pastries' },
      { id: 'dumaguete-food-2', name: 'The Old Spaghetti House', cuisine: 'Italian', priceRange: '₱300–₱800', rating: 4.5, recommendedFood: 'Pasta and toasted garlic bread' }
    ],
    travelTips: ['Plan a day trip to Apo Island for one of the best snorkeling spots in the country.', 'Bring cash because some local shops are cash-only.', 'Try the local sweets and coffee along the city streets.'],
    estimatedCost: { accommodation: 7000, food: 3000, transportation: 1800, activities: 2800, miscellaneous: 1200 }
  },
  {
    id: 'camiguin',
    name: 'Camiguin',
    location: 'Northern Mindanao',
    region: 'Mindanao',
    category: 'Nature',
    description: 'An island of volcanoes, hot springs, and lush scenery, perfect for a slow and scenic nature escape.',
    image: 'https://images.unsplash.com/photo-1493558103817-58b2924bce98?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1493558103817-58b2924bce98?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=1200&q=80'
    ],
    budget: '₱2,600–₱7,500/day',
    rating: 4.7,
    bestTime: 'March to May',
    days: 3,
    weather: 'Warm and humid with lightweight rain showers but generally favorable for island adventures.',
    difficulty: 'Moderate',
    activities: [
      { id: 'camiguin-activity-1', name: 'Hot Spring Soak', destination: 'Camiguin', image: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=800&q=80', description: 'Take a relaxing soak in mineral-rich volcanic springs.', cost: 300, duration: '1–2 hours', difficulty: 'Easy', category: 'Nature' },
      { id: 'camiguin-activity-2', name: 'Sunken Cemetery Dive', destination: 'Camiguin', image: 'https://images.unsplash.com/photo-1493558103817-58b2924bce98?auto=format&fit=crop&w=800&q=80', description: 'Dive into an underwater cemetery and discover volcanic marine life.', cost: 2200, duration: '2 hours', difficulty: 'Moderate', category: 'Water' }
    ],
    stays: [
      { id: 'camiguin-stay-1', name: 'The Camiguin Resort', location: 'Mambajao', image: 'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=800&q=80', pricePerNight: 5600, rating: 4.8, type: 'Resort' },
      { id: 'camiguin-stay-2', name: 'Pabua Homestay', location: 'Town Proper', image: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&w=800&q=80', pricePerNight: 2200, rating: 4.5, type: 'Homestay' }
    ],
    restaurants: [
      { id: 'camiguin-food-1', name: 'Kain Sa Camiguin', cuisine: 'Local Fare', priceRange: '₱200–₱600', rating: 4.6, recommendedFood: 'Fish and tropical fruit shakes' },
      { id: 'camiguin-food-2', name: 'Granstand Café', cuisine: 'Cafe & Grill', priceRange: '₱300–₱800', rating: 4.7, recommendedFood: 'Grilled seafood and coffee' }
    ],
    travelTips: ['Rent a motorbike to move from one scenic spot to the next.', 'Carry mosquito repellent for nature areas.', 'Aim for early departure times for waterfall and hot spring trips.'],
    estimatedCost: { accommodation: 8000, food: 3000, transportation: 2200, activities: 2500, miscellaneous: 1000 }
  },
  {
    id: 'davao',
    name: 'Davao',
    location: 'Davao Region',
    region: 'Mindanao',
    category: 'Adventure',
    description: 'A vibrant city with mountain views, rich food culture, and nearby natural wonders that make it ideal for adventure lovers.',
    image: 'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1526481280695-3c4691d4d0a5?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=1200&q=80'
    ],
    budget: '₱2,800–₱8,000/day',
    rating: 4.6,
    bestTime: 'March to June',
    days: 4,
    weather: 'Warm and tropical with occasional rain, best for flexible outdoor itineraries.',
    difficulty: 'Moderate',
    activities: [
      { id: 'davao-activity-1', name: 'Mount Apo Trek', destination: 'Davao', image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=800&q=80', description: 'Challenge yourself with a climb to the country’s highest peak.', cost: 3200, duration: '2 days', difficulty: 'Challenging', category: 'Adventure' },
      { id: 'davao-activity-2', name: 'Bahayang Pagatpat', destination: 'Davao', image: 'https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=800&q=80', description: 'Explore local culture and city views with a leisurely afternoon roam.', cost: 600, duration: '2 hours', difficulty: 'Easy', category: 'City' }
    ],
    stays: [
      { id: 'davao-stay-1', name: 'The Apo View Hotel', location: 'Davao City', image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80', pricePerNight: 6300, rating: 4.8, type: 'Mountain Hotel' },
      { id: 'davao-stay-2', name: 'Red Planet Davao', location: 'Downtown', image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=800&q=80', pricePerNight: 2800, rating: 4.5, type: 'Budget Hotel' }
    ],
    restaurants: [
      { id: 'davao-food-1', name: 'Lachi’s', cuisine: 'Filipino', priceRange: '₱300–₱800', rating: 4.9, recommendedFood: 'Durian-based desserts and grilled meats' },
      { id: 'davao-food-2', name: 'Mister Kimbob', cuisine: 'Korean & Filipino', priceRange: '₱300–₱900', rating: 4.6, recommendedFood: 'Bibimbap and seafood bowls' }
    ],
    travelTips: ['Try the local durian if you are adventurous.', 'Plan day hikes around sunrise for cooler temperatures.', 'Use airport taxis or rideshare for easy transfers.'],
    estimatedCost: { accommodation: 9000, food: 3500, transportation: 2200, activities: 4000, miscellaneous: 1600 }
  },
  {
    id: 'bukidnon',
    name: 'Bukidnon',
    location: 'Northern Mindanao',
    region: 'Mindanao',
    category: 'Mountain',
    description: 'A peaceful highland region with cool climate, rolling landscapes, and a countryside escape full of scenic routes.',
    image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1200&q=80'
    ],
    budget: '₱2,000–₱5,700/day',
    rating: 4.5,
    bestTime: 'January to April',
    days: 2,
    weather: 'Cool and refreshing, with mountain breezes and misty mornings.',
    difficulty: 'Easy',
    activities: [
      { id: 'bukidnon-activity-1', name: 'Cultural Highland Tour', destination: 'Bukidnon', image: 'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=800&q=80', description: 'Explore local farms, landscapes, and the region’s mountain villages.', cost: 600, duration: '3 hours', difficulty: 'Easy', category: 'Culture' },
      { id: 'bukidnon-activity-2', name: 'Cattle Ranch Ride', destination: 'Bukidnon', image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=800&q=80', description: 'Enjoy a scenic countryside ride amid open fields and cool mountain air.', cost: 900, duration: '2 hours', difficulty: 'Moderate', category: 'Adventure' }
    ],
    stays: [
      { id: 'bukidnon-stay-1', name: 'Pine Grove Lodge', location: 'Malaybalay', image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=800&q=80', pricePerNight: 3400, rating: 4.6, type: 'Lodge' },
      { id: 'bukidnon-stay-2', name: 'Hillside Farmstay', location: 'Valencia', image: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&w=800&q=80', pricePerNight: 2300, rating: 4.5, type: 'Farmstay' }
    ],
    restaurants: [
      { id: 'bukidnon-food-1', name: 'Kusina sa Bukid', cuisine: 'Filipino', priceRange: '₱200–₱550', rating: 4.5, recommendedFood: 'Beef stew and local vegetables' },
      { id: 'bukidnon-food-2', name: 'Valencia Coffee House', cuisine: 'Cafe & Grill', priceRange: '₱250–₱700', rating: 4.6, recommendedFood: 'Fresh coffee and grilled chicken' }
    ],
    travelTips: ['Pack a sweater for cool evenings and mountain roads.', 'Ask locals about lesser-known viewpoints and farm tours.', 'Plan short drives since roads can be steep and winding.'],
    estimatedCost: { accommodation: 6000, food: 2600, transportation: 2000, activities: 1500, miscellaneous: 800 }
  },
  {
    id: 'surigao',
    name: 'Surigao',
    location: 'Caraga',
    region: 'Mindanao',
    category: 'Beach',
    description: 'A gateway to island adventures and tropical coastlines, ideal for visitors looking for off-grid beach escapes.',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1493558103817-58b2924bce98?auto=format&fit=crop&w=1200&q=80'
    ],
    budget: '₱2,400–₱6,800/day',
    rating: 4.4,
    bestTime: 'March to June',
    days: 3,
    weather: 'Warm tropical with occasional heavy cloud cover and island rains.',
    difficulty: 'Easy',
    activities: [
      { id: 'surigao-activity-1', name: 'Island Hopping', destination: 'Surigao', image: 'https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=800&q=80', description: 'Visit nearby islets, swim in clear waters, and enjoy the off-the-grid coast.', cost: 1500, duration: '4 hours', difficulty: 'Easy', category: 'Water' },
      { id: 'surigao-activity-2', name: 'Tropical Beach Relaxation', destination: 'Surigao', image: 'https://images.unsplash.com/photo-1493558103817-58b2924bce98?auto=format&fit=crop&w=800&q=80', description: 'Take in quiet beaches and unwind on white or gray sandy shores.', cost: 500, duration: '2 hours', difficulty: 'Easy', category: 'Beach' }
    ],
    stays: [
      { id: 'surigao-stay-1', name: 'Arawan Beach Resort', location: 'Surigao City', image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80', pricePerNight: 4000, rating: 4.6, type: 'Beach Resort' },
      { id: 'surigao-stay-2', name: 'Bahay ng Manggagawa', location: 'City Center', image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=800&q=80', pricePerNight: 2400, rating: 4.4, type: 'Guest House' }
    ],
    restaurants: [
      { id: 'surigao-food-1', name: 'Surf House Food Court', cuisine: 'Filipino & Seafood', priceRange: '₱250–₱700', rating: 4.5, recommendedFood: 'Baked oysters and grilled fish' },
      { id: 'surigao-food-2', name: 'Harana sa Baybay', cuisine: 'Local Grill', priceRange: '₱300–₱800', rating: 4.6, recommendedFood: 'Seafood platter and rice' }
    ],
    travelTips: ['Use local guides for island transfers and boat rentals.', 'Bring a dry bag and snorkel gear.', 'Check sea conditions before planning long island-hopping trips.'],
    estimatedCost: { accommodation: 7000, food: 3000, transportation: 2200, activities: 2400, miscellaneous: 800 }
  }
];

export const activities: Activity[] = [
  { id: 'activity-1', name: 'Surfing Lesson', destination: 'Siargao', image: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=800&q=80', description: 'Learn the basics of catching small to medium waves with professional instructors.', cost: 1200, duration: '2 hours', difficulty: 'Moderate', category: 'Adventure' },
  { id: 'activity-2', name: 'Island Hopping', destination: 'Palawan', image: 'https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=800&q=80', description: 'Explore hidden islands, blue lagoons, and secret beach coves around the archipelago.', cost: 2500, duration: '6 hours', difficulty: 'Easy', category: 'Water' },
  { id: 'activity-3', name: 'Canyoneering', destination: 'Bohol', image: 'https://images.unsplash.com/photo-1493558103817-58b2924bce98?auto=format&fit=crop&w=800&q=80', description: 'Jump, hike, and navigate through river canyons surrounded by rainforest scenery.', cost: 1800, duration: '5 hours', difficulty: 'Challenging', category: 'Adventure' },
  { id: 'activity-4', name: 'Sunset Cruise', destination: 'Boracay', image: 'https://images.unsplash.com/photo-1527631746610-bca00a040d60?auto=format&fit=crop&w=800&q=80', description: 'Enjoy a relaxing coastal cruise as the sky turns gold and pink over the sea.', cost: 2200, duration: '2 hours', difficulty: 'Easy', category: 'Water' },
  { id: 'activity-5', name: 'Kayaking at Lagoons', destination: 'Baguio', image: 'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=800&q=80', description: 'Navigate calm waters with mountain scenery all around you.', cost: 700, duration: '2 hours', difficulty: 'Easy', category: 'Water' },
  { id: 'activity-6', name: 'Chocolate Hills Viewpoint', destination: 'Bohol', image: 'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format&fit=crop&w=800&q=80', description: 'Take in the iconic rolling hills from one of the best lookout points.', cost: 700, duration: '2 hours', difficulty: 'Easy', category: 'Nature' },
  { id: 'activity-7', name: 'Mountain Trek', destination: 'Bukidnon', image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=800&q=80', description: 'Experience cool mountain air while walking along scenic farm and ridge paths.', cost: 900, duration: '3 hours', difficulty: 'Moderate', category: 'Mountain' },
  { id: 'activity-8', name: 'City Food Crawl', destination: 'Manila', image: 'https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=800&q=80', description: 'Try an array of local favorites from Chinatown to hidden neighborhood gems.', cost: 900, duration: '2 hours', difficulty: 'Easy', category: 'Food' }
];

export const travelTips: TravelTip[] = [
  { id: 'tip-1', title: '10 Things to Pack for a Philippine Beach Trip', category: 'Packing', description: 'From reef-safe sunscreen to lightweight clothing, here’s what you should bring for island weather.', image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80' },
  { id: 'tip-2', title: 'How to Travel Around the Philippines on a Budget', category: 'Budget Travel', description: 'Learn which ferries, buses, and local transport options save you the most money.', image: 'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format&fit=crop&w=800&q=80' },
  { id: 'tip-3', title: 'Best Time to Visit Philippine Islands', category: 'Weather', description: 'Find out when to travel for ideal weather, lower crowds, and lower flight costs.', image: 'https://images.unsplash.com/photo-1493558103817-58b2924bce98?auto=format&fit=crop&w=800&q=80' },
  { id: 'tip-4', title: 'What to Know Before Your First Island-Hopping Trip', category: 'Island Hopping', description: 'A practical guide to boat safety, sun protection, and organizing your day trip.', image: 'https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=800&q=80' }
];

export const hotelData: Hotel[] = [
  { id: 'hotel-1', name: 'Seaside Haven', location: 'Boracay', image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80', pricePerNight: 4200, rating: 4.7, type: 'Resort' },
  { id: 'hotel-2', name: 'Alona Crest', location: 'Bohol', image: 'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=800&q=80', pricePerNight: 3900, rating: 4.6, type: 'Beach Hotel' },
  { id: 'hotel-3', name: 'Pine Retreat', location: 'Baguio', image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=800&q=80', pricePerNight: 3100, rating: 4.5, type: 'Mountain Stay' },
  { id: 'hotel-4', name: 'Blue Horizon Lodge', location: 'Siargao', image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=800&q=80', pricePerNight: 4800, rating: 4.8, type: 'Boutique Stay' }
];

export const restaurantData: Restaurant[] = [
  { id: 'restaurant-1', name: 'Sunset Grill', cuisine: 'Seafood', priceRange: '₱400–₱1,000', rating: 4.8, recommendedFood: 'Grilled squid and mango salsa' },
  { id: 'restaurant-2', name: 'Timpla Nayon', cuisine: 'Filipino', priceRange: '₱300–₱800', rating: 4.6, recommendedFood: 'Chicken adobo and rice' },
  { id: 'restaurant-3', name: 'Coconut Table', cuisine: 'Asian Fusion', priceRange: '₱500–₱1,200', rating: 4.7, recommendedFood: 'Coconut curry and desserts' },
  { id: 'restaurant-4', name: 'Salu-salo Kitchen', cuisine: 'Local Comfort Food', priceRange: '₱250–₱700', rating: 4.5, recommendedFood: 'Bicol express and halo-halo' }
];

export const defaultProfile = {
  name: 'Maria R.',
  email: 'maria@example.com',
  password: '123456',
  profileImage: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&q=80',
  preferences: 'Beach escapes, island hopping, food tours, and family-friendly adventures.'
};
