import {
  AlertTriangle,
  ArrowLeft,
  BadgeDollarSign,
  Building2,
  Check,
  Info,
} from 'lucide-react';
import { Medication } from '../types/medication';
import { FarmaciaPopularTag } from './FarmaciaPopularTag';

interface MedicationDetailsScreenProps {
  medication: Medication;
  backSource: 'results' | 'prescription';
  onBack: () => void;
  onBackHome: () => void;
}

function formatPriceBRL(value: number): string {
  if (value === 0) return 'R$ 0,00 (Gratuito)';
  return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}

export function MedicationDetailsScreen({
  medication,
  backSource,
  onBack,
  onBackHome,
}: MedicationDetailsScreenProps) {
  const sortedAlternatives = [...medication.alternativas].sort(
    (a, b) => a.precoIlustrativo - b.precoIlustrativo
  );

  const maxPrice = Math.max(
    ...sortedAlternatives.map((alt) => alt.precoIlustrativo),
    1
  );
  const highestPrice = Math.max(
    ...sortedAlternatives.map((alt) => alt.precoIlustrativo)
  );
  const lowestCommercialOrPublic = sortedAlternatives[0]?.precoIlustrativo ?? 0;

  const genericOrLowest = sortedAlternatives.find(
    (alt) => alt.tipo === 'Genérico' || alt.destaqueEconomico
  );

  const maxSavingsPercent =
    highestPrice > 0
      ? Math.round(((highestPrice - lowestCommercialOrPublic) / highestPrice) * 100)
      : 0;

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-10">
      {/* Top Navigation Breadcrumb / Back Buttons */}
      <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
        <button
          type="button"
          onClick={onBack}
          className="inline-flex items-center gap-2 text-sm sm:text-base font-semibold text-[#0B2C59] hover:text-[#1D4E8F] py-2 min-h-[44px] cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" aria-hidden="true" />
          <span>
            {backSource === 'prescription'
              ? 'Voltar para a receita médica'
              : 'Voltar para os resultados'}
          </span>
        </button>

        <button
          type="button"
          onClick={onBackHome}
          className="text-sm font-medium text-slate-600 hover:text-[#0B2C59] underline underline-offset-4 py-2 min-h-[44px] cursor-pointer"
        >
          Ir para a página inicial
        </button>
      </div>

      {/* Main Medication Summary Card */}
      <section className="bg-white border border-slate-200 rounded-xl p-6 sm:p-8 shadow-sm mb-8">
        <div className="flex flex-wrap items-center gap-2 text-sm text-slate-600 mb-2">
          <span className="font-semibold text-[#1D4E8F]">{medication.categoria}</span>
          {medication.usoContinuo && (
            <>
              <span aria-hidden="true">·</span>
              <span>Uso contínuo</span>
            </>
          )}
        </div>

        <h1 className="font-display text-2xl sm:text-4xl font-bold text-[#0B2C59] mb-4">
          {medication.nome} {medication.dosagem}
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 py-4 px-5 bg-[#F8FAFC] border border-slate-200 rounded-lg mb-6">
          <div>
            <span className="block text-xs font-semibold text-slate-500 mb-1">
              Princípio ativo
            </span>
            <span className="text-base font-semibold text-[#0B2C59]">
              {medication.principioAtivo}
            </span>
          </div>
          <div>
            <span className="block text-xs font-semibold text-slate-500 mb-1">
              Dosagem
            </span>
            <span className="font-mono text-base font-semibold text-[#0B2C59] tabular-nums">
              {medication.dosagem}
            </span>
          </div>
          <div>
            <span className="block text-xs font-semibold text-slate-500 mb-1">
              Apresentação
            </span>
            <span className="text-base font-medium text-[#0B2C59]">
              {medication.apresentacao}
            </span>
          </div>
        </div>

        {/* Two-column details: General Info & Farmacia Popular */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Patient Summary */}
          <div className="lg:col-span-7 space-y-5">
            <div>
              <h2 className="font-display text-lg font-bold text-[#0B2C59] mb-2">
                Para que costuma ser indicado
              </h2>
              <p className="text-base text-slate-700 leading-relaxed">
                {medication.resumo}
              </p>
            </div>

            <div>
              <h3 className="font-display text-base font-bold text-[#0B2C59] mb-2.5">
                Orientações gerais ao paciente
              </h3>
              <ul className="space-y-2.5">
                {medication.orientacoesGerais.map((tip, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-2.5 text-sm sm:text-base text-slate-700 leading-relaxed"
                  >
                    <Check
                      className="w-5 h-5 text-[#0B2C59] shrink-0 mt-0.5"
                      aria-hidden="true"
                    />
                    <span>{tip}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Farmácia Popular Illustrative Block */}
          <div className="lg:col-span-5 bg-[#F8FAFC] border border-slate-200 rounded-xl p-5 sm:p-6">
            <div className="flex items-center gap-2.5 mb-3">
              <Building2 className="w-5 h-5 text-[#0B2C59]" aria-hidden="true" />
              <h2 className="font-display text-lg font-bold text-[#0B2C59]">
                Programa Farmácia Popular
              </h2>
            </div>

            <div className="mb-3">
              <FarmaciaPopularTag status={medication.farmaciaPopularStatus} />
            </div>

            <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-4">
              {medication.farmaciaPopularDescricao}
            </p>

            {medication.requisitosFarmaciaPopular && (
              <div className="pt-3 border-t border-slate-200 flex items-start gap-2 text-sm text-slate-700">
                <Info className="w-4 h-4 text-[#0B2C59] shrink-0 mt-0.5" aria-hidden="true" />
                <span>
                  <strong className="text-[#0B2C59]">Documentos habituais:</strong>{' '}
                  {medication.requisitosFarmaciaPopular}
                </span>
              </div>
            )}

            <p className="mt-4 text-xs text-slate-500">
              Informação demonstrativa. Confirme a disponibilidade presencialmente em uma
              farmácia credenciada.
            </p>
          </div>
        </div>
      </section>

      {/* Alternatives & Visual Price Comparison */}
      <section className="bg-white border border-slate-200 rounded-xl p-6 sm:p-8 shadow-sm mb-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-200 mb-6">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <BadgeDollarSign className="w-5 h-5 text-[#0B2C59]" aria-hidden="true" />
              <h2 className="font-display text-xl sm:text-2xl font-bold text-[#0B2C59]">
                Alternativas e comparação de preços (Ilustrativo)
              </h2>
            </div>
            <p className="text-sm sm:text-base text-slate-600">
              Comparação visual entre opções com o mesmo princípio ativo ({medication.principioAtivo}).
            </p>
          </div>

          {maxSavingsPercent > 0 && genericOrLowest && (
            <div className="px-4 py-2.5 bg-[#FEF6D8] border border-[#F2B705] rounded-lg text-sm font-bold text-[#0B2C59] shrink-0">
              {lowestCommercialOrPublic === 0
                ? 'Opção gratuita ilustrativa disponível'
                : `Economia ilustrativa de até ${maxSavingsPercent}%`}
            </div>
          )}
        </div>

        {/* Visual Comparison Rows */}
        <div className="space-y-4">
          {sortedAlternatives.map((alt) => {
            const widthPercent =
              alt.precoIlustrativo === 0
                ? 4
                : Math.max(12, Math.round((alt.precoIlustrativo / maxPrice) * 100));

            const isMostEconomical = Boolean(alt.destaqueEconomico);

            return (
              <div
                key={alt.id}
                className={`rounded-xl p-4 sm:p-5 border transition-colors ${
                  isMostEconomical
                    ? 'bg-[#FEF6D8]/60 border-[#F2B705]'
                    : 'bg-white border-slate-200'
                }`}
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                  <div>
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="font-display text-base sm:text-lg font-bold text-[#0B2C59]">
                        {alt.nomeComercial}
                      </h3>
                      {isMostEconomical && (
                        <span className="px-2.5 py-0.5 rounded bg-[#F2B705] text-[#0B2C59] text-xs font-bold">
                          Opção potencialmente mais econômica
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-slate-600 mt-0.5">
                      <span className="font-semibold text-[#0B2C59]">{alt.tipo}</span>
                      <span className="mx-1.5" aria-hidden="true">
                        ·
                      </span>
                      <span>{alt.laboratorio}</span>
                      <span className="mx-1.5" aria-hidden="true">
                        ·
                      </span>
                      <span>{alt.apresentacao}</span>
                    </p>
                  </div>

                  <div className="sm:text-right shrink-0">
                    <span className="block text-xs text-slate-500">
                      Valor ilustrativo
                    </span>
                    <span className="font-mono text-lg sm:text-xl font-bold text-[#0B2C59] tabular-nums">
                      {formatPriceBRL(alt.precoIlustrativo)}
                    </span>
                  </div>
                </div>

                {/* Flat Solid Comparison Bar (No Gradients) */}
                <div
                  className="w-full h-3.5 bg-slate-100 rounded-md overflow-hidden border border-slate-200"
                  aria-hidden="true"
                >
                  <div
                    className={`h-full rounded-sm ${
                      isMostEconomical ? 'bg-[#F2B705]' : 'bg-[#0B2C59]'
                    }`}
                    style={{ width: `${widthPercent}%` }}
                  />
                </div>

                {alt.observacao && (
                  <p className="mt-2 text-xs sm:text-sm font-medium text-[#0B2C59]">
                    {alt.observacao}
                  </p>
                )}
              </div>
            );
          })}
        </div>

        <p className="mt-5 text-xs sm:text-sm text-slate-500">
          Observação: os valores e laboratórios apresentados acima são exemplos
          ilustrativos para demonstrar a comparação financeira no protótipo.
        </p>
      </section>

      {/* Mandatory Healthcare Guidance Notice */}
      <section
        aria-label="Aviso importante sobre substituição de medicamentos"
        className="bg-[#F3F7FC] border border-[#0B2C59]/30 rounded-xl p-5 sm:p-6 flex items-start gap-4"
      >
        <div className="w-10 h-10 rounded-lg bg-[#0B2C59] text-[#F2B705] flex items-center justify-center shrink-0">
          <AlertTriangle className="w-5 h-5" aria-hidden="true" />
        </div>
        <div>
          <h2 className="font-display text-base sm:text-lg font-bold text-[#0B2C59] mb-1">
            Não substitua medicamentos por conta própria
          </h2>
          <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
            A intercambialidade ou substituição entre medicamentos de referência, genéricos
            ou similares deve ser sempre orientada por um médico ou farmacêutico,
            respeitando as normas vigentes da Anvisa e a prescrição do seu tratamento.
          </p>
        </div>
      </section>
    </div>
  );
}
