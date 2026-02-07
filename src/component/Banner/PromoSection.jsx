export default function PromoSection({ isDark, navigate }) {
  return (
    <section className="py-12">
      <div className="relative bg-[#137fec] rounded-3xl overflow-hidden p-8 md:p-16 flex flex-col md:flex-row items-center justify-between text-white gap-8">
        {/* Decorative circle */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32" />

        <div className="relative z-10">
          <p className="text-sm font-bold uppercase tracking-widest mb-2 opacity-80">
            New Year Launch Offer
          </p>
          <h2 className="text-3xl md:text-5xl font-black mb-4">
            Save up to 50% OFF
          </h2>
          <p className="text-white/80 max-w-md">
            Limited time offer on all premium specialization tracks. Start your
            journey today.
          </p>
        </div>

        <div className="relative z-10 flex flex-col items-center gap-4">
          <div className="flex gap-4">
            <div className="bg-white/20 backdrop-blur text-center p-3 rounded-xl min-w-[70px]">
              <p className="text-2xl font-bold">02</p>
              <p className="text-[10px] uppercase font-bold">Days</p>
            </div>
            <div className="bg-white/20 backdrop-blur text-center p-3 rounded-xl min-w-[70px]">
              <p className="text-2xl font-bold">14</p>
              <p className="text-[10px] uppercase font-bold">Hrs</p>
            </div>
            <div className="bg-white/20 backdrop-blur text-center p-3 rounded-xl min-w-[70px]">
              <p className="text-2xl font-bold">59</p>
              <p className="text-[10px] uppercase font-bold">Min</p>
            </div>
          </div>

          <button
            onClick={() => navigate("/courses")}
            className={`w-full font-bold py-4 px-8 rounded-xl shadow-lg transition-colors ${
              isDark
                ? "bg-white text-[#137fec] hover:bg-gray-100"
                : "bg-white text-[#137fec] hover:bg-[#f6f7f8]"
            }`}
          >
            Claim Discount Now
          </button>
        </div>
      </div>
    </section>
  );
}
