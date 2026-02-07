// src/components/sections/TrustSection.jsx
export default function TrustSection({ isDark }) {
  const companies = ["Google", "Microsoft", "Netflix", "Meta", "Amazon"];

  return (
    <section
      className={`py-12 border-y transition-colors ${isDark ? "border-gray-800" : "border-[#f0f2f4]"}`}
    >
      <p
        className={`text-center text-sm font-medium mb-8 uppercase tracking-widest ${isDark ? "text-gray-400" : "text-[#617589]"}`}
      >
        Our Students Work At
      </p>
      <div className="flex flex-wrap justify-center items-center gap-12 opacity-50 grayscale hover:grayscale-0 transition-all">
        {companies.map((company) => (
          <div
            key={company}
            className={`text-2xl font-bold ${isDark ? "text-gray-300" : "text-gray-900"}`}
          >
            {company}
          </div>
        ))}
      </div>
    </section>
  );
}
