import {
  ArrowRight,
  BadgeDollarSign,
  Building2,
  FileText,
  Layers,
  Pill,
  Search,
  ShieldCheck,
} from 'lucide-react';
import { FormEvent, useState } from 'react';

interface HomeScreenProps {
  onSearch: (query: string) => void;
  onOpenCatalog: (filter?: 'todos' | 'farmacia_popular' | 'uso_continuo') => void;
  onOpenPrescription: () => void;
}

const QUICK_SUGGESTIONS = [
  'Losartana',
  'Metformina',
  'Sinvastatina',
  'Omeprazol',
  'Salbutamol',
];

export function HomeScreen({
  onSearch,
  onOpenCatalog,
  onOpenPrescription,
}: HomeScreenProps) {
  const [query, setQuery] = useState('');

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    onSearch(query.trim());
  };

  return (
    <div className="bg-white">
      {/* Hero / Search + Prescription Shortcut */}
      <section className="border-b border-slate-200 bg-[#F8FAFC]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10 sm:py-14">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* Left Column: Welcome + Main Search */}
            <div className="lg:col-span-7 flex flex-col justify-between bg-white border border-slate-200 rounded-xl p-6 sm:p-8 shadow-sm">
              <div>
                <p className="text-sm font-semibold text-[#1D4E8F] mb-2">
                  Informação simples e acessível sobre seus remédios
                </p>
                <h1
                  className="font-display text-[#0B2C59] font-bold tracking-tight leading-tight mb-4"
                  style={{ fontSize: 'clamp(1.85rem, 3.2vw, 2.75rem)', textWrap: 'balance' }}
                >
                  Consulte medicamentos, Farmácia Popular e alternativas em um só lugar
                </h1>
                <p className="text-base sm:text-lg text-slate-700 leading-relaxed mb-7 max-w-2xl">
                  Feito especialmente para quem faz uso contínuo de medicamentos, idosos e
                  famílias que desejam organizar seus gastos com saúde com mais clareza.
                </p>

                {/* Search Form */}
                <form onSubmit={handleSubmit} className="space-y-3" role="search">
                  <label
                    htmlFor="home-medication-search"
                    className="block text-sm font-semibold text-[#0B2C59]"
                  >
                    Digite o nome do medicamento ou princípio ativo
                  </label>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <div className="relative flex-1">
                      <Search
                        className="w-5 h-5 text-slate-500 absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none"
                        aria-hidden="true"
                      />
                      <input
                        id="home-medication-search"
                        type="text"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        placeholder="Ex.: Losartana, Metformina, Omeprazol..."
                        className="w-full h-14 pl-12 pr-4 text-base sm:text-lg text-[#0B2C59] bg-white border-2 border-slate-300 rounded-lg focus:border-[#0B2C59] focus:outline-none placeholder:text-slate-400"
                      />
                    </div>
                    <button
                      type="submit"
                      className="h-14 px-7 bg-[#0B2C59] hover:bg-[#133C73] text-white font-semibold text-base sm:text-lg rounded-lg transition-colors inline-flex items-center justify-center gap-2 whitespace-nowrap shrink-0 cursor-pointer"
                    >
                      <Search className="w-5 h-5" aria-hidden="true" />
                      <span>Pesquisar</span>
                    </button>
                  </div>
                </form>
              </div>

              {/* Quick Suggestions */}
              <div className="mt-6 pt-5 border-t border-slate-200">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-sm font-medium text-slate-600 mr-1">
                    Buscas rápidas:
                  </span>
                  {QUICK_SUGGESTIONS.map((item) => (
                    <button
                      key={item}
                      type="button"
                      onClick={() => onSearch(item)}
                      className="px-3.5 py-2 min-h-[40px] text-sm font-semibold text-[#0B2C59] bg-[#F3F7FC] hover:bg-[#E8EFF8] border border-slate-200 rounded-lg transition-colors cursor-pointer whitespace-nowrap"
                    >
                      {item}
                    </button>
                  ))}
                  <button
                    type="button"
                    onClick={() => onOpenCatalog('todos')}
                    className="px-3.5 py-2 min-h-[40px] text-sm font-semibold text-[#0B2C59] underline underline-offset-4 hover:text-[#1D4E8F] cursor-pointer whitespace-nowrap"
                  >
                    Ver todos
                  </button>
                </div>
              </div>
            </div>

            {/* Right Column: Prescription Shortcut Card */}
            <div className="lg:col-span-5 bg-[#0B2C59] text-white rounded-xl p-6 sm:p-8 flex flex-col justify-between shadow-sm">
              <div>
                <div className="w-12 h-12 rounded-lg bg-[#F2B705] text-[#0B2C59] flex items-center justify-center mb-6">
                  <FileText className="w-6 h-6" aria-hidden="true" />
                </div>
                <h2 className="font-display text-2xl sm:text-[26px] font-bold text-white leading-snug mb-3">
                  Está com uma receita médica em mãos?
                </h2>
                <p className="text-base text-slate-200 leading-relaxed mb-6">
                  Simule o envio de uma foto ou arquivo da sua receita para visualizar uma
                  lista demonstrativa dos medicamentos prescritos, consultar o Farmácia
                  Popular e comparar valores.
                </p>

                <ul className="space-y-3 text-sm sm:text-base text-slate-100 mb-8">
                  <li className="flex items-start gap-2.5">
                    <span
                      className="w-2 h-2 rounded-full bg-[#F2B705] mt-2 shrink-0"
                      aria-hidden="true"
                    />
                    <span>Envie uma imagem ou teste com uma receita de exemplo</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span
                      className="w-2 h-2 rounded-full bg-[#F2B705] mt-2 shrink-0"
                      aria-hidden="true"
                    />
                    <span>Acesse diretamente os detalhes de cada medicamento</span>
                  </li>
                </ul>
              </div>

              <button
                type="button"
                onClick={onOpenPrescription}
                className="w-full min-h-[52px] px-5 py-3.5 bg-[#F2B705] hover:bg-[#E0A800] text-[#0B2C59] font-bold text-base sm:text-lg rounded-lg transition-colors inline-flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Consultar receita médica</span>
                <ArrowRight className="w-5 h-5" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Features Section */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-14">
        <div className="max-w-2xl mb-8">
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#0B2C59] mb-2">
            Como o sistema ajuda no dia a dia
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            Funcionalidades pensadas para facilitar a rotina de quem precisa acompanhar
            tratamentos e controlar o orçamento.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {/* Feature 1 */}
          <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm flex flex-col justify-between">
            <div>
              <div className="w-11 h-11 rounded-lg bg-[#F3F7FC] border border-slate-200 text-[#0B2C59] flex items-center justify-center mb-4">
                <Pill className="w-5 h-5" aria-hidden="true" />
              </div>
              <h3 className="font-display text-lg font-bold text-[#0B2C59] mb-2">
                Consultar medicamentos
              </h3>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-5">
                Encontre princípio ativo, dosagem, apresentação e orientações básicas em
                linguagem clara.
              </p>
            </div>
            <button
              type="button"
              onClick={() => onOpenCatalog('todos')}
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#0B2C59] hover:text-[#1D4E8F] cursor-pointer min-h-[40px]"
            >
              <span>Ver medicamentos</span>
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </button>
          </div>

          {/* Feature 2 */}
          <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm flex flex-col justify-between">
            <div>
              <div className="w-11 h-11 rounded-lg bg-[#FEF6D8] border border-[#F2B705] text-[#0B2C59] flex items-center justify-center mb-4">
                <Building2 className="w-5 h-5" aria-hidden="true" />
              </div>
              <h3 className="font-display text-lg font-bold text-[#0B2C59] mb-2">
                Farmácia Popular
              </h3>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-5">
                Veja indicações ilustrativas de itens gratuitos ou com coparticipação no
                programa público.
              </p>
            </div>
            <button
              type="button"
              onClick={() => onOpenCatalog('farmacia_popular')}
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#0B2C59] hover:text-[#1D4E8F] cursor-pointer min-h-[40px]"
            >
              <span>Filtrar programa</span>
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </button>
          </div>

          {/* Feature 3 */}
          <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm flex flex-col justify-between">
            <div>
              <div className="w-11 h-11 rounded-lg bg-[#F3F7FC] border border-slate-200 text-[#0B2C59] flex items-center justify-center mb-4">
                <Layers className="w-5 h-5" aria-hidden="true" />
              </div>
              <h3 className="font-display text-lg font-bold text-[#0B2C59] mb-2">
                Alternativas genéricas
              </h3>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-5">
                Conheça opções genéricas e equivalentes com o mesmo princípio ativo para
                conversar com seu médico.
              </p>
            </div>
            <button
              type="button"
              onClick={() => onSearch('Losartana')}
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#0B2C59] hover:text-[#1D4E8F] cursor-pointer min-h-[40px]"
            >
              <span>Ver exemplo prático</span>
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </button>
          </div>

          {/* Feature 4 */}
          <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm flex flex-col justify-between">
            <div>
              <div className="w-11 h-11 rounded-lg bg-[#FEF6D8] border border-[#F2B705] text-[#0B2C59] flex items-center justify-center mb-4">
                <BadgeDollarSign className="w-5 h-5" aria-hidden="true" />
              </div>
              <h3 className="font-display text-lg font-bold text-[#0B2C59] mb-2">
                Comparar preços
              </h3>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-5">
                Visualize diferenças ilustrativas de preço entre referência, similar,
                genérico e rede pública.
              </p>
            </div>
            <button
              type="button"
              onClick={() => onSearch('Sinvastatina')}
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#0B2C59] hover:text-[#1D4E8F] cursor-pointer min-h-[40px]"
            >
              <span>Comparar exemplo</span>
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </button>
          </div>
        </div>

        {/* Illustrative Data Disclaimer */}
        <div className="mt-10 bg-[#F3F7FC] border border-slate-200 rounded-xl p-5 flex items-start gap-3.5">
          <ShieldCheck className="w-6 h-6 text-[#0B2C59] shrink-0 mt-0.5" aria-hidden="true" />
          <div className="text-sm sm:text-base text-slate-700 leading-relaxed">
            <strong className="text-[#0B2C59]">Aviso sobre os dados exibidos:</strong> este
            sistema é um MVP demonstrativo para fins acadêmicos. Os preços, disponibilidade
            no Programa Farmácia Popular e leitura de receitas são ilustrativos e não
            representam valores oficiais atualizados em farmácias.
          </div>
        </div>
      </section>
    </div>
  );
}
