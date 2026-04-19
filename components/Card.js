"use client";
import { FiMapPin, FiStar, FiAward } from "react-icons/fi";

export default function Card({ item, index }) {
  const nights = 2;
  const tripCost = item.hotelPrice * nights;
  const renderStars = (rating) => {
    const full = Math.floor(rating);
    return Array.from({ length: 5 }).map((_, i) => (
      <FiStar key={i} className={`w-4 h-4 ${i < full ? "text-yellow-400" : "text-slate-300"}`} fill={i < full ? "currentColor" : "none"} />
    ));
  };
  return (
    <div className="card-hover bg-white rounded-2xl overflow-hidden shadow-lg border border-slate-100 group animate-slide-up" style={{ animationDelay: `${index * 80}ms` }}>
      <div className="relative h-56 overflow-hidden">
        <img src={item.image} alt={item.place} loading="lazy" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        {item.bestBudgetMatch && (
          <div className="absolute top-3 left-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg flex items-center gap-1">
            <FiAward /> Best Budget Match
          </div>
        )}
        <div className="absolute top-3 right-3 bg-white/95 text-slate-900 text-sm font-bold px-3 py-1.5 rounded-full shadow flex items-center gap-1">
          <FiStar className="text-yellow-400" fill="currentColor" /> {item.rating}
        </div>
        <div className="absolute bottom-3 left-3 right-3">
          <h3 className="text-white text-2xl font-bold drop-shadow-lg">{item.place}</h3>
          <div className="flex items-center gap-1 text-white/90 text-sm"><FiMapPin /> {item.location}</div>
        </div>
      </div>
      <div className="p-5">
        <div className="flex flex-wrap gap-2 mb-3">
          {item.tags.map((tag) => (<span key={tag} className="text-xs font-semibold bg-blue-50 text-blue-700 px-2.5 py-1 rounded-full">{tag}</span>))}
        </div>
        <div className="flex justify-between items-center mb-3">
          <div>
            <p className="text-xs text-slate-500">Stay at</p>
            <p className="font-bold text-slate-800 truncate max-w-[200px]">{item.hotelName}</p>
          </div>
          <div className="flex flex-col items-end">
            <div className="flex">{renderStars(item.rating)}</div>
            <span className="text-xs text-slate-500 mt-1">{item.rating} rating</span>
          </div>
        </div>
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-3 mb-4">
          <p className="text-xs text-slate-600 leading-relaxed">
            <span className="font-semibold text-blue-700">Why we recommend: </span>{item.whyRecommended}
          </p>
        </div>
        <div className="flex items-end justify-between border-t border-slate-100 pt-4">
          <div>
            <p className="text-2xl font-extrabold text-slate-900">₹{item.hotelPrice.toLocaleString("en-IN")}<span className="text-xs font-normal text-slate-500"> /night</span></p>
            <p className="text-xs text-slate-500">Est. ₹{tripCost.toLocaleString("en-IN")} for {nights} nights</p>
          </div>
          <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2.5 rounded-xl font-semibold shadow-md hover:shadow-xl hover:scale-105 transition">Book Now</button>
        </div>
      </div>
    </div>
  );
}