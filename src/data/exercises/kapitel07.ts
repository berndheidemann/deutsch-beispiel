// Kapitel 7: Erörterung & Materialgestütztes Schreiben — Übungsdaten

// === ArgumentBuilder: Dialektische Erörterung ===

export type BausteinTyp =
  | 'these'
  | 'argument'
  | 'beleg'
  | 'beispiel'
  | 'gegenargument'
  | 'entkraeftung'
  | 'fazit';

export interface Baustein {
  id: string;
  typ: BausteinTyp;
  text: string;
}

export const argumentBuilderEroerterung: {
  bausteine: Baustein[];
  correctOrder: string[];
} = {
  bausteine: [
    {
      id: 'fazit',
      typ: 'fazit',
      text: 'Insgesamt überwiegen die Vorteile eines einheitlichen Abiturs, da Chancengleichheit Vorrang haben sollte.',
    },
    {
      id: 'argument',
      typ: 'argument',
      text: 'Ein einheitliches Abitur würde für mehr Bildungsgerechtigkeit sorgen.',
    },
    {
      id: 'entkraeftung',
      typ: 'entkraeftung',
      text: 'Dieser Einwand lässt sich entkräften, da ein einheitliches Kernabitur regionale Ergänzungen nicht ausschließt.',
    },
    {
      id: 'these',
      typ: 'these',
      text: 'Das Abitur sollte bundesweit einheitlich gestaltet werden.',
    },
    {
      id: 'gegenargument',
      typ: 'gegenargument',
      text: 'Kritiker betonen, dass der Bildungsföderalismus regionale Besonderheiten berücksichtigt.',
    },
    {
      id: 'beleg',
      typ: 'beleg',
      text: 'Studien zeigen, dass die Abiturnoten je nach Bundesland um bis zu 0,5 Punkte variieren.',
    },
  ],
  correctOrder: [
    'these',
    'argument',
    'beleg',
    'gegenargument',
    'entkraeftung',
    'fazit',
  ],
};

// === Formulierungshilfen für den Essay (SchreibAssistent) ===

export interface FormulierungKategorie {
  id: string;
  label: string;
  formulierungen: string[];
}

export const essaySchreibhilfen: FormulierungKategorie[] = [
  {
    id: 'essay-einstieg',
    label: 'Essay-Einstieg',
    formulierungen: [
      'Wer heute über ... nachdenkt, kommt nicht umhin, ...',
      'Es gibt Fragen, die sich nicht mit einem einfachen Ja oder Nein beantworten lassen. Eine davon ist ...',
      'Auf den ersten Blick scheint die Sache klar — doch bei genauerem Hinsehen ...',
      'Man könnte meinen, dass ... Doch ein Blick hinter die Fassade zeigt ...',
    ],
  },
  {
    id: 'essay-these',
    label: 'These formulieren',
    formulierungen: [
      'Meine These lautet daher: ...',
      'Ich vertrete die Auffassung, dass ...',
      'Es lässt sich argumentieren, dass ...',
      'Vor diesem Hintergrund erscheint es plausibel, dass ...',
    ],
  },
  {
    id: 'essay-ueberleitung',
    label: 'Gedankenüberleitung',
    formulierungen: [
      'Dieser Gedanke führt unweigerlich zu der Frage, ob ...',
      'Doch damit ist nur eine Seite der Medaille beleuchtet. Denn ...',
      'Betrachtet man das Problem aus einer anderen Perspektive, so ...',
      'An dieser Stelle lohnt es sich, einen Schritt zurückzutreten und ...',
    ],
  },
  {
    id: 'essay-schluss',
    label: 'Essay-Schluss',
    formulierungen: [
      'Letztlich bleibt die Erkenntnis, dass ...',
      'Was bleibt, ist die Einsicht, dass einfache Antworten der Komplexität des Themas nicht gerecht werden.',
      'Vielleicht liegt die Antwort nicht in einem Entweder-oder, sondern in einem differenzierten Sowohl-als-auch.',
      'Am Ende zeigt sich: Die Frage nach ... ist weniger eine Frage der Fakten als eine Frage der Haltung.',
    ],
  },
];

// === Multiple-Choice: Erörterung & Essay ===

export interface MCOption {
  id: string;
  text: string;
  correct: boolean;
  explanation: string;
}

export interface MCQuestion {
  question: string;
  options: MCOption[];
}

export const materialSchreibhilfen: FormulierungKategorie[] = [
  {
    id: 'material-einleitung',
    label: 'Einleitung',
    formulierungen: [
      'Das Thema ... ist in der öffentlichen Diskussion von hoher Aktualität, wie die vorliegenden Materialien zeigen.',
      'Die Frage, ob/inwiefern ..., wird in den Materialien aus unterschiedlichen Perspektiven beleuchtet.',
      'Im Folgenden soll auf der Grundlage der vorliegenden Materialien erörtert/dargestellt werden, ...',
    ],
  },
  {
    id: 'material-bezug',
    label: 'Materialbezug herstellen',
    formulierungen: [
      'Wie Autor X in Material Y betont, ...',
      'Material Z belegt dies mit der Feststellung, dass ...',
      'Diese These wird durch die Daten in Material Y gestützt, die zeigen, dass ...',
      'Dem widerspricht die Position von X (Material Y), der/die argumentiert, dass ...',
      'Ergänzend lässt sich Material Z heranziehen, in dem darauf hingewiesen wird, dass ...',
    ],
  },
  {
    id: 'material-verknuepfung',
    label: 'Materialien verknüpfen',
    formulierungen: [
      'Während Material X die Position vertritt, dass ..., zeigt Material Y eine gegensätzliche Perspektive: ...',
      'Die Statistik in Material X unterstreicht die in Material Y formulierte These, wonach ...',
      'Die Materialien X und Y ergänzen einander insofern, als ...',
      'Im Gegensatz zu Material X, das ..., betont Material Y ...',
    ],
  },
  {
    id: 'material-schluss',
    label: 'Schluss / eigene Position',
    formulierungen: [
      'Zusammenfassend lässt sich auf Grundlage der Materialien festhalten, dass ...',
      'Die Analyse der Materialien zeigt, dass die Frage nach ... nicht eindeutig zu beantworten ist. Dennoch überwiegen die Argumente für/gegen ...',
      'Abschließend lässt sich sagen, dass die vorliegenden Materialien die Notwendigkeit/Bedeutung von ... deutlich machen.',
    ],
  },
];

export const eroerterungMC: MCQuestion[] = [
  {
    question:
      'Was ist der wesentliche Unterschied zwischen einer linearen und einer dialektischen Erörterung?',
    options: [
      {
        id: 'a',
        text: 'Die lineare Erörterung ist kürzer als die dialektische.',
        correct: false,
        explanation:
          'Die Länge ist kein Unterscheidungskriterium. Beide Formen können gleich umfangreich sein — der Unterschied liegt im Aufbau und in der Argumentationsstruktur.',
      },
      {
        id: 'b',
        text: 'Die lineare Erörterung vertritt eine Position mit steigernden Argumenten; die dialektische Erörterung stellt Pro- und Contra-Argumente gegenüber und wägt ab.',
        correct: true,
        explanation:
          'Richtig! Die lineare (steigernde) Erörterung ordnet Argumente nach Gewicht und vertritt eine klare Position. Die dialektische Erörterung beleuchtet beide Seiten einer Fragestellung und kommt in der Synthese/im Fazit zu einer abgewogenen Position.',
      },
      {
        id: 'c',
        text: 'Die dialektische Erörterung verwendet nur Faktenargumente, die lineare nur normative Argumente.',
        correct: false,
        explanation:
          'Beide Erörterungsformen können alle Argumentationstypen (Fakten-, Autoritäts-, normative und Analogie-Argumente) verwenden. Der Unterschied liegt in der Struktur, nicht in der Art der Argumente.',
      },
      {
        id: 'd',
        text: 'Die lineare Erörterung beginnt mit dem stärksten Argument, die dialektische mit dem schwächsten.',
        correct: false,
        explanation:
          'Die lineare Erörterung ordnet Argumente typischerweise vom schwächsten zum stärksten (Steigerungsprinzip). Die dialektische Erörterung hat einen anderen Aufbau: Pro — Contra — Synthese.',
      },
    ],
  },
  {
    question:
      'Was unterscheidet einen Essay grundlegend von einer Sachtextanalyse?',
    options: [
      {
        id: 'a',
        text: 'Ein Essay darf keine Zitate verwenden, eine Sachtextanalyse schon.',
        correct: false,
        explanation:
          'Auch im Essay können und sollen Zitate verwendet werden — allerdings dienen sie eher als Denkanstöße als als Belege im engeren Sinne.',
      },
      {
        id: 'b',
        text: 'Der Essay erlaubt eine subjektive, reflektierende Auseinandersetzung mit einem Thema, während die Sachtextanalyse einen gegebenen Text systematisch untersucht.',
        correct: true,
        explanation:
          'Richtig! Der Essay ist eine freiere Textform: Er erlaubt persönliche Reflexion, gedankliche Experimente und stilistische Freiheit. Die Sachtextanalyse hingegen folgt einer klaren Methodik (Einleitung — Inhaltsangabe — Argumentationsanalyse — Sprachanalyse — Schluss) und untersucht einen konkreten Sachtext.',
      },
      {
        id: 'c',
        text: 'Der Essay muss auf Deutsch geschrieben werden, die Sachtextanalyse kann auch auf Englisch verfasst werden.',
        correct: false,
        explanation:
          'Die Sprache ist kein Unterscheidungsmerkmal. Beide Textformen werden im Deutschunterricht auf Deutsch verfasst.',
      },
      {
        id: 'd',
        text: 'Ein Essay hat immer eine Einleitung, einen Hauptteil und einen Schluss; eine Sachtextanalyse nicht.',
        correct: false,
        explanation:
          'Beide Textformen haben eine Gliederung. Die Sachtextanalyse folgt sogar einer besonders strengen Struktur. Der Essay ist in seiner Gliederung freier, hat aber ebenfalls einen erkennbaren Aufbau.',
      },
    ],
  },
  {
    question:
      'Welche Zitierweise ist beim materialgestützten Schreiben korrekt?',
    options: [
      {
        id: 'a',
        text: 'Zitate müssen nicht gekennzeichnet werden, da die Materialien bekannt sind.',
        correct: false,
        explanation:
          'Auch beim materialgestützten Schreiben müssen Zitate gekennzeichnet werden — Quellenangabe und Anführungszeichen sind Pflicht.',
      },
      {
        id: 'b',
        text: 'Direkte Zitate stehen in Anführungszeichen mit Quellenangabe; indirekte Zitate werden im Konjunktiv I mit Quellenangabe wiedergegeben.',
        correct: true,
        explanation:
          'Richtig! Direkte Zitate: „..." (Autor, Quelle). Indirekte Zitate: Der Autor betone/stelle fest, dass ... (vgl. Quelle). Der Konjunktiv I signalisiert die indirekte Rede und die Distanz zum zitierten Inhalt.',
      },
      {
        id: 'c',
        text: 'Es genügt, am Ende des Textes eine Quellenangabe für alle verwendeten Materialien zu machen.',
        correct: false,
        explanation:
          'Eine bloße Auflistung am Ende reicht nicht aus. Jedes Zitat muss an der Stelle, an der es verwendet wird, mit einer Quellenangabe versehen werden (Zitiertechnik).',
      },
      {
        id: 'd',
        text: 'Beim materialgestützten Schreiben darf nur paraphrasiert, nicht wörtlich zitiert werden.',
        correct: false,
        explanation:
          'Beide Formen sind erlaubt und sinnvoll: Wörtliche Zitate für besonders prägnante Formulierungen, Paraphrasen für die zusammenfassende Wiedergabe von Positionen.',
      },
    ],
  },
];
