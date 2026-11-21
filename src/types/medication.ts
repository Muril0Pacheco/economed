export type ScreenId = 'home' | 'results' | 'details' | 'prescription';

export type FarmaciaPopularStatus = 'gratuito' | 'coparticipacao' | 'nao_disponivel';

export type AlternativeType = 'Referência' | 'Genérico' | 'Similar' | 'Farmácia Popular';

export interface MedicationAlternative {
  id: string;
  nomeComercial: string;
  laboratorio: string;
  tipo: AlternativeType;
  apresentacao: string;
  precoIlustrativo: number;
  destaqueEconomico?: boolean;
  observacao?: string;
}

export interface Medication {
  id: string;
  nome: string;
  nomesRelacionados: string[];
  principioAtivo: string;
  dosagem: string;
  apresentacao: string;
  categoria: string;
  usoContinuo: boolean;
  farmaciaPopularStatus: FarmaciaPopularStatus;
  farmaciaPopularDescricao: string;
  requisitosFarmaciaPopular?: string;
  resumo: string;
  orientacoesGerais: string[];
  alternativas: MedicationAlternative[];
}

export interface PrescriptionSampleItem {
  medicationId: string;
  textoNaReceita: string;
  posologiaIlustrativa: string;
}

export interface PrescriptionSample {
  id: string;
  titulo: string;
  descricao: string;
  nomeArquivo: string;
  itens: PrescriptionSampleItem[];
}
