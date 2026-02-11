// =============================================================================
// Kapitel 01: Sprachliche Mittel & Stilistik — Übungsdaten
// =============================================================================

// ---------------------------------------------------------------------------
// 1. StilfigurDragDrop — Stilmittel den passenden Beispielen zuordnen
// ---------------------------------------------------------------------------

export const stilfigurDragDropExercises = [
  {
    stilmittel: {
      id: 'anapher',
      name: 'Anapher',
      definition: 'Wiederholung eines Wortes oder einer Wortgruppe am Satz- bzw. Versanfang',
    },
    beispiel: {
      id: 'bsp-anapher',
      text: 'Wer nie sein Brot mit Tränen aß, / Wer nie die kummervollen Nächte…',
      quelle: 'Goethe: Wilhelm Meister',
    },
    feedbackCorrect:
      'Richtig! Das wiederholte „Wer nie" am Versanfang ist eine Anapher. Sie erzeugt einen eindringlichen, beschwörenden Ton.',
    feedbackIncorrect:
      'Das ist leider falsch. Achte auf die Wiederholung von „Wer nie" am Anfang beider Verse — das ist eine Anapher.',
  },
  {
    stilmittel: {
      id: 'metapher',
      name: 'Metapher',
      definition: 'Bedeutungsübertragung — ein Ausdruck wird ohne Vergleichswort in übertragener Bedeutung verwendet',
    },
    beispiel: {
      id: 'bsp-metapher',
      text: 'Das Feuer der Leidenschaft verzehrte ihn.',
    },
    feedbackCorrect:
      'Richtig! „Feuer der Leidenschaft" ist eine Metapher: Die Eigenschaften des Feuers (Hitze, Intensität) werden auf die Leidenschaft übertragen — ohne „wie".',
    feedbackIncorrect:
      'Das ist leider falsch. „Feuer der Leidenschaft" überträgt die Eigenschaften des Feuers auf ein Gefühl — das ist eine Metapher (kein Vergleich, da kein „wie").',
  },
  {
    stilmittel: {
      id: 'chiasmus',
      name: 'Chiasmus',
      definition: 'Überkreuzstellung — symmetrische Umkehrung der Satzstruktur (AB → BA)',
    },
    beispiel: {
      id: 'bsp-chiasmus',
      text: 'Die Kunst ist lang, und kurz ist unser Leben.',
      quelle: 'Goethe: Faust I',
    },
    feedbackCorrect:
      'Richtig! Die syntaktische Struktur wird gespiegelt: „Die Kunst [S] ist [V] lang" → „kurz [Adj] ist [V] unser Leben [S]". Das ist ein Chiasmus.',
    feedbackIncorrect:
      'Das ist leider falsch. Achte auf die Überkreuzstellung: Subjekt-Verb-Adjektiv wird zu Adjektiv-Verb-Subjekt — das ist ein Chiasmus.',
  },
  {
    stilmittel: {
      id: 'personifikation',
      name: 'Personifikation',
      definition: 'Vermenschlichung — etwas Unbelebtes oder Abstraktes erhält menschliche Eigenschaften oder Handlungen',
    },
    beispiel: {
      id: 'bsp-personifikation',
      text: 'Der Abend wiegte schon die Erde.',
      quelle: 'Goethe: Willkommen und Abschied',
    },
    feedbackCorrect:
      'Richtig! „Der Abend wiegte die Erde" — dem Abend wird eine menschliche Handlung (Wiegen) zugeschrieben. Das ist eine Personifikation.',
    feedbackIncorrect:
      'Das ist leider falsch. „Wiegen" ist eine menschliche Handlung, die hier dem Abend zugeschrieben wird — das ist eine Personifikation.',
  },
  {
    stilmittel: {
      id: 'hyperbel',
      name: 'Hyperbel',
      definition: 'Starke Übertreibung, die etwas besonders hervorheben soll',
    },
    beispiel: {
      id: 'bsp-hyperbel',
      text: 'Ich hab dich tausendmal gewarnt!',
    },
    feedbackCorrect:
      'Richtig! „Tausendmal" ist eine Übertreibung (Hyperbel), die den Nachdruck und die Frustration des Sprechers verdeutlicht.',
    feedbackIncorrect:
      'Das ist leider falsch. „Tausendmal" ist eine starke Übertreibung — niemand warnt buchstäblich tausend Mal. Diese Übertreibung nennt man Hyperbel.',
  },
  {
    stilmittel: {
      id: 'alliteration',
      name: 'Alliteration',
      definition: 'Gleicher Anlaut bei aufeinanderfolgenden Wörtern (Stabreim)',
    },
    beispiel: {
      id: 'bsp-alliteration',
      text: 'Milch macht müde Männer munter.',
    },
    feedbackCorrect:
      'Richtig! Alle betonten Wörter beginnen mit „M" — das ist eine Alliteration. Sie erzeugt einen eingängigen Klang.',
    feedbackIncorrect:
      'Das ist leider falsch. Achte auf den Anfangsbuchstaben: M-M-M-M-M — der gleiche Anlaut macht dies zu einer Alliteration.',
  },
];

// ---------------------------------------------------------------------------
// 2. MultipleChoice — Quiz zu Stilmittel-Definitionen und -Unterscheidungen
// ---------------------------------------------------------------------------

export const stilmittelQuizQuestions = [
  {
    question:
      'Welches Stilmittel liegt in dem Satz „Die Kunst ist lang, und kurz ist unser Leben" vor?',
    options: [
      {
        id: 'q1-a',
        text: 'Parallelismus',
        correct: false,
        explanation:
          'Ein Parallelismus wiederholt die gleiche syntaktische Struktur. Hier wird die Struktur aber umgekehrt (Subjekt-Verb → Verb-Subjekt).',
      },
      {
        id: 'q1-b',
        text: 'Chiasmus',
        correct: true,
        explanation:
          'Richtig! Die Satzstruktur wird überkreuzt: „Die Kunst [S] ist [V] lang" → „kurz ist [V] unser Leben [S]".',
      },
      {
        id: 'q1-c',
        text: 'Antithese',
        correct: false,
        explanation:
          'Eine Antithese (Gegenüberstellung von „lang" und „kurz") liegt zwar auch vor, aber die Frage zielt auf die syntaktische Figur — den Chiasmus.',
      },
      {
        id: 'q1-d',
        text: 'Oxymoron',
        correct: false,
        explanation:
          'Ein Oxymoron verbindet zwei sich widersprechende Begriffe in einer Wortgruppe (z. B. „bittersüß"). Das ist hier nicht der Fall.',
      },
    ],
  },
  {
    question: 'Was unterscheidet eine Metapher von einem Vergleich?',
    options: [
      {
        id: 'q2-a',
        text: 'Eine Metapher verwendet immer Tiere als Bildspender.',
        correct: false,
        explanation:
          'Eine Metapher kann jeden Bildbereich nutzen, nicht nur Tiere. „Das Feuer der Leidenschaft" verwendet z. B. das Element Feuer.',
      },
      {
        id: 'q2-b',
        text: 'Ein Vergleich enthält ein Vergleichswort wie „wie" oder „als", eine Metapher nicht.',
        correct: true,
        explanation:
          'Richtig! „Er kämpfte wie ein Löwe" (Vergleich) vs. „Er war ein Löwe im Kampf" (Metapher). Das Vergleichswort fehlt bei der Metapher.',
      },
      {
        id: 'q2-c',
        text: 'Eine Metapher ist immer kürzer als ein Vergleich.',
        correct: false,
        explanation:
          'Die Länge ist kein Unterscheidungskriterium. Eine Metapher kann auch ausführlich sein (z. B. als fortgeführte Metapher).',
      },
      {
        id: 'q2-d',
        text: 'Eine Metapher kommt nur in der Lyrik vor, ein Vergleich auch in der Prosa.',
        correct: false,
        explanation:
          'Beide Stilmittel kommen in allen Gattungen vor — Lyrik, Epik und Dramatik.',
      },
    ],
  },
  {
    question:
      'Welches Stilmittel liegt im folgenden Satz vor: „Die Sonne lacht vom Himmel"?',
    options: [
      {
        id: 'q3-a',
        text: 'Metapher',
        correct: false,
        explanation:
          'Eine Metapher überträgt Bedeutung, aber „lachen" ist eine menschliche Handlung, die der Sonne zugeschrieben wird — das ist eine Personifikation.',
      },
      {
        id: 'q3-b',
        text: 'Personifikation',
        correct: true,
        explanation:
          'Richtig! Der Sonne wird eine menschliche Handlung (Lachen) zugeschrieben. Das ist eine Personifikation (Vermenschlichung).',
      },
      {
        id: 'q3-c',
        text: 'Allegorie',
        correct: false,
        explanation:
          'Eine Allegorie ist eine fortgeführte bildliche Darstellung eines abstrakten Begriffs. Hier liegt nur eine einzelne Vermenschlichung vor.',
      },
      {
        id: 'q3-d',
        text: 'Synästhesie',
        correct: false,
        explanation:
          'Eine Synästhesie vermischt verschiedene Sinneswahrnehmungen (z. B. „schreiendes Rot"). Lachen und Sonnenschein gehören nicht zu verschiedenen Sinnen.',
      },
    ],
  },
  {
    question: 'Was ist eine Klimax?',
    options: [
      {
        id: 'q4-a',
        text: 'Eine Wiederholung am Satzanfang',
        correct: false,
        explanation: 'Das wäre eine Anapher. Die Klimax ist eine Steigerung.',
      },
      {
        id: 'q4-b',
        text: 'Eine Untertreibung',
        correct: false,
        explanation:
          'Eine Untertreibung ist eine Litotes (z. B. „nicht schlecht" = gut). Die Klimax ist das Gegenteil: eine Steigerung.',
      },
      {
        id: 'q4-c',
        text: 'Eine (meist dreigliedrige) Steigerung',
        correct: true,
        explanation:
          'Richtig! Eine Klimax ist eine stufenweise Steigerung, oft dreigliedrig: „Veni, vidi, vici." (Ich kam, ich sah, ich siegte.)',
      },
      {
        id: 'q4-d',
        text: 'Ein Widerspruch in sich',
        correct: false,
        explanation:
          'Ein Widerspruch in sich ist ein Oxymoron (z. B. „bittersüß") oder Paradoxon.',
      },
    ],
  },
  {
    question:
      'Welches Stilmittel liegt in „bittersüß" vor?',
    options: [
      {
        id: 'q5-a',
        text: 'Paradoxon',
        correct: false,
        explanation:
          'Ein Paradoxon ist eine scheinbar widersprüchliche Aussage auf Satzebene (z. B. „Ich weiß, dass ich nichts weiß"). „Bittersüß" ist ein Wortpaar.',
      },
      {
        id: 'q5-b',
        text: 'Antithese',
        correct: false,
        explanation:
          'Eine Antithese stellt Gegensätze in parallelen Satzgliedern gegenüber. „Bittersüß" verbindet die Gegensätze in einem einzigen Wort.',
      },
      {
        id: 'q5-c',
        text: 'Oxymoron',
        correct: true,
        explanation:
          'Richtig! Ein Oxymoron verbindet zwei sich widersprechende Begriffe in einer Wortgruppe: „bitter" und „süß" schließen sich eigentlich aus.',
      },
      {
        id: 'q5-d',
        text: 'Euphemismus',
        correct: false,
        explanation:
          'Ein Euphemismus ist eine beschönigende Umschreibung (z. B. „entschlafen" statt „sterben"). Das liegt hier nicht vor.',
      },
    ],
  },
  {
    question:
      'Welches Stilmittel nutzt der Satz „Das Weiße Haus erklärte heute…"?',
    options: [
      {
        id: 'q6-a',
        text: 'Metonymie',
        correct: true,
        explanation:
          'Richtig! „Das Weiße Haus" steht für die US-Regierung — ein Begriff wird durch einen sachlich verwandten ersetzt. Das ist eine Metonymie.',
      },
      {
        id: 'q6-b',
        text: 'Personifikation',
        correct: false,
        explanation:
          'Es geht nicht darum, dass das Gebäude „spricht" (Vermenschlichung), sondern darum, dass der Gebäudename für die Regierung steht (Namensvertauschung).',
      },
      {
        id: 'q6-c',
        text: 'Symbol',
        correct: false,
        explanation:
          'Ein Symbol hat eine konventionelle, kulturübergreifende Bedeutung (z. B. Taube = Frieden). „Weißes Haus" beruht auf sachlicher Nähe, nicht auf Symbolik.',
      },
      {
        id: 'q6-d',
        text: 'Metapher',
        correct: false,
        explanation:
          'Eine Metapher überträgt Bedeutung aus einem anderen Bildbereich. Hier besteht aber ein direkter sachlicher Zusammenhang (Regierung sitzt im Weißen Haus).',
      },
    ],
  },
];

// ---------------------------------------------------------------------------
// 3. TextAnnotation — Goethes „Willkommen und Abschied", erste Strophe
// ---------------------------------------------------------------------------

const goetheText =
  'Es schlug mein Herz, geschwind zu Pferde!\n' +
  'Es war getan fast eh gedacht.\n' +
  'Der Abend wiegte schon die Erde,\n' +
  'Und an den Bergen hing die Nacht;\n' +
  'Schon stand im Nebelkleid die Eiche,\n' +
  'Ein aufgetürmter Riese, da,\n' +
  'Wo Finsternis aus dem Gesträuche\n' +
  'Mit hundert schwarzen Augen sah.';

export const textAnnotationGoethe = {
  text: goetheText,
  annotations: [
    {
      id: 'ann-anapher',
      start: 0,
      end: 2,
      label: 'Anapher',
      color: '#2563eb',
      explanation:
        'Das Wort „Es" wird am Anfang der ersten beiden Verse wiederholt. Diese Anapher erzeugt einen drängenden Rhythmus und unterstreicht die Unmittelbarkeit des Aufbruchs.',
    },
    {
      id: 'ann-anapher-2',
      start: 42,
      end: 44,
      label: 'Anapher',
      color: '#2563eb',
      explanation:
        'Die Wiederholung von „Es" am Versanfang (V. 1 und V. 2) bildet eine Anapher. Sie verstärkt den hastigen, atemlosen Ton des Gedichtbeginns.',
    },
    {
      id: 'ann-personifikation-1',
      start: 72,
      end: 103,
      label: 'Personifikation',
      color: '#059669',
      explanation:
        '„Der Abend wiegte schon die Erde" — dem Abend wird die menschliche Handlung des Wiegens zugeschrieben. Diese Personifikation erzeugt eine sanfte, beruhigende Abendstimmung, die im Kontrast zum aufgeregten Aufbruch des lyrischen Ichs steht.',
    },
    {
      id: 'ann-personifikation-nacht',
      start: 109,
      end: 137,
      label: 'Personifikation',
      color: '#059669',
      explanation:
        '„An den Bergen hing die Nacht" — die Nacht wird personifiziert, als hinge sie wie ein Tuch an den Bergen. Das erzeugt ein bedrohliches, aber auch malerisches Naturbild.',
    },
    {
      id: 'ann-metapher',
      start: 151,
      end: 174,
      label: 'Metapher',
      color: '#7c3aed',
      explanation:
        '„Im Nebelkleid die Eiche" — der Nebel wird als Kleidungsstück beschrieben, das die Eiche umhüllt. Diese Metapher verbindet Natur und menschliche Sphäre und unterstreicht die geheimnisvolle Atmosphäre der Nachtlandschaft.',
    },
    {
      id: 'ann-vergleich',
      start: 176,
      end: 198,
      label: 'Vergleich',
      color: '#db2777',
      explanation:
        '„Ein aufgetürmter Riese" — die Eiche wird mit einem Riesen verglichen (Apposition als verkürzter Vergleich). Die Natur erscheint bedrohlich und übermächtig, was die romantisch-stürmische Stimmung des Sturm und Drang unterstreicht.',
    },
    {
      id: 'ann-personifikation-2',
      start: 204,
      end: 269,
      label: 'Personifikation',
      color: '#059669',
      explanation:
        '„Wo Finsternis aus dem Gesträuche / Mit hundert schwarzen Augen sah" — die Finsternis wird als lebendiges Wesen dargestellt, das mit Augen „sieht". Diese Personifikation macht die Dunkelheit bedrohlich und erzeugt ein Gefühl des Beobachtetwerdens.',
    },
  ],
};

// ---------------------------------------------------------------------------
// 4. TimedChallenge — Schnelltrainer Stilmittel-Erkennung
// ---------------------------------------------------------------------------

export const schnelltrainerStilmittel = [
  {
    id: 'tc-1',
    question: '„Milch macht müde Männer munter." — Welches Stilmittel?',
    options: ['Anapher', 'Alliteration', 'Assonanz', 'Parallelismus'],
    correctIndex: 1,
    explanation:
      'Der gleiche Anlaut „M" bei aufeinanderfolgenden Wörtern bildet eine Alliteration.',
  },
  {
    id: 'tc-2',
    question: '„Er kämpfte wie ein Löwe." — Welches Stilmittel?',
    options: ['Metapher', 'Vergleich', 'Personifikation', 'Allegorie'],
    correctIndex: 1,
    explanation:
      'Das Vergleichswort „wie" zeigt: Es handelt sich um einen Vergleich, nicht um eine Metapher.',
  },
  {
    id: 'tc-3',
    question: '„Die Sonne lacht." — Welches Stilmittel?',
    options: ['Metapher', 'Hyperbel', 'Personifikation', 'Symbol'],
    correctIndex: 2,
    explanation:
      'Die Sonne erhält eine menschliche Handlung (Lachen) — das ist eine Personifikation.',
  },
  {
    id: 'tc-4',
    question:
      '„Ich weiß, dass ich nichts weiß." — Welches Stilmittel?',
    options: ['Oxymoron', 'Litotes', 'Paradoxon', 'Ironie'],
    correctIndex: 2,
    explanation:
      'Eine scheinbar widersprüchliche Aussage mit tieferem Sinn — ein Paradoxon.',
  },
  {
    id: 'tc-5',
    question:
      '„Veni, vidi, vici." — Welches Stilmittel?',
    options: ['Klimax', 'Antithese', 'Parallelismus', 'Ellipse'],
    correctIndex: 0,
    explanation:
      'Die dreigliedrige Steigerung (Kommen → Sehen → Siegen) ist eine Klimax.',
  },
  {
    id: 'tc-6',
    question: '„Ein Meer von Tränen" — Welches Stilmittel?',
    options: ['Litotes', 'Personifikation', 'Hyperbel', 'Metonymie'],
    correctIndex: 2,
    explanation:
      '„Ein Meer von Tränen" ist eine starke Übertreibung (Hyperbel), die die Intensität des Weinens betont.',
  },
  {
    id: 'tc-7',
    question: '„Schreiendes Rot" — Welches Stilmittel?',
    options: ['Personifikation', 'Synästhesie', 'Metapher', 'Oxymoron'],
    correctIndex: 1,
    explanation:
      'Hören (Schreien) und Sehen (Rot) werden vermischt — das ist eine Synästhesie.',
  },
  {
    id: 'tc-8',
    question:
      '„Der Wahn ist kurz, die Reu\' ist lang." — Welches Stilmittel?',
    options: ['Chiasmus', 'Antithese', 'Parallelismus', 'Klimax'],
    correctIndex: 1,
    explanation:
      '„Kurz" und „lang" werden als Gegensatzpaar gegenübergestellt — das ist eine Antithese. (Die parallele Satzstruktur macht es gleichzeitig zu einem Parallelismus.)',
  },
];

// ---------------------------------------------------------------------------
// 5. Lückentext — Der Dreischritt der Stilmittelanalyse
// ---------------------------------------------------------------------------

export const lueckentextDreischritt = {
  textParts: [
    'Der Dreischritt der Stilmittelanalyse besteht aus drei Schritten: Zunächst wird das Stilmittel ',
    ' und mit einer konkreten ',
    ' belegt. Im zweiten Schritt wird die ',
    ' des Stilmittels beschrieben — also was es beim Leser bewirkt. Im dritten Schritt wird die ',
    ' im Kontext erklärt: Warum setzt der Autor das Stilmittel an dieser Stelle ein? Dabei sollte man ',
    ' wie „macht den Text lebendiger" vermeiden und stattdessen die ',
    ' Wirkung im konkreten Zusammenhang analysieren.',
  ],
  luecken: [
    {
      id: 'l-1',
      correctAnswers: ['benannt', 'Benennen', 'benennt', 'benenn'],
      hint: 'Erster Schritt: Das Stilmittel wird …',
    },
    {
      id: 'l-2',
      correctAnswers: ['Textstelle', 'Textsstelle', 'Belegstelle'],
      hint: 'Man belegt das Stilmittel mit einer konkreten Stelle aus dem Text.',
    },
    {
      id: 'l-3',
      correctAnswers: ['Wirkung'],
      hint: 'Was bewirkt das Stilmittel beim Leser?',
    },
    {
      id: 'l-4',
      correctAnswers: ['Funktion'],
      hint: 'Warum hat der Autor das Stilmittel eingesetzt?',
    },
    {
      id: 'l-5',
      correctAnswers: ['Floskeln', 'Phrasen', 'Allgemeinplätze'],
      hint: 'Nichtssagende Formulierungen, die man vermeiden sollte.',
    },
    {
      id: 'l-6',
      correctAnswers: ['konkrete', 'spezifische', 'genaue'],
      hint: 'Nicht allgemein, sondern …?',
    },
  ],
};

// ---------------------------------------------------------------------------
// 6. FehlerSuche — Fehler in einer Beispielanalyse finden
// ---------------------------------------------------------------------------

export const fehlerSucheBeispielanalyse = {
  text: 'In dem Vers \u201eEs schlug mein Herz\u201c verwendet Goethe eine Allegorie, um die Aufregung des Erz\u00e4hlers zu verdeutlichen. Die Alliteration \u201eNebelkleid\u201c verleiht der Eiche eine geheimnisvolle Wirkung.',
  fehler: [
    {
      id: 'f-1',
      start: 56,
      end: 65,
      fehlerTyp: 'Falscher Fachbegriff',
      erklaerung:
        '„Es schlug mein Herz" ist keine Allegorie (fortgeführte bildliche Darstellung eines abstrakten Begriffs). Es handelt sich um eine Metapher: Das Herz „schlägt" im übertragenen Sinne vor Aufregung.',
      korrektur: 'Metapher',
    },
    {
      id: 'f-2',
      start: 88,
      end: 97,
      fehlerTyp: 'Falsche Gattungsbezeichnung',
      erklaerung:
        'In einem Gedicht spricht man nicht vom „Erzähler", sondern vom „lyrischen Ich". Der Begriff „Erzähler" gehört zur Epik (Romane, Kurzgeschichten).',
      korrektur: 'lyrischen Ichs',
    },
    {
      id: 'f-3',
      start: 120,
      end: 132,
      fehlerTyp: 'Falscher Fachbegriff',
      erklaerung:
        '„Nebelkleid" ist keine Alliteration (gleicher Anlaut aufeinanderfolgender Wörter), sondern eine Metapher: Der Nebel wird als Kleidungsstück dargestellt, das die Eiche einhüllt.',
      korrektur: 'Metapher',
    },
  ],
};

// ---------------------------------------------------------------------------
// 7. TextHighlighting — Gretchens Monolog (Faust I, „Meine Ruh ist hin")
// ---------------------------------------------------------------------------

export const textHighlightingGretchen = {
  text: 'Meine Ruh ist hin, mein Herz ist schwer; ich finde sie nimmer und nimmermehr. Wo ich ihn nicht hab, ist mir das Grab, die ganze Welt ist mir vergällt.',
  targets: [
    {
      id: 'th-parallelismus',
      start: 0,
      end: 39,
      category: 'parallelismus',
      explanation:
        '„Meine Ruh ist hin, mein Herz ist schwer" — die parallele Satzstruktur (Possessivpronomen + Substantiv + „ist" + Adjektiv/Adverb) verstärkt die emotionale Dringlichkeit von Gretchens Klage.',
    },
    {
      id: 'th-klimax',
      start: 55,
      end: 76,
      category: 'klimax',
      explanation:
        '„nimmer und nimmermehr" — die Steigerung von „nimmer" zu „nimmermehr" intensiviert die Aussichtslosigkeit. Das verlängerte Wort verstärkt die Verzweiflung.',
    },
    {
      id: 'th-metapher',
      start: 100,
      end: 116,
      category: 'metapher',
      explanation:
        '„ist mir das Grab" — das Leben ohne den Geliebten wird metaphorisch mit dem Grab gleichgesetzt. Die Metapher drückt die seelische Leere und Todesnähe aus, die Gretchen empfindet.',
    },
    {
      id: 'th-hyperbel',
      start: 118,
      end: 149,
      category: 'hyperbel',
      explanation:
        '„die ganze Welt ist mir vergällt" — die Übertreibung auf die „ganze Welt" verdeutlicht, dass Gretchens Leid allumfassend ist. Nichts kann sie trösten — ihre gesamte Wahrnehmung ist vom Schmerz bestimmt.',
    },
  ],
  categories: [
    { id: 'parallelismus', label: 'Parallelismus', color: '#059669' },
    { id: 'klimax', label: 'Klimax', color: '#db2777' },
    { id: 'metapher', label: 'Metapher', color: '#7c3aed' },
    { id: 'hyperbel', label: 'Hyperbel', color: '#f59e0b' },
  ],
};

// ---------------------------------------------------------------------------
// 8. StilmittelKarte — Markierungen für Goethes „Willkommen und Abschied"
// ---------------------------------------------------------------------------

export const stilmittelKarteGoethe = {
  text: goetheText,
  markierungen: [
    {
      start: 0,
      end: 44,
      stilmittelName: 'Anapher',
      definition:
        'Wiederholung eines Wortes oder einer Wortgruppe am Satz- oder Versanfang.',
      wirkung:
        'Die Wiederholung von „Es" in den ersten beiden Versen erzeugt einen drängenden, atemlosen Rhythmus und spiegelt die Aufregung des lyrischen Ichs wider.',
      color: '#2563eb',
    },
    {
      start: 72,
      end: 103,
      stilmittelName: 'Personifikation',
      definition:
        'Vermenschlichung von etwas Unbelebtem oder Abstraktem.',
      wirkung:
        '„Der Abend wiegte die Erde" verleiht der Natur eine mütterlich-beruhigende Qualität und bildet einen Kontrast zum stürmischen Aufbruch.',
      color: '#059669',
    },
    {
      start: 151,
      end: 174,
      stilmittelName: 'Metapher',
      definition:
        'Bedeutungsübertragung ohne Vergleichswort — ein Ausdruck wird in übertragener Bedeutung verwendet.',
      wirkung:
        '„Im Nebelkleid die Eiche" macht den Nebel zum Kleidungsstück und erzeugt eine geheimnisvolle, fast märchenhafte Atmosphäre.',
      color: '#7c3aed',
    },
    {
      start: 176,
      end: 198,
      stilmittelName: 'Vergleich',
      definition:
        'Verknüpfung zweier Bereiche, hier als Apposition (verkürzter Vergleich ohne „wie").',
      wirkung:
        'Die Eiche als „aufgetürmter Riese" lässt die Natur bedrohlich und übermächtig erscheinen — typisch für die Naturdarstellung des Sturm und Drang.',
      color: '#db2777',
    },
    {
      start: 204,
      end: 269,
      stilmittelName: 'Personifikation',
      definition:
        'Vermenschlichung von etwas Unbelebtem oder Abstraktem.',
      wirkung:
        'Die Finsternis, die „mit hundert schwarzen Augen sah", wird zum bedrohlichen, beobachtenden Wesen. Die Hyperbel „hundert" verstärkt das Gefühl des Ausgeliefertseins.',
      color: '#ea580c',
    },
  ],
};
