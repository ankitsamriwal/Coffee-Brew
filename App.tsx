
import React, { useState, useEffect } from 'react';
import IntroAnimation from './components/IntroAnimation';
import BrewingRatioCard from './components/BrewingRatioCard';
import WorldCoffeeMap from './components/WorldCoffeeMap';
import { COFFEE_DRINKS, BEAN_INFO, HISTORY_TIMELINE, HEALTH_BENEFITS } from './constants';
import { getDailyCoffeeWisdom } from './geminiService';
import { DailyWisdom } from './types';

const App: React.FC = () => {
  const [showContent, setShowContent] = useState(false);
  const [wisdom, setWisdom] = useState<DailyWisdom | null>(null);
  const [loadingWisdom, setLoadingWisdom] = useState(false);

  const fetchWisdom = async () => {
    setLoadingWisdom(true);
    const data = await getDailyCoffeeWisdom();
    setWisdom(data);
    setLoadingWisdom(false);
  };

  useEffect(() => {
    // Initial fetch of wisdom so it's ready when content reveals
    fetchWisdom();
  }, []);

  return (
    <>
      <IntroAnimation onComplete={() => setShowContent(true)} />
      
      {showContent && (
        <div className="min-h-screen bg-[#FDFBF7] text-[#2D241E] animate-fade-in font-sans selection:bg-[#C89D7C] selection:text-white">
          {/* Navigation */}
          <nav className="fixed top-0 w-full z-40 bg-[#FDFBF7]/90 backdrop-blur-md border-b border-[#2D241E]/5 px-6 py-6 flex justify-between items-center transition-all">
            <h1 className="text-2xl font-serif font-bold tracking-widest uppercase cursor-pointer" onClick={() => window.scrollTo(0,0)}>The Aficionado</h1>
            <div className="hidden md:flex gap-8 text-xs font-bold uppercase tracking-[0.2em] text-[#2D241E]/60">
              <a href="#brewing" className="hover:text-[#2D241E] transition-colors">Brewing</a>
              <a href="#beans" className="hover:text-[#2D241E] transition-colors">Beans</a>
              <a href="#history" className="hover:text-[#2D241E] transition-colors">History</a>
              <a href="#world-map" className="hover:text-[#2D241E] transition-colors">World Map</a>
              <a href="#health" className="hover:text-[#2D241E] transition-colors">Wellness</a>
            </div>
          </nav>

          {/* Hero Section */}
          <header className="relative pt-40 pb-24 px-6 text-center max-w-6xl mx-auto min-h-[70vh] flex flex-col items-center justify-center">
             {/* Background Decoration */}
             <div className="absolute top-20 right-0 opacity-5 pointer-events-none">
                <i className="fas fa-coffee text-9xl"></i>
             </div>

            <span className="block text-[#C89D7C] font-serif italic text-2xl mb-4 animate-slide-up">The Art & Science</span>
            <h2 className="text-6xl md:text-8xl font-serif font-black mb-8 text-[#2D241E] leading-[0.9] tracking-tighter animate-slide-up delay-100">
              Of the <br/>Perfect Cup
            </h2>
            <p className="text-lg text-gray-500 font-light leading-relaxed max-w-2xl mx-auto mb-16 animate-slide-up delay-200">
              Explore the delicate balance of ratios, the rich history of the bean, and the rituals that define coffee culture around the world.
            </p>
            
            {/* Daily Wisdom Widget */}
            <div className="bg-white p-8 md:p-10 rounded-[2rem] shadow-2xl border border-[#2D241E]/5 max-w-3xl w-full mx-auto relative overflow-hidden group animate-scale-in delay-300">
              <div className="absolute top-0 left-0 w-2 h-full bg-[#C89D7C]"></div>
              <div className="flex flex-col items-center">
                <span className="text-[10px] uppercase tracking-[0.2em] text-gray-400 mb-6 font-bold flex items-center gap-2">
                   <i className="fas fa-sun text-[#C89D7C]"></i> Daily Dose of Wisdom
                </span>
                {loadingWisdom ? (
                   <div className="h-20 flex items-center justify-center text-[#C89D7C]"><i className="fas fa-circle-notch fa-spin text-2xl"></i></div>
                ) : (
                  <>
                    <p className="text-xl md:text-3xl font-serif italic text-[#2D241E] mb-6 text-center leading-normal">
                      "{wisdom?.quote}"
                    </p>
                    <p className="text-xs uppercase tracking-widest text-gray-500 font-bold">— {wisdom?.authorOrSource}</p>
                  </>
                )}
                <button 
                  onClick={fetchWisdom}
                  className="mt-8 text-[10px] font-bold uppercase tracking-widest text-[#C89D7C] hover:text-[#2D241E] transition-colors flex items-center gap-2 border border-[#C89D7C]/20 px-4 py-2 rounded-full hover:bg-[#C89D7C]/10"
                >
                  <i className="fas fa-sync-alt"></i> New Insight
                </button>
              </div>
            </div>
          </header>

          {/* Brewing Guide */}
          <section id="brewing" className="py-24 px-6 bg-white relative">
            <div className="max-w-7xl mx-auto">
              <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                <div>
                  <h3 className="text-5xl font-serif font-bold mb-4">Brewing Architecture</h3>
                  <p className="text-gray-500 max-w-md text-lg">Understanding the precise ratios that define the world's most beloved espresso-based drinks.</p>
                </div>
                <div className="text-right hidden md:block">
                  <span className="text-9xl font-serif text-[#F2EFE9] font-black leading-none -mb-8 block">01</span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {COFFEE_DRINKS.map(drink => (
                  <BrewingRatioCard key={drink.id} drink={drink} />
                ))}
              </div>
            </div>
          </section>

          {/* Bean Encyclopedia */}
          <section id="beans" className="py-32 px-6 bg-[#1A1512] text-[#FDFBF7] relative overflow-hidden">
            {/* Background Texture */}
            <div className="absolute inset-0 opacity-20">
               <img src="https://images.unsplash.com/photo-1611162458324-a929a977a72d?q=80&w=2000&auto=format&fit=crop" className="w-full h-full object-cover grayscale" alt="coffee beans texture" />
            </div>
            
            <div className="max-w-7xl mx-auto relative z-10">
              <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-6 border-b border-white/10 pb-12">
                <div>
                  <h3 className="text-5xl font-serif font-bold mb-4">Know Your Beans</h3>
                  <p className="text-white/60 max-w-md text-lg">The complex flavors in your cup start with the genetics of the cherry.</p>
                </div>
                <div className="text-right">
                  <span className="text-9xl font-serif text-white/5 font-black leading-none -mb-8 block">02</span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
                {BEAN_INFO.map((bean, idx) => (
                  <div key={idx} className="group hover:-translate-y-2 transition-transform duration-500">
                    <div className="w-16 h-16 rounded-full border border-[#C89D7C] flex items-center justify-center mb-8 group-hover:bg-[#C89D7C] transition-all duration-500">
                      <span className="font-serif italic text-2xl text-[#C89D7C] group-hover:text-[#2D241E]">{idx + 1}</span>
                    </div>
                    <h4 className="text-3xl font-serif font-bold mb-4">{bean.name}</h4>
                    <p className="text-white/60 leading-relaxed mb-8 text-sm">{bean.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {bean.characteristics.map(char => (
                        <span key={char} className="px-4 py-1.5 border border-white/10 bg-white/5 rounded-full text-[10px] uppercase tracking-wider text-[#C89D7C]">
                          {char}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* History Timeline */}
          <section id="history" className="py-32 px-6 bg-[#FDFBF7]">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-20">
                <span className="text-[#C89D7C] font-serif italic text-2xl">A Journey Through Time</span>
                <h3 className="text-5xl font-serif font-bold mt-3">Origins & Evolution</h3>
              </div>

              <div className="relative border-l border-[#2D241E]/10 ml-6 md:ml-12 space-y-16">
                {HISTORY_TIMELINE.map((event, idx) => (
                  <div key={idx} className="relative pl-12 md:pl-20">
                    <div className="absolute -left-[9px] top-2 w-4 h-4 bg-[#FDFBF7] border-4 border-[#C89D7C] rounded-full"></div>
                    <span className="block text-sm font-bold text-[#C89D7C] mb-2 uppercase tracking-widest">{event.year}</span>
                    <h4 className="text-2xl font-serif font-bold text-[#2D241E] mb-3">{event.title}</h4>
                    <p className="text-gray-500 leading-relaxed text-base">{event.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* World Coffee Map */}
          <WorldCoffeeMap />

          {/* Health Benefits */}
          <section id="health" className="py-24 px-6 bg-white border-t border-gray-100">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              <div className="relative h-[700px] overflow-hidden rounded-[2rem] shadow-2xl">
                 <img 
                  src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=1200&auto=format&fit=crop" 
                  alt="Healthy Coffee Lifestyle" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2D241E] via-transparent to-transparent opacity-80"></div>
                <div className="absolute bottom-12 left-12 right-12 text-white">
                  <i className="fas fa-quote-left text-4xl text-[#C89D7C] mb-6 opacity-50"></i>
                  <p className="font-serif italic text-3xl leading-relaxed">"Coffee is a language in itself."</p>
                  <span className="text-xs uppercase tracking-widest mt-6 block opacity-80 font-bold">— Jackie Chan</span>
                </div>
              </div>

              <div>
                <span className="text-[#C89D7C] font-bold text-xs uppercase tracking-[0.2em] mb-4 block">Wellness</span>
                <h3 className="text-5xl font-serif font-bold mb-8">Elixir of Life</h3>
                <p className="text-gray-500 mb-12 leading-loose text-lg font-light">
                  Beyond the caffeine kick, coffee is a complex botanical extract offering significant health advantages. Rich in antioxidants and essential nutrients, it is a daily ritual that nurtures both body and mind when consumed with intention.
                </p>
                <div className="space-y-8">
                  {HEALTH_BENEFITS.map((benefit, idx) => (
                    <div key={idx} className="flex gap-6 items-start">
                      <div className="w-8 h-8 rounded-full bg-[#FDFBF7] border border-[#EBDCB2] flex-shrink-0 flex items-center justify-center mt-1">
                        <i className="fas fa-check text-[#C89D7C] text-xs"></i>
                      </div>
                      <p className="text-[#2D241E] font-medium text-lg">{benefit}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Footer */}
          <footer className="bg-[#1A1512] text-white py-20 px-6 text-center border-t border-white/5">
            <i className="fas fa-coffee text-4xl text-[#C89D7C] mb-6"></i>
            <h2 className="font-serif text-3xl mb-4">The Coffee Aficionado</h2>
            <p className="text-white/40 text-xs uppercase tracking-[0.3em] max-w-md mx-auto leading-loose">
              Dedicated to the pursuit of the perfect brew. <br/> Est. 2024
            </p>
          </footer>
        </div>
      )}
      
      {/* Global styles for animations */}
      <style>{`
        .animate-fade-in { animation: fadeIn 1s ease-out forwards; }
        .animate-slide-up { animation: slideUp 0.8s ease-out forwards; opacity: 0; transform: translateY(20px); }
        .animate-scale-in { animation: scaleIn 0.8s ease-out forwards; opacity: 0; transform: scale(0.95); }
        .delay-100 { animation-delay: 0.1s; }
        .delay-200 { animation-delay: 0.2s; }
        .delay-300 { animation-delay: 0.3s; }
        
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes slideUp { to { opacity: 1; transform: translateY(0); } }
        @keyframes scaleIn { to { opacity: 1; transform: scale(1); } }
      `}</style>
    </>
  );
};

export default App;
