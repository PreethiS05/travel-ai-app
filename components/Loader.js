export default function Loader() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {Array.from({ length: 6 }).map((_, i) => (
        <div key={i} className="bg-white rounded-2xl overflow-hidden shadow-lg border border-slate-100">
          <div className="skeleton h-56 w-full" />
          <div className="p-5 space-y-3">
            <div className="flex gap-2"><div className="skeleton h-5 w-16 rounded-full" /><div className="skeleton h-5 w-20 rounded-full" /></div>
            <div className="skeleton h-5 w-3/4 rounded" />
            <div className="skeleton h-16 w-full rounded-xl" />
            <div className="flex justify-between pt-2"><div className="skeleton h-8 w-24 rounded" /><div className="skeleton h-10 w-24 rounded-xl" /></div>
          </div>
        </div>
      ))}
    </div>
  );
}

export function SpinnerLoader() {
  return (
    <div className="flex flex-col items-center justify-center py-12">
      <div className="relative w-20 h-20">
        <div className="absolute inset-0 rounded-full border-4 border-blue-100"></div>
        <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-blue-600 animate-spin"></div>
      </div>
      <p className="mt-4 text-slate-600 font-medium animate-pulse">Finding the best destinations for you...</p>
    </div>
  );
}