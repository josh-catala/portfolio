export default function Card({ children, className = '' }) {
  return (
    <article className={`glow-card ${className}`}>
      {/* Solid Inner Body that masks the center gradient */}
      <div
      className={`glow-card-inner rounded-xl p-6 bg-deep-teal-100 light:bg-white text-pale-slate-900 light:text-deep-teal-100 border border-deep-teal-300 light:border-pale-slate-700 shadow-sm transition-colors duration-200 ${className}`}
    >
      {children}
    </div>
    </article>
  );
}