"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { signInWithGoogle, auth, onAuthStateChanged } from "@/lib/firebase";
import { FcGoogle } from "react-icons/fc";
import { FiArrowLeft, FiCheckCircle } from "react-icons/fi";

export default function LoginPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (u) => { if (u) router.push("/"); });
    return () => unsub();
  }, [router]);

  const handleGoogleLogin = async () => {
    setLoading(true);
    setError("");
    try {
      await signInWithGoogle();
      router.push("/");
    } catch (err) {
      setError("Sign-in failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen relative flex items-center justify-center p-4 overflow-hidden">
      <div className="absolute inset-0 bg-cover bg-center" style={{backgroundImage: `url("https://images.unsplash.com/photo-1488085061387-422e29b40080?w=1920&q=80")`}} />
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/90 via-purple-900/85 to-pink-900/90" />
      <Link href="/" className="absolute top-6 left-6 z-10 flex items-center gap-2 text-white/90 hover:text-white transition">
        <FiArrowLeft /> Back to Home
      </Link>
      <div className="relative z-10 bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl p-8 md:p-10 max-w-md w-full animate-slide-up">
        <div className="text-center mb-8">
          <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center text-white text-3xl font-bold shadow-lg mb-4">✈</div>
          <h1 className="text-3xl font-extrabold text-slate-900 mb-2">Welcome Back</h1>
          <p className="text-slate-600">Sign in to discover your perfect trip</p>
        </div>
        <button onClick={handleGoogleLogin} disabled={loading} className="w-full bg-white border-2 border-slate-200 hover:border-blue-500 hover:shadow-lg rounded-xl py-3.5 px-5 flex items-center justify-center gap-3 font-semibold text-slate-800 transition disabled:opacity-60">
          {loading ? <div className="w-5 h-5 border-2 border-slate-300 border-t-blue-600 rounded-full animate-spin" /> : <FcGoogle className="text-2xl" />}
          {loading ? "Signing in..." : "Continue with Google"}
        </button>
        {error && <p className="mt-4 text-red-600 text-sm text-center">{error}</p>}
        <div className="my-6 flex items-center gap-3 text-slate-400 text-sm">
          <div className="flex-1 h-px bg-slate-200" /><span>What you get</span><div className="flex-1 h-px bg-slate-200" />
        </div>
        <ul className="space-y-3">
          {["AI-powered destination recommendations","Access to 30+ curated destinations","Personalized trip planning","Save and review your trips"].map((item) => (
            <li key={item} className="flex items-center gap-2 text-sm text-slate-700">
              <FiCheckCircle className="text-green-600 flex-shrink-0" />{item}
            </li>
          ))}
        </ul>
        <p className="mt-8 text-center text-xs text-slate-500">By signing in, you agree to our Terms of Service and Privacy Policy.</p>
      </div>
    </main>
  );
}