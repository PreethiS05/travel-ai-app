"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { auth, onAuthStateChanged, logout } from "@/lib/firebase";
import { FiLogOut, FiUser, FiMenu, FiX } from "react-icons/fi";

export default function Navbar() {
  const [user, setUser] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (u) => setUser(u));
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => { unsub(); window.removeEventListener("scroll", onScroll); };
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? "glass shadow-md py-2" : "bg-transparent py-4"}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center text-white text-xl font-bold shadow-lg">✈</div>
          <span className={`font-bold text-xl ${scrolled ? "text-slate-900" : "text-white"}`}>TravelX <span className="gradient-text">Pro</span></span>
        </Link>
        <div className="hidden md:flex items-center gap-6">
          <Link href="/" className={`font-medium hover:text-blue-500 transition ${scrolled ? "text-slate-700" : "text-white"}`}>Home</Link>
          <a href="#destinations" className={`font-medium hover:text-blue-500 transition ${scrolled ? "text-slate-700" : "text-white"}`}>Destinations</a>
          <a href="#about" className={`font-medium hover:text-blue-500 transition ${scrolled ? "text-slate-700" : "text-white"}`}>About</a>
          {user ? (
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2 bg-white px-3 py-1.5 rounded-full shadow">
                {user.photoURL ? <img src={user.photoURL} alt={user.displayName} className="w-8 h-8 rounded-full" /> : <FiUser className="w-6 h-6" />}
                <span className="text-sm font-semibold text-slate-800 max-w-[120px] truncate">{user.displayName || "User"}</span>
              </div>
              <button onClick={logout} className="flex items-center gap-1 bg-red-500 hover:bg-red-600 text-white px-3 py-2 rounded-lg text-sm font-medium transition"><FiLogOut /> Logout</button>
            </div>
          ) : (
            <Link href="/login" className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-5 py-2 rounded-lg font-medium shadow-lg hover:shadow-xl hover:scale-105 transition">Sign In</Link>
          )}
        </div>
        <button className="md:hidden text-2xl" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FiX className={scrolled ? "text-slate-900" : "text-white"} /> : <FiMenu className={scrolled ? "text-slate-900" : "text-white"} />}
        </button>
      </div>
      {menuOpen && (
        <div className="md:hidden glass mt-2 mx-4 p-4 rounded-xl shadow-xl space-y-3">
          <Link href="/" className="block text-slate-700 font-medium">Home</Link>
          <a href="#destinations" className="block text-slate-700 font-medium">Destinations</a>
          {user ? (
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                {user.photoURL && <img src={user.photoURL} className="w-8 h-8 rounded-full" />}
                <span className="font-semibold">{user.displayName}</span>
              </div>
              <button onClick={logout} className="w-full bg-red-500 text-white px-4 py-2 rounded-lg">Logout</button>
            </div>
          ) : (
            <Link href="/login" className="block bg-blue-600 text-white px-4 py-2 rounded-lg text-center">Sign In</Link>
          )}
        </div>
      )}
    </nav>
  );
}