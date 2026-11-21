import { ScreenId } from '../types/medication';

interface FooterProps {
  onNavigate: (screen: ScreenId) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="bg-[#0B2C59] text-white mt-16 border-t border-[#133C73]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-8 border-b border-[#1D4E8F]">
          <div>
            <h2 className="font-display text-lg font-bold text-white mb-2">
              Economed
            </h2>
            <p className="text-sm text-slate-200 leading-relaxed max-w-sm">
              Protótipo navegável desenvolvido para o Projeto Integrador em Ciência da
              Computação, focado em acessibilidade e clareza para pacientes e idosos.
            </p>
          </div>

          <div>
            <h3 className="font-display text-sm font-semibold text-[#F2B705] mb-3">
              Acesso rápido
            </h3>
            <ul className="space-y-2 text-sm text-slate-200">
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('home')}
                  className="hover:text-[#F2B705] transition-colors cursor-pointer"
                >
                  Página inicial e busca
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('results')}
                  className="hover:text-[#F2B705] transition-colors cursor-pointer"
                >
                  Lista de medicamentos
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('prescription')}
                  className="hover:text-[#F2B705] transition-colors cursor-pointer"
                >
                  Simular consulta de receita
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-display text-sm font-semibold text-[#F2B705] mb-3">
              Aviso demonstrativo
            </h3>
            <p className="text-sm text-slate-200 leading-relaxed">
              Preços, disponibilidade no Programa Farmácia Popular e leitura de receitas
              nesta versão são meramente ilustrativos e não substituem orientação médica
              ou farmacêutica.
            </p>
          </div>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-slate-300">
          <span>Economed · MVP Demonstrativo (Projeto Integrador)</span>
          <span>Não substitui consulta profissional de saúde</span>
        </div>
      </div>
    </footer>
  );
}
