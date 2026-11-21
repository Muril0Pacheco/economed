import { ArrowLeft, ArrowRight, Search, X } from 'lucide-react';
import { FormEvent, useEffect, useState } from 'react';
import { Medication } from '../types/medication';
import { FarmaciaPopularTag } from './FarmaciaPopularTag';

interface SearchResultsScreenProps {
  searchQuery: string;
  activeFilter: 'todos' | 'farmacia_popular' | 'uso_continuo';
  medications: Medication[];
  onSearchChange: (query: string) => void;
  onFilterChange: (filter: 'todos' | 'farmacia_popular' | 'uso_continuo') => void;
  onSelectMedication: (medicationId: string) => void;
  onBackHome: () => void;
}

function formatPriceBRL(value: number): string {
  if (value === 0) return 'Gratuito';
  return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}

export function SearchResultsScreen({
  searchQuery,
  activeFilter,
  medications,
  onSearchChange,
  onFilterChange,
  onSelectMedication,
  onBackHome,
}: SearchResultsScreenProps) {
  const [inputValue, setInputValue] = useState(searchQuery);

  useEffect(() => {
    setInputValue(searchQuery);
  }, [searchQuery]);

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    onSearchChange(inputValue.trim());
  };

  const handleClearSearch = () => {
    setInputValue('');
    onSearchChange('');
    onFilterChange('todos');
  };

  const normalizedQuery = searchQuery.trim().toLowerCase();

  const filteredMedications = medications.filter((med) => {
    const matchesQuery =
      normalizedQuery === '' ||
      med.nome.toLowerCase().includes(normalizedQuery) ||
      med.principioAtivo.toLowerCase().includes(normalizedQuery) ||
      med.categoria.toLowerCase().includes(normalizedQuery) ||
      med.nomesRelacionados.some((alias) => alias.toLowerCase().includes(normalizedQuery));

    const matchesFilter =
      activeFilter === 'todos' ||
      (activeFilter === 'farmacia_popular' &&
        (med.farmaciaPopularStatus === 'gratuito' ||
          med.farmaciaPopularStatus === 'coparticipacao')) ||
      (activeFilter === 'uso_continuo' && med.usoContinuo);

    return matchesQuery && matchesFilter;
  });

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-10">
      {/* Back navigation */}
      <div className="mb-6">
        <button
          type="button"
          onClick={onBackHome}
          className="inline-flex items-center gap-2 text-sm sm:text-base font-semibold text-[#0B2C59] hover:text-[#1D4E8F] py-2 min-h-[44px] cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" aria-hidden="true" />
          <span>Voltar para a página inicial</span>
        </button>
      </div>

      {/* Header & Inline Search */}
      <div className="bg-[#F8FAFC] border border-slate-200 rounded-xl p-5 sm:p-7 mb-8">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div>
            <h1 className="font-display text-2xl sm:text-3xl font-bold text-[#0B2C59] mb-2">
              Resultados da pesquisa
            </h1>
            <p className="text-base text-slate-700">
              {searchQuery ? (
                <>
                  Exibindo resultados para{' '}
                  <strong className="text-[#0B2C59]">“{searchQuery}”</strong>
                </>
              ) : (
                'Consulte os medicamentos demonstrativos disponíveis na plataforma.'
              )}
            </p>
          </div>

          <form onSubmit={handleSubmit} className="w-full lg:max-w-md flex gap-2.5">
            <div className="relative flex-1">
              <Search
                className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none"
                aria-hidden="true"
              />
              <input
                type="text"
                aria-label="Pesquisar medicamento"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Buscar por nome ou princípio ativo..."
                className="w-full h-12 pl-10 pr-9 text-base text-[#0B2C59] bg-white border border-slate-300 rounded-lg focus:border-[#0B2C59] focus:outline-none"
              />
              {inputValue && (
                <button
                  type="button"
                  onClick={() => {
                    setInputValue('');
                    onSearchChange('');
                  }}
                  aria-label="Limpar campo de busca"
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-500 hover:text-[#0B2C59] p-1 cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>
            <button
              type="submit"
              className="h-12 px-5 bg-[#0B2C59] hover:bg-[#133C73] text-white font-semibold text-sm sm:text-base rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer"
            >
              Buscar
            </button>
          </form>
        </div>

        {/* Interactive Filter Tabs + Result Count */}
        <div className="mt-6 pt-5 border-t border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-2" role="tablist" aria-label="Filtrar medicamentos">
            <button
              type="button"
              role="tab"
              aria-selected={activeFilter === 'todos'}
              onClick={() => onFilterChange('todos')}
              className={`px-4 py-2 min-h-[42px] text-sm font-semibold rounded-lg border transition-colors cursor-pointer whitespace-nowrap ${
                activeFilter === 'todos'
                  ? 'bg-[#0B2C59] text-white border-[#0B2C59]'
                  : 'bg-white text-[#0B2C59] border-slate-300 hover:bg-slate-50'
              }`}
            >
              Todos
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={activeFilter === 'farmacia_popular'}
              onClick={() => onFilterChange('farmacia_popular')}
              className={`px-4 py-2 min-h-[42px] text-sm font-semibold rounded-lg border transition-colors cursor-pointer whitespace-nowrap ${
                activeFilter === 'farmacia_popular'
                  ? 'bg-[#0B2C59] text-white border-[#0B2C59]'
                  : 'bg-white text-[#0B2C59] border-slate-300 hover:bg-slate-50'
              }`}
            >
              Farmácia Popular
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={activeFilter === 'uso_continuo'}
              onClick={() => onFilterChange('uso_continuo')}
              className={`px-4 py-2 min-h-[42px] text-sm font-semibold rounded-lg border transition-colors cursor-pointer whitespace-nowrap ${
                activeFilter === 'uso_continuo'
                  ? 'bg-[#0B2C59] text-white border-[#0B2C59]'
                  : 'bg-white text-[#0B2C59] border-slate-300 hover:bg-slate-50'
              }`}
            >
              Uso contínuo
            </button>
          </div>

          <p className="text-sm font-medium text-slate-600 tabular-nums">
            {filteredMedications.length}{' '}
            {filteredMedications.length === 1
              ? 'medicamento encontrado'
              : 'medicamentos encontrados'}
          </p>
        </div>
      </div>

      {/* Results Grid or Empty State */}
      {filteredMedications.length === 0 ? (
        <div className="bg-white border border-slate-200 rounded-xl p-8 sm:p-12 text-center max-w-2xl mx-auto">
          <h2 className="font-display text-xl font-bold text-[#0B2C59] mb-2">
            Nenhum medicamento encontrado para essa busca
          </h2>
          <p className="text-base text-slate-600 leading-relaxed mb-6">
            Este protótipo possui uma base demonstrativa com medicamentos comuns como
            Losartana, Metformina, Sinvastatina, Omeprazol, Atenolol, Hidroclorotiazida,
            Salbutamol e Dipirona.
          </p>
          <button
            type="button"
            onClick={handleClearSearch}
            className="min-h-[48px] px-6 py-3 bg-[#0B2C59] hover:bg-[#133C73] text-white font-semibold text-base rounded-lg transition-colors cursor-pointer"
          >
            Mostrar todos os medicamentos de exemplo
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredMedications.map((med) => {
            const lowestPrice = Math.min(
              ...med.alternativas.map((alt) => alt.precoIlustrativo)
            );

            return (
              <article
                key={med.id}
                className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm flex flex-col justify-between hover:border-[#0B2C59]/40 transition-colors"
              >
                <div>
                  {/* Quiet metadata text line */}
                  <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm text-slate-600 mb-2">
                    <span className="font-medium text-[#1D4E8F]">{med.categoria}</span>
                    {med.usoContinuo && (
                      <>
                        <span aria-hidden="true">·</span>
                        <span>Uso contínuo</span>
                      </>
                    )}
                  </div>

                  {/* Medication Title */}
                  <h2 className="font-display text-xl sm:text-2xl font-bold text-[#0B2C59] mb-1">
                    {med.nome}
                  </h2>

                  {/* Active Ingredient & Dosage */}
                  <p className="text-sm sm:text-base text-slate-700 mb-4">
                    <strong className="font-semibold text-[#0B2C59]">Princípio ativo:</strong>{' '}
                    {med.principioAtivo}{' '}
                    <span className="text-slate-400" aria-hidden="true">
                      ·
                    </span>{' '}
                    <strong className="font-semibold text-[#0B2C59]">Dosagem:</strong>{' '}
                    {med.dosagem}
                  </p>

                  <p className="text-sm text-slate-600 mb-4">{med.apresentacao}</p>

                  {/* Farmácia Popular Demonstrative Indicator */}
                  <div className="mb-5">
                    <FarmaciaPopularTag status={med.farmaciaPopularStatus} compact />
                  </div>
                </div>

                {/* Footer Row: Illustrative Starting Price + Details CTA */}
                <div className="pt-4 border-t border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <span className="block text-xs text-slate-500">
                      Menor valor ilustrativo
                    </span>
                    <span className="font-mono text-lg font-bold text-[#0B2C59] tabular-nums">
                      {formatPriceBRL(lowestPrice)}
                    </span>
                  </div>

                  <button
                    type="button"
                    onClick={() => onSelectMedication(med.id)}
                    className="min-h-[48px] px-5 py-2.5 bg-[#0B2C59] hover:bg-[#133C73] text-white font-semibold text-sm sm:text-base rounded-lg transition-colors inline-flex items-center justify-center gap-2 whitespace-nowrap cursor-pointer"
                  >
                    <span>Ver detalhes e alternativas</span>
                    <ArrowRight className="w-4 h-4" aria-hidden="true" />
                  </button>
                </div>
              </article>
            );
          })}
        </div>
      )}
    </div>
  );
}
