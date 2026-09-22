import { Link, NavLink, Route, Routes, useNavigate } from 'react-router-dom';
import { ArrowRight, Bell, Compass, Heart, Home, Menu, Mountain, Search, Star, User, X } from 'lucide-react';
import { useMemo, useState } from 'react';
import { activities, destinations, travelTips } from './data/sampleData';
import { Destination, Activity, ItineraryDay, ItineraryItem } from './types';

export const formatCurrency = (value: number) => `₱${value.toLocaleString()}`;

export function App() {
  const [favorites, setFavorites] = useState<string[]>(() => {
    const raw = localStorage.getItem('wanderph-favorites');
    return raw ? JSON.parse(raw) : [];
  });

  const [itinerary, setItinerary] = useState<ItineraryDay[]>(() => {
    const raw = localStorage.getItem('wanderph-itinerary');
    return raw ? JSON.parse(raw) : [
      { id: 'day-1', day: 1, activities: [
        { id: 'act-1', time: '8:00 AM', title: 'Hotel check-in' },
        { id: 'act-2', time: '10:00 AM', title: 'Beach exploration' },
        { id: 'act-3', time: '12:30 PM', title: 'Lunch' },
      ] }
    ];
  });

  const [message, setMessage] = useState<string | null>(null);

  const toggleFavorite = (id: string) => {
    const next = favorites.includes(id) ? favorites.filter(item => item !== id) : [...favorites, id];
    setFavorites(next);
    localStorage.setItem('wanderph-favorites', JSON.stringify(next));
    setMessage(next.includes(id) ? 'Added to favorites' : 'Removed from favorites');
    setTimeout(() => setMessage(null), 1600);
  };

  const addItineraryDay = () => {
    setItinerary(prev => [...prev, { id: `day-${prev.length + 1}`, day: prev.length + 1, activities: [{ id: `${Date.now()}`, time: '9:00 AM', title: 'Free time' }] }]);
  };

  const updateItinerary = (dayId: string, activityId: string, field: keyof ItineraryItem, value: string) => {
    setItinerary(prev => prev.map(day => day.id === dayId ? {
      ...day,
      activities: day.activities.map(item => item.id === activityId ? { ...item, [field]: value } : item)
    } : day));
  };

  const removeActivity = (dayId: string, activityId: string) => {
    setItinerary(prev => prev.map(day => day.id === dayId ? { ...day, activities: day.activities.filter(item => item.id !== activityId) } : day).filter(day => day.activities.length > 0 || day.id !== dayId));
  };

  const saveItinerary = () => {
    localStorage.setItem('wanderph-itinerary', JSON.stringify(itinerary));
    setMessage('Itinerary saved locally');
    setTimeout(() => setMessage(null), 1500);
  };

  return (
    <>
      <Navbar favoritesCount={favorites.length} />
      <main>
        <Routes>
          <Route path="/" element={<HomePage favorites={favorites} toggleFavorite={toggleFavorite} />} />
          <Route path="/destinations" element={<DestinationsPage favorites={favorites} toggleFavorite={toggleFavorite} />} />
          <Route path="/destination/:id" element={<DestinationDetailPage favorites={favorites} toggleFavorite={toggleFavorite} />} />
          <Route path="/explore" element={<ExplorePage favorites={favorites} toggleFavorite={toggleFavorite} />} />
          <Route path="/itinerary" element={<ItineraryPage itinerary={itinerary} updateItinerary={updateItinerary} addItineraryDay={addItineraryDay} removeActivity={removeActivity} saveItinerary={saveItinerary} />} />
          <Route path="/favorites" element={<FavoritesPage favorites={favorites} toggleFavorite={toggleFavorite} />} />
          <Route path="/tips" element={<TravelTipsPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="*" element={<HomePage favorites={favorites} toggleFavorite={toggleFavorite} />} />
        </Routes>
      </main>
      <Footer />
      {message && <div className="fixed bottom-5 right-5 z-50 rounded-full bg-ocean px-4 py-2 text-sm font-medium text-white shadow-soft">{message}</div>}
    </>
  );
}

function Navbar({ favoritesCount }: { favoritesCount: number }) {
  const [open, setOpen] = useState(false);
  const links = [
    { label: 'Home', to: '/' },
    { label: 'Destinations', to: '/destinations' },
    { label: 'Explore', to: '/explore' },
    { label: 'Itinerary', to: '/itinerary' },
    { label: 'Travel Tips', to: '/tips' },
    { label: 'About', to: '/about' },
  ];

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200/80 bg-white/90 backdrop-blur-md">
      <div className="section-shell flex items-center justify-between py-4">
        <Link to="/" className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-ocean to-turquoise text-white shadow-soft">
            <Mountain className="h-5 w-5" />
          </div>
          <div>
            <p className="text-xl font-extrabold tracking-tight text-ocean">WanderPH</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-7 md:flex">
          {links.map(link => (
            <NavLink key={link.to} to={link.to} className={({ isActive }) => `text-sm font-medium transition ${isActive ? 'text-ocean' : 'text-slate-600 hover:text-ocean'}`}>
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <button className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-700 transition hover:border-ocean hover:text-ocean"><Search className="h-4 w-4" /></button>
          <Link to="/favorites" className="relative flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-700 transition hover:border-ocean hover:text-ocean">
            <Heart className="h-4 w-4" />
            {favoritesCount > 0 && <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-coral px-1 text-[10px] font-bold text-white">{favoritesCount}</span>}
          </Link>
          <Link to="/itinerary" className="primary-btn">Plan My Trip</Link>
          <Link to="/login" className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-slate-700 transition hover:bg-slate-200"><User className="h-4 w-4" /></Link>
        </div>

        <button onClick={() => setOpen(!open)} className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-700 md:hidden">
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-slate-200 bg-white md:hidden">
          <div className="section-shell flex flex-col gap-3 py-4">
            {links.map(link => (
              <NavLink key={link.to} to={link.to} onClick={() => setOpen(false)} className={({ isActive }) => `rounded-xl px-3 py-2 text-sm font-medium ${isActive ? 'bg-ocean/5 text-ocean' : 'text-slate-700'}`}>
                {link.label}
              </NavLink>
            ))}
            <Link to="/itinerary" onClick={() => setOpen(false)} className="primary-btn mt-2">Plan My Trip</Link>
          </div>
        </div>
      )}
    </header>
  );
}

function HomePage({ favorites, toggleFavorite }: { favorites: string[]; toggleFavorite: (id: string) => void }) {
  const featured = destinations.slice(0, 6);
  return (
    <>
      <section className="hero-pattern text-white">
        <div className="section-shell flex min-h-[620px] items-center py-16">
          <div className="grid w-full gap-10 lg:grid-cols-[1.2fr,0.8fr] lg:items-center">
            <div className="fade-in max-w-2xl">
              <p className="mb-4 inline-flex items-center rounded-full border border-white/30 bg-white/10 px-3 py-1 text-sm font-medium">Your island adventure starts here</p>
              <h1 className="text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">Discover the Philippines</h1>
              <p className="mt-5 max-w-xl text-lg text-slate-100">Explore breathtaking destinations, unforgettable experiences, and hidden gems across the islands.</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link to="/destinations" className="primary-btn bg-white text-ocean hover:bg-slate-100">Explore Destinations</Link>
                <Link to="/itinerary" className="secondary-btn border-white bg-white/10 text-white hover:bg-white/15">Plan Your Trip</Link>
              </div>
            </div>
            <div className="rounded-[32px] border border-white/20 bg-white/10 p-5 backdrop-blur-sm shadow-soft">
              <div className="rounded-[26px] bg-white p-5 text-slate-800">
                <p className="mb-4 text-xl font-bold text-ocean">Where do you want to go?</p>
                <div className="space-y-4">
                  <div>
                    <label className="mb-1 block text-xs font-semibold uppercase tracking-[0.12em] text-slate-500">Destination</label>
                    <input className="w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:border-turquoise" placeholder="e.g. Siargao" />
                  </div>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label className="mb-1 block text-xs font-semibold uppercase tracking-[0.12em] text-slate-500">Travel date</label>
                      <input type="date" className="w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:border-turquoise" />
                    </div>
                    <div>
                      <label className="mb-1 block text-xs font-semibold uppercase tracking-[0.12em] text-slate-500">Travelers</label>
                      <input type="number" min={1} defaultValue={2} className="w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:border-turquoise" />
                    </div>
                  </div>
                  <button className="primary-btn w-full">Search</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="section-shell">
          <div className="mb-10 flex items-end justify-between gap-4">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-turquoise">Popular Destinations</p>
              <h2 className="mt-2 text-3xl font-extrabold text-slate-900">Popular Destinations</h2>
            </div>
            <Link to="/destinations" className="text-sm font-semibold text-ocean">See all</Link>
          </div>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {featured.map(destination => (
              <DestinationCard key={destination.id} destination={destination} isFavorite={favorites.includes(destination.id)} toggleFavorite={toggleFavorite} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-100/70 py-20">
        <div className="section-shell">
          <div className="mb-10 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-turquoise">Travel Planning</p>
            <h2 className="mt-3 text-3xl font-extrabold text-slate-900">Plan smarter, travel better</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              { title: 'Curated trips', text: 'Handpicked destinations and experiences designed for every traveler.', icon: Compass },
              { title: 'Budget insights', text: 'See local pricing and estimate trip costs before booking.', icon: Star },
              { title: 'Smart itinerary', text: 'Build your adventures with easy day-by-day planning tools.', icon: Bell },
            ].map(({ title, text, icon: Icon }) => (
              <div key={title} className="rounded-[28px] bg-white p-6 shadow-soft transition hover:-translate-y-1">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-ocean/10 text-ocean"><Icon className="h-5 w-5" /></div>
                <h3 className="mb-2 text-xl font-bold text-slate-900">{title}</h3>
                <p className="text-slate-600">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function DestinationCard({ destination, isFavorite, toggleFavorite }: { destination: Destination; isFavorite: boolean; toggleFavorite: (id: string) => void }) {
  return (
    <article className="group overflow-hidden rounded-[28px] bg-white shadow-soft transition duration-200 hover:-translate-y-1 hover:shadow-xl">
      <div className="relative overflow-hidden">
        <img src={destination.image} alt={destination.name} className="h-60 w-full object-cover transition duration-500 group-hover:scale-105" />
        <button onClick={() => toggleFavorite(destination.id)} className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-slate-700 shadow-md transition hover:scale-105">
          <Heart className={`h-4 w-4 ${isFavorite ? 'fill-red-500 text-red-500' : 'text-slate-700'}`} />
        </button>
      </div>
      <div className="p-5">
        <div className="mb-3 flex items-center justify-between gap-3">
          <div>
            <h3 className="text-2xl font-extrabold text-slate-900">{destination.name}</h3>
            <p className="mt-1 text-sm text-slate-500">{destination.location}</p>
          </div>
          <div className="flex items-center gap-1 rounded-full bg-amber-50 px-2 py-1 text-sm font-semibold text-amber-600"><Star className="h-3.5 w-3.5 fill-current" /> {destination.rating}</div>
        </div>
        <p className="mb-4 text-sm text-slate-600">{destination.description}</p>
        <div className="mb-4 flex items-center justify-between text-sm">
          <span className="font-medium text-slate-700">{destination.budget}</span>
          <span className="rounded-full bg-ocean/10 px-2 py-1 text-xs font-semibold uppercase tracking-wide text-ocean">{destination.category}</span>
        </div>
        <Link to={`/destination/${destination.id}`} className="primary-btn w-full">Explore</Link>
      </div>
    </article>
  );
}

function DestinationsPage({ favorites, toggleFavorite }: { favorites: string[]; toggleFavorite: (id: string) => void }) {
  const [query, setQuery] = useState('');
  const [region, setRegion] = useState('All');
  const [category, setCategory] = useState('All');
  const [budget, setBudget] = useState('All');
  const [sort, setSort] = useState('Popular');

  const filtered = useMemo(() => {
    let list = destinations.filter(item => {
      const matchesQuery = item.name.toLowerCase().includes(query.toLowerCase()) || item.location.toLowerCase().includes(query.toLowerCase());
      const matchesRegion = region === 'All' || item.region === region;
      const matchesCategory = category === 'All' || item.category === category;
      const matchesBudget = budget === 'All' || (budget === 'Budget' && item.budget.includes('₱2') || item.budget.includes('₱3')) || (budget === 'Moderate' && item.budget.includes('₱4')) || (budget === 'Luxury' && item.budget.includes('₱8'));
      return matchesQuery && matchesRegion && matchesCategory && matchesBudget;
    });

    switch (sort) {
      case 'Highest Rated': list = [...list].sort((a, b) => b.rating - a.rating); break;
      case 'Lowest Budget': list = [...list].sort((a, b) => a.budget.localeCompare(b.budget)); break;
      case 'A-Z': list = [...list].sort((a, b) => a.name.localeCompare(b.name)); break;
      default: list = [...list].sort((a, b) => b.rating - a.rating);
    }
    return list;
  }, [query, region, category, budget, sort]);

  return (
    <div className="section-shell py-16">
      <div className="mb-10 rounded-[30px] bg-gradient-to-r from-ocean to-turquoise p-8 text-white shadow-soft md:p-12">
        <h1 className="text-4xl font-extrabold md:text-5xl">Explore the Philippines</h1>
        <div className="mt-6 flex flex-col gap-3 md:flex-row">
          <input value={query} onChange={(e) => setQuery(e.target.value)} className="flex-1 rounded-full border border-white/30 bg-white/10 px-5 py-3 text-white placeholder:text-slate-100 outline-none" placeholder="Search destinations, islands, or regions" />
        </div>
      </div>

      <div className="mb-8 grid gap-4 rounded-[28px] bg-white p-5 shadow-soft md:grid-cols-5">
        <select value={region} onChange={(e) => setRegion(e.target.value)} className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none"><option>All</option><option>Luzon</option><option>Visayas</option><option>Mindanao</option></select>
        <select value={category} onChange={(e) => setCategory(e.target.value)} className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none"><option>All</option><option>Beach</option><option>Mountain</option><option>City</option><option>Historical</option><option>Adventure</option><option>Nature</option></select>
        <select value={budget} onChange={(e) => setBudget(e.target.value)} className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none"><option>All</option><option>Budget</option><option>Moderate</option><option>Luxury</option></select>
        <select value={sort} onChange={(e) => setSort(e.target.value)} className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none"><option>Popular</option><option>Highest Rated</option><option>Lowest Budget</option><option>A-Z</option></select>
        <button onClick={() => { setQuery(''); setRegion('All'); setCategory('All'); setBudget('All'); setSort('Popular'); }} className="secondary-btn">Reset</button>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {filtered.length ? filtered.map(destination => (
          <DestinationCard key={destination.id} destination={destination} isFavorite={favorites.includes(destination.id)} toggleFavorite={toggleFavorite} />
        )) : <div className="col-span-full rounded-[28px] bg-white p-10 text-center shadow-soft"><h3 className="text-2xl font-bold text-slate-900">No destinations found</h3><p className="mt-2 text-slate-600">Try another search or reset the filters.</p></div>}
      </div>
    </div>
  );
}

function DestinationDetailPage({ favorites, toggleFavorite }: { favorites: string[]; toggleFavorite: (id: string) => void }) {
  const navigate = useNavigate();
  const id = window.location.pathname.split('/').pop();
  const destination = destinations.find(item => item.id === id) ?? destinations[0];

  if (!destination) return null;

  return (
    <div className="section-shell py-16">
      <button onClick={() => navigate(-1)} className="secondary-btn mb-6">Back</button>
      <div className="overflow-hidden rounded-[32px] bg-white shadow-soft">
        <img src={destination.image} alt={destination.name} className="h-[420px] w-full object-cover" />
        <div className="p-6 md:p-10">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="mb-2 text-sm font-semibold uppercase tracking-[0.16em] text-turquoise">{destination.region}</p>
              <h1 className="text-4xl font-extrabold text-slate-900">{destination.name}</h1>
            </div>
            <div className="flex flex-wrap gap-3">
              <button onClick={() => toggleFavorite(destination.id)} className="secondary-btn"><Heart className={`mr-2 h-4 w-4 ${favorites.includes(destination.id) ? 'fill-red-500 text-red-500' : ''}`} />Save Destination</button>
              <button className="primary-btn">Add to Itinerary</button>
            </div>
          </div>

          <div className="mt-8 grid gap-5 sm:grid-cols-2 xl:grid-cols-5">
            {[
              ['Location', destination.location],
              ['Best Time', destination.bestTime],
              ['Avg Daily Budget', destination.budget],
              ['Recommended Days', `${destination.days} days`],
              ['Difficulty', destination.difficulty],
            ].map(([label, value]) => (
              <div key={label} className="rounded-[22px] bg-slate-50 p-4"><p className="text-xs uppercase tracking-[0.12em] text-slate-500">{label}</p><p className="mt-2 font-semibold text-slate-800">{value}</p></div>
            ))}
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {destination.gallery.map((image, index) => (
              <img key={`${image}-${index}`} src={image} alt={`${destination.name} view ${index + 1}`} className="h-56 w-full rounded-[24px] object-cover" />
            ))}
          </div>

          <div className="mt-10 grid gap-10 xl:grid-cols-[1.2fr,0.8fr]">
            <div>
              <h2 className="text-2xl font-extrabold text-slate-900">Overview</h2>
              <p className="mt-4 text-slate-600">{destination.description}</p>

              <div className="mt-10">
                <h3 className="text-2xl font-extrabold text-slate-900">Things to Do</h3>
                <div className="mt-5 grid gap-4">
                  {destination.activities.map(activity => (
                    <div key={activity.id} className="flex flex-col gap-4 rounded-[26px] border border-slate-200 bg-slate-50 p-4 sm:flex-row">
                      <img src={activity.image} alt={activity.name} className="h-32 w-full rounded-[20px] object-cover sm:w-40" />
                      <div className="flex-1">
                        <div className="flex items-center justify-between gap-3">
                          <h4 className="text-xl font-bold text-slate-900">{activity.name}</h4>
                          <span className="rounded-full bg-white px-2 py-1 text-xs font-semibold text-ocean">{activity.difficulty}</span>
                        </div>
                        <p className="mt-2 text-slate-600">{activity.description}</p>
                        <div className="mt-3 flex flex-wrap gap-3 text-sm text-slate-600">
                          <span>Cost: {formatCurrency(activity.cost)}</span>
                          <span>Duration: {activity.duration}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-extrabold text-slate-900">Where to Stay</h3>
                <div className="mt-5 space-y-4">
                  {destination.stays.map(stay => (
                    <div key={stay.id} className="overflow-hidden rounded-[24px] bg-slate-50">
                      <img src={stay.image} alt={stay.name} className="h-32 w-full object-cover" />
                      <div className="p-4">
                        <div className="flex items-center justify-between"><h4 className="text-lg font-bold text-slate-900">{stay.name}</h4><span className="text-amber-500">★ {stay.rating}</span></div>
                        <p className="mt-2 text-sm text-slate-600">{stay.location}</p>
                        <div className="mt-3 flex items-center justify-between"><span className="font-semibold text-ocean">{formatCurrency(stay.pricePerNight)}/night</span><button className="text-sm font-semibold text-ocean">View</button></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-extrabold text-slate-900">Where to Eat</h3>
                <div className="mt-5 space-y-4">
                  {destination.restaurants.map(restaurant => (
                    <div key={restaurant.id} className="rounded-[22px] bg-slate-50 p-4">
                      <div className="flex items-center justify-between"><h4 className="text-lg font-bold text-slate-900">{restaurant.name}</h4><span className="text-amber-500">★ {restaurant.rating}</span></div>
                      <p className="mt-2 text-sm text-slate-600">{restaurant.cuisine} · {restaurant.priceRange}</p>
                      <p className="mt-3 text-sm text-slate-700"><span className="font-semibold">Recommended:</span> {restaurant.recommendedFood}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 grid gap-8 lg:grid-cols-2">
            <div>
              <h3 className="text-2xl font-extrabold text-slate-900">Travel Tips</h3>
              <ul className="mt-5 space-y-3 text-slate-600">
                {destination.travelTips.map((tip, index) => <li key={index} className="flex gap-3"><span className="mt-1 h-2.5 w-2.5 rounded-full bg-turquoise" />{tip}</li>)}
              </ul>
            </div>
            <div className="rounded-[28px] bg-gradient-to-br from-ocean to-turquoise p-6 text-white shadow-soft">
              <h3 className="text-2xl font-extrabold">Estimated Trip Cost</h3>
              <div className="mt-5 space-y-3 text-sm">
                <div className="flex items-center justify-between"><span>Accommodation</span><span>{formatCurrency(destination.estimatedCost.accommodation)}</span></div>
                <div className="flex items-center justify-between"><span>Food</span><span>{formatCurrency(destination.estimatedCost.food)}</span></div>
                <div className="flex items-center justify-between"><span>Transportation</span><span>{formatCurrency(destination.estimatedCost.transportation)}</span></div>
                <div className="flex items-center justify-between"><span>Activities</span><span>{formatCurrency(destination.estimatedCost.activities)}</span></div>
                <div className="flex items-center justify-between"><span>Miscellaneous</span><span>{formatCurrency(destination.estimatedCost.miscellaneous)}</span></div>
                <div className="mt-4 border-t border-white/20 pt-4 text-base"><div className="flex items-center justify-between font-bold"><span>Total</span><span>{formatCurrency(Object.values(destination.estimatedCost).reduce((sum, value) => sum + value, 0))}</span></div></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ExplorePage({ favorites, toggleFavorite }: { favorites: string[]; toggleFavorite: (id: string) => void }) {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('All');
  const list = useMemo(() => activities.filter(item => {
    const matchesSearch = item.name.toLowerCase().includes(search.toLowerCase()) || item.destination.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = category === 'All' || item.category === category;
    return matchesSearch && matchesCategory;
  }), [search, category]);

  return (
    <div className="section-shell py-16">
      <div className="mb-8">
        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-turquoise">Explore</p>
        <h1 className="mt-2 text-4xl font-extrabold text-slate-900">Discover incredible activities</h1>
      </div>
      <div className="mb-8 flex flex-col gap-4 rounded-[28px] bg-white p-5 shadow-soft md:flex-row">
        <input value={search} onChange={(e) => setSearch(e.target.value)} className="flex-1 rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:border-turquoise" placeholder="Search activities or destinations" />
        <select value={category} onChange={(e) => setCategory(e.target.value)} className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none"><option>All</option><option>Beach</option><option>Adventure</option><option>Water</option><option>Nature</option><option>Food</option><option>Mountain</option></select>
      </div>
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {list.map(item => (
          <div key={item.id} className="overflow-hidden rounded-[28px] bg-white shadow-soft">
            <img src={item.image} alt={item.name} className="h-56 w-full object-cover" />
            <div className="p-5">
              <div className="mb-3 flex items-center justify-between"><h3 className="text-xl font-bold text-slate-900">{item.name}</h3><button onClick={() => toggleFavorite(item.id)} className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-100"><Heart className={`h-4 w-4 ${favorites.includes(item.id) ? 'fill-red-500 text-red-500' : 'text-slate-700'}`} /></button></div>
              <p className="text-sm text-slate-600">{item.destination}</p>
              <div className="mt-4 flex items-center justify-between text-sm text-slate-600"><span>{formatCurrency(item.cost)}</span><span>{item.duration}</span></div>
              <div className="mt-3 flex items-center justify-between"><span className="rounded-full bg-ocean/10 px-2 py-1 text-xs font-semibold uppercase tracking-wide text-ocean">{item.difficulty}</span><button className="text-sm font-semibold text-ocean">View Activity</button></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function ItineraryPage({ itinerary, updateItinerary, addItineraryDay, removeActivity, saveItinerary }: { itinerary: ItineraryDay[]; updateItinerary: (dayId: string, activityId: string, field: keyof ItineraryItem, value: string) => void; addItineraryDay: () => void; removeActivity: (dayId: string, activityId: string) => void; saveItinerary: () => void; }) {
  return (
    <div className="section-shell py-16">
      <div className="mb-8 flex items-end justify-between gap-4">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-turquoise">Planner</p>
          <h1 className="mt-2 text-4xl font-extrabold text-slate-900">Plan Your Trip</h1>
        </div>
        <div className="flex gap-3">
          <button onClick={saveItinerary} className="primary-btn">Save Itinerary</button>
          <button className="secondary-btn">Print Itinerary</button>
        </div>
      </div>

      <div className="grid gap-8 lg:grid-cols-[0.9fr,1.1fr]">
        <div className="rounded-[28px] bg-white p-6 shadow-soft">
          <h3 className="text-xl font-bold text-slate-900">Trip Details</h3>
          <div className="mt-5 space-y-4">
            <div><label className="mb-1 block text-xs font-semibold uppercase tracking-[0.12em] text-slate-500">Destination</label><input className="w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none" defaultValue="Siargao" /></div>
            <div className="grid gap-4 sm:grid-cols-2"><div><label className="mb-1 block text-xs font-semibold uppercase tracking-[0.12em] text-slate-500">Travel dates</label><input type="date" className="w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none" /></div><div><label className="mb-1 block text-xs font-semibold uppercase tracking-[0.12em] text-slate-500">Travelers</label><input type="number" defaultValue={2} className="w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none" /></div></div>
            <div><label className="mb-1 block text-xs font-semibold uppercase tracking-[0.12em] text-slate-500">Budget</label><input className="w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none" defaultValue="₱20,000" /></div>
          </div>
        </div>

        <div className="space-y-6">
          {itinerary.map(day => (
            <div key={day.id} className="rounded-[28px] bg-white p-6 shadow-soft">
              <div className="mb-4 flex items-center justify-between"><h3 className="text-2xl font-extrabold text-slate-900">Day {day.day}</h3><button onClick={() => addItineraryDay()} className="secondary-btn">Add another day</button></div>
              <div className="space-y-3">
                {day.activities.map(item => (
                  <div key={item.id} className="rounded-[22px] border border-slate-200 bg-slate-50 p-3">
                    <div className="grid gap-3 md:grid-cols-[120px,1fr,120px]">
                      <input value={item.time} onChange={(e) => updateItinerary(day.id, item.id, 'time', e.target.value)} className="rounded-2xl border border-slate-200 bg-white px-3 py-2 text-sm outline-none" />
                      <input value={item.title} onChange={(e) => updateItinerary(day.id, item.id, 'title', e.target.value)} className="rounded-2xl border border-slate-200 bg-white px-3 py-2 text-sm outline-none" />
                      <button onClick={() => removeActivity(day.id, item.id)} className="rounded-2xl bg-red-50 px-3 py-2 text-sm font-medium text-red-600">Remove</button>
                    </div>
                    <textarea value={item.notes ?? ''} onChange={(e) => updateItinerary(day.id, item.id, 'notes', e.target.value)} className="mt-3 w-full rounded-2xl border border-slate-200 bg-white px-3 py-2 text-sm outline-none" placeholder="Add notes..." />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function FavoritesPage({ favorites, toggleFavorite }: { favorites: string[]; toggleFavorite: (id: string) => void }) {
  const saved = destinations.filter(item => favorites.includes(item.id));
  return (
    <div className="section-shell py-16">
      <h1 className="text-4xl font-extrabold text-slate-900">My Saved Places</h1>
      {saved.length ? <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">{saved.map(item => (
        <div key={item.id} className="overflow-hidden rounded-[28px] bg-white shadow-soft">
          <img src={item.image} alt={item.name} className="h-52 w-full object-cover" />
          <div className="p-5"><h3 className="text-xl font-bold text-slate-900">{item.name}</h3><p className="mt-1 text-sm text-slate-500">{item.location}</p><div className="mt-4 flex gap-3"><button onClick={() => toggleFavorite(item.id)} className="secondary-btn flex-1">Remove</button><Link to={`/destination/${item.id}`} className="primary-btn flex-1">View</Link></div></div>
        </div>
      ))}</div> : <div className="mt-8 rounded-[28px] bg-white p-10 text-center shadow-soft"><h2 className="text-2xl font-bold text-slate-900">You haven't saved any destinations yet.</h2><Link to="/destinations" className="primary-btn mt-5">Explore Destinations</Link></div>}
    </div>
  );
}

function TravelTipsPage() {
  return (
    <div className="section-shell py-16">
      <div className="mb-8 text-center"><p className="text-sm font-semibold uppercase tracking-[0.16em] text-turquoise">Travel Tips</p><h1 className="mt-2 text-4xl font-extrabold text-slate-900">Smart advice for every kind of traveler</h1></div>
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {travelTips.map(tip => (
          <article key={tip.id} className="overflow-hidden rounded-[28px] bg-white shadow-soft">
            <img src={tip.image} alt={tip.title} className="h-48 w-full object-cover" />
            <div className="p-5"><span className="rounded-full bg-ocean/10 px-2 py-1 text-xs font-semibold uppercase tracking-wide text-ocean">{tip.category}</span><h3 className="mt-3 text-xl font-bold text-slate-900">{tip.title}</h3><p className="mt-2 text-sm text-slate-600">{tip.description}</p><button className="mt-4 text-sm font-semibold text-ocean">Read More</button></div>
          </article>
        ))}
      </div>
    </div>
  );
}

function AboutPage() {
  return (
    <div className="section-shell py-16">
      <h1 className="text-4xl font-extrabold text-slate-900">Travel More. Discover More.</h1>
      <div className="mt-8 grid gap-10 lg:grid-cols-[1.1fr,0.9fr]">
        <div className="space-y-6 text-slate-600">
          <p>WanderPH was created to help travelers discover Philippine destinations and organize their trips in one place.</p>
          <h3 className="text-2xl font-extrabold text-slate-900">Our Mission</h3>
          <p>To make planning beautiful Philippine travel easy, inspiring, and stress-free.</p>
          <h3 className="text-2xl font-extrabold text-slate-900">Our Vision</h3>
          <p>To connect travelers with meaningful experiences across the islands while preserving the culture and beauty of each destination.</p>
          <h3 className="text-2xl font-extrabold text-slate-900">Why WanderPH?</h3>
          <p>Because every trip deserves better planning, stronger discovery, and more unforgettable moments.</p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {[
            ['100+', 'Destinations'],
            ['500+', 'Activities'],
            ['50+', 'Travel Guides'],
            ['24/7', 'Travel Planning'],
          ].map(([value, label]) => (
            <div key={label} className="rounded-[28px] bg-white p-6 text-center shadow-soft"><p className="text-3xl font-extrabold text-ocean">{value}</p><p className="mt-2 text-slate-600">{label}</p></div>
          ))}
        </div>
      </div>
    </div>
  );
}

function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="section-shell py-16">
      <div className="grid gap-8 lg:grid-cols-[0.8fr,1.2fr]">
        <div className="rounded-[28px] bg-ocean p-8 text-white shadow-soft">
          <h1 className="text-3xl font-extrabold">Let’s plan your next trip</h1>
          <div className="mt-6 space-y-4 text-sm text-slate-100">
            <p>Email: hello@wanderph.com</p>
            <p>Phone: +63 917 123 4567</p>
            <p>Location: Makati, Metro Manila</p>
          </div>
        </div>
        <form onSubmit={handleSubmit} className="rounded-[28px] bg-white p-8 shadow-soft">
          <div className="grid gap-4 md:grid-cols-2">
            <div><label className="mb-1 block text-xs font-semibold uppercase tracking-[0.12em] text-slate-500">Full Name</label><input required className="w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none" /></div>
            <div><label className="mb-1 block text-xs font-semibold uppercase tracking-[0.12em] text-slate-500">Email</label><input type="email" required className="w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none" /></div>
          </div>
          <div className="mt-4"><label className="mb-1 block text-xs font-semibold uppercase tracking-[0.12em] text-slate-500">Subject</label><input required className="w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none" /></div>
          <div className="mt-4"><label className="mb-1 block text-xs font-semibold uppercase tracking-[0.12em] text-slate-500">Message</label><textarea required rows={5} className="w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none" /></div>
          <button type="submit" className="primary-btn mt-6">Send Message</button>
          {submitted && <p className="mt-4 font-medium text-green-600">Your message has been sent successfully.</p>}
        </form>
      </div>
    </div>
  );
}

function LoginPage() {
  return (
    <div className="section-shell py-16">
      <div className="mx-auto grid max-w-5xl gap-8 rounded-[30px] bg-white p-8 shadow-soft lg:grid-cols-2">
        <div className="rounded-[28px] bg-slate-50 p-6">
          <h2 className="text-3xl font-extrabold text-slate-900">Login</h2>
          <div className="mt-5 space-y-4">
            <div><label className="mb-1 block text-xs font-semibold uppercase tracking-[0.12em] text-slate-500">Email</label><input type="email" className="w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none" /></div>
            <div><label className="mb-1 block text-xs font-semibold uppercase tracking-[0.12em] text-slate-500">Password</label><input type="password" className="w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none" /></div>
            <label className="flex items-center gap-2 text-sm text-slate-600"><input type="checkbox" /> Remember me</label>
            <button className="primary-btn w-full">Login</button>
          </div>
        </div>
        <div className="rounded-[28px] bg-ocean p-6 text-white">
          <h2 className="text-3xl font-extrabold">Sign up</h2>
          <div className="mt-5 space-y-4">
            <div><label className="mb-1 block text-xs font-semibold uppercase tracking-[0.12em] text-slate-200">Full Name</label><input className="w-full rounded-2xl border border-white/20 bg-white/10 px-4 py-3 text-white placeholder:text-slate-200 outline-none" /></div>
            <div><label className="mb-1 block text-xs font-semibold uppercase tracking-[0.12em] text-slate-200">Email</label><input type="email" className="w-full rounded-2xl border border-white/20 bg-white/10 px-4 py-3 text-white placeholder:text-slate-200 outline-none" /></div>
            <div><label className="mb-1 block text-xs font-semibold uppercase tracking-[0.12em] text-slate-200">Password</label><input type="password" className="w-full rounded-2xl border border-white/20 bg-white/10 px-4 py-3 text-white placeholder:text-slate-200 outline-none" /></div>
            <div><label className="mb-1 block text-xs font-semibold uppercase tracking-[0.12em] text-slate-200">Confirm Password</label><input type="password" className="w-full rounded-2xl border border-white/20 bg-white/10 px-4 py-3 text-white placeholder:text-slate-200 outline-none" /></div>
            <button className="secondary-btn w-full border-white bg-white/10 text-white hover:bg-white/15">Continue as Guest</button>
          </div>
        </div>
      </div>
    </div>
  );
}

function ProfilePage() {
  return (
    <div className="section-shell py-16">
      <div className="grid gap-8 lg:grid-cols-[0.7fr,1.3fr]">
        <div className="rounded-[28px] bg-white p-6 shadow-soft text-center">
          <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&q=80" alt="Profile" className="mx-auto h-28 w-28 rounded-full object-cover" />
          <h2 className="mt-4 text-2xl font-extrabold text-slate-900">Maria R.</h2>
          <p className="text-slate-500">maria@example.com</p>
        </div>
        <div className="space-y-6">
          <div className="rounded-[28px] bg-white p-6 shadow-soft">
            <h3 className="text-2xl font-extrabold text-slate-900">Saved destinations</h3>
            <div className="mt-4 flex flex-wrap gap-3 text-sm text-slate-600"><span className="rounded-full bg-slate-100 px-3 py-2">Boracay</span><span className="rounded-full bg-slate-100 px-3 py-2">Palawan</span><span className="rounded-full bg-slate-100 px-3 py-2">Siargao</span></div>
          </div>
          <div className="rounded-[28px] bg-white p-6 shadow-soft">
            <h3 className="text-2xl font-extrabold text-slate-900">Travel preferences</h3>
            <p className="mt-3 text-slate-600">Beach escapes, island hopping, food tours, and family-friendly adventures.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <footer className="mt-10 border-t border-slate-200 bg-white">
      <div className="section-shell grid gap-8 py-12 md:grid-cols-5">
        <div className="md:col-span-2">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-ocean to-turquoise text-white"><Mountain className="h-5 w-5" /></div>
            <p className="text-2xl font-extrabold text-ocean">WanderPH</p>
          </div>
          <p className="mt-4 max-w-md text-slate-600">Your guide to exploring the Philippines.</p>
        </div>
        <div>
          <h4 className="text-base font-bold text-slate-900">Explore</h4>
          <ul className="mt-4 space-y-2 text-sm text-slate-600"><li>Destinations</li><li>Activities</li><li>Travel Tips</li><li>Itinerary</li></ul>
        </div>
        <div>
          <h4 className="text-base font-bold text-slate-900">Company</h4>
          <ul className="mt-4 space-y-2 text-sm text-slate-600"><li>About</li><li>Contact</li><li>Privacy Policy</li><li>Terms</li></ul>
        </div>
        <div>
          <h4 className="text-base font-bold text-slate-900">Social</h4>
          <ul className="mt-4 space-y-2 text-sm text-slate-600"><li>Facebook</li><li>Instagram</li><li>TikTok</li><li>YouTube</li></ul>
        </div>
      </div>
      <div className="border-t border-slate-200 py-4 text-center text-sm text-slate-500">© 2026 WanderPH. All rights reserved.</div>
    </footer>
  );
}

export default App;
