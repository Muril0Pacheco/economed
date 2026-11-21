import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  FileText,
  Info,
  RotateCcw,
  Upload,
} from 'lucide-react';
import { ChangeEvent, DragEvent, useRef, useState } from 'react';
import { SAMPLE_PRESCRIPTIONS } from '../data/medications';
import { Medication, PrescriptionSample } from '../types/medication';
import { FarmaciaPopularTag } from './FarmaciaPopularTag';

interface PrescriptionScreenProps {
  medications: Medication[];
  selectedSampleId: string;
  uploadedFileName: string | null;
  hasProcessed: boolean;
  onSelectSample: (sampleId: string) => void;
  onFileSelected: (fileName: string | null) => void;
  onProcessedChange: (processed: boolean) => void;
  onSelectMedication: (medicationId: string) => void;
  onBackHome: () => void;
}

function formatPriceBRL(value: number): string {
  if (value === 0) return 'Gratuito (ilustrativo)';
  return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}

export function PrescriptionScreen({
  medications,
  selectedSampleId,
  uploadedFileName,
  hasProcessed,
  onSelectSample,
  onFileSelected,
  onProcessedChange,
  onSelectMedication,
  onBackHome,
}: PrescriptionScreenProps) {
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);

  const activeSample: PrescriptionSample =
    SAMPLE_PRESCRIPTIONS.find((s) => s.id === selectedSampleId) ?? SAMPLE_PRESCRIPTIONS[0];

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      onFileSelected(file.name);
      onProcessedChange(false);
    }
  };

  const handleDrop = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setIsDragging(false);
    const file = event.dataTransfer.files?.[0];
    if (file) {
      onFileSelected(file.name);
      onProcessedChange(false);
    }
  };

  const handleChooseSample = (sample: PrescriptionSample) => {
    onSelectSample(sample.id);
    onFileSelected(sample.nomeArquivo);
    onProcessedChange(false);
  };

  const handleSubmitPrescription = () => {
    if (!uploadedFileName) {
      onFileSelected(activeSample.nomeArquivo);
    }
    setIsProcessing(true);
    onProcessedChange(false);

    window.setTimeout(() => {
      setIsProcessing(false);
      onProcessedChange(true);
    }, 1200);
  };

  const handleReset = () => {
    onFileSelected(null);
    onProcessedChange(false);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

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

      {/* Page Title & Explanation */}
      <div className="max-w-3xl mb-8">
        <p className="text-sm font-semibold text-[#1D4E8F] mb-1">
          Funcionalidade demonstrativa
        </p>
        <h1 className="font-display text-2xl sm:text-4xl font-bold text-[#0B2C59] mb-3">
          Consulta de receita médica
        </h1>
        <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
          Envie uma foto ou arquivo de receita médica para simular como o sistema
          identificaria os medicamentos prescritos e facilitaria a consulta de preços e
          disponibilidade no Farmácia Popular.
        </p>
      </div>

      {/* How it works: 3 simple steps */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <div className="bg-[#F8FAFC] border border-slate-200 rounded-xl p-5">
          <span className="font-mono text-sm font-bold text-[#0B2C59] block mb-1">
            01. Envio do arquivo
          </span>
          <p className="text-sm sm:text-base text-slate-700">
            Selecione uma foto da receita do celular/computador ou escolha um exemplo
            abaixo.
          </p>
        </div>
        <div className="bg-[#F8FAFC] border border-slate-200 rounded-xl p-5">
          <span className="font-mono text-sm font-bold text-[#0B2C59] block mb-1">
            02. Leitura simulada
          </span>
          <p className="text-sm sm:text-base text-slate-700">
            Na versão completa, o sistema reconheceria os nomes e dosagens presentes no
            documento.
          </p>
        </div>
        <div className="bg-[#F8FAFC] border border-slate-200 rounded-xl p-5">
          <span className="font-mono text-sm font-bold text-[#0B2C59] block mb-1">
            03. Consulta rápida
          </span>
          <p className="text-sm sm:text-base text-slate-700">
            Clique em qualquer item identificado para ver detalhes, Farmácia Popular e
            alternativas.
          </p>
        </div>
      </div>

      {/* Main Upload + Processing + Results Area */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left: Upload Zone & Sample Selector */}
        <section className="lg:col-span-5 bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
          <h2 className="font-display text-xl font-bold text-[#0B2C59] mb-4">
            Selecionar receita
          </h2>

          {/* Drag & Drop Box */}
          <div
            onDragOver={(e) => {
              e.preventDefault();
              setIsDragging(true);
            }}
            onDragLeave={() => setIsDragging(false)}
            onDrop={handleDrop}
            onClick={() => fileInputRef.current?.click()}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                fileInputRef.current?.click();
              }
            }}
            className={`border-2 border-dashed rounded-xl p-6 text-center cursor-pointer transition-colors mb-5 ${
              isDragging
                ? 'border-[#0B2C59] bg-[#E8EFF8]'
                : 'border-slate-300 bg-[#F8FAFC] hover:border-[#0B2C59]'
            }`}
          >
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*,.pdf"
              onChange={handleFileChange}
              className="hidden"
              aria-label="Selecionar imagem ou arquivo PDF de receita médica"
            />
            <div className="w-12 h-12 rounded-lg bg-[#0B2C59] text-[#F2B705] flex items-center justify-center mx-auto mb-3">
              <Upload className="w-6 h-6" aria-hidden="true" />
            </div>
            <p className="font-display text-base font-bold text-[#0B2C59] mb-1">
              Clique para escolher ou arraste a receita aqui
            </p>
            <p className="text-sm text-slate-600">
              Aceita imagens (JPG, PNG) ou PDF para demonstração
            </p>
          </div>

          {/* Selected File Feedback */}
          {uploadedFileName && (
            <div className="mb-5 p-3.5 bg-[#FEF6D8] border border-[#F2B705] rounded-lg flex items-center justify-between gap-3">
              <div className="flex items-center gap-2.5 min-w-0">
                <FileText className="w-5 h-5 text-[#0B2C59] shrink-0" aria-hidden="true" />
                <div className="min-w-0">
                  <span className="block text-xs font-semibold text-[#0B2C59]">
                    Arquivo selecionado para simulação:
                  </span>
                  <span className="block text-sm font-bold text-[#0B2C59] truncate">
                    {uploadedFileName}
                  </span>
                </div>
              </div>
              <button
                type="button"
                onClick={handleReset}
                className="text-xs font-semibold text-[#0B2C59] underline shrink-0 cursor-pointer"
              >
                Remover
              </button>
            </div>
          )}

          {/* Quick Sample Prescriptions for Live Testing */}
          <div className="mb-6">
            <p className="text-sm font-semibold text-[#0B2C59] mb-2.5">
              Ou teste rapidamente com uma receita de exemplo:
            </p>
            <div className="space-y-2.5">
              {SAMPLE_PRESCRIPTIONS.map((sample) => {
                const isSelected =
                  selectedSampleId === sample.id && uploadedFileName === sample.nomeArquivo;

                return (
                  <button
                    key={sample.id}
                    type="button"
                    onClick={() => handleChooseSample(sample)}
                    className={`w-full text-left p-3.5 rounded-lg border transition-colors cursor-pointer ${
                      isSelected
                        ? 'bg-[#F3F7FC] border-[#0B2C59]'
                        : 'bg-white border-slate-200 hover:bg-slate-50'
                    }`}
                  >
                    <span className="block text-sm font-bold text-[#0B2C59]">
                      {sample.titulo}
                    </span>
                    <span className="block text-xs text-slate-600 mt-1">
                      {sample.descricao}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Primary Submit Action */}
          <button
            type="button"
            onClick={handleSubmitPrescription}
            disabled={isProcessing}
            className="w-full min-h-[52px] px-5 py-3 bg-[#0B2C59] hover:bg-[#133C73] disabled:opacity-60 text-white font-bold text-base rounded-lg transition-colors inline-flex items-center justify-center gap-2 cursor-pointer"
          >
            <FileText className="w-5 h-5" aria-hidden="true" />
            <span>{isProcessing ? 'Processando receita...' : 'Enviar receita'}</span>
          </button>

          {!uploadedFileName && !hasProcessed && (
            <p className="mt-2.5 text-xs text-slate-500 text-center">
              Se nenhum arquivo for enviado, o botão utilizará automaticamente a receita de
              exemplo selecionada.
            </p>
          )}
        </section>

        {/* Right: Processing Simulation & Identified Medications List */}
        <section className="lg:col-span-7">
          {isProcessing ? (
            <div className="bg-white border border-slate-200 rounded-xl p-8 sm:p-10 shadow-sm">
              <h2 className="font-display text-xl font-bold text-[#0B2C59] mb-2">
                Analisando receita médica (Simulação)
              </h2>
              <p className="text-base text-slate-600 mb-6">
                Identificando os medicamentos, dosagens e verificando correspondências na
                base demonstrativa...
              </p>
              <div className="w-full h-3.5 bg-[#E8EFF8] rounded-md overflow-hidden border border-slate-200">
                <div className="h-full bg-[#0B2C59] w-2/3 animate-pulse rounded-sm" />
              </div>
            </div>
          ) : hasProcessed ? (
            <div className="bg-white border border-slate-200 rounded-xl p-6 sm:p-8 shadow-sm">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 border-b border-slate-200 mb-6">
                <div>
                  <div className="inline-flex items-center gap-2 text-sm font-bold text-[#0B2C59] mb-1">
                    <CheckCircle2 className="w-5 h-5 text-[#F2B705]" aria-hidden="true" />
                    <span>Leitura simulada concluída</span>
                  </div>
                  <h2 className="font-display text-xl sm:text-2xl font-bold text-[#0B2C59]">
                    Medicamentos identificados na receita
                  </h2>
                </div>

                <button
                  type="button"
                  onClick={handleReset}
                  className="inline-flex items-center gap-1.5 px-4 py-2 min-h-[42px] text-sm font-semibold text-[#0B2C59] bg-[#F3F7FC] hover:bg-[#E8EFF8] border border-slate-200 rounded-lg cursor-pointer self-start sm:self-auto whitespace-nowrap"
                >
                  <RotateCcw className="w-4 h-4" aria-hidden="true" />
                  <span>Nova consulta</span>
                </button>
              </div>

              {/* Clear Demo Notice */}
              <div className="mb-6 p-4 bg-[#FEF6D8] border border-[#F2B705] rounded-lg flex items-start gap-3">
                <Info className="w-5 h-5 text-[#0B2C59] shrink-0 mt-0.5" aria-hidden="true" />
                <p className="text-sm text-[#0B2C59] leading-relaxed">
                  <strong>Resultado ilustrativo:</strong> esta lista simula como a receita{' '}
                  <strong>{uploadedFileName || activeSample.nomeArquivo}</strong> seria
                  interpretada pelo sistema, sem OCR real nesta etapa do MVP.
                </p>
              </div>

              {/* Identified Medication Items */}
              <div className="space-y-4">
                {activeSample.itens.map((item, idx) => {
                  const med = medications.find((m) => m.id === item.medicationId);
                  if (!med) return null;

                  const lowestPrice = Math.min(
                    ...med.alternativas.map((alt) => alt.precoIlustrativo)
                  );

                  return (
                    <div
                      key={med.id}
                      className="border border-slate-200 rounded-xl p-5 bg-[#F8FAFC] flex flex-col gap-4"
                    >
                      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
                        <div>
                          <span className="font-mono text-xs font-semibold text-slate-500">
                            Item 0{idx + 1} identificado na receita
                          </span>
                          <h3 className="font-display text-lg sm:text-xl font-bold text-[#0B2C59] mt-0.5">
                            {item.textoNaReceita}
                          </h3>
                          <p className="text-sm text-slate-600 mt-1">
                            Princípio ativo: {med.principioAtivo} · {item.posologiaIlustrativa}
                          </p>
                        </div>

                        <div className="sm:text-right shrink-0">
                          <span className="block text-xs text-slate-500">
                            Menor valor ilustrativo
                          </span>
                          <span className="font-mono text-base sm:text-lg font-bold text-[#0B2C59] tabular-nums">
                            {formatPriceBRL(lowestPrice)}
                          </span>
                        </div>
                      </div>

                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-3 border-t border-slate-200">
                        <FarmaciaPopularTag status={med.farmaciaPopularStatus} compact />

                        <button
                          type="button"
                          onClick={() => onSelectMedication(med.id)}
                          className="min-h-[44px] px-4 py-2 bg-[#0B2C59] hover:bg-[#133C73] text-white font-semibold text-sm rounded-lg transition-colors inline-flex items-center justify-center gap-2 whitespace-nowrap cursor-pointer"
                        >
                          <span>Ver detalhes</span>
                          <ArrowRight className="w-4 h-4" aria-hidden="true" />
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ) : (
            <div className="bg-[#F8FAFC] border border-slate-200 rounded-xl p-8 sm:p-10 text-center">
              <div className="w-14 h-14 rounded-xl bg-white border border-slate-200 text-[#0B2C59] flex items-center justify-center mx-auto mb-4">
                <FileText className="w-7 h-7" aria-hidden="true" />
              </div>
              <h2 className="font-display text-xl font-bold text-[#0B2C59] mb-2">
                Aguardando envio da receita
              </h2>
              <p className="text-base text-slate-600 max-w-md mx-auto leading-relaxed">
                Selecione uma imagem ou clique em uma das receitas de exemplo ao lado e
                depois pressione <strong>“Enviar receita”</strong> para visualizar os
                medicamentos identificados.
              </p>
            </div>
          )}
        </section>
      </div>
    </div>
  );
}
