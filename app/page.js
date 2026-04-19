"use client";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SearchForm from "@/components/SearchForm";
import Card from "@/components/Card";
import Loader, { SpinnerLoader } from "@/components/Loader";
import Footer from "@/components/Footer";
import { recommendPlaces } from "@/utils/recommendation";
import places from "@/data/places";
import { auth, onAuthStateChanged } from "@/lib/firebase";
import { useRouter } from "next/navigation";
import { FiCompass, FiTrendingUp } from "react-icons/fi";

export default function HomePage() {
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState(null);
  const [searched, setSearched] = useState(false);
  const [user, setUser] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (u) => setUser(u));
    return () => unsub();
  }, []);

  const handleSearch = (filters) => {
    if (!user) { router.push("/login"); return; }
    setLoading(true);
    setSearched(true);
    setTimeout(() => {
      const recs = recommendPlaces(filters);
      setResults(recs);
      setLoading(false);
      setTimeout(() => { document.getElementById("results")?.scrollIntoView({ behavior: "smooth" }); }, 100);
    }, 1600);
  };

  const trending = places.slice(0, 6).map((p) => ({ ...p, whyRecommended: "Trending destination among travelers" }));

  return (
    <main className="min-h-screen bg-slate-50">
      <Navbar />
      <Hero />
      <SearchForm onSearch={handleSearch} loading={loading} />
      <section id="results" className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
        {loading && (<><SpinnerLoader /><div className="mt-8"><Loader /></div></>)}
        {!loading && searched && results && results.length > 0 && (
          <>
            <div className="mb-8 animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 flex items-center gap-2">
                <FiCompass className="text-blue-600" /> Recommended Trips
              </h2>
              <p className="text-slate-600 mt-2">Found {results.length} perfect destinations for you</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {results.map((item, i) => (<Card key={item.id} item={item} index={i} />))}
            </div>
          </>
        )}
        {!loading && searched && results && results.length === 0 && (
          <div className="text-center py-20 animate-fade-in">
            <div className="text-7xl mb-4">🧭</div>
            <h3 className="text-2xl font-bold text-slate-800 mb-2">No exact matches found</h3>
            <p className="text-slate-600">Try different filters or explore trending places below.</p>
          </div>
        )}
        {!searched && (
          <div id="destinations">
            <div className="text-center mb-12 animate-fade-in">
              <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-1.5 rounded-full font-semibold text-sm mb-4">
                <FiTrendingUp /> Trending Now
              </div>
              <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900">
                Explore <span className="gradient-text">Popular</span> Destinations
              </h2>
              <p className="text-slate-600 mt-3 max-w-2xl mx-auto">Handpicked spots loved by thousands of travelers</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {trending.map((item, i) => (<Card key={item.id} item={item} index={i} />))}
            </div>
          </div>
        )}
      </section>
      <section id="about" className="bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 py-20 text-white">
        <div className="max-w-5xl mx-auto text-center px-6">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6">Why Choose TravelAI Pro?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
            {[{icon:"🧠",title:"Smart AI",desc:"Weighted scoring for best matches"},{icon:"💎",title:"Curated",desc:"30+ premium destinations"},{icon:"⚡",title:"Instant",desc:"Real-time recommendations"}].map((f) => (
              <div key={f.title} className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6">
                <div className="text-5xl mb-3">{f.icon}</div>
                <h3 className="text-xl font-bold mb-1">{f.title}</h3>
                <p className="text-white/80">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}