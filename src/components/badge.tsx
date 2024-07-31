export default function Badge({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative inline-flex overflow-hidden rounded-full p-[1px] shadow-lg shadow-blue-900/60">
      <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(var(--tw-gradient-stops))] from-blue-900/60 via-blue-600 to-blue-400/20"></span>
      <div className="rounded-full text-xs w-full px-3 py-1 bg-black text-white backdrop-blur-3xl">
        {children}
      </div>
    </div>
  );
}
