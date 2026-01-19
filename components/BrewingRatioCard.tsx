import React from 'react';
import { CoffeeDrink } from '../types';

interface Props {
  drink: CoffeeDrink;
}

const BrewingRatioCard: React.FC<Props> = ({ drink }) => {
  // Helper to calculate height percentages for the visual cup
  const totalParts = Object.values(drink.ratio).reduce((a: number, b) => {
    if (typeof b === 'number') {
      return a + b;
    }
    return a;
  }, 0);
  
  const getHeight = (amount: number | undefined) => {
    if (!amount) return 0;
    return (amount / totalParts) * 100;
  };

  return (
    <div className="bg-[#FDFBF7] rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all border border-[#2D241E]/5 flex flex-col h-full">
      <div className="h-48 overflow-hidden relative group">
        <img src={drink.image} alt={drink.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
        <div className="absolute bottom-4 left-4 text-white">
          <h3 className="text-xl font-serif font-bold">{drink.name}</h3>
        </div>
      </div>
      
      <div className="p-6 flex flex-col flex-grow">
        <p className="text-sm text-gray-500 mb-6 flex-grow">{drink.description}</p>
        
        {/* Visual Ratio Representation */}
        <div className="flex gap-4 items-end h-32 mb-2">
          {/* The Cup */}
          <div className="w-16 h-full border-x-2 border-b-2 border-[#2D241E]/20 rounded-b-lg relative flex flex-col-reverse overflow-hidden mx-auto bg-white">
            {drink.ratio.espresso && (
              <div style={{ height: `${getHeight(drink.ratio.espresso)}%` }} className="w-full bg-[#3d2b1f] flex items-center justify-center text-[8px] text-white/80">Espresso</div>
            )}
            {drink.ratio.condensedMilk && (
              <div style={{ height: `${getHeight(drink.ratio.condensedMilk)}%` }} className="w-full bg-[#EBDCB2] flex items-center justify-center text-[8px] text-[#2D241E]">Cond. Milk</div>
            )}
            {drink.ratio.water && (
              <div style={{ height: `${getHeight(drink.ratio.water)}%` }} className="w-full bg-[#A4D4E8]/30 flex items-center justify-center text-[8px] text-[#2D241E]">Water</div>
            )}
             {drink.ratio.milk && (
              <div style={{ height: `${getHeight(drink.ratio.milk)}%` }} className="w-full bg-[#F5F5F0] flex items-center justify-center text-[8px] text-[#2D241E]">Milk</div>
            )}
            {drink.ratio.foam && (
              <div style={{ height: `${getHeight(drink.ratio.foam)}%` }} className="w-full bg-white border-b border-gray-100 flex items-center justify-center text-[8px] text-[#2D241E] relative">
                <span className="absolute z-10">Foam</span>
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNCIgaGVpZ2h0PSI0IiB2aWV3Qm94PSIwIDAgNCA0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxjaXJjbGUgY3g9IjIiIGN5PSIyIiByPSIxIiBmaWxsPSIjRTVFNUU1IiBmaWxsLW9wYWNpdHk9IjAuNSIvPjwvc3ZnPg==')] opacity-50"></div>
              </div>
            )}
          </div>
          
          {/* Legend */}
          <div className="flex-1 space-y-1 text-xs text-gray-500">
            {Object.entries(drink.ratio).map(([key, value]) => {
              if (typeof value !== 'number') return null;
              return (
                <div key={key} className="flex justify-between border-b border-gray-100 pb-1">
                  <span className="capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</span>
                  <span className="font-mono font-bold text-[#2D241E]">{value} part{value !== 1 ? 's' : ''}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrewingRatioCard;