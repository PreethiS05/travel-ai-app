import { FiHeart, FiTwitter, FiInstagram, FiFacebook, FiMail } from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 mt-20">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center text-white text-xl font-bold">✈</div>
              <span className="font-bold text-xl text-white">TravelX</span>
            </div>
            <p className="text-sm text-slate-400">Your AI-powered travel companion. Discover breathtaking destinations curated just for you.</p>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4">Explore</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white transition">Destinations</a></li>
              <li><a href="#" className="hover:text-white transition">Hotels</a></li>
              <li><a href="#" className="hover:text-white transition">Tours</a></li>
              <li><a href="#" className="hover:text-white transition">Offers</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white transition">About Us</a></li>
              <li><a href="#" className="hover:text-white transition">Careers</a></li>
              <li><a href="#" className="hover:text-white transition">Contact</a></li>
              <li><a href="#" className="hover:text-white transition">Privacy</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4">Connect</h4>
            <div className="flex gap-3">
              {[FiTwitter, FiInstagram, FiFacebook, FiMail].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full bg-slate-800 hover:bg-blue-600 flex items-center justify-center transition"><Icon /></a>
              ))}
            </div>
          </div>
        </div>
        <div className="border-t border-slate-800 mt-10 pt-6 text-center text-sm text-slate-400 flex items-center justify-center gap-1">
          Made with <FiHeart className="text-red-500" /> by TravelX  Team © 2025
        </div>
      </div>
    </footer>
  );
}