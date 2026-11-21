import { Medication, PrescriptionSample } from '../types/medication';

export const MEDICATIONS_DATA: Medication[] = [
  {
    id: 'losartana-50',
    nome: 'Losartana Potássica',
    nomesRelacionados: ['Aradois', 'Cozaar', 'Losartana', 'Corus'],
    principioAtivo: 'Losartana potássica',
    dosagem: '50 mg',
    apresentacao: 'Caixa com 30 comprimidos revestidos',
    categoria: 'Controle da pressão arterial',
    usoContinuo: true,
    farmaciaPopularStatus: 'gratuito',
    farmaciaPopularDescricao: 'Disponível gratuitamente pelo Programa Farmácia Popular (dado ilustrativo).',
    requisitosFarmaciaPopular: 'Apresentar documento oficial com foto, CPF e receita médica dentro da validade.',
    resumo:
      'Medicamento amplamente utilizado no tratamento contínuo da hipertensão arterial (pressão alta) e na proteção renal de pacientes indicados pelo médico.',
    orientacoesGerais: [
      'Costuma ser tomado todos os dias no mesmo horário, conforme prescrição médica.',
      'Não interrompa o uso por conta própria, mesmo quando a pressão estiver controlada.',
      'Em caso de dúvidas sobre troca entre marca e genérico, consulte seu médico ou farmacêutico.'
    ],
    alternativas: [
      {
        id: 'losartana-fp',
        nomeComercial: 'Losartana Potássica (Programa Farmácia Popular)',
        laboratorio: 'Rede credenciada SUS / Farmácia Popular',
        tipo: 'Farmácia Popular',
        apresentacao: '50 mg · 30 comprimidos',
        precoIlustrativo: 0,
        destaqueEconomico: true,
        observacao: 'Retirada gratuita ilustrativa mediante receita válida'
      },
      {
        id: 'losartana-gen',
        nomeComercial: 'Losartana Potássica Genérico',
        laboratorio: 'Medley / EMS (exemplo ilustrativo)',
        tipo: 'Genérico',
        apresentacao: '50 mg · 30 comprimidos',
        precoIlustrativo: 11.9,
        destaqueEconomico: true,
        observacao: 'Alternativa genérica em farmácia comercial'
      },
      {
        id: 'losartana-sim',
        nomeComercial: 'Aradois 50 mg',
        laboratorio: 'Biolab (exemplo ilustrativo)',
        tipo: 'Similar',
        apresentacao: '50 mg · 30 comprimidos',
        precoIlustrativo: 28.5
      },
      {
        id: 'losartana-ref',
        nomeComercial: 'Cozaar 50 mg',
        laboratorio: 'Organon (exemplo ilustrativo)',
        tipo: 'Referência',
        apresentacao: '50 mg · 30 comprimidos',
        precoIlustrativo: 49.8
      }
    ]
  },
  {
    id: 'metformina-850',
    nome: 'Cloridrato de Metformina',
    nomesRelacionados: ['Glifage', 'Glifage XR', 'Dimefor', 'Metformina'],
    principioAtivo: 'Cloridrato de metformina',
    dosagem: '850 mg',
    apresentacao: 'Caixa com 30 comprimidos',
    categoria: 'Controle do diabetes tipo 2',
    usoContinuo: true,
    farmaciaPopularStatus: 'gratuito',
    farmaciaPopularDescricao: 'Disponível gratuitamente pelo Programa Farmácia Popular (dado ilustrativo).',
    requisitosFarmaciaPopular: 'Apresentar documento oficial com foto, CPF e receita médica válida.',
    resumo:
      'Utilizado no controle dos níveis de glicose (açúcar) no sangue em pessoas com diabetes mellitus tipo 2, geralmente associado a alimentação equilibrada.',
    orientacoesGerais: [
      'Normalmente recomendado durante ou logo após as refeições para reduzir desconforto estomacal.',
      'Mantenha o acompanhamento regular dos exames de glicemia com sua equipe de saúde.',
      'Não substitua apresentações de liberação prolongada (XR) sem orientação profissional.'
    ],
    alternativas: [
      {
        id: 'metformina-fp',
        nomeComercial: 'Metformina 850 mg (Farmácia Popular)',
        laboratorio: 'Rede credenciada SUS / Farmácia Popular',
        tipo: 'Farmácia Popular',
        apresentacao: '850 mg · 30 comprimidos',
        precoIlustrativo: 0,
        destaqueEconomico: true,
        observacao: 'Retirada gratuita ilustrativa para pacientes com receita'
      },
      {
        id: 'metformina-gen',
        nomeComercial: 'Cloridrato de Metformina Genérico',
        laboratorio: 'Neo Química / Prati-Donaduzzi (ilustrativo)',
        tipo: 'Genérico',
        apresentacao: '850 mg · 30 comprimidos',
        precoIlustrativo: 9.8,
        destaqueEconomico: true
      },
      {
        id: 'metformina-ref',
        nomeComercial: 'Glifage 850 mg',
        laboratorio: 'Merck (exemplo ilustrativo)',
        tipo: 'Referência',
        apresentacao: '850 mg · 30 comprimidos',
        precoIlustrativo: 24.6
      }
    ]
  },
  {
    id: 'sinvastatina-20',
    nome: 'Sinvastatina',
    nomesRelacionados: ['Zocor', 'Sinvascor', 'Sinvastatina'],
    principioAtivo: 'Sinvastatina',
    dosagem: '20 mg',
    apresentacao: 'Caixa com 30 comprimidos revestidos',
    categoria: 'Controle do colesterol',
    usoContinuo: true,
    farmaciaPopularStatus: 'coparticipacao',
    farmaciaPopularDescricao: 'Disponível com desconto por coparticipação no Farmácia Popular (dado ilustrativo).',
    requisitosFarmaciaPopular: 'Necessária receita médica atualizada, CPF e documento com foto em farmácia credenciada.',
    resumo:
      'Medicamento indicado para reduzir o colesterol LDL e triglicerídeos, ajudando a prevenir complicações cardiovasculares em tratamentos contínuos.',
    orientacoesGerais: [
      'Em geral é administrado à noite, conforme recomendação da receita médica.',
      'Informe ao médico caso sinta dores musculares incomuns durante o tratamento.',
      'Converse com o farmacêutico para confirmar a dosagem exata prescrita antes de adquirir.'
    ],
    alternativas: [
      {
        id: 'sinva-fp',
        nomeComercial: 'Sinvastatina 20 mg (Farmácia Popular - Coparticipação)',
        laboratorio: 'Rede credenciada Farmácia Popular',
        tipo: 'Farmácia Popular',
        apresentacao: '20 mg · 30 comprimidos',
        precoIlustrativo: 5.4,
        destaqueEconomico: true,
        observacao: 'Valor ilustrativo com subsídio do programa'
      },
      {
        id: 'sinva-gen',
        nomeComercial: 'Sinvastatina Genérico',
        laboratorio: 'Eurofarma / Medley (ilustrativo)',
        tipo: 'Genérico',
        apresentacao: '20 mg · 30 comprimidos',
        precoIlustrativo: 14.2
      },
      {
        id: 'sinva-sim',
        nomeComercial: 'Sinvascor 20 mg',
        laboratorio: 'Baldacci (exemplo ilustrativo)',
        tipo: 'Similar',
        apresentacao: '20 mg · 30 comprimidos',
        precoIlustrativo: 32.0
      },
      {
        id: 'sinva-ref',
        nomeComercial: 'Zocor 20 mg',
        laboratorio: 'Organon (exemplo ilustrativo)',
        tipo: 'Referência',
        apresentacao: '20 mg · 30 comprimidos',
        precoIlustrativo: 64.9
      }
    ]
  },
  {
    id: 'omeprazol-20',
    nome: 'Omeprazol',
    nomesRelacionados: ['Losec', 'Peprazol', 'Victrix', 'Omeprazol'],
    principioAtivo: 'Omeprazol',
    dosagem: '20 mg',
    apresentacao: 'Frasco ou caixa com 28 cápsulas',
    categoria: 'Proteção gástrica',
    usoContinuo: false,
    farmaciaPopularStatus: 'nao_disponivel',
    farmaciaPopularDescricao: 'Não listado no elenco gratuito do Farmácia Popular neste exemplo ilustrativo.',
    resumo:
      'Reduz a produção de ácido no estômago, sendo frequentemente indicado para gastrite, refluxo gastroesofágico e proteção gástrica.',
    orientacoesGerais: [
      'Costuma ser tomado em jejum, cerca de 30 minutos antes do café da manhã.',
      'Evite o uso prolongado sem reavaliação médica periódica.',
      'Verifique na embalagem a quantidade de cápsulas ao comparar preços.'
    ],
    alternativas: [
      {
        id: 'ome-gen',
        nomeComercial: 'Omeprazol 20 mg Genérico',
        laboratorio: 'Teuto / Germed (exemplo ilustrativo)',
        tipo: 'Genérico',
        apresentacao: '20 mg · 28 cápsulas',
        precoIlustrativo: 12.9,
        destaqueEconomico: true,
        observacao: 'Opção comercial mais econômica nesta simulação'
      },
      {
        id: 'ome-sim',
        nomeComercial: 'Peprazol 20 mg',
        laboratorio: 'Libbs (exemplo ilustrativo)',
        tipo: 'Similar',
        apresentacao: '20 mg · 28 cápsulas',
        precoIlustrativo: 38.4
      },
      {
        id: 'ome-ref',
        nomeComercial: 'Losec Mups 20 mg',
        laboratorio: 'AstraZeneca (exemplo ilustrativo)',
        tipo: 'Referência',
        apresentacao: '20 mg · 28 comprimidos',
        precoIlustrativo: 76.5
      }
    ]
  },
  {
    id: 'atenolol-25',
    nome: 'Atenolol',
    nomesRelacionados: ['Atenol', 'Ablook', 'Atenolol'],
    principioAtivo: 'Atenolol',
    dosagem: '25 mg',
    apresentacao: 'Caixa com 30 comprimidos',
    categoria: 'Controle da pressão e coração',
    usoContinuo: true,
    farmaciaPopularStatus: 'gratuito',
    farmaciaPopularDescricao: 'Disponível gratuitamente pelo Programa Farmácia Popular (dado ilustrativo).',
    requisitosFarmaciaPopular: 'Apresentar documento oficial com foto, CPF e receita médica válida.',
    resumo:
      'Betabloqueador utilizado no controle da hipertensão arterial, arritmias e proteção cardíaca em tratamentos acompanhados pelo cardiologista.',
    orientacoesGerais: [
      'Nunca suspenda o medicamento de forma repentina sem conversar com seu médico.',
      'Meça sua pressão regularmente e anote os valores para levar às consultas.',
      'Confirme sempre se a dosagem prescrita é 25 mg, 50 mg ou 100 mg.'
    ],
    alternativas: [
      {
        id: 'ate-fp',
        nomeComercial: 'Atenolol 25 mg (Farmácia Popular)',
        laboratorio: 'Rede credenciada SUS / Farmácia Popular',
        tipo: 'Farmácia Popular',
        apresentacao: '25 mg · 30 comprimidos',
        precoIlustrativo: 0,
        destaqueEconomico: true,
        observacao: 'Gratuito mediante receita na rede credenciada (ilustrativo)'
      },
      {
        id: 'ate-gen',
        nomeComercial: 'Atenolol 25 mg Genérico',
        laboratorio: 'EMS / Medley (exemplo ilustrativo)',
        tipo: 'Genérico',
        apresentacao: '25 mg · 30 comprimidos',
        precoIlustrativo: 8.7
      },
      {
        id: 'ate-ref',
        nomeComercial: 'Atenol 25 mg',
        laboratorio: 'AstraZeneca (exemplo ilustrativo)',
        tipo: 'Referência',
        apresentacao: '25 mg · 30 comprimidos',
        precoIlustrativo: 29.4
      }
    ]
  },
  {
    id: 'hidroclorotiazida-25',
    nome: 'Hidroclorotiazida',
    nomesRelacionados: ['Clorana', 'Hidroclorotiazida'],
    principioAtivo: 'Hidroclorotiazida',
    dosagem: '25 mg',
    apresentacao: 'Caixa com 30 comprimidos',
    categoria: 'Diurético / Pressão arterial',
    usoContinuo: true,
    farmaciaPopularStatus: 'gratuito',
    farmaciaPopularDescricao: 'Disponível gratuitamente pelo Programa Farmácia Popular (dado ilustrativo).',
    requisitosFarmaciaPopular: 'Apresentar documento com foto, CPF e receita médica válida.',
    resumo:
      'Diurético suave frequentemente prescrito para auxiliar no controle da pressão alta e redução de retenção de líquidos.',
    orientacoesGerais: [
      'Costuma ser ingerido pela manhã para evitar idas frequentes ao banheiro durante a noite.',
      'Mantenha hidratação adequada ao longo do dia conforme orientação médica.',
      'Consulte seu médico antes de qualquer alteração de dosagem.'
    ],
    alternativas: [
      {
        id: 'hidro-fp',
        nomeComercial: 'Hidroclorotiazida 25 mg (Farmácia Popular)',
        laboratorio: 'Rede credenciada SUS / Farmácia Popular',
        tipo: 'Farmácia Popular',
        apresentacao: '25 mg · 30 comprimidos',
        precoIlustrativo: 0,
        destaqueEconomico: true
      },
      {
        id: 'hidro-gen',
        nomeComercial: 'Hidroclorotiazida 25 mg Genérico',
        laboratorio: 'Sanofi / EMS (exemplo ilustrativo)',
        tipo: 'Genérico',
        apresentacao: '25 mg · 30 comprimidos',
        precoIlustrativo: 6.5
      },
      {
        id: 'hidro-ref',
        nomeComercial: 'Clorana 25 mg',
        laboratorio: 'Sanofi (exemplo ilustrativo)',
        tipo: 'Referência',
        apresentacao: '25 mg · 30 comprimidos',
        precoIlustrativo: 16.9
      }
    ]
  },
  {
    id: 'salbutamol-100',
    nome: 'Sulfato de Salbutamol',
    nomesRelacionados: ['Aerolin', 'Salbutamol', 'Bombinha para asma'],
    principioAtivo: 'Sulfato de salbutamol',
    dosagem: '100 mcg/dose',
    apresentacao: 'Aerossol oral (frasco com 200 doses)',
    categoria: 'Tratamento respiratório / Asma',
    usoContinuo: true,
    farmaciaPopularStatus: 'gratuito',
    farmaciaPopularDescricao: 'Disponível gratuitamente pelo Programa Farmácia Popular (dado ilustrativo).',
    requisitosFarmaciaPopular: 'Receita médica válida, documento com foto e CPF.',
    resumo:
      'Broncodilatador inalatório indicado para alívio de falta de ar e prevenção de crises em pessoas com asma ou doença pulmonar obstrutiva.',
    orientacoesGerais: [
      'Agite o frasco antes de usar e siga a técnica de inalação ensinada pelo médico.',
      'Se precisar usar com muita frequência, procure atendimento médico para reavaliação.',
      'Verifique sempre o prazo de validade do dispositivo inalatório.'
    ],
    alternativas: [
      {
        id: 'salb-fp',
        nomeComercial: 'Sulfato de Salbutamol 100 mcg (Farmácia Popular)',
        laboratorio: 'Rede credenciada SUS / Farmácia Popular',
        tipo: 'Farmácia Popular',
        apresentacao: 'Spray 200 doses',
        precoIlustrativo: 0,
        destaqueEconomico: true,
        observacao: 'Gratuito no programa para asma (ilustrativo)'
      },
      {
        id: 'salb-gen',
        nomeComercial: 'Sulfato de Salbutamol Genérico',
        laboratorio: 'Glenmark (exemplo ilustrativo)',
        tipo: 'Genérico',
        apresentacao: 'Spray 200 doses',
        precoIlustrativo: 21.5
      },
      {
        id: 'salb-ref',
        nomeComercial: 'Aerolin Spray 100 mcg',
        laboratorio: 'GSK (exemplo ilustrativo)',
        tipo: 'Referência',
        apresentacao: 'Spray 200 doses',
        precoIlustrativo: 39.9
      }
    ]
  },
  {
    id: 'dipirona-500',
    nome: 'Dipirona Monoidratada',
    nomesRelacionados: ['Novalgina', 'Anador', 'Dipirona'],
    principioAtivo: 'Dipirona monoidratada',
    dosagem: '500 mg',
    apresentacao: 'Caixa com 10 ou 20 comprimidos',
    categoria: 'Analgésico e antitérmico',
    usoContinuo: false,
    farmaciaPopularStatus: 'nao_disponivel',
    farmaciaPopularDescricao: 'Não integra o elenco gratuito do Farmácia Popular neste exemplo ilustrativo.',
    resumo:
      'Utilizado para alívio de dores leves a moderadas e redução de febre por curtos períodos.',
    orientacoesGerais: [
      'Evite a automedicação prolongada caso a dor ou febre persista por mais de 3 dias.',
      'Informe ao farmacêutico caso tenha histórico de alergia a analgésicos.',
      'Mantenha fora do alcance de crianças.'
    ],
    alternativas: [
      {
        id: 'dip-gen',
        nomeComercial: 'Dipirona Monoidratada 500 mg Genérico',
        laboratorio: 'Medley / Cimed (exemplo ilustrativo)',
        tipo: 'Genérico',
        apresentacao: '500 mg · 20 comprimidos',
        precoIlustrativo: 7.9,
        destaqueEconomico: true
      },
      {
        id: 'dip-sim',
        nomeComercial: 'Anador 500 mg',
        laboratorio: 'Boehringer (exemplo ilustrativo)',
        tipo: 'Similar',
        apresentacao: '500 mg · 20 comprimidos',
        precoIlustrativo: 16.4
      },
      {
        id: 'dip-ref',
        nomeComercial: 'Novalgina 500 mg',
        laboratorio: 'Sanofi (exemplo ilustrativo)',
        tipo: 'Referência',
        apresentacao: '500 mg · 20 comprimidos',
        precoIlustrativo: 27.8
      }
    ]
  }
];

export const SAMPLE_PRESCRIPTIONS: PrescriptionSample[] = [
  {
    id: 'uso-continuo',
    titulo: 'Receita de Exemplo 1 — Uso Contínuo (Hipertensão e Diabetes)',
    descricao: 'Simula uma prescrição comum de acompanhamento ambulatorial com três medicamentos de uso diário.',
    nomeArquivo: 'receita_uso_continuo_exemplo.jpg',
    itens: [
      {
        medicationId: 'losartana-50',
        textoNaReceita: 'Losartana Potássica 50 mg (uso contínuo)',
        posologiaIlustrativa: '1 comprimido pela manhã, conforme receita ilustrativa'
      },
      {
        medicationId: 'metformina-850',
        textoNaReceita: 'Cloridrato de Metformina 850 mg',
        posologiaIlustrativa: '1 comprimido após o almoço e 1 após o jantar'
      },
      {
        medicationId: 'sinvastatina-20',
        textoNaReceita: 'Sinvastatina 20 mg',
        posologiaIlustrativa: '1 comprimido à noite antes de dormir'
      }
    ]
  },
  {
    id: 'respiratorio-gastrico',
    titulo: 'Receita de Exemplo 2 — Tratamento Respiratório e Proteção Gástrica',
    descricao: 'Simula uma prescrição mista com medicamento de farmácia popular e itens comerciais.',
    nomeArquivo: 'receita_ambulatorio_exemplo.pdf',
    itens: [
      {
        medicationId: 'salbutamol-100',
        textoNaReceita: 'Sulfato de Salbutamol 100 mcg/dose spray',
        posologiaIlustrativa: 'Conforme orientação médica em caso de desconforto respiratório'
      },
      {
        medicationId: 'omeprazol-20',
        textoNaReceita: 'Omeprazol 20 mg cápsulas',
        posologiaIlustrativa: '1 cápsula em jejum pela manhã'
      },
      {
        medicationId: 'dipirona-500',
        textoNaReceita: 'Dipirona 500 mg comprimidos',
        posologiaIlustrativa: 'Se dor ou febre, conforme orientação médica'
      }
    ]
  }
];
