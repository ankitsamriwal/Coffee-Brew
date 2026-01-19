
import React, { useEffect, useState, useRef } from 'react';

interface IntroAnimationProps {
  onComplete: () => void;
}

const IntroAnimation: React.FC<IntroAnimationProps> = ({ onComplete }) => {
  const [stage, setStage] = useState<'pouring' | 'steaming' | 'fogging' | 'clearing' | 'hidden'>('pouring');
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.3;
      audioRef.current.play().catch(err => console.log('Audio autoplay blocked:', err));
    }

    const steamTimer = setTimeout(() => setStage('steaming'), 1200);
    const fogTimer = setTimeout(() => setStage('fogging'), 4000);
    const clearTimer = setTimeout(() => {
      setStage('clearing');
      onComplete();
    }, 6000);
    const hideTimer = setTimeout(() => setStage('hidden'), 7000);

    return () => {
      clearTimeout(steamTimer);
      clearTimeout(fogTimer);
      clearTimeout(clearTimer);
      clearTimeout(hideTimer);
      if (audioRef.current) {
        audioRef.current.pause();
      }
    };
  }, [onComplete]);

  if (stage === 'hidden') return null;

  return (
    <div className={`fixed inset-0 z-[100] bg-[#0a0806] overflow-hidden transition-opacity duration-1000 ${stage === 'clearing' ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>

      <audio ref={audioRef} src="https://cdn.pixabay.com/audio/2022/03/10/audio_c6c2c5df41.mp3" loop />

      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=2400&auto=format&fit=crop&ixlib=rb-4.0.3"
          alt="Top view of coffee being poured into elegant cup"
          className={`w-full h-full object-cover transition-all duration-[7000ms] ease-out ${stage === 'pouring' ? 'scale-100 brightness-75' : 'scale-120 brightness-50'}`}
        />
        <div className="absolute inset-0 bg-gradient-radial from-transparent via-black/30 to-black/60"></div>
      </div>

      <div className={`absolute inset-0 z-10 pointer-events-none transition-opacity duration-2000 ${stage === 'pouring' ? 'opacity-0' : 'opacity-100'}`}>
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-white/15 blur-[120px] rounded-full animate-steam-rise-1 mix-blend-screen"></div>
        <div className="absolute top-20 right-1/3 w-[500px] h-[500px] bg-white/12 blur-[100px] rounded-full animate-steam-rise-2 mix-blend-screen"></div>
        <div className="absolute top-10 left-1/2 w-[550px] h-[550px] bg-white/18 blur-[90px] rounded-full animate-steam-rise-3 mix-blend-screen"></div>
        <div className="absolute top-32 right-1/4 w-[450px] h-[450px] bg-white/10 blur-[110px] rounded-full animate-steam-rise-4 mix-blend-screen"></div>
      </div>

      <div className={`absolute inset-0 z-20 transition-all duration-3000 ease-in-out
        ${stage === 'fogging' || stage === 'clearing' ? 'backdrop-blur-[40px] bg-white/80' : 'backdrop-blur-0 bg-transparent'}
      `}>
        <div className={`h-full flex items-center justify-center transition-opacity duration-1000 ${stage === 'fogging' ? 'opacity-100' : 'opacity-0'}`}>
          <div className="text-center transform">
            <div className="mb-8">
              <i className="fas fa-mug-hot text-7xl text-[#2D241E] animate-pulse"></i>
            </div>
            <h1 className="text-5xl md:text-8xl font-serif text-[#2D241E] tracking-[0.3em] uppercase drop-shadow-lg font-black mb-6">
              The Aficionado
            </h1>
            <div className="flex items-center justify-center gap-3">
              <div className="w-2 h-2 bg-[#C89D7C] rounded-full animate-bounce"></div>
              <div className="w-2 h-2 bg-[#C89D7C] rounded-full animate-bounce delay-100"></div>
              <div className="w-2 h-2 bg-[#C89D7C] rounded-full animate-bounce delay-200"></div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes steam-rise-1 {
          0% { transform: translateY(100%) translateX(-20px) scale(0.8); opacity: 0; }
          30% { opacity: 0.6; }
          100% { transform: translateY(-120%) translateX(40px) scale(1.4); opacity: 0; }
        }
        @keyframes steam-rise-2 {
          0% { transform: translateY(100%) translateX(30px) scale(0.7); opacity: 0; }
          35% { opacity: 0.5; }
          100% { transform: translateY(-110%) translateX(-50px) scale(1.5); opacity: 0; }
        }
        @keyframes steam-rise-3 {
          0% { transform: translateY(100%) translateX(0px) scale(0.9); opacity: 0; }
          40% { opacity: 0.7; }
          100% { transform: translateY(-130%) translateX(20px) scale(1.3); opacity: 0; }
        }
        @keyframes steam-rise-4 {
          0% { transform: translateY(100%) translateX(-40px) scale(0.75); opacity: 0; }
          32% { opacity: 0.55; }
          100% { transform: translateY(-115%) translateX(60px) scale(1.45); opacity: 0; }
        }
        .animate-steam-rise-1 { animation: steam-rise-1 6s infinite ease-out; }
        .animate-steam-rise-2 { animation: steam-rise-2 7s infinite ease-out 0.8s; }
        .animate-steam-rise-3 { animation: steam-rise-3 5.5s infinite ease-out 1.5s; }
        .animate-steam-rise-4 { animation: steam-rise-4 6.5s infinite ease-out 0.4s; }
        .delay-100 { animation-delay: 0.1s; }
        .delay-200 { animation-delay: 0.2s; }
      `}</style>
    </div>
  );
};

export default IntroAnimation;
