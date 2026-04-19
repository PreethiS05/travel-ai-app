import places from "@/data/places";

const BUDGET_LIMITS = { Low: 1500, Medium: 4000, High: Infinity };
const WEIGHTS = { mood: 4, activity: 3, type: 2, budget: 1 };

export const recommendPlaces = (filters) => {
  const { type, mood, activity, budget, location } = filters;
  const scored = places.map((place) => {
    let score = 0;
    const reasons = [];
    if (mood && place.mood.toLowerCase() === mood.toLowerCase()) { score += WEIGHTS.mood; reasons.push(`Perfect for ${mood.toLowerCase()} vibes`); }
    if (activity && place.activity.toLowerCase() === activity.toLowerCase()) { score += WEIGHTS.activity; reasons.push(`Great for ${activity.toLowerCase()}`); }
    if (type && place.type.toLowerCase() === type.toLowerCase()) { score += WEIGHTS.type; reasons.push(`${type} destination`); }
    if (budget) { const limit = BUDGET_LIMITS[budget]; if (place.hotelPrice <= limit) { score += WEIGHTS.budget; reasons.push(`Fits your ${budget.toLowerCase()} budget`); } }
    if (location && location.trim()) { const loc = location.toLowerCase(); if (place.place.toLowerCase().includes(loc) || place.location.toLowerCase().includes(loc)) { score += 2; reasons.push(`Matches your location`); } }
    return { ...place, score, reasons, whyRecommended: reasons.length ? reasons.slice(0, 2).join(" • ") : "A popular travel destination loved by many" };
  });
  let filtered = scored;
  if (budget) { const limit = BUDGET_LIMITS[budget]; filtered = scored.filter((p) => p.hotelPrice <= limit); }
  const results = filtered.filter((p) => p.score > 0).sort((a, b) => b.score - a.score || b.rating - a.rating);
  if (results.length > 0 && budget) { const cheapest = [...results].sort((a, b) => a.hotelPrice - b.hotelPrice)[0]; cheapest.bestBudgetMatch = true; }
  return results.slice(0, 12);
};