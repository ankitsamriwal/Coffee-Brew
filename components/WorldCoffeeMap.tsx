import React, { useState } from 'react';

interface CountryData {
  country: string;
  consumption: number;
  flag: string;
  color: string;
}

const TOP_COFFEE_COUNTRIES: CountryData[] = [
  { country: 'Finland', consumption: 12.0, flag: '🇫🇮', color: '#4A90E2' },
  { country: 'Norway', consumption: 9.9, flag: '🇳🇴', color: '#5B9BD5' },
  { country: 'Iceland', consumption: 9.0, flag: '🇮🇸', color: '#6FA8DC' },
  { country: 'Denmark', consumption: 8.7, flag: '🇩🇰', color: '#7FB3E0' },
  { country: 'Netherlands', consumption: 8.4, flag: '🇳🇱', color: '#8FBEE3' },
  { country: 'Sweden', consumption: 8.2, flag: '🇸🇪', color: '#9FC9E7' },
  { country: 'Switzerland', consumption: 7.9, flag: '🇨🇭', color: '#AFD4EA' },
  { country: 'Belgium', consumption: 6.8, flag: '🇧🇪', color: '#BFDFEE' },
  { country: 'Luxembourg', consumption: 6.5, flag: '🇱🇺', color: '#CFEAF1' },
  { country: 'Canada', consumption: 6.2, flag: '🇨🇦', color: '#DFF5F5' }
];

const WorldCoffeeMap: React.FC = () => {
  const [hoveredCountry, setHoveredCountry] = useState<string | null>(null);

  return (
    <section id="world-map" className="py-32 px-6 bg-gradient-to-br from-[#1A1512] via-[#2D241E] to-[#1A1512] text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#C89D7C] rounded-full blur-[150px]"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#C89D7C] rounded-full blur-[180px]"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <span className="text-[#C89D7C] font-bold text-xs uppercase tracking-[0.3em] mb-4 block">
            <i className="fas fa-globe-americas mr-2"></i>
            Global Consumption
          </span>
          <h3 className="text-5xl md:text-6xl font-serif font-bold mb-6">
            The World's Coffee Champions
          </h3>
          <p className="text-white/60 max-w-2xl mx-auto text-lg font-light">
            Discover which nations lead the world in coffee consumption. Measured in kilograms per capita per year, these countries have truly mastered the art of coffee culture.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative h-[600px] bg-[#0F0D0B]/50 rounded-3xl border border-white/5 overflow-hidden backdrop-blur-sm p-8 flex items-center justify-center">
            <img
              src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?q=80&w=1200&auto=format&fit=crop"
              alt="World Map"
              className="w-full h-full object-contain opacity-30 absolute inset-0"
            />
            <div className="relative z-10 text-center">
              <div className="mb-8">
                <i className="fas fa-map-marked-alt text-8xl text-[#C89D7C]/30"></i>
              </div>
              <p className="text-white/40 text-sm uppercase tracking-widest">
                Coffee Consuming Nations
              </p>
              <p className="text-6xl font-serif font-bold text-white/10 mt-4">
                {TOP_COFFEE_COUNTRIES.length}
              </p>
            </div>
          </div>

          <div className="space-y-4">
            {TOP_COFFEE_COUNTRIES.map((country, idx) => {
              const maxConsumption = TOP_COFFEE_COUNTRIES[0].consumption;
              const percentage = (country.consumption / maxConsumption) * 100;
              const isHovered = hoveredCountry === country.country;

              return (
                <div
                  key={country.country}
                  className="relative group cursor-pointer"
                  onMouseEnter={() => setHoveredCountry(country.country)}
                  onMouseLeave={() => setHoveredCountry(null)}
                >
                  <div className={`flex items-center gap-6 p-5 rounded-2xl border transition-all duration-300 ${
                    isHovered
                      ? 'bg-[#C89D7C]/20 border-[#C89D7C]/50 transform -translate-x-2'
                      : 'bg-white/5 border-white/10 hover:bg-white/10'
                  }`}>
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#C89D7C]/10 border border-[#C89D7C]/30 flex items-center justify-center font-serif font-bold text-lg">
                      {idx + 1}
                    </div>

                    <div className="flex-grow min-w-0">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="text-3xl">{country.flag}</span>
                        <h4 className="text-xl font-semibold text-white">{country.country}</h4>
                      </div>

                      <div className="relative h-3 bg-black/30 rounded-full overflow-hidden">
                        <div
                          className="absolute inset-y-0 left-0 rounded-full transition-all duration-700 ease-out"
                          style={{
                            width: `${percentage}%`,
                            background: `linear-gradient(90deg, ${country.color}, ${country.color}dd)`
                          }}
                        >
                          <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
                        </div>
                      </div>
                    </div>

                    <div className="flex-shrink-0 text-right">
                      <div className="text-2xl font-bold text-[#C89D7C]">
                        {country.consumption}
                      </div>
                      <div className="text-[10px] text-white/40 uppercase tracking-wider">
                        kg/year
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-20 text-center">
          <div className="inline-flex items-center gap-8 px-10 py-6 bg-white/5 border border-white/10 rounded-full backdrop-blur-sm">
            <div className="text-center">
              <div className="text-3xl font-serif font-bold text-[#C89D7C] mb-1">
                <i className="fas fa-coffee mr-2"></i>
                2.25B
              </div>
              <div className="text-xs text-white/60 uppercase tracking-widest">
                Cups Per Day
              </div>
            </div>
            <div className="w-px h-12 bg-white/20"></div>
            <div className="text-center">
              <div className="text-3xl font-serif font-bold text-[#C89D7C] mb-1">
                <i className="fas fa-globe mr-2"></i>
                400B
              </div>
              <div className="text-xs text-white/60 uppercase tracking-widest">
                Cups Per Year
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorldCoffeeMap;
