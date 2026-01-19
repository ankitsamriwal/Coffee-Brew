
import React, { useEffect, useState } from 'react';

interface IntroAnimationProps {
  onComplete: () => void;
}

const IntroAnimation: React.FC<IntroAnimationProps> = ({ onComplete }) => {
  const [stage, setStage] = useState<'pouring' | 'steaming' | 'fogging' | 'clearing' | 'hidden'>('pouring');

  useEffect(() => {
    // A slightly longer, more dramatic timeline
    const steamTimer = setTimeout(() => setStage('steaming'), 800);
    const fogTimer = setTimeout(() => setStage('fogging'), 3500);
    const clearTimer = setTimeout(() => {
      setStage('clearing');
      onComplete();
    }, 5500);
    const hideTimer = setTimeout(() => setStage('hidden'), 6500);

    return () => {
      clearTimeout(steamTimer);
      clearTimeout(fogTimer);
      clearTimeout(clearTimer);
      clearTimeout(hideTimer);
    };
  }, [onComplete]);

  if (stage === 'hidden') return null;

  return (
    <div className={`fixed inset-0 z-[100] bg-black overflow-hidden transition-opacity duration-1000 ${stage === 'clearing' ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
      
      {/* Background Image: Elegant Pour */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1541167760496-1628856ab772?q=80&w=2000&auto=format&fit=crop" 
          alt="Pouring hot coffee" 
          className={`w-full h-full object-cover transition-transform duration-[6000ms] ease-out ${stage === 'pouring' ? 'scale-100' : 'scale-110'}`}
        />
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      {/* Steam Layers */}
      <div className={`absolute inset-0 z-10 pointer-events-none transition-opacity duration-1000 ${stage === 'pouring' ? 'opacity-0' : 'opacity-100'}`}>
        {/* Steam Cloud 1 */}
        <div className="absolute -bottom-20 left-1/4 w-96 h-96 bg-white/20 blur-[80px] rounded-full animate-steam-rise-slow mix-blend-screen"></div>
        {/* Steam Cloud 2 */}
        <div className="absolute -bottom-10 right-1/4 w-80 h-80 bg-white/10 blur-[60px] rounded-full animate-steam-rise-medium mix-blend-screen"></div>
        {/* Steam Cloud 3 */}
        <div className="absolute bottom-0 left-1/2 w-64 h-64 bg-white/15 blur-[50px] rounded-full animate-steam-rise-fast mix-blend-screen"></div>
      </div>

      {/* Fogging The Lens (Full Screen Whiteout) */}
      <div className={`absolute inset-0 z-20 bg-white/90 backdrop-blur-[20px] transition-all duration-2000 ease-in-out flex items-center justify-center
        ${stage === 'fogging' || stage === 'clearing' ? 'opacity-100' : 'opacity-0'}
      `}>
        <div className="text-center transform transition-all duration-1000 delay-500">
           <h1 className="text-4xl md:text-7xl font-serif text-[#2D241E] tracking-widest uppercase drop-shadow-sm">
             The Aficionado
           </h1>
           <p className="mt-4 text-[#C89D7C] font-serif italic text-lg animate-pulse">Brewing knowledge...</p>
        </div>
      </div>

      <style>{`
        @keyframes steam-rise {
          0% { transform: translateY(100%) scale(1); opacity: 0; }
          50% { opacity: 1; }
          100% { transform: translateY(-100%) scale(1.5); opacity: 0; }
        }
        .animate-steam-rise-slow { animation: steam-rise 8s infinite linear; }
        .animate-steam-rise-medium { animation: steam-rise 6s infinite linear 1s; }
        .animate-steam-rise-fast { animation: steam-rise 4s infinite linear 2s; }
      `}</style>
    </div>
  );
};

export default IntroAnimation;
