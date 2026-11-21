import { CheckCircle2, Info, MinusCircle } from 'lucide-react';
import { FarmaciaPopularStatus } from '../types/medication';

interface FarmaciaPopularTagProps {
  status: FarmaciaPopularStatus;
  compact?: boolean;
}

export function FarmaciaPopularTag({ status, compact = false }: FarmaciaPopularTagProps) {
  if (status === 'gratuito') {
    return (
      <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-[#FEF6D8] border border-[#F2B705] text-[#0B2C59] text-sm font-semibold">
        <CheckCircle2 className="w-4 h-4 shrink-0 text-[#0B2C59]" aria-hidden="true" />
        <span>
          {compact
            ? 'Farmácia Popular: Gratuito (Demonstrativo)'
            : 'Disponível gratuitamente no Farmácia Popular (Demonstrativo)'}
        </span>
      </div>
    );
  }

  if (status === 'coparticipacao') {
    return (
      <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-[#F3F7FC] border border-[#1D4E8F]/40 text-[#0B2C59] text-sm font-semibold">
        <Info className="w-4 h-4 shrink-0 text-[#0B2C59]" aria-hidden="true" />
        <span>
          {compact
            ? 'Farmácia Popular: Coparticipação (Demonstrativo)'
            : 'Disponível com desconto por coparticipação (Demonstrativo)'}
        </span>
      </div>
    );
  }

  return (
    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-slate-50 border border-slate-300 text-slate-700 text-sm font-medium">
      <MinusCircle className="w-4 h-4 shrink-0 text-slate-600" aria-hidden="true" />
      <span>
        {compact
          ? 'Fora do Farmácia Popular (Demonstrativo)'
          : 'Não listado no Farmácia Popular (Demonstrativo)'}
      </span>
    </div>
  );
}
