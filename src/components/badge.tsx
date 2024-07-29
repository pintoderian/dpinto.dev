export default function Badge({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-1 text-xs px-2 py-1 rounded-md bg-black text-white shadow-lg shadow-blue-900/60 ring-2 ring-blue-400/20 group-hover:shadow-xl group-hover:shadow-blue-700 group-hover:ring-blue-400/30">
      {children}
    </div>
  );
}
