// Lyrik Aufgabenreihe — Daten für alle 12 sequenziellen Übungen
// Schwerpunkt: formale Aspekte der Lyrikanalyse

// ============================================================
// 1. Silben zählen
// ============================================================

export const silbenCounterVerse = [
  {
    id: 'silben-goethe-1',
    text: 'Es schlug mein Herz, geschwind zu Pferde!',
    silbenAnzahl: 9,
    silbenAufteilung: ['Es', 'schlug', 'mein', 'Herz', 'ge', 'schwind', 'zu', 'Pfer', 'de'],
    quelle: 'Goethe: „Willkommen und Abschied"',
  },
  {
    id: 'silben-goethe-2',
    text: 'Über allen Gipfeln ist Ruh',
    silbenAnzahl: 8,
    silbenAufteilung: ['Ü', 'ber', 'al', 'len', 'Gip', 'feln', 'ist', 'Ruh'],
    quelle: 'Goethe: „Wandrers Nachtlied"',
  },
  {
    id: 'silben-eichendorff',
    text: 'Es war, als hätt der Himmel',
    silbenAnzahl: 7,
    silbenAufteilung: ['Es', 'war', 'als', 'hätt', 'der', 'Him', 'mel'],
    quelle: 'Eichendorff: „Mondnacht"',
  },
  {
    id: 'silben-eichendorff-2',
    text: 'Die Ähren wogten sacht',
    silbenAnzahl: 6,
    silbenAufteilung: ['Die', 'Äh', 'ren', 'wog', 'ten', 'sacht'],
    quelle: 'Eichendorff: „Mondnacht"',
  },
  {
    id: 'silben-goethe-3',
    text: 'Und meine Seele spannte',
    silbenAnzahl: 7,
    silbenAufteilung: ['Und', 'mei', 'ne', 'See', 'le', 'spann', 'te'],
    quelle: 'Eichendorff: „Mondnacht"',
  },
];

// ============================================================
// 2. Versfüße bestimmen (MetrumKlopfer — neue Verse)
// ============================================================

export const metrumKlopferVerseReihe = [
  {
    id: 'heine-mai',
    silben: [
      { text: 'Im', betont: false },
      { text: 'wun', betont: true },
      { text: 'der', betont: false },
      { text: 'schö', betont: true },
      { text: 'nen', betont: false },
      { text: 'Mo', betont: true },
      { text: 'nat', betont: false },
      { text: 'Mai', betont: true },
    ],
    versfuss: 'Jambus (4-hebig)',
    wirkung:
      'Der regelmäßige vierhebige Jambus erzeugt einen liedhaften, schwingenden Rhythmus. Die männliche Kadenz auf „Mai" betont das Wort als Höhepunkt — Frühling und Liebe verschmelzen.',
    quelle: 'Heine: „Im wunderschönen Monat Mai" — Spätromantik',
  },
  {
    id: 'schiller-freude',
    silben: [
      { text: 'Freu', betont: true },
      { text: 'de,', betont: false },
      { text: 'schö', betont: true },
      { text: 'ner', betont: false },
      { text: 'Göt', betont: true },
      { text: 'ter', betont: false },
      { text: 'fun', betont: true },
      { text: 'ken', betont: false },
    ],
    versfuss: 'Trochäus (4-hebig)',
    wirkung:
      'Der Trochäus mit seiner fallenden Betonung (betont-unbetont) wirkt hier feierlich und hymnenartig. Die weibliche Kadenz lässt den Vers offen und einladend ausklingen.',
    quelle: 'Schiller: „An die Freude" (1785) — Weimarer Klassik',
  },
  {
    id: 'goethe-reineke',
    silben: [
      { text: 'Pfings', betont: true },
      { text: 'ten,', betont: false },
      { text: 'das', betont: false },
      { text: 'lieb', betont: true },
      { text: 'li', betont: false },
      { text: 'che', betont: false },
      { text: 'Fest,', betont: true },
      { text: 'war', betont: false },
      { text: 'ge', betont: false },
      { text: 'kom', betont: true },
      { text: 'men', betont: false },
    ],
    versfuss: 'Daktylus (Hexameter)',
    wirkung:
      'Der Daktylus (betont-unbetont-unbetont, ▬◡◡) erzeugt einen wiegenden, feierlichen Rhythmus. Im Hexameter — dem Versmaß des antiken Epos — verleiht Goethe seiner Tierfabel „Reineke Fuchs" eine epische Würde, die zugleich ironisch gebrochen wird.',
    quelle: 'Goethe: „Reineke Fuchs" (1794) — Weimarer Klassik',
  },
  {
    id: 'schiller-taucher',
    silben: [
      { text: 'Und', betont: false },
      { text: 'es', betont: false },
      { text: 'wal', betont: true },
      { text: 'let', betont: false },
      { text: 'und', betont: false },
      { text: 'sie', betont: true },
      { text: 'det', betont: false },
      { text: 'und', betont: false },
      { text: 'brau', betont: true },
      { text: 'set', betont: false },
      { text: 'und', betont: false },
      { text: 'zischt', betont: true },
    ],
    versfuss: 'Anapäst (4-hebig)',
    wirkung:
      'Der Anapäst (unbetont-unbetont-betont, ◡◡▬) erzeugt einen drängenden, beschleunigenden Rhythmus. Die Betonung fällt jeweils auf die dritte Silbe, was ein vorwärtstreibendes Moment schafft — passend zur tosenden Naturgewalt des Meeresstrudels.',
    quelle: 'Schiller: „Der Taucher" (1797) — Weimarer Klassik',
  },
  {
    id: 'goethe-prometheus',
    silben: [
      { text: 'Be', betont: true },
      { text: 'de', betont: false },
      { text: 'cke', betont: false },
      { text: 'dei', betont: true },
      { text: 'nen', betont: false },
      { text: 'Him', betont: true },
      { text: 'mel,', betont: false },
      { text: 'Zeus', betont: true },
    ],
    versfuss: 'Freie Rhythmen',
    wirkung:
      'Freie Rhythmen verzichten auf ein regelmäßiges Metrum — die Betonungen folgen dem natürlichen Sprachrhythmus und dem emotionalen Ausdruck. In „Prometheus" unterstreicht dies die rebellische Haltung des lyrischen Ichs: Es unterwirft sich keiner metrischen Ordnung, so wie Prometheus sich keiner göttlichen Ordnung beugt.',
    quelle: 'Goethe: „Prometheus" (1774) — Sturm und Drang',
  },
];

// ============================================================
// 3. Kadenz bestimmen
// ============================================================

export const kadenzVerse = [
  {
    id: 'kadenz-1',
    text: 'Es schlug mein Herz, geschwind zu Pferde!',
    kadenz: 'weiblich' as const,
    endsilben: [
      { text: 'Pfer', betont: true },
      { text: 'de', betont: false },
    ],
    erklaerung:
      'Weibliche (klingende) Kadenz: Der Vers endet auf der unbetonten Silbe „-de". Die weibliche Kadenz lässt den Vers offen und fließend ausklingen.',
  },
  {
    id: 'kadenz-2',
    text: 'Über allen Gipfeln ist Ruh',
    kadenz: 'männlich' as const,
    endsilben: [
      { text: 'ist', betont: false },
      { text: 'Ruh', betont: true },
    ],
    erklaerung:
      'Männliche (stumpfe) Kadenz: Der Vers endet auf der betonten Silbe „Ruh". Die männliche Kadenz wirkt abgeschlossen und endgültig — sie unterstreicht die Stille und Ruhe.',
  },
  {
    id: 'kadenz-3',
    text: 'Die Erde still geküsst,',
    kadenz: 'männlich' as const,
    endsilben: [
      { text: 'ge', betont: false },
      { text: 'küsst', betont: true },
    ],
    erklaerung:
      'Männliche Kadenz: „geküsst" endet auf der betonten Silbe „küsst". Das einsilbige Versende betont den Kuss als zentrales Bild der Strophe.',
  },
  {
    id: 'kadenz-4',
    text: 'Dass sie im Blütenschimmer',
    kadenz: 'weiblich' as const,
    endsilben: [
      { text: 'schim', betont: true },
      { text: 'mer', betont: false },
    ],
    erklaerung:
      'Weibliche Kadenz: „Blütenschimmer" endet auf der unbetonten Silbe „-mer". Das offene Ausklingen passt zum traumhaften Schimmern.',
  },
  {
    id: 'kadenz-5',
    text: 'Und meine Seele spannte',
    kadenz: 'weiblich' as const,
    endsilben: [
      { text: 'spann', betont: true },
      { text: 'te', betont: false },
    ],
    erklaerung:
      'Weibliche Kadenz: „spannte" endet auf der unbetonten Silbe „-te". Die klingende Kadenz unterstützt die Vorstellung des Sich-Ausbreitens der Seele.',
  },
  {
    id: 'kadenz-6',
    text: 'In meinen Adern welches Feuer!',
    kadenz: 'weiblich' as const,
    endsilben: [
      { text: 'Feu', betont: true },
      { text: 'er', betont: false },
    ],
    erklaerung:
      'Weibliche Kadenz: „Feuer" endet auf der unbetonten Silbe „-er". Trotz des leidenschaftlichen Ausrufs (Ausrufezeichen) klingt der Vers weich aus.',
  },
];

// ============================================================
// 4. Reimschema bestimmen (ReimschemaQuiz — neue Strophen)
// ============================================================

export const reimschemaStrophen = [
  {
    strophe: [
      { id: 'rs1-v1', text: 'Es schlug mein Herz, geschwind zu Pferde!', reimBuchstabe: 'a' },
      { id: 'rs1-v2', text: 'Es war getan fast eh gedacht.', reimBuchstabe: 'b' },
      { id: 'rs1-v3', text: 'Der Abend wiegte schon die Erde,', reimBuchstabe: 'a' },
      { id: 'rs1-v4', text: 'Und an den Bergen hing die Nacht;', reimBuchstabe: 'b' },
    ],
    reimschemaName: 'Kreuzreim',
    erklaerung:
      'Kreuzreim (abab): „Pferde" reimt auf „Erde" (a) und „gedacht" auf „Nacht" (b). Der Kreuzreim erzeugt ein ausgewogenes, vorwärtstreibendes Klangbild, das zum drängenden Rhythmus des Sturm-und-Drang-Gedichts passt.',
  },
  {
    strophe: [
      { id: 'rs2-v1', text: 'Wer reitet so spät durch Nacht und Wind?', reimBuchstabe: 'a' },
      { id: 'rs2-v2', text: 'Es ist der Vater mit seinem Kind;', reimBuchstabe: 'a' },
      { id: 'rs2-v3', text: 'Er hat den Knaben wohl in dem Arm,', reimBuchstabe: 'b' },
      { id: 'rs2-v4', text: 'Er fasst ihn sicher, er hält ihn warm.', reimBuchstabe: 'b' },
    ],
    reimschemaName: 'Paarreim',
    erklaerung:
      'Paarreim (aabb): „Wind" reimt auf „Kind" (a) und „Arm" auf „warm" (b). Jeweils zwei aufeinanderfolgende Verse reimen sich. Der Paarreim erzeugt hier einen erzählerischen, balladenhaften Fluss, der das unheimliche Geschehen vorantreibt.',
  },
  {
    strophe: [
      { id: 'rs3-v1', text: 'Natur und Kunst, sie scheinen sich zu fliehen', reimBuchstabe: 'a' },
      { id: 'rs3-v2', text: 'Und haben sich, eh man es denkt, gefunden;', reimBuchstabe: 'b' },
      { id: 'rs3-v3', text: 'Der Widerwille ist auch mir verschwunden,', reimBuchstabe: 'b' },
      { id: 'rs3-v4', text: 'Und beide scheinen gleich mich anzuziehen.', reimBuchstabe: 'a' },
    ],
    reimschemaName: 'Umarmender Reim',
    erklaerung:
      'Umarmender Reim (abba): „fliehen" reimt auf „anzuziehen" (a) und „gefunden" auf „verschwunden" (b). Die inneren Verse werden von den äußeren „umarmt". Diese Reimform spiegelt hier den Inhalt: Natur und Kunst umschließen einander, wie der Reim es formal tut.',
  },
  {
    strophe: [
      { id: 'rs4-v1', text: 'Er stand auf seines Daches Zinnen,', reimBuchstabe: 'a' },
      { id: 'rs4-v2', text: 'Er schaute mit vergnügten Sinnen', reimBuchstabe: 'a' },
      { id: 'rs4-v3', text: 'Auf das beherrschte Samos hin.', reimBuchstabe: 'b' },
      { id: 'rs4-v4', text: '„Dies alles ist mir untertänig,"', reimBuchstabe: 'c' },
      { id: 'rs4-v5', text: 'Begann er zu Ägyptens König,', reimBuchstabe: 'c' },
      { id: 'rs4-v6', text: '„Gestehe, dass ich glücklich bin."', reimBuchstabe: 'b' },
    ],
    reimschemaName: 'Schweifreim',
    erklaerung:
      'Schweifreim (aabccb): „Zinnen" reimt auf „Sinnen" (a), „hin" auf „bin" (b), „untertänig" auf „König" (c). Jeweils zwei Paarreime (aa, cc) werden von einem Kreuzreim-Paar (b…b) umschlossen. Der Schweifreim ist typisch für die klassische Balladenform und erzeugt einen feierlichen, erzählerischen Rhythmus.',
  },
];

// ============================================================
// 5. Enjambement erkennen
// ============================================================

export const enjambementDaten = {
  titel: 'Willkommen und Abschied',
  autor: 'Goethe',
  verse: [
    { text: 'Der Mond von einem Wolkenhügel', enjambementNachZeile: true },
    { text: 'Sah kläglich aus dem Duft hervor,', enjambementNachZeile: false },
    { text: 'Die Winde schwangen leise Flügel,', enjambementNachZeile: false },
    { text: 'Umsausten schauerlich mein Ohr;', enjambementNachZeile: false },
    { text: 'Die Nacht schuf tausend Ungeheuer,', enjambementNachZeile: false },
    { text: 'Doch frisch und fröhlich war mein Mut:', enjambementNachZeile: false },
  ],
  erklaerung:
    'Ein Enjambement (Zeilensprung) liegt vor, wenn ein Satz oder eine syntaktische Einheit über das Versende hinaus in den nächsten Vers weitergeführt wird. In Vers 1–2 liegt ein klares Enjambement vor: „Der Mond von einem Wolkenhügel / Sah kläglich aus dem Duft hervor" — das Subjekt „Der Mond" steht in Vers 1, das Prädikat „Sah" erst in Vers 2. Der Satz wird über die Versgrenze hinweg fortgesetzt. Die übrigen Verse enden jeweils mit einem Satzzeichen (Komma oder Semikolon), das eine syntaktische Zäsur markiert — dort liegt kein Enjambement vor.',
};

// ============================================================
// 6. Gedichtform erkennen (DragDrop-Zuordnung)
// ============================================================

export const strophenformExercises = [
  {
    stilmittel: 'Sonett',
    beispiel: '14 Verse: 2 Quartette (4+4) + 2 Terzette (3+3), meist im Alexandriner oder 5-hebigen Jambus',
  },
  {
    stilmittel: 'Volksliedstrophe',
    beispiel: '4 Verse mit Kreuzreim (abab), meist 3- oder 4-hebig, einfaches Metrum, sangbar',
  },
  {
    stilmittel: 'Ode',
    beispiel: 'Reimlose Strophen mit feierlichem Ton, antike Maße (alkäisch, sapphisch, asklepiadeisch)',
  },
  {
    stilmittel: 'Distichon',
    beispiel: 'Zweizeiliges Verspaar: Hexameter + Pentameter, typisch für Epigramme und Elegien',
  },
  {
    stilmittel: 'Balladenstrophe',
    beispiel: 'Erzählendes Gedicht in Strophen, oft Volksliedform, verbindet Epik, Lyrik und Dramatik',
  },
];

// ============================================================
// 7. Klangfiguren erkennen (TextHighlighting)
// ============================================================

export const klangfigurenDaten = {
  text: 'Es schlug mein Herz, geschwind zu Pferde!\nEs war getan fast eh gedacht.\nDer Abend wiegte schon die Erde,\nUnd an den Bergen hing die Nacht;\nSchon stand im Nebelkleid die Eiche,\nEin aufgetürmter Riese, da,\nWo Finsternis aus dem Gesträuche\nMit hundert schwarzen Augen sah.',
  targets: [
    {
      id: 'allit-1',
      start: 0,
      end: 19,
      category: 'alliteration',
      explanation: '„Es schlug" — „geschwind" — im Kontext der Strophe wiederholt sich der Zischlaut [ʃ] (Sch-Laut), der die Geschwindigkeit lautmalerisch unterstützt.',
    },
    {
      id: 'allit-2',
      start: 126,
      end: 178,
      category: 'alliteration',
      explanation: '„Schon stand … Eiche / Ein aufgetürmter" — die Folge von S-Lauten und die Alliteration in „aufgetürmter" erzeugt eine düstere, bedrohliche Klangkulisse.',
    },
    {
      id: 'onomat-1',
      start: 0,
      end: 11,
      category: 'onomatopoesie',
      explanation: '„Es schlug mein Herz" — das Wort „schlug" imitiert lautmalerisch den Herzschlag. Die einsilbige, harte Klanggestalt des Wortes macht den Pulsschlag hörbar.',
    },
    {
      id: 'assonanz-1',
      start: 68,
      end: 99,
      category: 'assonanz',
      explanation: '„Abend wiegte schon die Erde" — die Wiederholung des E-Vokals (Abend, wiegte, Erde) erzeugt einen weichen, wiegenden Klang, der die Abendstimmung lautlich abbildet.',
    },
  ],
  categories: [
    { id: 'alliteration', label: 'Alliteration', color: '#3b82f6' },
    { id: 'onomatopoesie', label: 'Onomatopoesie', color: '#ef4444' },
    { id: 'assonanz', label: 'Assonanz', color: '#8b5cf6' },
  ],
};

// ============================================================
// 8. Bildsprache markieren (TextHighlighting)
// ============================================================

export const bildspracheDaten = {
  text: 'Der Mond von einem Wolkenhügel\nSah kläglich aus dem Duft hervor,\nDie Winde schwangen leise Flügel,\nUmsausten schauerlich mein Ohr;\nDie Nacht schuf tausend Ungeheuer,\nDoch frisch und fröhlich war mein Mut:\nIn meinen Adern welches Feuer!\nIn meinem Herzen welche Glut!',
  targets: [
    {
      id: 'pers-mond',
      start: 0,
      end: 54,
      category: 'personifikation',
      explanation: '„Der Mond … Sah kläglich aus dem Duft hervor" — Der Mond wird personifiziert: Er „sieht" und tut dies „kläglich", also mit menschlichem Ausdruck. Die Personifikation macht die Natur zum Mitspieler der Szene.',
    },
    {
      id: 'pers-winde',
      start: 56,
      end: 92,
      category: 'personifikation',
      explanation: '„Die Winde schwangen leise Flügel" — Die Winde werden als geflügelte Wesen dargestellt, die aktiv ihre Flügel schwingen. Diese Personifikation belebt die Naturszene und erzeugt eine geheimnisvolle Atmosphäre.',
    },
    {
      id: 'pers-nacht',
      start: 121,
      end: 157,
      category: 'personifikation',
      explanation: '„Die Nacht schuf tausend Ungeheuer" — Die Nacht wird als schöpferische Kraft personifiziert, die aktiv Ungeheuer erschafft. Die Hyperbel „tausend" verstärkt die bedrohliche Wirkung.',
    },
    {
      id: 'metapher-feuer',
      start: 191,
      end: 225,
      category: 'metapher',
      explanation: '„In meinen Adern welches Feuer! / In meinem Herzen welche Glut!" — Feuer und Glut sind Metaphern für Leidenschaft und Begierde. Die parallele Satzstruktur (Anapher „In meinem/meinen") verstärkt die emotionale Intensität.',
    },
    {
      id: 'metapher-wolkenhuegel',
      start: 18,
      end: 30,
      category: 'metapher',
      explanation: '„Wolkenhügel" — ein Kompositum als Metapher: Die Wolken werden als Hügel beschrieben, über dem der Mond steht. Das Bild verschmilzt Himmel und Landschaft zu einer einheitlichen Naturkulisse.',
    },
  ],
  categories: [
    { id: 'personifikation', label: 'Personifikation', color: '#3b82f6' },
    { id: 'metapher', label: 'Metapher', color: '#ef4444' },
  ],
};

// ============================================================
// 9. Formale Gesamtanalyse (VersAnalyse)
// ============================================================

export const versAnalyseDaten = {
  strophe: [
    { text: 'Es war, als hätt der Himmel', kadenz: 'weiblich' as const, reimBuchstabe: 'a' },
    { text: 'Die Erde still geküsst,', kadenz: 'männlich' as const, reimBuchstabe: 'b' },
    { text: 'Dass sie im Blütenschimmer', kadenz: 'weiblich' as const, reimBuchstabe: 'a' },
    { text: 'Von ihm nun träumen müsst.', kadenz: 'männlich' as const, reimBuchstabe: 'b' },
  ],
  gedichtTitel: 'Mondnacht',
  autor: 'Eichendorff',
  correctMetrum: 'Jambus',
  metrumOptionen: ['Jambus', 'Trochäus', 'Daktylus', 'Anapäst', 'Freie Rhythmen'],
  correctStrophenform: 'Volksliedstrophe',
  strophenformOptionen: ['Volksliedstrophe', 'Sonett-Quartett', 'Ode', 'Distichon', 'Chevy-Chase-Strophe'],
  erklaerung:
    'Die erste Strophe der „Mondnacht" ist eine Volksliedstrophe im Jambus mit alternierender Kadenz (weiblich-männlich-weiblich-männlich) und Kreuzreim (abab). Die Verbindung aus regelmäßigem Jambus, Kreuzreim und Volksliedform erzeugt einen schlichten, liedhaften Ton, der typisch für die Romantik ist — die einfache Form steht im Kontrast zur tiefen metaphysischen Bedeutung des Inhalts.',
};

// ============================================================
// 10. Lyrik-Schnelltrainer (TimedChallenge)
// ============================================================

export const lyrikSchnelltrainerFragen = [
  {
    id: 'lt-1',
    question: 'Was ist ein Jambus?',
    options: ['betont-unbetont', 'unbetont-betont', 'betont-unbetont-unbetont', 'unbetont-unbetont-betont'],
    correctIndex: 1,
    explanation: 'Der Jambus ist ein zweisilbiger Versfuß mit dem Schema unbetont-betont (◡▬), z. B. „Ge-DICHT".',
  },
  {
    id: 'lt-2',
    question: 'Was ist eine weibliche Kadenz?',
    options: [
      'Vers endet auf betonter Silbe',
      'Vers endet auf unbetonter Silbe',
      'Vers hat nur weibliche Reime',
      'Vers wurde von einer Autorin geschrieben',
    ],
    correctIndex: 1,
    explanation: 'Weibliche (klingende) Kadenz: Der Vers endet auf einer unbetonten Silbe, z. B. „Him-mel", „Pfer-de".',
  },
  {
    id: 'lt-3',
    question: 'Welches Reimschema liegt bei abab vor?',
    options: ['Paarreim', 'Kreuzreim', 'Umarmender Reim', 'Schweifreim'],
    correctIndex: 1,
    explanation: 'abab = Kreuzreim — die Verse reimen sich abwechselnd (1. auf 3., 2. auf 4.).',
  },
  {
    id: 'lt-4',
    question: 'Was ist ein Enjambement?',
    options: [
      'Ein Reim zwischen zwei Strophen',
      'Ein Zeilensprung — der Satz geht über das Versende hinaus',
      'Eine Wiederholung am Versanfang',
      'Ein Versfuß mit drei Silben',
    ],
    correctIndex: 1,
    explanation: 'Enjambement (frz. „Überschreitung"): Der Satz oder die Sinneinheit wird über das Versende in den nächsten Vers fortgeführt.',
  },
  {
    id: 'lt-5',
    question: 'Wie viele Verse hat ein Sonett?',
    options: ['10', '12', '14', '16'],
    correctIndex: 2,
    explanation: 'Das Sonett hat 14 Verse: zwei Quartette (4+4) und zwei Terzette (3+3).',
  },
  {
    id: 'lt-6',
    question: 'Was ist ein Trochäus?',
    options: ['unbetont-betont', 'betont-unbetont', 'betont-unbetont-unbetont', 'unbetont-betont-unbetont'],
    correctIndex: 1,
    explanation: 'Der Trochäus ist betont-unbetont (▬◡), z. B. „FRÜ-ling", „LIE-be". Er ist das Gegenstück zum Jambus.',
  },
  {
    id: 'lt-7',
    question: 'Was bedeutet „Paarreim"?',
    options: ['abab', 'aabb', 'abba', 'abcabc'],
    correctIndex: 1,
    explanation: 'Paarreim (aabb): Jeweils zwei aufeinanderfolgende Verse reimen sich.',
  },
  {
    id: 'lt-8',
    question: 'Was ist das „lyrische Ich"?',
    options: [
      'Der Autor des Gedichts',
      'Die fiktive Sprechinstanz im Gedicht',
      'Der Erzähler einer Ballade',
      'Das Pronomen „ich" im Gedicht',
    ],
    correctIndex: 1,
    explanation: 'Das lyrische Ich ist die fiktive Sprechinstanz — es ist nicht automatisch mit dem Autor identisch.',
  },
  {
    id: 'lt-9',
    question: 'Was ist ein Daktylus?',
    options: [
      'betont-unbetont',
      'unbetont-betont',
      'betont-unbetont-unbetont',
      'unbetont-unbetont-betont',
    ],
    correctIndex: 2,
    explanation: 'Der Daktylus ist ein dreisilbiger Versfuß: betont-unbetont-unbetont (▬◡◡), z. B. „WAN-de-rer".',
  },
  {
    id: 'lt-10',
    question: 'Was ist der umarmende Reim?',
    options: ['aabb', 'abab', 'abba', 'abcabc'],
    correctIndex: 2,
    explanation: 'Umarmender Reim (abba): Der 1. reimt auf den 4. Vers, der 2. auf den 3. — die inneren Verse werden von den äußeren „umarmt".',
  },
  {
    id: 'lt-11',
    question: 'Was ist eine Alliteration?',
    options: [
      'Wiederholung des gleichen Vokals',
      'Wiederholung des gleichen Anlauts bei aufeinanderfolgenden Wörtern',
      'Reimende Silben innerhalb eines Verses',
      'Eine Klangfigur am Versende',
    ],
    correctIndex: 1,
    explanation: 'Alliteration (Stabreim): Wiederholung des gleichen Anfangslauts bei benachbarten Wörtern, z. B. „Milch macht müde Männer munter".',
  },
  {
    id: 'lt-12',
    question: 'Was kennzeichnet eine Volksliedstrophe?',
    options: [
      '14 Verse mit fester Reimordnung',
      '4 Verse, Kreuzreim, einfaches Metrum, sangbar',
      'Reimlose Verse in feierlichem Ton',
      'Zweizeilige Verse im Hexameter',
    ],
    correctIndex: 1,
    explanation: 'Die Volksliedstrophe hat 4 Verse, meist 3- oder 4-hebig, Kreuzreim (abab), einfaches Metrum und ist sangbar — die Grundform der deutschen Lyrik.',
  },
  {
    id: 'lt-13',
    question: 'Was ist eine Zäsur im Vers?',
    options: [
      'Das Ende eines Gedichts',
      'Ein Einschnitt / eine Pause innerhalb eines Verses',
      'Der Übergang von einer Strophe zur nächsten',
      'Das Reimwort am Versende',
    ],
    correctIndex: 1,
    explanation: 'Die Zäsur ist ein Einschnitt (Sprechpause) innerhalb eines Verses, oft durch Interpunktion oder syntaktische Gliederung markiert. Z. B.: „Es schlug mein Herz, | geschwind zu Pferde!"',
  },
  {
    id: 'lt-14',
    question: 'Was ist ein Anapäst?',
    options: [
      'betont-unbetont-unbetont',
      'unbetont-unbetont-betont',
      'unbetont-betont',
      'betont-unbetont',
    ],
    correctIndex: 1,
    explanation: 'Der Anapäst ist unbetont-unbetont-betont (◡◡▬), z. B. „Pa-ra-DIES". Er wirkt beschleunigend und drängend.',
  },
  {
    id: 'lt-15',
    question: 'Was unterscheidet eine Ode von einer Volksliedstrophe?',
    options: [
      'Die Ode hat immer 14 Verse',
      'Die Ode ist reimlos mit feierlichem Ton, die Volksliedstrophe reimt und ist schlicht',
      'Die Volksliedstrophe ist länger als die Ode',
      'Es gibt keinen Unterschied',
    ],
    correctIndex: 1,
    explanation: 'Die Ode ist reimlos, feierlich und folgt oft antiken Versmaßen. Die Volksliedstrophe ist gereimt, schlicht und sangbar.',
  },
];

// ============================================================
// 11. Schrittweise Gedichtanalyse (Willkommen und Abschied)
// ============================================================

export const gedichtAnalyseWillkommen = [
  {
    id: 'wa-einleitung',
    title: 'Schritt 1: Einleitungssatz formulieren',
    aufgabe:
      'Formuliere einen vollständigen Einleitungssatz für die Analyse von Goethes „Willkommen und Abschied" (Erstdruck 1775). Er sollte Autor, Titel, Erscheinungsjahr, Gattung, Thema und Epoche nennen.',
    type: 'freitext' as const,
    musterloesung:
      'Das Gedicht „Willkommen und Abschied" von Johann Wolfgang von Goethe, erstmals veröffentlicht 1775, gehört zu den Sesenheimer Liedern und ist der Epoche des Sturm und Drang zuzuordnen. Es thematisiert die leidenschaftliche Liebe und den schmerzhaften Abschied zwischen zwei Liebenden in einer atmosphärisch aufgeladenen Naturszenerie.',
    checkliste: [
      'Autor vollständig genannt',
      'Titel und Erscheinungsjahr angegeben',
      'Thema (Liebe/Abschied) benannt',
      'Epoche (Sturm und Drang) zugeordnet',
    ],
    hint: 'Ein Einleitungssatz enthält Basisdaten und eine thematische Einordnung. Vergiss die Epochenzuordnung nicht!',
  },
  {
    id: 'wa-form',
    title: 'Schritt 2: Formale Aspekte bestimmen',
    aufgabe:
      'Bestimme Metrum, Reimschema und Kadenz der ersten Strophe: „Es schlug mein Herz, geschwind zu Pferde! / Es war getan fast eh gedacht. / Der Abend wiegte schon die Erde, / Und an den Bergen hing die Nacht;"',
    type: 'multiple-choice' as const,
    options: [
      {
        text: 'Vierhebiger Jambus, Kreuzreim (abab), alternierend weibliche und männliche Kadenz',
        correct: true,
        explanation:
          'Richtig! Das Metrum ist ein vierhebiger Jambus (unbetont-betont: „Es SCHLUG mein HERZ, geSCHWIND zu PFER-de"). Das Reimschema ist ein Kreuzreim (abab): „Pferde/Erde" (a), „gedacht/Nacht" (b). Die Kadenz alterniert: weiblich (Pferde), männlich (gedacht), weiblich (Erde), männlich (Nacht). Der drängende Jambus passt zum leidenschaftlichen Aufbruch.',
      },
      {
        text: 'Fünfhebiger Trochäus, Paarreim (aabb), nur männliche Kadenz',
        correct: false,
        explanation:
          'Der Vers beginnt mit einer unbetonten Silbe („Es SCHLUG") — das ist ein Jambus, kein Trochäus. Auch das Reimschema ist kein Paarreim: „Pferde" reimt nicht auf „gedacht", sondern auf „Erde" in Vers 3.',
      },
      {
        text: 'Freie Rhythmen, Kreuzreim (abab), nur weibliche Kadenz',
        correct: false,
        explanation:
          'Es liegen keine freien Rhythmen vor — das Gedicht hat ein regelmäßiges Metrum (Jambus). Zudem alterniert die Kadenz: „gedacht" und „Nacht" enden auf betonten Silben (männlich).',
      },
    ],
  },
  {
    id: 'wa-bildsprache',
    title: 'Schritt 3: Bildsprache und Stilmittel analysieren',
    aufgabe:
      'Analysiere die zentrale Bildsprache der zweiten Strophe: „Der Mond von einem Wolkenhügel / Sah kläglich aus dem Duft hervor, / Die Winde schwangen leise Flügel, / Umsausten schauerlich mein Ohr". Benenne die Stilmittel, ihre Wirkung und Funktion.',
    type: 'freitext' as const,
    musterloesung:
      'In der zweiten Strophe dominieren Personifikationen: Der Mond „sah kläglich hervor" — er erhält menschliche Emotionen (Klagen). Die Winde „schwangen Flügel" — sie werden als geflügelte Wesen dargestellt, deren „Umsausen" durch Onomatopoesie (Lautmalerei: „umsausten") hörbar gemacht wird. Die Metapher „Wolkenhügel" verschmilzt Himmel und Landschaft zu einer Einheit. Das Epitheton „schauerlich" verstärkt die bedrohliche Atmosphäre. Alle Stilmittel zusammen transformieren die Naturszene in eine subjektiv aufgeladene Seelenlandschaft — die äußere Natur spiegelt die innere Erregung des lyrischen Ichs wider. Dies ist ein typisches Verfahren des Sturm und Drang: Die Natur wird zum Ausdruck subjektiver Empfindung.',
    checkliste: [
      'Mindestens zwei Stilmittel korrekt benannt',
      'Wirkung konkret beschrieben',
      'Funktion im Kontext erklärt',
      'Bezug zum Sturm und Drang / Seelenlandschaft hergestellt',
    ],
    hint: 'Achte auf Personifikationen, Lautmalerei und die Funktion der Naturdarstellung als „Seelenlandschaft".',
  },
  {
    id: 'wa-aufbau',
    title: 'Schritt 4: Aufbau und Entwicklung',
    aufgabe:
      'Beschreibe den Aufbau des gesamten Gedichts (4 Strophen). Wie entwickelt sich die Stimmung und Thematik von Strophe zu Strophe?',
    type: 'freitext' as const,
    musterloesung:
      'Das Gedicht folgt einer dramatischen Vierteilung: Strophe 1 (Aufbruch): Leidenschaftlicher Ritt durch die Nacht, die Natur ist dunkel und geheimnisvoll — Spannung und Vorfreude. Strophe 2 (Nacht): Die Natur wird bedrohlich (Ungeheuer, Finsternis), doch das lyrische Ich trotzt der Angst mit „frischem Mut" — Feuer und Glut in Adern und Herz. Strophe 3 (Willkommen): Ankunft bei der Geliebten, Umschlag ins Helle — „milde Freude", „rosenfarbnes Frühlingswetter", Zärtlichkeit. Strophe 4 (Abschied): Mit der Morgensonne kommt der Abschied — Wonne und Schmerz zugleich, die paradoxe Schlusssentenz „welch Glück, geliebt zu werden! / Und lieben, Götter, welch ein Glück!" Das Gedicht beschreibt einen Bogen von der nächtlichen Aufbruchstimmung über die Erfüllung zum schmerzhaften Abschied — ein Erlebnisgedicht des Sturm und Drang, das subjektive Empfindung und Naturerleben verschmilzt.',
    checkliste: [
      'Alle vier Strophen berücksichtigt',
      'Stimmungswechsel beschrieben',
      'Bogen von Aufbruch über Erfüllung zu Abschied erkannt',
      'Schlussparadox erwähnt',
    ],
    hint: 'Jede Strophe hat eine eigene Stimmung. Beachte den Kontrast zwischen Strophe 2 (Nacht/Bedrohung) und 3 (Licht/Liebe).',
  },
  {
    id: 'wa-deutung',
    title: 'Schritt 5: Gesamtdeutung und Epochenzuordnung',
    aufgabe:
      'Formuliere eine abschließende Deutung des Gedichts. Warum ist es ein typisches Werk des Sturm und Drang? Wie verhalten sich Form und Inhalt zueinander?',
    type: 'freitext' as const,
    musterloesung:
      '„Willkommen und Abschied" ist ein paradigmatisches Erlebnisgedicht des Sturm und Drang: Es inszeniert eine unmittelbare, subjektive Erfahrung — den nächtlichen Ritt zum Stelldichein und den morgendlichen Abschied — mit einer Intensität, die für die Epoche charakteristisch ist. Typisch für den Sturm und Drang sind: (1) die Dominanz des Gefühls über die Vernunft (Leidenschaft, „Feuer", „Glut"), (2) die Natur als Spiegel der Seele (Seelenlandschaft), (3) das kraftvolle, drängende lyrische Ich, das sich über Konventionen hinwegsetzt, (4) die intensive Bildsprache mit Personifikationen und Ausrufen. Form und Inhalt korrespondieren: Der drängende Jambus bildet den Herzschlag und das Reiten rhythmisch ab. Der Kreuzreim mit alternierender Kadenz erzeugt eine Balance zwischen Spannung und Lösung, die dem Wechsel von Willkommen und Abschied entspricht. Die Ausrufesätze der Schlussstrophe durchbrechen den regelmäßigen Versfluss und drücken die Überwältigung durch Gefühl aus.',
    checkliste: [
      'Epochentypische Merkmale benannt (mind. 3)',
      'Verhältnis von Form und Inhalt analysiert',
      'Zusammenfassende Deutung formuliert',
      'Fachbegriffe korrekt verwendet',
    ],
    hint: 'Denke an die Kernmerkmale des Sturm und Drang: Gefühlsintensität, Naturerleben, kraftvolles Ich, Formdurchbrechung.',
  },
];

// ============================================================
// 12. Gedichtvergleich (SchrittweiseAnalyse)
// ============================================================

export const gedichtVergleichSchritte = [
  {
    id: 'gv-these',
    title: 'Schritt 1: Vergleichsthese formulieren',
    aufgabe:
      'Vergleiche Goethes „Willkommen und Abschied" (Sturm und Drang, 1775) mit Eichendorffs „Mondnacht" (Romantik, 1837). Formuliere zunächst eine Vergleichsthese: Was verbindet die beiden Gedichte, worin unterscheiden sie sich grundlegend?',
    type: 'freitext' as const,
    musterloesung:
      'Beide Gedichte inszenieren ein intensives Naturerleben bei Nacht, bei dem äußere Landschaft und innere Empfindung verschmelzen. Während Goethes Sturm-und-Drang-Gedicht jedoch eine leidenschaftliche, körperlich-sinnliche Liebeserfahrung in einer dynamischen Natur gestaltet, beschreibt Eichendorffs romantisches Gedicht eine stille, metaphysische Sehnsucht nach Transzendenz in einer entrückten Naturkulisse. Der Gegensatz lässt sich auf die Formel bringen: Sturm und Drang = diesseitiges Begehren und Tatkraft, Romantik = jenseitige Sehnsucht und Entrückung.',
    checkliste: [
      'Gemeinsamkeit benannt (Nachtszene / Naturerleben)',
      'Zentralen Unterschied herausgearbeitet',
      'Beide Epochen einbezogen',
      'Vergleichende These formuliert (nicht nur Einzelbeschreibung)',
    ],
    hint: 'Eine gute Vergleichsthese benennt sowohl Gemeinsamkeiten als auch den zentralen Unterschied. Vermeide es, die Gedichte nur nacheinander zu beschreiben.',
  },
  {
    id: 'gv-form',
    title: 'Schritt 2: Formaler Vergleich',
    aufgabe:
      'Vergleiche die formale Gestaltung beider Gedichte: Metrum, Reimschema, Strophenform, Kadenz. Wie unterscheiden sich die Gedichte formal und welche Wirkung hat das?',
    type: 'multiple-choice' as const,
    options: [
      {
        text: 'Beide nutzen Jambus und Kreuzreim, aber Goethe ist dynamischer (Ausrufe, Enjambements), Eichendorff gleichmäßiger und ruhiger',
        correct: true,
        explanation:
          'Richtig! Beide Gedichte verwenden den vierhebigen Jambus mit Kreuzreim (abab) in Volksliedstrophen. Doch Goethe durchbricht die Form durch Ausrufe, Enjambements und Tempowechsel — der Rhythmus ist drängend und erregt. Eichendorff hält die Form streng ein — der gleichmäßige Fluss erzeugt Ruhe und Entrücktheit. So wird die Form zum Ausdruck des unterschiedlichen Lebensgefühls: Sturm-und-Drang-Dynamik vs. romantische Stille.',
      },
      {
        text: 'Goethe schreibt in freien Rhythmen, Eichendorff in gebundener Form',
        correct: false,
        explanation:
          'Beide Gedichte sind in gebundener Form geschrieben: vierhebiger Jambus mit Kreuzreim. Goethe nutzt keine freien Rhythmen (die kommen eher in seinen Hymnen vor, z.B. „Prometheus").',
      },
      {
        text: 'Die Gedichte sind formal identisch und unterscheiden sich nur inhaltlich',
        correct: false,
        explanation:
          'Auf den ersten Blick ähneln sich die Gedichte formal (Jambus, Kreuzreim, Volksliedstrophe). Aber die Art, wie die Form genutzt wird — Enjambements, Ausrufe, Rhythmusbrüche bei Goethe vs. gleichmäßiger Fluss bei Eichendorff — unterscheidet sie erheblich.',
      },
    ],
  },
  {
    id: 'gv-natur',
    title: 'Schritt 3: Naturdarstellung vergleichen',
    aufgabe:
      'Vergleiche die Funktion der Natur in beiden Gedichten. Wie wird die Nacht jeweils dargestellt und welche Bedeutung hat sie?',
    type: 'freitext' as const,
    musterloesung:
      'In beiden Gedichten ist die Nacht ein zentraler Schauplatz, der jedoch fundamental unterschiedlich gestaltet wird. Bei Goethe ist die Natur dynamisch, bedrohlich und sinnlich: „tausend Ungeheuer", „schwarze Augen", „schauerlich" — sie ist Projektionsfläche der inneren Erregung des lyrischen Ichs (Seelenlandschaft). Die Nacht wird aktiv durchritten und überwunden. Bei Eichendorff ist die Natur still, verzaubert und transzendent: „still geküsst", „wogten sacht", „sternklar" — sie ist nicht Hindernis, sondern Medium der Seelenerfahrung. Die Nacht wird nicht durchdrungen, sondern erlebt als Moment der Entgrenzung, in dem sich die Seele vom Körper löst. Goethe: Natur als Spiegel leidenschaftlicher Subjektivität. Eichendorff: Natur als Schwelle zur Transzendenz.',
    checkliste: [
      'Beide Naturdarstellungen konkret beschrieben',
      'Textbelege/Beispiele aus beiden Gedichten',
      'Unterschiedliche Funktion herausgearbeitet',
      'Vergleichend (nicht nur nacheinander) argumentiert',
    ],
    hint: 'Achte auf die Adjektive und Verben der Naturdarstellung: Bei Goethe dynamisch/bedrohlich, bei Eichendorff still/entrückt.',
  },
  {
    id: 'gv-fazit',
    title: 'Schritt 4: Vergleichendes Fazit',
    aufgabe:
      'Formuliere ein zusammenfassendes Fazit des Vergleichs. Wie spiegeln die beiden Gedichte den Wandel vom Sturm und Drang zur Romantik wider?',
    type: 'freitext' as const,
    musterloesung:
      'Der Vergleich von „Willkommen und Abschied" und „Mondnacht" macht den Epochenwandel vom Sturm und Drang zur Romantik exemplarisch sichtbar. Goethes Gedicht steht für das Lebensgefühl des Sturm und Drang: ein kraftvolles, leidenschaftliches Ich, das sich in die Nacht aufmacht, die Natur als Spiegel seiner Gefühle erlebt und trotz Schmerz am Glück der Liebe festhält. Die Form (drängender Jambus, Ausrufe, Enjambements) wird zum Ausdruck dieser Tatkraft. Eichendorffs Gedicht verkörpert die romantische Sehnsucht: Das lyrische Ich ist nicht mehr aktiv Handelnder, sondern passiv Erlebender. Die Natur wird nicht durchritten, sondern als kosmische Einheit von Himmel und Erde erfahren. Das Ziel ist nicht die Geliebte, sondern die transzendente Heimat („nach Haus"). Die strenge, gleichmäßige Form spiegelt die Stille und Entrücktheit wider. Beide Gedichte zeigen die Verschmelzung von Naturerleben und Innerlichkeit — aber die Richtung der Sehnsucht wandelt sich: vom diesseitigen Gegenüber (Geliebte) zum jenseitigen Absoluten (Transzendenz).',
    checkliste: [
      'Beide Epochen charakterisiert',
      'Zentralen Wandel benannt (Diesseits → Transzendenz)',
      'Formale und inhaltliche Aspekte verbunden',
      'Zusammenfassendes, eigenständiges Fazit formuliert',
    ],
    hint: 'Ein gutes Fazit geht über die Wiederholung der Einzelaspekte hinaus und formuliert eine übergreifende Erkenntnis zum Epochenvergleich.',
  },
];
