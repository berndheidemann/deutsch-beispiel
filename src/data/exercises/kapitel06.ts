// Kapitel 6: Kommunikation & Sprache — Übungsdaten

// === Vier-Ohren-Modell: Alltagsbeispiel ===

export interface VierSeitenExample {
  nachricht: string;
  sachinhalt: string;
  selbstoffenbarung: string;
  beziehung: string;
  appell: string;
}

export const vierOhrenBeispiel1: VierSeitenExample = {
  nachricht: 'Die Ampel ist grün.',
  sachinhalt: 'Die Ampel zeigt grünes Licht.',
  selbstoffenbarung: 'Ich bin aufmerksam / Ich habe es eilig.',
  beziehung: 'Du hast es nicht bemerkt / Du fährst zu langsam.',
  appell: 'Fahr los!',
};

// === Vier-Ohren-Modell: Literarisches Beispiel (Büchner: Woyzeck) ===

export const vierOhrenBeispiel2: VierSeitenExample = {
  nachricht: 'Du hast schöne Ohrringe, Marie.',
  sachinhalt: 'Marie trägt Ohrringe.',
  selbstoffenbarung: 'Ich bin misstrauisch / Ich habe die Ohrringe bemerkt.',
  beziehung: 'Ich kontrolliere dich / Ich vertraue dir nicht.',
  appell: 'Erkläre mir, woher die Ohrringe stammen!',
};

// === Multiple-Choice: Kommunikationsmodelle ===

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

export const kommunikationMC: MCQuestion[] = [
  {
    question:
      'Welche vier Seiten einer Nachricht unterscheidet Schulz von Thun?',
    options: [
      {
        id: 'a',
        text: 'Sachinhalt, Selbstoffenbarung, Beziehung, Appell',
        correct: true,
        explanation:
          'Richtig! Das Vier-Seiten-Modell (auch Kommunikationsquadrat) unterscheidet genau diese vier Ebenen jeder Nachricht: Sachinhalt (worüber ich informiere), Selbstoffenbarung (was ich von mir preisgebe), Beziehung (wie ich zu dir stehe) und Appell (was ich bei dir erreichen möchte).',
      },
      {
        id: 'b',
        text: 'Sender, Empfänger, Kanal, Nachricht',
        correct: false,
        explanation:
          'Das beschreibt eher das technische Kommunikationsmodell von Shannon und Weaver, nicht Schulz von Thuns Vier-Seiten-Modell.',
      },
      {
        id: 'c',
        text: 'Ausdruck, Darstellung, Appell, Beziehung',
        correct: false,
        explanation:
          'Ausdruck, Darstellung und Appell stammen aus Bühlers Organon-Modell (1934). Schulz von Thun hat dieses Modell weiterentwickelt und die Beziehungsebene ergänzt — aber die korrekte Benennung seiner vier Seiten ist: Sachinhalt, Selbstoffenbarung, Beziehung und Appell.',
      },
      {
        id: 'd',
        text: 'Inhaltsaspekt, Beziehungsaspekt, Ausdruck, Wirkung',
        correct: false,
        explanation:
          'Inhalts- und Beziehungsaspekt stammen aus Watzlawicks Axiomen (2. Axiom). „Ausdruck" und „Wirkung" sind keine Kategorien bei Schulz von Thun.',
      },
    ],
  },
  {
    question:
      'Welches der fünf Axiome von Watzlawick besagt, dass jede Kommunikation einen Inhalts- und einen Beziehungsaspekt hat?',
    options: [
      {
        id: 'a',
        text: 'Das 1. Axiom',
        correct: false,
        explanation:
          'Das 1. Axiom lautet: „Man kann nicht nicht kommunizieren." Es besagt, dass jedes Verhalten in einer sozialen Situation Kommunikation darstellt.',
      },
      {
        id: 'b',
        text: 'Das 2. Axiom',
        correct: true,
        explanation:
          'Richtig! Das 2. Axiom besagt: „Jede Kommunikation hat einen Inhalts- und einen Beziehungsaspekt, wobei Letzterer den Ersteren bestimmt." Der Beziehungsaspekt legt fest, wie der Inhalt zu verstehen ist.',
      },
      {
        id: 'c',
        text: 'Das 3. Axiom',
        correct: false,
        explanation:
          'Das 3. Axiom beschreibt die Interpunktion von Ereignisfolgen: Kommunikation ist immer Ursache und Wirkung zugleich (zirkuläre Kausalität).',
      },
      {
        id: 'd',
        text: 'Das 5. Axiom',
        correct: false,
        explanation:
          'Das 5. Axiom unterscheidet symmetrische (gleichrangige) und komplementäre (ergänzende) Kommunikation.',
      },
    ],
  },
  {
    question:
      'Welche drei Funktionen der Sprache unterscheidet Karl Bühler in seinem Organon-Modell?',
    options: [
      {
        id: 'a',
        text: 'Information, Emotion, Persuasion',
        correct: false,
        explanation:
          'Das sind allgemeine Kommunikationsfunktionen, aber nicht Bühlers Terminologie. Bühler verwendet die Begriffe Darstellung, Ausdruck und Appell.',
      },
      {
        id: 'b',
        text: 'Sachinhalt, Selbstoffenbarung, Appell',
        correct: false,
        explanation:
          'Sachinhalt und Selbstoffenbarung sind Begriffe aus Schulz von Thuns Vier-Seiten-Modell. Bühler verwendet stattdessen „Darstellung" und „Ausdruck".',
      },
      {
        id: 'c',
        text: 'Darstellung, Ausdruck, Appell',
        correct: true,
        explanation:
          'Richtig! Bühler (1934) beschreibt die Sprache als „Organon" (Werkzeug) mit drei Funktionen: Darstellung (Bezug auf Gegenstände/Sachverhalte), Ausdruck (Bezug auf den Sender) und Appell (Bezug auf den Empfänger).',
      },
      {
        id: 'd',
        text: 'Referenz, Expressivität, Konativität',
        correct: false,
        explanation:
          'Das sind Jakobsons Begriffe aus seinem erweiterten Kommunikationsmodell (1960), nicht Bühlers Terminologie.',
      },
    ],
  },
  {
    question:
      'Was versteht man unter „Metakommunikation"?',
    options: [
      {
        id: 'a',
        text: 'Kommunikation über digitale Medien (soziale Netzwerke, Chats)',
        correct: false,
        explanation:
          '„Meta" bedeutet nicht „digital". Digitale Kommunikation ist ein Kommunikationskanal, keine Metakommunikation.',
      },
      {
        id: 'b',
        text: 'Kommunikation über die Kommunikation selbst — also das Sprechen darüber, wie man miteinander redet',
        correct: true,
        explanation:
          'Richtig! Metakommunikation bedeutet, über die Art und Weise der eigenen Kommunikation zu sprechen. Beispiel: „Ich habe das Gefühl, wir reden aneinander vorbei." Metakommunikation kann helfen, Missverständnisse und Konflikte auf der Beziehungsebene zu klären.',
      },
      {
        id: 'c',
        text: 'Die nonverbale Kommunikation (Gestik, Mimik, Körperhaltung)',
        correct: false,
        explanation:
          'Nonverbale Kommunikation ist eine Form der analogen Kommunikation (Watzlawicks 4. Axiom), aber nicht dasselbe wie Metakommunikation.',
      },
      {
        id: 'd',
        text: 'Eine rhetorische Strategie in der politischen Rede',
        correct: false,
        explanation:
          'Metakommunikation ist keine rhetorische Strategie, sondern eine Reflexionsform, die in jedem Gesprächskontext angewendet werden kann.',
      },
    ],
  },
];

// === Lückentext: Sprachwandel ===

export interface LueckentextData {
  textParts: string[];
  luecken: {
    id: string;
    correctAnswers: string[];
    hint?: string;
  }[];
}

export const sprachwandelLueckentext: LueckentextData = {
  textParts: [
    'Sprachwandel beschreibt die ',
    ' von Sprache über ',
    '. Ein wichtiges Phänomen ist der ',
    ', bei dem Wörter ihre ',
    ' ändern. So bedeutete „schlecht" im Mittelhochdeutschen ursprünglich „schlicht" oder „einfach" — man spricht hier von einer ',
    '. Das Gegenteil ist die ',
    ', bei der ein Wort eine positivere Bedeutung annimmt (z.\u00A0B. „Marschall" — ursprünglich „Pferdeknecht"). Neben dem Bedeutungswandel gibt es den ',
    ', also die Aufnahme von Wörtern aus anderen Sprachen (z.\u00A0B. „Computer", „Streaming"). Kritiker sehen darin eine Gefahr für die deutsche Sprache, Befürworter betonen die natürliche ',
    ' lebendiger Sprachen.',
  ],
  luecken: [
    {
      id: 'l1',
      correctAnswers: ['Veränderung', 'veränderung'],
      hint: 'Was geschieht mit der Sprache im Laufe der Zeit?',
    },
    {
      id: 'l2',
      correctAnswers: ['Zeit', 'zeit', 'die Zeit'],
      hint: 'Über welchen Faktor hinweg verändert sich Sprache?',
    },
    {
      id: 'l3',
      correctAnswers: ['Bedeutungswandel', 'bedeutungswandel'],
      hint: 'Wie nennt man es, wenn Wörter ihre Bedeutung verändern?',
    },
    {
      id: 'l4',
      correctAnswers: ['Bedeutung', 'bedeutung'],
      hint: 'Was genau ändert sich bei den Wörtern?',
    },
    {
      id: 'l5',
      correctAnswers: ['Bedeutungsverschlechterung', 'Pejorisierung', 'bedeutungsverschlechterung', 'pejorisierung'],
      hint: 'Wie nennt man es, wenn ein Wort eine negativere Bedeutung bekommt? (Fachbegriff: Pejorisierung)',
    },
    {
      id: 'l6',
      correctAnswers: ['Bedeutungsverbesserung', 'Amelioration', 'bedeutungsverbesserung', 'amelioration'],
      hint: 'Wie nennt man das Gegenteil — wenn ein Wort aufgewertet wird? (Fachbegriff: Amelioration)',
    },
    {
      id: 'l7',
      correctAnswers: ['Sprachwandel durch Entlehnung', 'Entlehnung', 'entlehnung', 'Lehnwortschatz'],
      hint: 'Wie nennt man die Übernahme von Wörtern aus anderen Sprachen?',
    },
    {
      id: 'l8',
      correctAnswers: ['Weiterentwicklung', 'Dynamik', 'Anpassungsfähigkeit', 'weiterentwicklung', 'dynamik'],
      hint: 'Was zeichnet lebendige Sprachen aus?',
    },
  ],
};

// === Multiple-Choice: Sprachreflexion ===

export const sprachreflexionMC: MCQuestion[] = [
  {
    question:
      'Was versteht man unter „Sprachkritik" im linguistischen Sinne?',
    options: [
      {
        id: 'a',
        text: 'Dass man andere Menschen für Grammatikfehler kritisiert.',
        correct: false,
        explanation:
          'Das wäre alltagssprachliche „Sprachkritik", aber nicht die linguistische Bedeutung. Wissenschaftliche Sprachkritik ist keine Korrektur von Individuen, sondern eine Reflexion über Sprache und Sprachgebrauch.',
      },
      {
        id: 'b',
        text: 'Die kritische Reflexion über den Gebrauch von Sprache — wie Sprache Wirklichkeit formt, Machtverhältnisse ausdrückt und Denken beeinflusst.',
        correct: true,
        explanation:
          'Richtig! Sprachkritik untersucht, wie Sprache Wirklichkeit konstruiert: Welche Wörter werden gewählt? Welche Perspektive wird durch Formulierungen nahegelegt? Welche Gruppen werden durch Sprache ein- oder ausgeschlossen? Beispiele: Gendern-Debatte, politische Sprache, Euphemismen.',
      },
      {
        id: 'c',
        text: 'Die Bewertung, ob Deutsch „schöner" oder „hässlicher" klingt als andere Sprachen.',
        correct: false,
        explanation:
          'Ästhetische Urteile über Sprachen sind subjektiv und linguistisch nicht begründbar. Sprachkritik bewertet nicht die Schönheit von Sprachen, sondern analysiert den Gebrauch und die Wirkung von Sprache.',
      },
      {
        id: 'd',
        text: 'Die Forderung, Anglizismen aus dem Deutschen zu verbannen.',
        correct: false,
        explanation:
          'Das ist eine sprachpuristische Position, aber nicht „Sprachkritik" im wissenschaftlichen Sinne. Linguistische Sprachkritik analysiert auch den Anglizismen-Diskurs selbst — warum sorgen Anglizismen für so starke Emotionen?',
      },
    ],
  },
  {
    question:
      'Was beschreibt die Sapir-Whorf-Hypothese?',
    options: [
      {
        id: 'a',
        text: 'Dass alle Sprachen gleich aufgebaut sind.',
        correct: false,
        explanation:
          'Die Sapir-Whorf-Hypothese besagt das Gegenteil: Sprachen unterscheiden sich fundamental, und diese Unterschiede beeinflussen das Denken der Sprecher.',
      },
      {
        id: 'b',
        text: 'Dass die Sprache, die wir sprechen, unser Denken und unsere Wahrnehmung der Welt beeinflusst.',
        correct: true,
        explanation:
          'Richtig! Die Sapir-Whorf-Hypothese (auch: sprachliche Relativität) besagt, dass Sprache nicht nur ein Werkzeug zur Kommunikation ist, sondern unser Denken prägt. In der starken Version: Sprache determiniert das Denken. In der schwachen Version: Sprache beeinflusst das Denken. Die schwache Version gilt heute als wissenschaftlich bestätigt.',
      },
      {
        id: 'c',
        text: 'Dass Kinder Sprache nur bis zum 12. Lebensjahr vollständig erlernen können.',
        correct: false,
        explanation:
          'Das beschreibt die „kritische Periode" des Spracherwerbs (Lenneberg-Hypothese), nicht die Sapir-Whorf-Hypothese.',
      },
      {
        id: 'd',
        text: 'Dass Tiere genauso kommunizieren wie Menschen.',
        correct: false,
        explanation:
          'Die Frage nach tierischer Kommunikation hat nichts mit der Sapir-Whorf-Hypothese zu tun. Diese befasst sich ausschließlich mit dem Verhältnis von menschlicher Sprache und Denken.',
      },
    ],
  },
  {
    question:
      'Welche Position vertritt der Sprachpurismus?',
    options: [
      {
        id: 'a',
        text: 'Sprache soll „rein" gehalten werden — Fremdwörter, Dialekte und neue Ausdrucksformen sind Verfallserscheinungen, die bekämpft werden müssen.',
        correct: true,
        explanation:
          'Richtig! Der Sprachpurismus (von lat. purus = rein) strebt danach, eine Sprache von „fremden" Einflüssen zu befreien. Historisch: der „Allgemeine Deutsche Sprachverein" (1885) wollte Fremdwörter durch deutsche Entsprechungen ersetzen. Moderne Formen: Kritik an Anglizismen, „Denglisch"-Debatte. Linguisten betonen, dass Entlehnung ein natürlicher Prozess ist.',
      },
      {
        id: 'b',
        text: 'Alle Menschen sollten dieselbe Sprache sprechen.',
        correct: false,
        explanation:
          'Das wäre Universalismus oder die Idee einer Universalsprache (z.\u00A0B. Esperanto). Sprachpurismus bezieht sich auf die Reinhaltung einer bestimmten Sprache.',
      },
      {
        id: 'c',
        text: 'Sprache darf sich verändern, solange die Grammatik korrekt bleibt.',
        correct: false,
        explanation:
          'Sprachpurismus geht weiter: Er richtet sich nicht nur gegen Grammatikfehler, sondern vor allem gegen lexikalische Veränderungen (Fremdwörter, Neologismen) und stilistische „Verfallserscheinungen".',
      },
      {
        id: 'd',
        text: 'Dialekte sind wertvoller als die Standardsprache.',
        correct: false,
        explanation:
          'Das Gegenteil: Sprachpuristen bevorzugen oft die Standardsprache und sehen Dialekte als weniger wertvoll an. Die Wertschätzung von Dialekten findet sich eher in der Dialektologie und der Soziolinguistik.',
      },
    ],
  },
];
