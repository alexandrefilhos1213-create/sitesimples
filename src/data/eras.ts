export interface Era {
  id: number;
  title: string;
  yearRange: string;
  shortDescription: string;
  visualType: string;
  details: string[];
}

export const eras: Era[] = [
  {
    id: 1,
    title: "A Era Mecânica",
    yearRange: "Anos 1600 — 1930",
    shortDescription: "O cálculo era físico.",
    visualType: "primitive",
    details: [
      "Antes dos elétrons, existiam engrenagens.",
      "Matemáticos e engenheiros construíam máquinas complexas usando alavancas, dentes e vapor.",
      "A Máquina Analítica, embora nunca totalmente construída, prometeu um futuro de lógica programável."
    ]
  },
  {
    id: 2,
    title: "A Era das Válvulas",
    yearRange: "Anos 1930 — 1950",
    shortDescription: "A eletricidade encontra a lógica.",
    visualType: "electromechanical",
    details: [
      "O clique dos relés substituiu o moer das engrenagens.",
      "Máquinas massivas como o ENIAC consumiam blocos inteiros de energia da cidade.",
      "Programar significava reconfigurar fisicamente a fiação da máquina."
    ]
  },
  {
    id: 3,
    title: "A Era dos Mainframes",
    yearRange: "Anos 1950 — 1970",
    shortDescription: "Computação para instituições.",
    visualType: "mainframe",
    details: [
      "Os transistores encolheram os gigantes.",
      "O IBM System/360 padronizou a computação para negócios e ciência.",
      "Os dados eram armazenados em fitas magnéticas giratórias e cartões perfurados."
    ]
  },
  {
    id: 4,
    title: "A Revolução do PC",
    yearRange: "Anos 1970 — 1990",
    shortDescription: "Poder para as pessoas.",
    visualType: "personal",
    details: [
      "O microprocessador colocou um cérebro em cada mesa.",
      "Apple e Microsoft definiram a interface do usuário.",
      "O mouse e o teclado tornaram-se nossas principais ferramentas de criação."
    ]
  },
  {
    id: 5,
    title: "A Era Moderna",
    yearRange: "Anos 2000 — Presente",
    shortDescription: "Conectividade onipresente.",
    visualType: "modern",
    details: [
      "O computador desapareceu em nossos bolsos.",
      "A Nuvem conectou tudo, em todos os lugares, o tempo todo.",
      "A Inteligência Artificial agora começa a interpretar nossa intenção."
    ]
  }
];
