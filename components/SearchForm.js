"use client";
import { useState } from "react";
import { FiMapPin, FiDollarSign, FiSmile, FiActivity, FiSearch, FiCalendar } from "react-icons/fi";

export default function SearchForm({ onSearch, loading }) {
  const [form, setForm] = useState({ location: "", budget: "", mood: "", activity: "", date: "" });
  const update = (key, value) => setForm({ ...form, [key]: value });
  const handleSubmit = (e) => { e.preventDefault(); onSearch(form); };

  return (
    <section className="relative -mt-24 z-20 px-4">
      <form onSubmit={handleSubmit} className="max-w-6xl mx-auto bg-white rounded-3xl shadow-2xl p-6 md:p-8 border border-slate-100">
        <h2 className="text-2xl font-bold text-slate-900 mb-6 text-center">🔍 Plan Your Journey</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          <div>
            <label className="text-xs font-semibold text-slate-500 uppercase mb-1 flex items-center gap-1"><FiMapPin /> Destination</label>
            <input type="text" placeholder="Where to?" value={form.location} onChange={(e) => update("location", e.target.value)} className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition" />
          </div>
          <div>
            <label className="text-xs font-semibold text-slate-500 uppercase mb-1 flex items-center gap-1"><FiDollarSign /> Budget</label>
            <select value={form.budget} onChange={(e) => update("budget", e.target.value)} className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition">
              <option value="">Any Budget</option>
              <option value="Low">Low (≤ ₹1500)</option>
              <option value="Medium">Medium (≤ ₹4000)</option>
              <option value="High">High (Luxury)</option>
            </select>
          </div>
          <div>
            <label className="text-xs font-semibold text-slate-500 uppercase mb-1 flex items-center gap-1"><FiSmile /> Mood</label>
            <select value={form.mood} onChange={(e) => update("mood", e.target.value)} className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition">
              <option value="">Any Mood</option>
              <option value="Relax">Relax</option>
              <option value="Adventure">Adventure</option>
              <option value="Romantic">Romantic</option>
              <option value="Cultural">Cultural</option>
              <option value="Luxury">Luxury</option>
            </select>
          </div>
          <div>
            <label className="text-xs font-semibold text-slate-500 uppercase mb-1 flex items-center gap-1"><FiActivity /> Activity</label>
            <select value={form.activity} onChange={(e) => update("activity", e.target.value)} className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition">
              <option value="">Any Activity</option>
              <option value="Trekking">Trekking</option>
              <option value="Swimming">Swimming</option>
              <option value="Sightseeing">Sightseeing</option>
              <option value="Shopping">Shopping</option>
              <option value="Boating">Boating</option>
              <option value="Camping">Camping</option>
              <option value="Skiing">Skiing</option>
              <option value="Biking">Biking</option>
              <option value="Rafting">Rafting</option>
              <option value="Hiking">Hiking</option>
              <option value="Diving">Diving</option>
            </select>
          </div>
          <div>
            <label className="text-xs font-semibold text-slate-500 uppercase mb-1 flex items-center gap-1"><FiCalendar /> Date</label>
            <input type="date" value={form.date} onChange={(e) => update("date", e.target.value)} className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition" />
          </div>
        </div>
        <button type="submit" disabled={loading} className="shine-btn w-full mt-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white font-bold py-4 rounded-xl hover:shadow-2xl transform hover:scale-[1.01] transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-60">
          <FiSearch className="text-xl" />
          {loading ? "Searching Destinations..." : "Search Your Perfect Trip"}
        </button>
      </form>
    </section>
  );
}