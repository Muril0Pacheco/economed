import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { ScreenId } from '../types/medication';

interface HeaderProps {
  currentScreen: ScreenId;
  activeFilter: 'todos' | 'farmacia_popular' | 'uso_continuo';
  onNavigateHome: () => void;
  onNavigateMedications: (filter?: 'todos' | 'farmacia_popular' | 'uso_continuo') => void;
  onNavigatePrescription: () => void;
}

export function Header({
  currentScreen,
  activeFilter,
  onNavigateHome,
  onNavigateMedications,
  onNavigatePrescription,
}: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isHome = currentScreen === 'home';
  const isAllMeds = currentScreen === 'results' && activeFilter !== 'farmacia_popular';
  const isFarmaciaPopular = currentScreen === 'results' && activeFilter === 'farmacia_popular';
  const isPrescription = currentScreen === 'prescription';

  const handleLinkClick = (action: () => void) => {
    setMobileMenuOpen(false);
    action();
  };

  return (
    <header className="sticky top-0 z-30 bg-white border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 sm:h-18 flex items-center justify-between gap-8">
        {/* Zone 1: Brand wordmark */}
        <button
          type="button"
          onClick={() => handleLinkClick(onNavigateHome)}
          className="flex items-center gap-2.5 text-left whitespace-nowrap shrink-0 cursor-pointer rounded-md py-1"
        >
          <svg
            width="30"
            height="30"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            className="shrink-0"
          >
            <rect width="32" height="32" rx="6" fill="#0B2C59" />
            <rect x="13" y="6" width="6" height="20" rx="1.5" fill="#FFFFFF" />
            <rect x="6" y="13" width="20" height="6" rx="1.5" fill="#FFFFFF" />
            <rect x="13" y="13" width="6" height="6" rx="1" fill="#F2B705" />
          </svg>
          <span className="font-display text-lg sm:text-xl font-bold tracking-tight text-[#0B2C59] whitespace-nowrap">
            Economed
          </span>
        </button>

        {/* Zone 2: Navigation Links (Desktop) */}
        <nav
          aria-label="Navegação principal"
          className="hidden md:flex items-center gap-6 text-[15px] font-medium"
        >
          <button
            type="button"
            onClick={onNavigateHome}
            className={`py-1.5 border-b-2 transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
              isHome
                ? 'border-[#F2B705] text-[#0B2C59] font-semibold'
                : 'border-transparent text-slate-600 hover:text-[#0B2C59] hover:border-slate-300'
            }`}
          >
            Início
          </button>
          <button
            type="button"
            onClick={() => onNavigateMedications('todos')}
            className={`py-1.5 border-b-2 transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
              isAllMeds
                ? 'border-[#F2B705] text-[#0B2C59] font-semibold'
                : 'border-transparent text-slate-600 hover:text-[#0B2C59] hover:border-slate-300'
            }`}
          >
            Medicamentos
          </button>
          <button
            type="button"
            onClick={() => onNavigateMedications('farmacia_popular')}
            className={`py-1.5 border-b-2 transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
              isFarmaciaPopular
                ? 'border-[#F2B705] text-[#0B2C59] font-semibold'
                : 'border-transparent text-slate-600 hover:text-[#0B2C59] hover:border-slate-300'
            }`}
          >
            Farmácia Popular
          </button>
          <button
            type="button"
            onClick={onNavigatePrescription}
            className={`py-1.5 border-b-2 transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
              isPrescription
                ? 'border-[#F2B705] text-[#0B2C59] font-semibold'
                : 'border-transparent text-slate-600 hover:text-[#0B2C59] hover:border-slate-300'
            }`}
          >
            Receita Médica
          </button>
        </nav>

        {/* Zone 3: Single Primary Action */}
        <div className="flex items-center gap-2 shrink-0">
          <button
            type="button"
            onClick={() => handleLinkClick(onNavigatePrescription)}
            className="hidden sm:inline-flex items-center justify-center px-4 py-2.5 min-h-[42px] text-sm font-semibold text-[#0B2C59] bg-[#F2B705] hover:bg-[#E0A800] rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer"
          >
            Consultar Receita
          </button>

          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
            className="md:hidden inline-flex items-center justify-center w-11 h-11 rounded-lg border border-slate-200 text-[#0B2C59] hover:bg-slate-50 cursor-pointer"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <nav
          aria-label="Menu móvel"
          className="md:hidden border-t border-slate-200 bg-white px-4 py-3 flex flex-col gap-1"
        >
          <button
            type="button"
            onClick={() => handleLinkClick(onNavigateHome)}
            className={`w-full text-left px-3 py-3 rounded-lg text-base font-medium min-h-[44px] cursor-pointer ${
              isHome ? 'bg-[#F3F7FC] text-[#0B2C59] font-semibold' : 'text-slate-700 hover:bg-slate-50'
            }`}
          >
            Início
          </button>
          <button
            type="button"
            onClick={() => handleLinkClick(() => onNavigateMedications('todos'))}
            className={`w-full text-left px-3 py-3 rounded-lg text-base font-medium min-h-[44px] cursor-pointer ${
              isAllMeds ? 'bg-[#F3F7FC] text-[#0B2C59] font-semibold' : 'text-slate-700 hover:bg-slate-50'
            }`}
          >
            Medicamentos
          </button>
          <button
            type="button"
            onClick={() => handleLinkClick(() => onNavigateMedications('farmacia_popular'))}
            className={`w-full text-left px-3 py-3 rounded-lg text-base font-medium min-h-[44px] cursor-pointer ${
              isFarmaciaPopular
                ? 'bg-[#F3F7FC] text-[#0B2C59] font-semibold'
                : 'text-slate-700 hover:bg-slate-50'
            }`}
          >
            Farmácia Popular
          </button>
          <button
            type="button"
            onClick={() => handleLinkClick(onNavigatePrescription)}
            className={`w-full text-left px-3 py-3 rounded-lg text-base font-medium min-h-[44px] cursor-pointer ${
              isPrescription
                ? 'bg-[#F3F7FC] text-[#0B2C59] font-semibold'
                : 'text-slate-700 hover:bg-slate-50'
            }`}
          >
            Consultar Receita Médica
          </button>
        </nav>
      )}
    </header>
  );
}
